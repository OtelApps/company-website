<script setup>
import { computed } from 'vue'
import { useCookieConsent } from '../../useCookieConsent'
import { toRows, toSections, toStrings } from './legalMessages'

const { hasDecided, isAccepted, isRejected, savedAt, accept, reject } = useCookieConsent()

const statusKey = computed(() => {
  if (isAccepted.value) return 'legal.cookies.settings.accepted'
  if (isRejected.value) return 'legal.cookies.settings.rejected'
  return 'legal.cookies.settings.unset'
})

// Index sekce, za kterou se vykreslí tabulka cookies, resp. panel nastavení souhlasu.
const TABLE_AFTER_SECTION = 2
const SETTINGS_AFTER_SECTION = 3

function formatDate(date, locale) {
  if (!date) return ''
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date)
}
</script>

<template>
  <div class="relative bg-white font-sans antialiased">
    <div class="absolute top-0 left-0 w-full h-[320px] md:h-[380px] bg-[#383e42] z-0"></div>

    <main class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
      <header class="pt-12 lg:pt-24 pb-10 md:pb-14 px-4 md:px-10 lg:px-16 text-white">
        <div class="max-w-4xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {{ $t('legal.cookies.title') }}
          </h1>
          <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
            {{ $t('legal.cookies.subtitle') }}
          </p>
          <p class="text-sm text-gray-300 mt-6">
            {{ $t('legal.updated') }}: {{ $t('legal.cookies.date') }}
          </p>
        </div>
      </header>

      <article
        class="bg-white rounded-3xl shadow-2xl border-1 border-[#383E42] p-6 sm:p-10 lg:p-14 mb-12"
      >
        <p class="text-base text-gray-700 leading-relaxed">{{ $t('legal.cookies.intro') }}</p>

        <template
          v-for="(section, index) in toSections($tm('legal.cookies.sections'))"
          :key="index"
        >
          <section class="mt-10 scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-[#383E42] mb-4">
              {{ index + 1 }}. {{ $rt(section.title) }}
            </h2>

            <p
              v-for="(paragraph, pIndex) in section.paragraphs"
              :key="pIndex"
              class="text-base text-gray-700 leading-relaxed mb-3"
            >
              {{ $rt(paragraph) }}
            </p>

            <ul v-if="section.items" class="mt-4 space-y-3">
              <li
                v-for="(item, iIndex) in section.items"
                :key="iIndex"
                class="flex gap-3 text-base text-gray-700 leading-relaxed"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffa500]"></span>
                <span>{{ $rt(item) }}</span>
              </li>
            </ul>

            <p v-if="section.note" class="text-base text-gray-700 leading-relaxed mt-4">
              {{ $rt(section.note) }}
            </p>
          </section>

          <!-- Přehled ukládaných cookies -->
          <section v-if="index === TABLE_AFTER_SECTION" class="mt-8">
            <h3 class="text-base font-bold text-[#383E42] mb-4">
              {{ $t('legal.cookies.table.title') }}
            </h3>

            <div class="overflow-x-auto border-1 border-[#383E42] rounded-xl">
              <table class="w-full min-w-[640px] text-left text-sm">
                <thead class="bg-[#383e42] text-white">
                  <tr>
                    <th
                      v-for="(header, hIndex) in toStrings($tm('legal.cookies.table.headers'))"
                      :key="hIndex"
                      scope="col"
                      class="px-4 py-3 font-semibold"
                    >
                      {{ $rt(header) }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rIndex) in toRows($tm('legal.cookies.table.rows'))"
                    :key="rIndex"
                    class="border-t border-gray-300"
                  >
                    <td
                      v-for="(cell, cIndex) in row"
                      :key="cIndex"
                      class="px-4 py-3 align-top text-gray-700"
                      :class="{ 'font-semibold text-[#383E42] whitespace-nowrap': cIndex === 0 }"
                    >
                      {{ $rt(cell) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Nastavení souhlasu -->
          <section
            v-if="index === SETTINGS_AFTER_SECTION"
            id="nastaveni-cookies"
            class="mt-8 scroll-mt-24 rounded-2xl border-1 border-[#383E42] bg-gray-50 p-6 sm:p-8"
          >
            <h3 class="text-lg font-bold text-[#383E42]">
              {{ $t('legal.cookies.settings.title') }}
            </h3>
            <p class="text-base text-gray-700 leading-relaxed mt-2">
              {{ $t('legal.cookies.settings.desc') }}
            </p>

            <p class="text-base font-semibold text-[#383E42] mt-6">
              {{ $t('legal.cookies.settings.question') }}
            </p>

            <div class="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                @click="accept"
                class="px-6 py-3 text-sm font-semibold rounded-lg border-1 cursor-pointer transition-colors duration-200"
                :class="
                  isAccepted
                    ? 'bg-[#ffa500] border-[#ffa500] text-white'
                    : 'bg-white border-[#383E42] text-[#383E42] hover:bg-gray-100'
                "
                :aria-pressed="isAccepted"
              >
                {{ $t('legal.cookies.settings.accept') }}
              </button>
              <button
                type="button"
                @click="reject"
                class="px-6 py-3 text-sm font-semibold rounded-lg border-1 cursor-pointer transition-colors duration-200"
                :class="
                  isRejected
                    ? 'bg-[#383e42] border-[#383E42] text-white'
                    : 'bg-white border-[#383E42] text-[#383E42] hover:bg-gray-100'
                "
                :aria-pressed="isRejected"
              >
                {{ $t('legal.cookies.settings.reject') }}
              </button>
            </div>

            <p class="text-sm text-gray-700 mt-5 flex flex-wrap gap-x-1" aria-live="polite">
              <span class="font-semibold">{{ $t('legal.cookies.settings.statusLabel') }}:</span>
              <span>{{ $t(statusKey) }}</span>
              <span v-if="hasDecided && savedAt">
                ({{ $t('legal.cookies.settings.savedAt') }} {{ formatDate(savedAt, $i18n.locale) }})
              </span>
            </p>
          </section>
        </template>

        <footer class="mt-12 pt-8 border-t border-gray-300">
          <h2 class="text-sm font-bold text-[#383E42] uppercase tracking-wide mb-3">
            {{ $t('legal.related') }}
          </h2>
          <router-link to="/Legal/GDPR" class="text-base text-[#383E42] underline font-semibold">
            {{ $t('legal.gdpr.title') }}
          </router-link>
        </footer>
      </article>
    </main>
  </div>
</template>
