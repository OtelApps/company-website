<script setup>
import { toSections } from './legalMessages'
</script>

<template>
  <div class="relative bg-white font-sans antialiased">
    <div class="absolute top-0 left-0 w-full h-[320px] md:h-[380px] bg-[#383e42] z-0"></div>

    <main class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
      <header class="pt-12 lg:pt-24 pb-10 md:pb-14 px-4 md:px-10 lg:px-16 text-white">
        <div class="max-w-4xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {{ $t('legal.gdpr.title') }}
          </h1>
          <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
            {{ $t('legal.gdpr.subtitle') }}
          </p>
          <p class="text-sm text-gray-300 mt-6">
            {{ $t('legal.updated') }}: {{ $t('legal.gdpr.date') }}
          </p>
        </div>
      </header>

      <article
        class="bg-white rounded-3xl shadow-2xl border-1 border-[#383E42] p-6 sm:p-10 lg:p-14 mb-12"
      >
        <p class="text-base text-gray-700 leading-relaxed">{{ $t('legal.gdpr.intro') }}</p>

        <section
          v-for="(section, index) in toSections($tm('legal.gdpr.sections'))"
          :key="index"
          class="mt-10 scroll-mt-24"
        >
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

        <footer class="mt-12 pt-8 border-t border-gray-300">
          <h2 class="text-sm font-bold text-[#383E42] uppercase tracking-wide mb-3">
            {{ $t('legal.related') }}
          </h2>
          <router-link to="/Legal/Cookies" class="text-base text-[#383E42] underline font-semibold">
            {{ $t('legal.cookies.title') }}
          </router-link>
        </footer>
      </article>
    </main>
  </div>
</template>
