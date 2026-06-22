<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Section - Text -->
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('stayProgress.hero.title') }}
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            {{ $t('stayProgress.hero.desc') }}
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {{ $t('stayProgress.hero.button') }}
          </button>
        </section>

        <!-- Right Section - Interactive Journey Mockup -->
        <figure class="flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col relative" style="height: 480px;">
             <!-- Phone UI Header -->
             <div class="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm z-10 relative">
                <span class="font-bold text-gray-900 text-sm">{{ $t('stayProgress.hero.mock.heading') }}</span>
                <span class="text-xs bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded flex items-center">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                  {{ $t('stayProgress.hero.mock.badge') }}
                </span>
             </div>

             <!-- Phone UI Body (Journey Steps Visualization) -->
             <div class="flex-1 p-6 bg-gray-50/50 flex flex-col justify-between overflow-y-auto space-y-6">
                <!-- Step 1: Pre-arrival (Completed) -->
                <div class="flex items-start space-x-4 opacity-75">
                   <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white shadow">
                      <span class="material-symbols-outlined text-sm font-bold">check</span>
                   </div>
                   <div class="text-left">
                      <h4 class="font-bold text-gray-900 text-sm">{{ $t('stayProgress.hero.mock.step1.title') }}</h4>
                      <p class="text-xs text-gray-500 mt-0.5">{{ $t('stayProgress.hero.mock.step1.desc') }}</p>
                   </div>
                </div>

                <!-- Step 2: During Stay (Active / Highlighted) -->
                <div class="flex items-start space-x-4 border-l-2 border-dashed border-[#f5a623] pl-4 -ml-0.5 py-1">
                   <div class="w-9 h-9 rounded-full bg-[#f5a623] flex items-center justify-center flex-shrink-0 text-white shadow-lg relative -left-4.5">
                      <span class="material-symbols-outlined text-sm">vpn_key</span>
                      <span class="absolute -top-1 -right-1 flex h-3 w-3">
                         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                         <span class="relative inline-flex rounded-full h-3 w-3 bg-[#f5a623]"></span>
                      </span>
                   </div>
                   <div class="text-left -ml-2">
                      <h4 class="font-bold text-gray-900 text-sm flex items-center">
                         {{ $t('stayProgress.hero.mock.step2.title') }}
                         <span class="ml-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-[9px] font-bold rounded">{{ $t('stayProgress.hero.mock.step2.now') }}</span>
                      </h4>
                      <!-- Mini Interactive Card inside Phone mockup -->
                      <div class="mt-2 bg-white p-3 rounded-xl shadow-md border border-gray-150 space-y-2">
                         <div class="flex items-center justify-between">
                            <span class="text-[10px] text-gray-500 font-semibold">{{ $t('stayProgress.hero.mock.step2.room') }}</span>
                            <span class="text-[10px] text-green-600 font-bold flex items-center">
                              <span class="h-1.5 w-1.5 bg-green-500 rounded-full mr-1"></span>{{ $t('stayProgress.hero.mock.step2.connected') }}
                            </span>
                         </div>
                         <button class="w-full bg-gray-950 text-white text-xs font-semibold py-1.5 rounded-lg flex items-center justify-center space-x-1 hover:bg-gray-800 transition-colors">
                            <span class="material-symbols-outlined text-xs">door_front</span>
                            <span>{{ $t('stayProgress.hero.mock.step2.openKey') }}</span>
                         </button>
                      </div>
                   </div>
                </div>

                <!-- Step 3: Before Departure (Upcoming) -->
                <div class="flex items-start space-x-4 opacity-50">
                   <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 text-gray-600">
                      <span class="material-symbols-outlined text-sm">logout</span>
                   </div>
                   <div class="text-left">
                      <h4 class="font-bold text-gray-900 text-sm">{{ $t('stayProgress.hero.mock.step3.title') }}</h4>
                      <p class="text-xs text-gray-500 mt-0.5">{{ $t('stayProgress.hero.mock.step3.desc') }}</p>
                   </div>
                </div>
             </div>
          </div>
        </figure>
      </div>
    </section>

    <!-- Phase 1: Před příjezdem (Dark Section) -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-screen-2xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text and feature lists -->
          <div class="space-y-8 order-2 lg:order-1">
            <header class="space-y-4">
              <span class="bg-[#f5a623]/25 text-[#f5a623] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{{ $t('stayProgress.phase1.badge') }}</span>
              <h2 class="text-3xl sm:text-4xl font-bold leading-tight">{{ $t('stayProgress.phase1.title') }}</h2>
              <p class="text-gray-400 text-base sm:text-lg">
                {{ $t('stayProgress.phase1.desc') }}
              </p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">chat_bubble_outline</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase1.cards.0.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase1.cards.0.desc') }}</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">fingerprint</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase1.cards.1.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase1.cards.1.desc') }}</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">page_info</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase1.cards.2.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase1.cards.2.desc') }}</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">favorite</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase1.cards.3.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase1.cards.3.desc') }}</p>
              </article>
            </div>
          </div>

          <!-- Graphic Representation (Welcome Screen Mockup) -->
          <div class="flex justify-center order-1 lg:order-2">
            <div class="w-full max-w-sm bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl text-left space-y-6">
              <div class="flex items-center space-x-2 text-zinc-500">
                <span class="material-symbols-outlined text-sm">mail</span>
                <span class="text-xs">{{ $t('stayProgress.phase1.mock.label') }}</span>
              </div>
              <div class="bg-zinc-800 p-4 rounded-2xl space-y-3">
                <p class="text-sm font-semibold text-white">{{ $t('stayProgress.phase1.mock.title') }}</p>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  {{ $t('stayProgress.phase1.mock.desc') }}
                </p>
                <div class="pt-2">
                  <button class="bg-[#f5a623] hover:bg-yellow-600 text-white font-bold text-xs py-2 px-4 rounded-xl transition-colors">
                    {{ $t('stayProgress.phase1.mock.button') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Phase 2: Během pobytu (Light Section with White/Yellow aesthetic) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Graphic representation (Key and Ordering screen) -->
          <div class="flex justify-center">
            <div class="w-full max-w-sm bg-white rounded-3xl p-6 border border-gray-200 shadow-2xl text-left space-y-6">
              <!-- Hotel Logo & Welcome -->
              <div class="flex justify-between items-center">
                <div>
                   <h3 class="font-bold text-gray-900 text-lg">{{ $t('stayProgress.phase2.mock.hotel') }}</h3>
                   <p class="text-xs text-gray-500 font-medium">{{ $t('stayProgress.phase2.mock.roomWifi') }}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                   <span class="material-symbols-outlined text-[#f5a623] text-sm">wifi</span>
                </div>
              </div>

              <!-- Services list mockup -->
              <div class="space-y-3">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">{{ $t('stayProgress.phase2.mock.servicesLabel') }}</p>

                <!-- Service 1 -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-150">
                  <div class="flex items-center space-x-3">
                     <span class="material-symbols-outlined text-[#f5a623]">room_service</span>
                     <div>
                        <p class="text-xs font-bold text-gray-800">{{ $t('stayProgress.phase2.mock.service1.title') }}</p>
                        <p class="text-[10px] text-gray-500">{{ $t('stayProgress.phase2.mock.service1.time') }}</p>
                     </div>
                  </div>
                  <button class="bg-gray-900 text-white text-[10px] font-bold py-1 px-3 rounded-lg hover:bg-gray-800 transition-colors">{{ $t('stayProgress.phase2.mock.service1.button') }}</button>
                </div>

                <!-- Service 2 -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-150">
                  <div class="flex items-center space-x-3">
                     <span class="material-symbols-outlined text-[#f5a623]">spa</span>
                     <div>
                        <p class="text-xs font-bold text-gray-800">{{ $t('stayProgress.phase2.mock.service2.title') }}</p>
                        <p class="text-[10px] text-gray-500">{{ $t('stayProgress.phase2.mock.service2.time') }}</p>
                     </div>
                  </div>
                  <button class="bg-gray-900 text-white text-[10px] font-bold py-1 px-3 rounded-lg hover:bg-gray-800 transition-colors">{{ $t('stayProgress.phase2.mock.service2.button') }}</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Text and features list -->
          <div class="space-y-8">
            <header class="space-y-4">
              <span class="bg-[#f5a623]/25 text-[#f5a623] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{{ $t('stayProgress.phase2.badge') }}</span>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{{ $t('stayProgress.phase2.title') }}</h2>
              <p class="text-gray-600 text-base sm:text-lg">
                {{ $t('stayProgress.phase2.desc') }}
              </p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">key</span>
                <h3 class="font-bold text-gray-900 text-base">{{ $t('stayProgress.phase2.cards.0.title') }}</h3>
                <p class="text-xs text-gray-600">{{ $t('stayProgress.phase2.cards.0.desc') }}</p>
              </article>

              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">menu_book</span>
                <h3 class="font-bold text-gray-900 text-base">{{ $t('stayProgress.phase2.cards.1.title') }}</h3>
                <p class="text-xs text-gray-600">{{ $t('stayProgress.phase2.cards.1.desc') }}</p>
              </article>

              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">qr_code_2</span>
                <h3 class="font-bold text-gray-900 text-base">{{ $t('stayProgress.phase2.cards.2.title') }}</h3>
                <p class="text-xs text-gray-600">{{ $t('stayProgress.phase2.cards.2.desc') }}</p>
              </article>

              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">support_agent</span>
                <h3 class="font-bold text-gray-900 text-base">{{ $t('stayProgress.phase2.cards.3.title') }}</h3>
                <p class="text-xs text-gray-600">{{ $t('stayProgress.phase2.cards.3.desc') }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Phase 3: Před odjezdem (Dark Section) -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-screen-2xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text and feature lists -->
          <div class="space-y-8 order-2 lg:order-1">
            <header class="space-y-4">
              <span class="bg-[#f5a623]/25 text-[#f5a623] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{{ $t('stayProgress.phase3.badge') }}</span>
              <h2 class="text-3xl sm:text-4xl font-bold leading-tight">{{ $t('stayProgress.phase3.title') }}</h2>
              <p class="text-gray-400 text-base sm:text-lg">
                {{ $t('stayProgress.phase3.desc') }}
              </p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">credit_score</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase3.cards.0.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase3.cards.0.desc') }}</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">receipt_long</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase3.cards.1.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase3.cards.1.desc') }}</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">rate_review</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase3.cards.2.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase3.cards.2.desc') }}</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">workspace_premium</span>
                <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase3.cards.3.title') }}</h3>
                <p class="text-xs text-gray-400">{{ $t('stayProgress.phase3.cards.3.desc') }}</p>
              </article>
            </div>
          </div>

          <!-- Graphic Representation (Check-Out billing mockup) -->
          <div class="flex justify-center order-1 lg:order-2">
            <div class="w-full max-w-sm bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl text-left space-y-6">
              <div class="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div>
                   <h3 class="font-bold text-white text-base">{{ $t('stayProgress.phase3.mock.title') }}</h3>
                   <p class="text-xs text-zinc-500 font-medium">{{ $t('stayProgress.phase3.mock.roomDeparture') }}</p>
                </div>
                <span class="text-xs bg-zinc-800 text-zinc-300 font-bold px-2 py-0.5 rounded">{{ $t('stayProgress.phase3.mock.quickCheckout') }}</span>
              </div>

              <!-- Billing items -->
              <div class="space-y-2 text-xs">
                <div class="flex justify-between text-zinc-300">
                  <span>{{ $t('stayProgress.phase3.mock.items.0.label') }}</span>
                  <span>{{ $t('stayProgress.phase3.mock.items.0.price') }}</span>
                </div>
                <div class="flex justify-between text-zinc-300">
                  <span>{{ $t('stayProgress.phase3.mock.items.1.label') }}</span>
                  <span>{{ $t('stayProgress.phase3.mock.items.1.price') }}</span>
                </div>
                <div class="flex justify-between text-zinc-300">
                  <span>{{ $t('stayProgress.phase3.mock.items.2.label') }}</span>
                  <span>{{ $t('stayProgress.phase3.mock.items.2.price') }}</span>
                </div>
                <div class="border-t border-zinc-850 pt-2 flex justify-between font-bold text-white text-sm">
                  <span>{{ $t('stayProgress.phase3.mock.totalLabel') }}</span>
                  <span class="text-[#f5a623]">{{ $t('stayProgress.phase3.mock.totalPrice') }}</span>
                </div>
              </div>

              <div class="pt-2 space-y-2">
                <button class="w-full bg-[#f5a623] hover:bg-yellow-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
                  {{ $t('stayProgress.phase3.mock.payButton') }}
                </button>
                <p class="text-[9px] text-zinc-500 text-center">{{ $t('stayProgress.phase3.mock.note') }}</p>
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
          {{ $t('stayProgress.exploreMore.title') }}
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          {{ $t('stayProgress.exploreMore.desc') }}
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <router-link to="/Product/GuestApp" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">smartphone</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('stayProgress.exploreMore.cards.0.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('stayProgress.exploreMore.cards.0.desc') }}</p>
        </router-link>

        <router-link to="/Product/VirtualReceptionist" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">support_agent</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('stayProgress.exploreMore.cards.1.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('stayProgress.exploreMore.cards.1.desc') }}</p>
        </router-link>

        <router-link to="/Product/CheckInCheckOut" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">desktop_cloud</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('stayProgress.exploreMore.cards.2.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('stayProgress.exploreMore.cards.2.desc') }}</p>
        </router-link>

        <router-link to="/Product/VirtualKey" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">credit_card</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ $t('stayProgress.exploreMore.cards.3.title') }}</h3>
          <p class="text-sm sm:text-base text-gray-600">{{ $t('stayProgress.exploreMore.cards.3.desc') }}</p>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'StayProgress',
}
</script>

<style scoped>
/* Styl pro jemné přiblížení při přejetí myší */
.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
