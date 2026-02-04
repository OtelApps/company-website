<script setup lang="ts">
import router from '../../router';
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
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
      >
        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white">PROČ OTEL APPS</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white">
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Pricing">Ceník</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/">Integrace</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/">Aktualizace systému</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white">KLÍČOVÉ FUNKCE</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white">
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/HotelDirectory">Informace o hotelu</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Product/MobileOrdering">Objednávání</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Trip Planner</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Live chat + AI virtuální recepční</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Online check-in + check-out</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Virtuální pokojová karta</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Rezervace</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white">ŘEŠENÍ</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white">
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Solution/CityCenter">Městské hotely</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Solution/SmallHotels">Malé a středně velké hotely</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Solution/Boutiques">Butikové hotely</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white">PROJEKT</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white">
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/AboutUs">O nás</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="/Contact">Napište nám</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4 dark:text-white">LEGAL</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 dark:text-white">
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Právní upozornění</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Zásady používání cookies</router-link></li>
            <li class="not-dark:hover:text-gray-900 cursor-pointer"><router-link to="">Zásady ochrany osobních údajů</router-link></li>
          </ul>
        </div>
      </div>
    </section>

    <hr class="border-gray-800 w-full mx-auto" />

    <!-- Bottom bar -->
    <section
      class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <img src="../assets/otelapps.webp" alt="OtelApps logo" class="h-20 sm:h-26 w-auto" />
      <p class="text-s text-gray-600 dark:text-white">
        IČO: 23905719
        <br>
        DIČ: 23905719
      </p>
      <p class="text-s text-gray-600 dark:text-white">
        Email: info@otelapps.com
        <br>
        Telefon: +420 604 607 225
        <br>
        Adresa: Příčná 1892/4, Nové Město, 110 00 Praha 1
      </p>
      <p class="text-xs text-gray-600 dark:text-white">© 2025 OtelApps. All rights reserved.</p>
    </section>
  </footer>
</template>