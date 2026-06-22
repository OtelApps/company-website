<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Section - Text -->
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('virtualReceptionist.hero.title') }}
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            {{ $t('virtualReceptionist.hero.desc') }}
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {{ $t('virtualReceptionist.hero.button') }}
          </button>
        </section>

        <!-- Right Section - Chat Mockup -->
        <figure class="flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col relative" style="height: 420px;">
             <div class="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm z-10 relative">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center">
                     <span class="material-symbols-outlined text-white text-sm">support_agent</span>
                  </div>
                  <div class="text-left">
                    <p class="font-semibold text-gray-900 leading-tight">{{ $t('virtualReceptionist.mockup.name') }}</p>
                    <p class="text-xs text-green-500 font-medium flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>{{ $t('virtualReceptionist.mockup.status') }}</p>
                  </div>
                </div>
                <div>
                   <span class="material-symbols-outlined text-gray-400">more_horiz</span>
                </div>
             </div>
             <div class="flex-1 p-6 flex flex-col space-y-4 overflow-y-auto bg-gray-50">
                <div class="bg-white p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm w-[85%] text-left border border-gray-100">
                   <p class="text-sm text-gray-700">{{ $t('virtualReceptionist.mockup.msg1') }}</p>
                </div>
                <div class="bg-gray-900 p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl shadow-sm w-3/4 self-end text-left text-white mt-4">
                   <p class="text-sm">{{ $t('virtualReceptionist.mockup.msg2') }}</p>
                </div>
                <div class="bg-white p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm w-[85%] text-left border border-gray-100">
                   <p class="text-sm text-gray-700">{{ $t('virtualReceptionist.mockup.msg3') }}</p>
                </div>
             </div>
          </div>
        </figure>
      </div>
    </section>

    <!-- Dark Section - Features -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {{ $t('virtualReceptionist.features.title') }}
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            {{ $t('virtualReceptionist.features.subtitle') }}
          </p>
        </header>

        <!-- Feature Zig-zag layout alternative -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <span class="material-symbols-outlined text-[#f5a623] text-3xl">smart_toy</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('virtualReceptionist.features.items.0.title') }}</h3>
              <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
                {{ $t('virtualReceptionist.features.items.0.desc') }}
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <span class="material-symbols-outlined text-[#f5a623] text-3xl">support_agent</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('virtualReceptionist.features.items.1.title') }}</h3>
              <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
                {{ $t('virtualReceptionist.features.items.1.desc') }}
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <span class="material-symbols-outlined text-[#f5a623] text-3xl">add_shopping_cart</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('virtualReceptionist.features.items.2.title') }}</h3>
              <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
                {{ $t('virtualReceptionist.features.items.2.desc') }}
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
              <span class="material-symbols-outlined text-[#f5a623] text-3xl">translate</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3">{{ $t('virtualReceptionist.features.items.3.title') }}</h3>
              <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
                {{ $t('virtualReceptionist.features.items.3.desc') }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Why Choose - 3 Columns Layout -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ $t('virtualReceptionist.whyChoose.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <span class="material-symbols-outlined text-4xl text-[#f5a623] mb-6 block">battery_charging_full</span>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('virtualReceptionist.whyChoose.items.0.title') }}</h3>
            <p class="text-gray-600 text-sm sm:text-base">
              {{ $t('virtualReceptionist.whyChoose.items.0.desc') }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-yellow-50 rounded-full z-0"></div>
            <span class="material-symbols-outlined text-4xl text-[#f5a623] mb-6 block relative z-10">trending_up</span>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 relative z-10">{{ $t('virtualReceptionist.whyChoose.items.1.title') }}</h3>
            <p class="text-gray-600 text-sm sm:text-base relative z-10">
              {{ $t('virtualReceptionist.whyChoose.items.1.desc') }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <span class="material-symbols-outlined text-4xl text-[#f5a623] mb-6 block">star</span>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('virtualReceptionist.whyChoose.items.2.title') }}</h3>
            <p class="text-gray-600 text-sm sm:text-base">
              {{ $t('virtualReceptionist.whyChoose.items.2.desc') }}
            </p>
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
          {{ $t('virtualReceptionist.exploreMore.desc') }}
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
