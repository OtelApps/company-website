<script></script>

<template>
  <main class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
    <section
      class="flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-10 lg:gap-8 mb-24 lg:mb-80 mt-8 sm:mt-16 lg:mt-24"
    >
      <!-- Right side - Text -->
      <div class="flex-auto flex-col basis-1/2 space-y-4 sm:space-y-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {{ $t('aboutUs.section1.title') }}
        </h1>

        <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
          {{ $t('aboutUs.section1.desc1') }}
        </p>

        <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
          {{ $t('aboutUs.section1.desc2') }}
        </p>

        <p class="hidden sm:block text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
          {{ $t('aboutUs.section1.desc') }}
        </p>
      </div>

      <!-- Left side - Image -->
      <img
        src="../assets/about/image1.png"
        alt="Phone with app showcase"
        class="box-content rounded-[1.875rem] w-full sm:w-[28rem] lg:w-[37.5rem] h-auto basis-1/2"
      />
    </section>

    <section
      class="flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-10 lg:gap-8 mb-24 lg:mb-80 mt-8 sm:mt-16 lg:mt-24"
    >
      <!-- Right side - Image -->
      <img
        src="../assets/about/image2.png"
        alt="Phone with app showcase"
        class="box-content rounded-[1.875rem] w-full sm:w-[28rem] lg:w-[37.5rem] h-auto lg:h-[32rem] basis-1/2"
      />

      <!-- Left side - Text -->
      <div class="flex-auto flex-col basis-1/2">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {{ $t('aboutUs.section2.title') }}
        </h2>

        <div class="mt-6 lg:mt-24 lg:mb-16">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section2.items[0]') }}</h3>
          <p class="text-base sm:text-lg text-gray-600 w-full mt-4">
            {{ $t('aboutUs.section2.desc[0]') }}
          </p>
        </div>

        <div class="mt-6 lg:mt-24 lg:mb-16">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section2.items[1]') }}</h3>
          <p class="text-base sm:text-lg text-gray-600 w-full mt-4">
            {{ $t('aboutUs.section2.desc[1]') }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-10 lg:gap-8 mb-24 lg:mb-80 mt-8 sm:mt-16 lg:mt-24"
    >
      <!-- Right side - Text -->
      <div class="flex-auto flex-col basis-1/2">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          {{ $t('aboutUs.section3.title') }}
        </h2>

        <p class="mt-4 mb-6 text-base sm:text-lg text-gray-600">{{ $t('aboutUs.section3.subtitle') }}</p>

        <div class="space-y-4 sm:space-y-8">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section3.teamTitle') }}</h3>
          <p class="text-base sm:text-lg text-gray-600 w-full mt-4">
            {{ $t('aboutUs.section3.teamDesc') }}
          </p>
          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
            {{ $t('aboutUs.section3.desc1') }}
          </p>
          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
            {{ $t('aboutUs.section3.desc2') }}
          </p>
          <p class="hidden sm:block text-base sm:text-lg text-gray-600 dark:text-white leading-relaxed">
            {{ $t('aboutUs.section3.desc') }}
          </p>
        </div>
      </div>

      <!-- Left side - Image -->
      <img
        src="../assets/about/image3.png"
        alt="Phone with app showcase"
        class="box-content rounded-[1.875rem] w-full sm:w-[28rem] lg:w-[37.5rem] h-auto basis-1/2"
      />
    </section>

    <section class="mt-12 sm:mt-16 lg:mt-24 space-y-4 sm:space-y-8">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {{ $t('aboutUs.section4.title') }}
      </h2>

      <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
        {{ $t('aboutUs.section4.desc1') }}
      </p>

      <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed sm:hidden">
        {{ $t('aboutUs.section4.desc2') }}
      </p>

      <p class="hidden sm:block text-base sm:text-lg text-gray-600 dark:text-white leading-relaxed max-w-4xl">
        {{ $t('aboutUs.section4.desc') }}
      </p>

      <div
        class="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 md:gap-x-12 lg:gap-x-16"
      >
        <div class="relative pr-4 sm:pr-8">
          <div
            class="absolute -left-2 -top-2 h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl md:text-3xl font-medium text-gray-600"
          >
            01
          </div>
          <div class="pl-20 md:pl-24">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section4.items[0]') }}</h3>
            <p class="text-sm sm:text-base mt-3 leading-6 text-gray-600">
              {{ $t('aboutUs.section4.idesc[0]') }}
            </p>
          </div>
        </div>

        <div class="relative pr-4 sm:pr-8">
          <div
            class="absolute -left-2 -top-2 h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl md:text-3xl font-medium text-gray-600"
          >
            02
          </div>
          <div class="pl-20 md:pl-24">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section4.items[1]') }}</h3>
            <p class="text-sm sm:text-base mt-3 leading-6 text-gray-600">
              {{ $t('aboutUs.section4.idesc[1]') }}
            </p>
          </div>
        </div>

        <div class="relative pr-4 sm:pr-8">
          <div
            class="absolute -left-2 -top-2 h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl md:text-3xl font-medium text-gray-600"
          >
            03
          </div>
          <div class="pl-20 md:pl-24">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section4.items[2]') }}</h3>
            <p class="text-sm sm:text-base mt-3 leading-6 text-gray-600">
              {{ $t('aboutUs.section4.idesc[2]') }}
            </p>
          </div>
        </div>

        <div class="relative pr-4 sm:pr-8">
          <div
            class="absolute -left-2 -top-2 h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl md:text-3xl font-medium text-gray-600"
          >
            04
          </div>
          <div class="pl-20 md:pl-24">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section4.items[3]') }}</h3>
            <p class="text-sm sm:text-base mt-3 leading-6 text-gray-600">
              {{ $t('aboutUs.section4.idesc[3]') }}
            </p>
          </div>
        </div>

        <div class="relative pr-4 sm:pr-8">
          <div
            class="absolute -left-2 -top-2 h-14 w-14 md:h-16 md:w-16 rounded-full border border-gray-300 flex items-center justify-center text-2xl md:text-3xl font-medium text-gray-600"
          >
            05
          </div>
          <div class="pl-20 md:pl-24">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">{{ $t('aboutUs.section4.items[4]') }}</h3>
            <p class="text-sm sm:text-base mt-3 leading-6 text-gray-600">
              {{ $t('aboutUs.section4.idesc[4]') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
