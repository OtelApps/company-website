<script setup>
import { ref } from 'vue'

const activeButton = ref('f&b')
</script>

<template>
  <main class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
    <section>
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Section - Text Content -->
        <div class="space-y-4 sm:space-y-8">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            {{ $t('homepage.section1.title') }}
          </h1>

          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
            {{ $t('homepage.section1.desc1') }}
          </p>

          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
            {{ $t('homepage.section1.desc2') }}
          </p>

          <p class="hidden sm:block text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
            {{ $t('homepage.section1.desc') }}
          </p>

          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
          >
            {{ $t('homepage.section1.button') }}
          </button>
        </div>

        <!-- Right Section - Image -->
        <div class="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <img
            src="../assets/home/image1.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Hotel app mockup"
          />
        </div>
      </div>
    </section>

    <!-- Centered Half Width Image Section with Text Overlay -->
    <section
      class="relative w-screen left-1/2 -translate-x-1/2 flex justify-center mt-16 sm:mt-20 lg:mt-24 min-h-[681px] sm:min-h-[440px] lg:min-h-[560px]"
    >
      <div class="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-full">
        <img
          src="../assets/home/analytics.png"
          class="w-full h-auto object-cover translate-y-[40%] sm:translate-y-0"
          alt="Analytics dashboard"
        />
      </div>

      <!-- Text Overlay with full-width semi-transparent background (fills the section) -->
      <div class="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div class="text-white w-full px-4 sm:px-6 lg:px-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center mx-auto"
          >
            {{ $t('homepage.section2.title') }}
          </h2>
          <p class="text-sm sm:text-base md:text-lg lg:text-xl lg:max-w-2xl leading-relaxed mx-auto text-center">
            {{ $t('homepage.section2.desc') }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
        <!-- Left Section - Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="../assets/home/image2.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Mobile app interface"
          />
        </div>

        <!-- Right Section - Text Content -->
        <div class="order-1 lg:order-2 space-y-6 sm:space-y-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            {{ $t('homepage.section3.title') }}
          </h2>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              @click="activeButton = 'f&b'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'f&b'
                  ? 'bg-[#ffa500] text-white border-2 dark:border-[#ffa500]'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
            <span class="material-symbols-outlined">order_approve</span>
              {{ $t('homepage.section3.button1.title') }}
            </button>

            <button
              @click="activeButton = 'requests'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'requests'
                  ? 'bg-[#ffa500] text-white border-2 dark:border-[#ffa500]'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
            <span class="material-symbols-outlined">rule</span>
              {{ $t('homepage.section3.button2.title') }}
            </button>

            <button
              @click="activeButton = 'reservations'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'reservations'
                  ? 'bg-[#ffa500] text-white border-2 dark:border-[#ffa500]'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
            <span class="material-symbols-outlined">event</span>
              {{ $t('homepage.section3.button3.title') }}
            </button>
          </div>

          <!-- Dynamic Content based on active button -->
          <div v-if="activeButton === 'f&b'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button1.items[0]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button1.desc[0]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button1.items[1]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button1.desc[1]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button1.items[2]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button1.desc[2]') }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'requests'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button2.items[0]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button2.desc[0]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button2.items[1]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button2.desc[1]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button2.items[2]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button2.desc[2]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button2.items[3]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button2.desc[3]') }}
                </p>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'reservations'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button3.items[0]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button3.desc[0]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button3.items[1]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button3.desc[1]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button3.items[2]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button3.desc[2]') }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section3.button3.items[3]') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  {{ $t('homepage.section3.button3.desc[3]') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Staff operations section -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            {{ $t('homepage.section4.title') }}
          </h2>

          <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <!-- Feature 1 -->
            <div class="flex items-start space-x-4">
              <div
                class="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  {{ $t('homepage.section4.items[0]') }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 dark:text-white">
                  {{ $t('homepage.section4.desc[0]') }}
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="flex items-start space-x-4">
              <div
                class="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  {{ $t('homepage.section4.items[1]') }}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 dark:text-white">
                  {{ $t('homepage.section4.desc[1]') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="../assets/home/image3.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Staff operations"
          />
        </div>
      </div>
    </section>
    <!-- Feedback section: left image, right text -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="../assets/home/image4.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Feedback analytics"
          />
        </div>

        <!-- Right: Text -->
        <div class="order-1 lg:order-2">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            {{ $t('homepage.section5.title') }}
          </h2>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6 dark:text-white">
            {{ $t('homepage.section5.desc') }}
          </p>
        </div>
      </div>
    </section>
    <!-- Branded guest experience: left text, right image -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            {{ $t('homepage.section6.title') }}
          </h2>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6 dark:text-white">
            {{ $t('homepage.section6.desc') }}
          </p>

          <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section6.items[0]') }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 dark:text-white">
                {{ $t('homepage.section6.idesc[0]') }}
              </p>
            </div>

            <div>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{{ $t('homepage.section6.items[1]') }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 dark:text-white">
                {{ $t('homepage.section6.idesc[1]') }}
              </p>
            </div>

            <div class="sm:col-span-2">
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {{ $t('homepage.section6.items[2]') }}
              </h3>
              <p class="text-sm sm:text-base sm:max-w-xs text-gray-600 mt-1 sm:mt-2 dark:text-white">
                {{ $t('homepage.section6.idesc[2]') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="../assets/home/image5.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Branded guest experience"
          />
        </div>
      </div>
    </section>
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="max-w-screen-2xl mx-auto lg:px-8">
        <div class="lg:text-center max-w-5xl mx-auto space-y-4 sm:space-y-8">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {{ $t('homepage.section7.title') }}
          </h2>

          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
            {{ $t('homepage.section7.desc1') }}
          </p>

          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
            {{ $t('homepage.section7.desc2') }}
          </p>

          <p class="hidden sm:block text-base sm:text-lg text-gray-700 leading-relaxed dark:text-white">
            {{ $t('homepage.section7.desc') }}
          </p>
        </div>

        <div class="mt-12 sm:mt-16 grid gap-8 sm:gap-12 md:grid-cols-3">
          <!-- Feature 1 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('homepage.section7.items[0]') }}
            </h3>
            <p class="mt-2 text-sm sm:text-base text-gray-600 dark:text-white">
              {{ $t('homepage.section7.idesc[0]') }}
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('homepage.section7.items[1]') }}
            </h3>
            <p class="mt-2 text-sm sm:text-base text-gray-600 dark:text-white">
              {{ $t('homepage.section7.idesc[1]') }}
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('homepage.section7.items[2]') }}
            </h3>
            <p class="mt-2 text-sm sm:text-base text-gray-600 dark:text-white">
              {{ $t('homepage.section7.idesc[2]') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
