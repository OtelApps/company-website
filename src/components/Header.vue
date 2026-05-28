<script setup>
  import { useTheme } from '../useTheme.js'

  const { isDark, toggleTheme } = useTheme()
</script>
<template>
  <header
    ref="header"
    class="border-b not-dark:border-gray-200 bg-white transition-transform duration-300 ease-out dark:bg-[#16171A]"
    :style="{ position: 'sticky', top: 0, zIndex: 50, transform: headerTransform }"
  >
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <div class="flex items-center">
          <router-link to="/">
            <img src="../assets/otelapps.webp" alt="OtelApps logo" class="hidden md:block h-10 md:h-12 lg:h-16 w-auto" />
            <img src="../assets/logo_text.jpg" alt="OtelApps logo" class="block md:hidden h-10 w-auto" />
          </router-link>

          <!-- Desktop Navigation (grouped with logo) -->
          <nav class="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-8 ml-2 md:ml-4">
            <button
              class="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white"
              :class="{ 'font-bold': isProductActive }"
              @click.stop="toggleProductMenu"
            >
              <span class="whitespace-nowrap">{{ $t('header.nav.products') }}</span>
              <span class="material-symbols-outlined text-sm md:text-base">keyboard_arrow_down</span>
            </button>
            <button
              class="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white"
              :class="{ 'font-bold': isSolutionsActive }"
              @click.stop="toggleSolutionsMenu"
            >
              <span class="whitespace-nowrap">{{ $t('header.nav.solutions') }}</span>
              <span class="material-symbols-outlined text-sm md:text-base">keyboard_arrow_down</span>
            </button>
            <router-link
              to="/Pricing"
              class="text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white whitespace-nowrap"
              :class="{ 'font-bold': isPricingActive }"
            >
              {{ $t('header.nav.pricing') }}
            </router-link>
            <router-link
              to="/AboutUs"
              class="text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white whitespace-nowrap"
              :class="{ 'font-bold': isAboutUsActive }"
            >
              {{ $t('header.nav.aboutUs') }}
            </router-link>
            <router-link
              to="/Contact"
              class="text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white whitespace-nowrap"
              :class="{ 'font-bold': isContactActive }"
            >
              {{ $t('header.nav.contact') }}
            </router-link>
          </nav>
        </div>

        <!-- Mobile right controls: globe | divider | hamburger -->
        <div class="flex items-center md:hidden space-x-3">
          <div class="relative" @click.stop>
            <button
              type="button"
              class="p-2 rounded-md text-gray-700 dark:text-white flex items-center gap-1 cursor-pointer"
              :aria-expanded="isLangMenuOpen"
              aria-haspopup="listbox"
              aria-label="Language"
              @click.stop="toggleLangMenu"
            >
              <span class="material-symbols-outlined">language</span>
              <img
                :src="currentLocaleOption.flag"
                :alt="`${currentLocaleOption.label} flag`"
                class="w-4 h-3 rounded-[1px] object-cover"
                loading="lazy"
              />
              <span class="text-xs font-medium uppercase">{{ localeShort }}</span>
            </button>
            <div
              v-if="isLangMenuOpen"
              class="absolute right-0 top-full mt-1 min-w-[9.5rem] py-1 bg-white dark:bg-[#16171A] border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-[60]"
              role="listbox"
              @click.stop
            >
              <button
                v-for="opt in localeOptions"
                :key="opt.code"
                type="button"
                role="option"
                class="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between gap-2"
                :class="
                  $i18n.locale === opt.code
                    ? 'font-semibold text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                "
                @click="setLocale(opt.code)"
              >
                <span class="flex items-center gap-2">
                  <img
                    :src="opt.flag"
                    :alt="`${opt.label} flag`"
                    class="w-4 h-3 rounded-[1px] object-cover"
                    loading="lazy"
                  />
                  <span>{{ opt.label }}</span>
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ opt.short }}</span>
              </button>
            </div>
          </div>

          <div class="w-px h-6 bg-gray-300"></div>

          <button
            @click.stop="toggleMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <span v-if="!isMobileMenuOpen" class="material-symbols-outlined">menu</span>
            <span v-else class="material-symbols-outlined">close</span>
          </button>
        </div>

        <!-- Right side elements -->
        <div class="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <!-- Language selector -->
          <div class="relative" @click.stop>
            <button
              type="button"
              class="cursor-pointer flex items-center gap-1 text-gray-700 dark:text-white"
              :aria-expanded="isLangMenuOpen"
              aria-haspopup="listbox"
              @click.stop="toggleLangMenu"
            >
              <span class="material-symbols-outlined text-base md:text-lg">language</span>
              <img
                :src="currentLocaleOption.flag"
                :alt="`${currentLocaleOption.label} flag`"
                class="w-4 h-3 rounded-[1px] object-cover"
                loading="lazy"
              />
              <span class="text-xs font-medium uppercase">{{ localeShort }}</span>
            </button>
            <div
              v-if="isLangMenuOpen"
              class="absolute right-0 top-full mt-1 min-w-[9.5rem] py-1 bg-white dark:bg-[#16171A] border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-[60]"
              role="listbox"
              @click.stop
            >
              <button
                v-for="opt in localeOptions"
                :key="opt.code"
                type="button"
                role="option"
                class="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between gap-2"
                :class="
                  $i18n.locale === opt.code
                    ? 'font-semibold text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                "
                @click="setLocale(opt.code)"
              >
                <span class="flex items-center gap-2">
                  <img
                    :src="opt.flag"
                    :alt="`${opt.label} flag`"
                    class="w-4 h-3 rounded-[1px] object-cover"
                    loading="lazy"
                  />
                  <span>{{ opt.label }}</span>
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ opt.short }}</span>
              </button>
            </div>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300 dark:bg-white"></div>

          <!-- Log in button -->
          <router-link
            to=""
            class="border border-gray-300 text-gray-700 px-2 md:px-3 lg:px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-xs md:text-sm cursor-pointer dark:text-white whitespace-nowrap"
          >
            {{ $t('header.nav.login') }}
          </router-link>

          <!-- Book a demo button -->
          <router-link
            to="/BookDemo"
            class="border border-gray-300 text-gray-700 px-2 md:px-3 lg:px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-xs md:text-sm cursor-pointer dark:text-white whitespace-nowrap"
          >
            {{ $t('header.nav.bookDemo') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 z-50 bg-white dark:bg-[#16171A] flex flex-col h-full"
    >
      <!-- Mobile menu header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <router-link to="/" @click="closeMobileMenu">
          <img src="../assets/logo_text.jpg" alt="OtelApps logo" class="h-10 w-auto" />
        </router-link>

        
        <div class="flex items-center space-x-4">
          <!--
          <button @click="toggleTheme" 
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              {{ isDark ? 'Light' : 'Dark' }}
          </button>
          -->
          <!-- Language selector -->
          <div class="relative" @click.stop>
            <button
              type="button"
              class="cursor-pointer flex items-center gap-1 text-gray-700 dark:text-white"
              :aria-expanded="isLangMenuOpen"
              aria-haspopup="listbox"
              @click.stop="toggleLangMenu"
            >
              <span class="material-symbols-outlined">language</span>
              <img
                :src="currentLocaleOption.flag"
                :alt="`${currentLocaleOption.label} flag`"
                class="w-4 h-3 rounded-[1px] object-cover"
                loading="lazy"
              />
              <span class="text-xs font-medium uppercase">{{ localeShort }}</span>
            </button>
            <div
              v-if="isLangMenuOpen"
              class="absolute right-0 top-full mt-1 min-w-[9.5rem] py-1 bg-white dark:bg-[#16171A] border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-[60]"
              role="listbox"
              @click.stop
            >
              <button
                v-for="opt in localeOptions"
                :key="opt.code"
                type="button"
                role="option"
                class="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between gap-2"
                :class="
                  $i18n.locale === opt.code
                    ? 'font-semibold text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                "
                @click="setLocale(opt.code)"
              >
                <span class="flex items-center gap-2">
                  <img
                    :src="opt.flag"
                    :alt="`${opt.label} flag`"
                    class="w-4 h-3 rounded-[1px] object-cover"
                    loading="lazy"
                  />
                  <span>{{ opt.label }}</span>
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ opt.short }}</span>
              </button>
            </div>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300"></div>

          <!-- Close button -->
          <button
            @click="closeMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-white"
          >
          <span class="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <!-- Mobile menu content -->
      <div class="flex-1 overflow-y-auto px-4 py-6 bg-white dark:bg-[#16171A]">
        <!-- Navigation items -->
        <nav class="space-y-0">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            @click.stop="toggleProductMenu"
          >
            <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isProductActive }]">{{ $t('header.nav.products') }}</span>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
          <div v-if="isProductOpen" class="py-4 border-b border-gray-200">
            <div class="grid grid-cols-1 gap-6">
              <!-- Ecosystem -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
                  {{ $t('header.menu.ecosystem') }}
                </div>
                <div class="flex flex-col gap-y-6">
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">mobile_2</span>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.guestMobileApp.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('header.menu.guestMobileApp.desc') }}
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">desktop_windows</span>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.guestWebApp.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('header.menu.guestWebApp.desc') }}
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Main Features -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
                  {{ $t('header.menu.mainFeatures') }}
                </div>
                <div class="grid grid-cols-1 gap-y-6">
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">info</span>
                    <router-link to="/Product/HotelDirectory" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.hotelDirectory.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('header.menu.hotelDirectory.desc') }}
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">mobile_ticket</span>
                    <router-link to="/Product/MobileOrdering" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.mobileOrdering.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('header.menu.mobileOrdering.desc') }}
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">chat</span>
                    <router-link to="/Product/InstantFeedback" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.instantFeedback.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('header.menu.instantFeedback.desc') }}
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">task</span>
                    <router-link to="/Product/TaskManager" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.taskManager.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.taskManager.desc') }}</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">trip</span>
                    <router-link to="/Product/TripPlanner" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.tripPlanner.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('header.menu.tripPlanner.desc') }}
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">analytics</span>
                    <router-link to="/Product/AnalyticsInsights" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.analytics.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.analytics.desc') }}</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">chat_info</span>
                    <button @click="closeMobileMenu" class="flex flex-col text-left">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.liveChat.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.liveChat.desc') }}</p>
                    </button>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">desktop_cloud</span>
                    <button @click="closeMobileMenu" class="flex flex-col text-left">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.checkInOut.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.checkInOut.desc') }}</p>
                    </button>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">credit_card</span>
                    <button @click="closeMobileMenu" class="flex flex-col text-left">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.virtualKey.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.virtualKey.desc') }}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer dark:text-white"
            @click.stop="toggleSolutionsMenu"
          >
            <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isSolutionsActive }]">{{ $t('header.nav.solutions') }}</span>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
          <div v-if="isSolutionsOpen" class="py-4 border-b border-gray-200">
            <div class="grid grid-cols-1 gap-6">
              <!-- Ecosystem -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
                  {{ $t('header.menu.ecosystem') }}
                </div>
                <div class="grid grid-cols-1 gap-y-6">
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">location_city</span>
                    <router-link to="/Solution/CityCenter" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.cityHotels.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.cityHotels.desc') }}</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">home</span>
                    <router-link to="/Solution/Boutiques" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.boutiqueHotels.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        {{ $t('menu.boutiqueHotels.desc') }}
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">apartment</span>
                    <router-link to="/Solution/SmallHotels" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.smallHotels.title') }}</div>
                      <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.smallHotels.desc') }}</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">chair_umbrella</span>
                    <router-link to="/Solution/Boutiques" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.resorts.title') }}</div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link
            to="/Pricing"
            @click="closeMobileMenu"
            class="block py-4 border-b border-gray-200 text-gray-900 text-base dark:text-white"
            :class="{ 'font-bold': isPricingActive }"
          >
            {{ $t('header.nav.pricing') }}
          </router-link>

          <router-link
            to="/AboutUs"
            @click="closeMobileMenu"
            class="block py-4 border-b border-gray-200 text-gray-900 text-base dark:text-white"
            :class="{ 'font-bold': isAboutUsActive }"
          >
            {{ $t('header.nav.aboutUs') }}
          </router-link>

          <router-link
            to="/Contact"
            @click="closeMobileMenu"
            class="block py-4 border-b border-gray-200 text-gray-900 text-base dark:text-white"
            :class="{ 'font-bold': isContactActive }"
          >
            {{ $t('header.nav.contact') }}
          </router-link>
        </nav>

        <!-- Buttons -->
        <div class="mt-8 space-y-4">
          <router-link
            to=""
            @click="closeMobileMenu"
            class="block w-full border border-black text-gray-900 text-center px-4 py-3 bg-white transition-colors text-base mb-5"
          >
            {{ $t('header.nav.login') }}
          </router-link>

          <router-link
            to="/BookDemo"
            @click="closeMobileMenu"
            class="block w-full bg-black dark:bg-white text-white dark:text-black text-center px-4 py-3 hover:bg-gray-900 transition-colors text-base cursor-pointer"
          >
            {{ $t('header.nav.bookDemo') }}
          </router-link>
        </div>
      </div>
    </div>
    <!-- Desktop Product mega menu -->
    <div
      v-if="isProductOpen"
      class="hidden md:block absolute left-0 right-0 z-40 bg-white dark:bg-[#16171A] border-t border-b not-dark:border-gray-300 shadow-lg"
      @click.stop
    >
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Ecosystem -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">{{ $t('header.menu.ecosystem') }}</div>
            <div class="flex flex-col md:gap-y-10.5">
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">mobile_2</span>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.guestMobileApp.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    {{ $t('header.menu.guestMobileApp.desc') }}
                  </p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">desktop_windows</span>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.guestWebApp.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    {{ $t('header.menu.guestWebApp.desc') }}
                  </p>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Main Features -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
              {{ $t('header.menu.mainFeatures') }}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">info</span>
                <router-link to="/Product/HotelDirectory" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.hotelDirectory.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    {{ $t('header.menu.hotelDirectory.desc') }}
                  </p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">mobile_ticket</span>
                <router-link to="/Product/MobileOrdering" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.mobileOrdering.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.mobileOrdering.desc') }}</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">chat</span>
                <router-link to="/Product/InstantFeedback" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.instantFeedback.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    {{ $t('header.menu.instantFeedback.desc') }}
                  </p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">task</span>
                <router-link to="/Product/TaskManager" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.taskManager.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.taskManager.desc') }}</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">trip</span>
                <router-link to="/Product/TripPlanner" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.tripPlanner.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.tripPlanner.desc') }}</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">analytics</span>
                <router-link to="/Product/AnalyticsInsights" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.analytics.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.analytics.desc') }}</p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">chat_info</span>
                <button @click="isProductOpen = false" class="flex flex-col text-left">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.liveChat.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.liveChat.desc') }}</p>
                </button>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">desktop_cloud</span>
                <button @click="isProductOpen = false" class="flex flex-col text-left">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.checkInOut.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.checkInOut.desc') }}</p>
                </button>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">credit_card</span>
                <button @click="isProductOpen = false" class="flex flex-col text-left">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.virtualKey.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.virtualKey.desc') }}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Solutions mega menu -->
    <div
      v-if="isSolutionsOpen"
      class="hidden md:block absolute left-0 right-0 z-40 bg-white dark:bg-[#16171A] border-t border-b not-dark:border-gray-300 shadow-lg"
      @click.stop
    >
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Ecosystem -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">{{ $t('header.menu.ecosystem') }}</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">location_city</span>
                <router-link to="/Solution/CityCenter" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.cityHotels.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.cityHotels.desc') }}</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">home</span>
                <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.boutiqueHotels.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    {{ $t('header.menu.boutiqueHotels.desc') }}
                  </p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">apartment</span>
                <router-link to="/Solution/SmallHotels" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.smallHotels.title') }}</div>
                  <p class="text-sm text-gray-600 dark:text-white">{{ $t('header.menu.smallHotels.desc') }}</p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">chair_umbrella</span>
                <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">{{ $t('header.menu.resorts.title') }}</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { localeOptions, getLocaleShort, persistLocale } from '../i18n/index.js'

export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
      isProductOpen: false,
      isSolutionsOpen: false,
      isLangMenuOpen: false,
      localeOptions,
      headerTransform: 'none',
      lastScrollY: 0,
      ticking: false,
    }
  },
  computed: {
    currentLocaleOption() {
      return this.localeOptions.find((opt) => opt.code === this.$i18n.locale) ?? this.localeOptions[0]
    },
    localeShort() {
      return getLocaleShort(this.$i18n.locale)
    },
    isProductActive() {
      return this.$route.path.startsWith('/Product')
    },
    isSolutionsActive() {
      return this.$route.path.startsWith('/Solution')
    },
    isPricingActive() {
      return this.$route.path === '/Pricing'
    },
    isAboutUsActive() {
      return this.$route.path === '/AboutUs'
    },
    isContactActive() {
      return this.$route.path === '/Contact'
    },
    isHomeActive() {
      return this.$route.path === '/'
    },
  },
  methods: {
    toggleLangMenu() {
      this.isLangMenuOpen = !this.isLangMenuOpen
      if (this.isLangMenuOpen) {
        this.isProductOpen = false
        this.isSolutionsOpen = false
      }
    },
    setLocale(code) {
      this.$i18n.locale = code
      persistLocale(code)
      this.isLangMenuOpen = false
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (this.isMobileMenuOpen) {
        this.isProductOpen = false
        this.isSolutionsOpen = false
        this.isLangMenuOpen = false
      }
    },
    toggleProductMenu() {
      this.isProductOpen = !this.isProductOpen
      if (this.isProductOpen) this.isSolutionsOpen = false
    },
    toggleSolutionsMenu() {
      this.isSolutionsOpen = !this.isSolutionsOpen
      if (this.isSolutionsOpen) this.isProductOpen = false
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.isProductOpen = false
      this.isSolutionsOpen = false
    },
    onDocumentClick() {
      this.isProductOpen = false
      this.isSolutionsOpen = false
      this.isLangMenuOpen = false
    },
    handleScroll() {
      // Pouze pro zařízení > 767px (desktop/tablet). Na mobilech header neschovávej.
      if (window.innerWidth <= 767) {
        this.headerTransform = 'none'
        this.lastScrollY =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        this.ticking = false
        return
      }

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
          // Detekce směru scrollování
          const scrollDifference = currentScrollY - this.lastScrollY
          
          if (scrollDifference < 0) {
            this.headerTransform = 'none'
          }
          else if (scrollDifference > 2) {
            this.headerTransform = 'translateY(-5000%)'
          }
          
          this.lastScrollY = currentScrollY
          this.ticking = false
        })
        this.ticking = true
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.onDocumentClick)
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.lastScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>