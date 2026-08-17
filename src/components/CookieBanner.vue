<script setup>
import { useCookieConsent } from '../useCookieConsent'

const { hasDecided, accept, reject } = useCookieConsent()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0 translate-y-4"
  >
    <aside
      v-if="!hasDecided"
      role="dialog"
      aria-modal="false"
      :aria-label="$t('cookieBanner.aria')"
      class="fixed bottom-0 left-0 right-0 z-[70] p-3 sm:p-4"
    >
      <div
        class="max-w-screen-2xl mx-auto bg-white border-1 border-[#383E42] rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8"
      >
        <div class="lg:flex-1">
          <h2 class="text-base sm:text-lg font-bold text-[#383E42]">
            {{ $t('cookieBanner.title') }}
          </h2>
          <p class="text-sm text-gray-700 mt-2 leading-relaxed">
            {{ $t('cookieBanner.text') }}
            <router-link
              to="/Legal/Cookies"
              class="text-[#383E42] underline font-semibold whitespace-nowrap"
            >
              {{ $t('cookieBanner.more') }}
            </router-link>
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 lg:shrink-0">
          <button
            type="button"
            @click="reject"
            class="order-2 sm:order-1 px-6 py-3 text-sm font-semibold text-[#383E42] border-1 border-[#383E42] rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100"
          >
            {{ $t('cookieBanner.reject') }}
          </button>
          <button
            type="button"
            @click="accept"
            class="order-1 sm:order-2 px-6 py-3 text-sm font-semibold text-white bg-[#ffa500] rounded-lg cursor-pointer transition-opacity duration-200 hover:opacity-90"
          >
            {{ $t('cookieBanner.accept') }}
          </button>
        </div>
      </div>
    </aside>
  </Transition>
</template>
