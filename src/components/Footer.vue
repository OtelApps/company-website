<script setup></script>

<template>
  <footer class="bg-white text-gray-800 mt-16 sm:mt-20 lg:mt-24">
    <!-- Newsletter -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        <div>
          <h3 class="text-base sm:text-lg font-semibold">Join our newsletter</h3>
          <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
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
              class="w-full md:flex-1 min-w-0 border border-black px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              required
            />
            <button
              type="submit"
              class="w-full md:w-auto text-gray-800 px-3 sm:px-4 py-2 text-sm border border-black md:ml-4 mt-3 md:mt-0 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
          <p class="text-[10px] text-black mt-2 underline cursor-pointer">
            By subscribing you agree to our Privacy Policy.
          </p>
        </form>
      </div>
    </section>

    <hr class="border-gray-800 w-3/4 mx-auto" />

    <!-- Links columns -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
      >
        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4">Why OtelApps</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
            <li><a href="#" class="hover:text-gray-900">Pricing</a></li>
            <li><a href="#" class="hover:text-gray-900">Integrations</a></li>
            <li><a href="#" class="hover:text-gray-900">Products Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4">Features</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
            <li>
              <a href="#" class="hover:text-gray-900">All important informations at one place</a>
            </li>
            <li><a href="#" class="hover:text-gray-900">Mobile Ordering</a></li>
            <li><a href="#" class="hover:text-gray-900">Trip Planner</a></li>
            <li><a href="#" class="hover:text-gray-900">Upselling</a></li>
            <li><a href="#" class="hover:text-gray-900">Performance Analytics</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4">Solutions</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
            <li><a href="#" class="hover:text-gray-900">City Center</a></li>
            <li><a href="#" class="hover:text-gray-900">Small Town Hotels</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4">Company</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
            <li><a href="#" class="hover:text-gray-900">About Us</a></li>
            <li><a href="#" class="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs sm:text-sm font-bold mb-3 sm:mb-4">Legal</h4>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
            <li><a href="#" class="hover:text-gray-900">Legal Notice</a></li>
            <li><a href="#" class="hover:text-gray-900">Cookies Policy</a></li>
            <li><a href="#" class="hover:text-gray-900">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </section>

    <hr class="border-gray-800 w-3/4 mx-auto" />

    <!-- Bottom bar -->
    <section
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <img src="../assets/otelapps.png" alt="OtelApps logo" class="h-20 sm:h-24 w-auto" />
      <p class="text-xs text-gray-600">© 2025 OtelApps. All rights reserved.</p>
    </section>
  </footer>
</template>
