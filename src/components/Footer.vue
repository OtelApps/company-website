<script setup>
import { ref } from 'vue';
import router from '../../router';

const openDropdowns = ref({
  procoOtelApps: false,
  klicoveFunkce: false,
  reseni: false,
  projekt: false,
  legal: false,
});

const toggleDropdown = (key) => {
  openDropdowns.value[key] = !openDropdowns.value[key];
};

const closeDropdown = (key) => {
  openDropdowns.value[key] = false;
};

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white dark:bg-[#16171A] text-gray-800 mt-16 sm:mt-20 lg:mt-24">
    <!-- Newsletter -->
    <section class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 hidden">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        <div>
          <h3 class="text-base sm:text-lg font-semibold dark:text-white">Join our newsletter</h3>
          <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 dark:text-white">
            Stay updated with our latest news and offers.
          </p>
        </div>

        <form class="flex w-full md:w-auto max-w-xl flex-col" @submit.prevent>
          <div class="flex flex-col md:flex-row w-full">
            <label for="newsletter-email" class="sr-only">Email</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              class="w-full md:flex-1 min-w-0 border border-black dark:border-white dark:text-white px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              required
            />
            <button
              type="submit"
              class="w-full md:w-auto text-gray-800 px-3 sm:px-4 py-2 text-sm border border-black dark:border-white md:ml-4 mt-3 md:mt-0 cursor-pointer dark:text-white"
            >
              Subscribe
            </button>
          </div>
          <p class="text-[10px] text-black mt-2 underline cursor-pointer dark:text-white">
            By subscribing you agree to our Privacy Policy.
          </p>
        </form>
      </div>
    </section>

    <hr class="border-gray-800 w-full mx-auto" />

    <!-- Links columns -->
    <section class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
      >
        <article>
          <button
            @click="toggleDropdown('procoOtelApps')"
            class="flex items-center justify-between w-full md:block md:text-left text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white"
          >
            <span>{{ $t('footer.button1.title') }}</span>
            <svg
              class="w-4 h-4 md:hidden transition-transform duration-200"
              :class="{ 'rotate-180': openDropdowns.procoOtelApps }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white overflow-hidden transition-all duration-300"
            :class="{
              'max-h-0 opacity-0 md:max-h-none md:opacity-100': !openDropdowns.procoOtelApps,
              'max-h-96 opacity-100': openDropdowns.procoOtelApps
            }"
          >
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Pricing" @click="closeDropdown('procoOtelApps')">{{ $t('footer.button1.items[0]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/" @click="closeDropdown('procoOtelApps')">{{ $t('footer.button1.items[1]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/" @click="closeDropdown('procoOtelApps')">{{ $t('footer.button1.items[2]') }}</router-link></li>
          </ul>
        </article>

        <article>
          <button
            @click="toggleDropdown('klicoveFunkce')"
            class="flex items-center justify-between w-full md:block md:text-left text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white"
          >
            <span>{{ $t('footer.button2.title') }}</span>
            <svg
              class="w-4 h-4 md:hidden transition-transform duration-200"
              :class="{ 'rotate-180': openDropdowns.klicoveFunkce }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white overflow-hidden transition-all duration-300"
            :class="{
              'max-h-0 opacity-0 md:max-h-none md:opacity-100': !openDropdowns.klicoveFunkce,
              'max-h-96 opacity-100': openDropdowns.klicoveFunkce
            }"
          >
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/HotelDirectory" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[0]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/MobileOrdering" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[1]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/TripPlanner" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[2]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/VirtualReceptionist" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[3]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/CheckInCheckOut" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[4]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/VirtualKey" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[5]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/AnalyticsInsights" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[6]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/StayProgress" @click="closeDropdown('klicoveFunkce')">{{ $t('footer.button2.items[7]') }}</router-link></li>
          </ul>
        </article>

        <article>
          <button
            @click="toggleDropdown('reseni')"
            class="flex items-center justify-between w-full md:block md:text-left text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white"
          >
            <span>{{ $t('footer.button3.title') }}</span>
            <svg
              class="w-4 h-4 md:hidden transition-transform duration-200"
              :class="{ 'rotate-180': openDropdowns.reseni }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white overflow-hidden transition-all duration-300"
            :class="{
              'max-h-0 opacity-0 md:max-h-none md:opacity-100': !openDropdowns.reseni,
              'max-h-96 opacity-100': openDropdowns.reseni
            }"
          >
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Solution/CityCenter" @click="closeDropdown('reseni')">{{ $t('footer.button3.items[0]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Solution/SmallHotels" @click="closeDropdown('reseni')">{{ $t('footer.button3.items[1]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Solution/Boutiques" @click="closeDropdown('reseni')">{{ $t('footer.button3.items[2]') }}</router-link></li>
          </ul>
        </article>

        <article>
          <button
            @click="toggleDropdown('projekt')"
            class="flex items-center justify-between w-full md:block md:text-left text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white"
          >
            <span>{{ $t('footer.button4.title') }}</span>
            <svg
              class="w-4 h-4 md:hidden transition-transform duration-200"
              :class="{ 'rotate-180': openDropdowns.projekt }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white overflow-hidden transition-all duration-300"
            :class="{
              'max-h-0 opacity-0 md:max-h-none md:opacity-100': !openDropdowns.projekt,
              'max-h-96 opacity-100': openDropdowns.projekt
            }"
          >
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/AboutUs" @click="closeDropdown('projekt')">{{ $t('footer.button4.items[0]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Contact" @click="closeDropdown('projekt')">{{ $t('footer.button4.items[1]') }}</router-link></li>
          </ul>
        </article>

        <article>
          <button
            @click="toggleDropdown('legal')"
            class="flex items-center justify-between w-full md:block md:text-left text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white"
          >
            <span>{{ $t('footer.button5.title') }}</span>
            <svg
              class="w-4 h-4 md:hidden transition-transform duration-200"
              :class="{ 'rotate-180': openDropdowns.legal }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul
            class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white overflow-hidden transition-all duration-300"
            :class="{
              'max-h-0 opacity-0 md:max-h-none md:opacity-100': !openDropdowns.legal,
              'max-h-96 opacity-100': openDropdowns.legal
            }"
          >
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="" @click="closeDropdown('legal')">{{ $t('footer.button5.items[0]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="" @click="closeDropdown('legal')">{{ $t('footer.button5.items[1]') }}</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="" @click="closeDropdown('legal')">{{ $t('footer.button5.items[2]') }}</router-link></li>
          </ul>
        </article>
      </div>
    </section>

    <hr class="border-gray-800 w-full mx-auto" />

    <!-- Bottom bar -->
    <section
      class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <img src="../assets/logo_text.jpg" alt="OtelApps logo" class="h-10 md:h-15 lg:h-20 w-auto" />

      <div class="flex justify-between items-center gap-x-15 md:gap-x-0 lg:gap-x-48">
        <article class="w-1/2">
          <p class="text-sm sm:text-base text-gray-600 dark:text-white">
            {{ $t('footer.ico') }}: 23905719
          </p>
          <p class="text-sm sm:text-base text-gray-600 dark:text-white">
            {{ $t('footer.dic') }}: 23905719
          </p>
        </article>

        <article class="md:w-1/2">
          <p class="text-sm sm:text-base text-gray-600 dark:text-white">
            {{ $t('footer.contact.email') }}: info@otelapps.com
          </p>
          <p class="text-sm sm:text-base text-gray-600 dark:text-white">
            {{ $t('footer.contact.phone') }}: +420 604 607 225
          </p>
          <p class="text-sm sm:text-base text-gray-600 dark:text-white">
            {{ $t('footer.contact.address') }}: Příčná 1892/4, Nové Město, 110 00 Praha 1
          </p>
        </article>
      </div>

      <p class="text-xs text-gray-600 dark:text-white">© {{ currentYear }} OtelApps. {{ $t('footer.rights') }}</p>
    </section>
  </footer>
</template>