<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Section - Text -->
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('checkInCheckOut.hero.title') }}
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            {{ $t('checkInCheckOut.hero.desc') }}
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {{ $t('checkInCheckOut.hero.button') }}
          </button>
        </section>

        <!-- Right Section - Check-In Interface Mockup -->
        <figure class="flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col relative" style="height: 440px;">
             <!-- Phone UI Header -->
             <div class="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm z-10 relative">
                <span class="font-semibold text-gray-900 leading-tight">{{ $t('checkInCheckOut.mockup.title') }}</span>
                <span class="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded">{{ $t('checkInCheckOut.mockup.step') }}</span>
             </div>

             <!-- Phone UI Body (Document Scan) -->
             <div class="flex-1 p-6 flex flex-col space-y-4 overflow-y-auto bg-gray-50 justify-between">
                <div class="space-y-3">
                  <h3 class="font-bold text-gray-800 text-lg">{{ $t('checkInCheckOut.mockup.heading') }}</h3>
                  <p class="text-sm text-gray-600">{{ $t('checkInCheckOut.mockup.desc') }}</p>
                </div>

                <!-- Camera view simulation -->
                <div class="border-4 border-dashed border-[#f5a623] rounded-xl aspect-[1.58/1] flex flex-col items-center justify-center relative bg-gray-100/60 overflow-hidden">
                   <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                   <span class="material-symbols-outlined text-4xl text-[#f5a623] animate-pulse">photo_camera</span>
                   <p class="text-xs text-gray-500 mt-2 font-medium">{{ $t('checkInCheckOut.mockup.hint') }}</p>
                </div>

                <button class="w-full bg-[#f5a623] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition-colors">
                   {{ $t('checkInCheckOut.mockup.button') }}
                </button>
             </div>
          </div>
        </figure>
      </div>
    </section>

    <!-- Timeline of Flow (Vertical Split Layout) -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('checkInCheckOut.timeline.title') }}</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">{{ $t('checkInCheckOut.timeline.subtitle') }}</p>
        </div>

        <div class="max-w-3xl mx-auto relative border-l-2 border-gray-800 ml-4 sm:ml-auto">
          <!-- Step 1 -->
          <div class="mb-12 pl-8 relative">
            <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#f5a623] border-4 border-gray-900 flex items-center justify-center"></div>
            <h3 class="text-xl font-bold mb-2 text-[#f5a623]">{{ $t('checkInCheckOut.timeline.steps.0.title') }}</h3>
            <p class="text-gray-300 leading-relaxed text-sm sm:text-base">
              {{ $t('checkInCheckOut.timeline.steps.0.desc') }}
            </p>
          </div>

          <!-- Step 2 -->
          <div class="mb-12 pl-8 relative">
            <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#f5a623] border-4 border-gray-900 flex items-center justify-center"></div>
            <h3 class="text-xl font-bold mb-2 text-[#f5a623]">{{ $t('checkInCheckOut.timeline.steps.1.title') }}</h3>
            <p class="text-gray-300 leading-relaxed text-sm sm:text-base">
              {{ $t('checkInCheckOut.timeline.steps.1.desc') }}
            </p>
          </div>

          <!-- Step 3 -->
          <div class="pl-8 relative">
            <div class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#f5a623] border-4 border-gray-900 flex items-center justify-center"></div>
            <h3 class="text-xl font-bold mb-2 text-[#f5a623]">{{ $t('checkInCheckOut.timeline.steps.2.title') }}</h3>
            <p class="text-gray-300 leading-relaxed text-sm sm:text-base">
              {{ $t('checkInCheckOut.timeline.steps.2.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stat box and feature blocks (Split Screen Layout) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">

          <!-- Statistics Card -->
          <div class="lg:col-span-5 bg-gradient-to-br from-yellow-400 to-[#f5a623] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between aspect-square">
            <div>
              <span class="material-symbols-outlined text-6xl opacity-80">hourglass_disabled</span>
              <h3 class="text-4xl font-extrabold mt-6 leading-tight">{{ $t('checkInCheckOut.stats.value') }}</h3>
              <p class="text-lg font-medium opacity-90 mt-2">{{ $t('checkInCheckOut.stats.label') }}</p>
            </div>
            <p class="text-sm opacity-80 leading-relaxed">
              {{ $t('checkInCheckOut.stats.desc') }}
            </p>
          </div>

          <!-- Feature Cards List -->
          <div class="lg:col-span-7 space-y-6">
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <span class="material-symbols-outlined text-3xl text-[#f5a623] flex-shrink-0">credit_card_heart</span>
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-1">{{ $t('checkInCheckOut.stats.features.0.title') }}</h4>
                <p class="text-gray-600 text-sm sm:text-base">{{ $t('checkInCheckOut.stats.features.0.desc') }}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <span class="material-symbols-outlined text-3xl text-[#f5a623] flex-shrink-0">signature</span>
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-1">{{ $t('checkInCheckOut.stats.features.1.title') }}</h4>
                <p class="text-gray-600 text-sm sm:text-base">{{ $t('checkInCheckOut.stats.features.1.desc') }}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4">
              <span class="material-symbols-outlined text-3xl text-[#f5a623] flex-shrink-0">sync_alt</span>
              <div>
                <h4 class="font-bold text-gray-900 text-lg mb-1">{{ $t('checkInCheckOut.stats.features.2.title') }}</h4>
                <p class="text-gray-600 text-sm sm:text-base">{{ $t('checkInCheckOut.stats.features.2.desc') }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Explore More -->
    <section class="max-w-screen-2xl mx-auto px-7 py-12 sm:py-12 lg:py-32">
      <header class="sm:text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 not-sm:mr-4">
          {{ $t('common.exploreMore.title') }}
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          {{ $t('checkInCheckOut.exploreMore.desc') }}
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">mobile_2</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('common.exploreMore.cards.mobileApp.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('common.exploreMore.cards.mobileApp.desc') }}</p>
        </article>

        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">restaurant_menu</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('common.exploreMore.cards.mobileOrdering.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('common.exploreMore.cards.mobileOrdering.desc') }}</p>
        </article>

        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">info</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('common.exploreMore.cards.hotelGuide.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('common.exploreMore.cards.hotelGuide.desc') }}</p>
        </article>

        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">task</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('common.exploreMore.cards.taskManager.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('common.exploreMore.cards.taskManager.desc') }}</p>
        </article>
      </div>
    </section>
  </main>
</template>
