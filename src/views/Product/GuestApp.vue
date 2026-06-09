<template>
  <main>
    <!-- Hero -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="max-w-4xl">
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('guestApp.hero.title') }}
          </h1>
          <p class=" text-base sm:text-lg text-gray-700 leading-relaxed">
            {{ $t('guestApp.hero.desc') }}
          </p>
          <button
            class="w-full sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
          >
          {{ $t('guestApp.hero.button') }}
          </button>
        </section>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {{ $t('guestApp.features.title') }}
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {{ $t('guestApp.features.desc') }}
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Hotel Directory -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">info</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.hotelDirectoryTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.hotelDirectoryDesc') }}
            </p>
          </article>

          <!-- Spa Booking -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">menstrual_health</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.spaBookingTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.spaBookingDesc') }}
            </p>
          </article>

          <!-- Mobile Ordering -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">mobile_2</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.mobileOrderingTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-6000">
              {{ $t('guestApp.features.mobileOrderingDesc') }}
            </p>
          </article>

          <!-- Task Manager -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">task</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.taskManagerTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.taskManagerDesc') }}
            </p>
          </article>

          <!-- Restaurant Reservations -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">table_restaurant</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.restaurantReservationsTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.restaurantReservationsDesc') }}
            </p>
          </article>

          <!-- Cabana Bookings -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">trip</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.cabanaBookingsTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.cabanaBookingsDesc') }}
            </p>
          </article>

          <!-- Instant Feedback -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">feedback</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.instantFeedbackTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.instantFeedbackDesc') }}
            </p>
          </article>

          <!-- Analytics & Insights -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">analytics</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.analyticsInsightsTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.analyticsInsightsDesc') }}
            </p>
          </article>

          <!-- And Many More -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">more_horiz</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.features.andManyMoreTitle') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">
              {{ $t('guestApp.features.andManyMoreDesc') }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Access Methods -->
    <section class="max-w-screen-2xl mx-auto px-7 py-12 sm:py-12 lg:py-32">
      <header class="sm:text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('guestApp.accessMethods.title') }}
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          {{ $t('guestApp.accessMethods.desc') }}
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Web App -->
        <article
          class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
        >
          <div
            class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
          >
          <span class="material-symbols-outlined text-white">desktop_windows</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">{{ $t('guestApp.accessMethods.webAppTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">
            {{ $t('guestApp.accessMethods.webAppDesc') }}
          </p>
        </article>

        <!-- Native iOS & Android App -->
        <article
          class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
        >
          <div
            class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
          >
          <span class="material-symbols-outlined text-white">mobile_2</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">{{ $t('guestApp.accessMethods.nativeAppTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">
            {{ $t('guestApp.accessMethods.nativeAppDesc') }}
          </p>
        </article>

        <!-- Embedded Integration -->
        <article
          class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
        >
          <div
            class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
          >
          <span class="material-symbols-outlined text-white">integration_instructions</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">{{ $t('guestApp.accessMethods.embeddedTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">
            {{ $t('guestApp.accessMethods.embeddedDesc') }}
          </p>
        </article>

        <!-- Hotel Web App -->
        <article
          class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
        >
          <div
            class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
          >
          <span class="material-symbols-outlined text-white">desktop_cloud</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">{{ $t('guestApp.accessMethods.hotelWebAppTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">
            {{ $t('guestApp.accessMethods.hotelWebAppDesc') }}
          </p>
        </article>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="py-12 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-7 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <section class="space-y-8">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight not-sm:text-center">
              {{ $t('guestApp.whyChoose.title') }}
            </h2>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed not-sm:text-center">
              {{ $t('guestApp.whyChoose.desc') }}
            </p>

            <!-- Benefits List -->
            <ul class="space-y-6">
              <!-- Boost Efficiency -->
              <li class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <section>
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.whyChoose.efficiencyTitle') }}</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    {{ $t('guestApp.whyChoose.efficiencyDesc') }}
                  </p>
                </section>
              </li>

              <!-- Embrace Digitization -->
              <li class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <section>
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.whyChoose.digitizationTitle') }}</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    {{ $t('guestApp.whyChoose.digitizationDesc') }}
                  </p>
                </section>
              </li>

              <!-- Enhance Guest Experience -->
              <li class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <section>
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {{ $t('guestApp.whyChoose.experienceTitle') }}
                  </h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    {{ $t('guestApp.whyChoose.experienceDesc') }}
                  </p>
                </section>
              </li>
            </ul>
          </section>

          <!-- Right Section - Image -->
          <figure class="flex items-center justify-center">
            <img src="../../assets/product/GuestApp/2.png" alt="Guest app page image" class="w-3/4">
          </figure>
        </div>
      </div>
    </section>

    <!-- Explore More -->
    <section class="max-w-screen-2xl mx-auto px-7 py-12 sm:py-12 lg:py-32">
      <header class="sm:text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 not-sm:mr-4">
          {{ $t('guestApp.exploreMore.title') }}
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          {{ $t('guestApp.exploreMore.desc') }}
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Integrations -->
        <article
          class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <div
            class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
          >
          <span class="material-symbols-outlined text-white">integration_instructions</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.exploreMore.integrationsTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('guestApp.exploreMore.integrationsDesc') }}</p>
        </article>

        <!-- Case Studies -->
        <article
          class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <div
            class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
          >
          <span class="material-symbols-outlined text-white">award_star</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.resources.caseStudiesTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('guestApp.resources.caseStudiesDesc') }}</p>
        </article>

        <!-- Blog & Resources -->
        <article
          class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <div
            class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
          >
          <span class="material-symbols-outlined text-white">news</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.resources.blogTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('guestApp.resources.blogDesc') }}</p>
        </article>

        <!-- Support Center -->
        <article
          class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
        >
          <div
            class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
          >
          <span class="material-symbols-outlined text-white">call</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('guestApp.resources.supportTitle') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('guestApp.resources.supportDesc') }}</p>
        </article>
      </div>
    </section>
  </main>
</template>