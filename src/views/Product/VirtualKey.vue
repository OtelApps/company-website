<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Section - Text -->
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Telefon jako klíč
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            Zapomeňte na ztracené plastové karty a fronty na recepci. S virtuální pokojovou kartou v aplikaci mohou vaši hosté odemknout dveře svého pokoje pouhým přiložením telefonu.
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          >
            Zjistit více o integracích
          </button>
        </section>

        <!-- Right Section - Digital Key Mockup -->
        <figure class="flex items-center justify-center p-4">
          <div class="relative w-full max-w-sm aspect-[1/1.5] bg-gradient-to-br from-gray-50 to-gray-200 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden flex flex-col items-center justify-center">
            <!-- Notch -->
            <div class="absolute top-0 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20"></div>
            
            <div class="w-[80%] h-[50%] bg-gradient-to-tr from-blue-600 to-[#f5a623] rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white transform transition-transform hover:scale-105 duration-300">
              <div class="flex justify-between items-start">
                <span class="material-symbols-outlined text-3xl">meeting_room</span>
                <span class="material-symbols-outlined text-3xl animate-pulse">contactless</span>
              </div>
              <div>
                <p class="text-sm opacity-80 uppercase tracking-widest mb-1">Pokoj</p>
                <p class="text-4xl font-bold">402</p>
                <p class="text-sm mt-2 opacity-90">Přiložte k zámku pro odemčení</p>
              </div>
            </div>
            
            <!-- App UI decoration -->
            <div class="absolute bottom-10 w-[80%] bg-white p-4 rounded-xl shadow-sm text-center">
               <p class="text-sm font-semibold text-gray-900">Stav: <span class="text-green-500">Aktivní</span></p>
            </div>
          </div>
        </figure>
      </div>
    </section>

    <!-- How It Works (Step-by-step horizontal) -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Jak to celé funguje?</h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">Zcela bezkontaktní proces od rezervace až po vstup do pokoje.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Connecting line for desktop -->
          <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700 z-0"></div>

          <div class="relative z-10 flex flex-col items-center text-center px-4">
            <div class="w-24 h-24 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mb-6 shadow-xl text-[#f5a623]">
              <span class="material-symbols-outlined text-4xl">mobile_friendly</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">1. Check-in v aplikaci</h3>
            <p class="text-gray-400">Host provede online check-in přímo ve svém mobilním telefonu před příjezdem do hotelu.</p>
          </div>

          <div class="relative z-10 flex flex-col items-center text-center px-4">
            <div class="w-24 h-24 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mb-6 shadow-xl text-[#f5a623]">
              <span class="material-symbols-outlined text-4xl">vpn_key</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">2. Vydání klíče</h3>
            <p class="text-gray-400">Systém automaticky vygeneruje bezpečný digitální klíč a stáhne ho do aplikace hosta.</p>
          </div>

          <div class="relative z-10 flex flex-col items-center text-center px-4">
            <div class="w-24 h-24 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mb-6 shadow-xl text-[#f5a623]">
              <span class="material-symbols-outlined text-4xl">sensor_door</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">3. Odemčení dveří</h3>
            <p class="text-gray-400">Při příchodu stačí přiložit telefon se zapnutým Bluetooth nebo NFC ke dveřnímu zámku.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits (Bento box / Masonry-style layout) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Výhody virtuálního klíče</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-5xl mx-auto">
          <!-- Large Card -->
          <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <span class="material-symbols-outlined text-5xl mb-6 text-blue-200">security</span>
              <h3 class="text-2xl font-bold mb-4">Nejvyšší bezpečnost</h3>
              <p class="text-blue-100 leading-relaxed">
                Digitální klíče jsou zabezpečeny moderním šifrováním. Nelze je snadno zkopírovat, a pokud host ztratí telefon, přístup lze okamžitě na dálku zablokovat přes recepční systém.
              </p>
            </div>
          </div>

          <!-- Medium Cards -->
          <div class="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex items-start space-x-4">
            <span class="material-symbols-outlined text-3xl text-[#f5a623]">recycling</span>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Šetrné k přírodě</h3>
              <p class="text-gray-600">Eliminujte tisíce ztracených a vyhozených plastových karet ročně. Vše je 100% digitální.</p>
            </div>
          </div>

          <div class="md:col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center">
            <span class="material-symbols-outlined text-3xl text-[#f5a623] mb-3">timer</span>
            <h3 class="font-bold text-gray-900 mb-1">Žádné čekání</h3>
            <p class="text-sm text-gray-600">Rovnou na pokoj.</p>
          </div>

          <div class="md:col-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center">
            <span class="material-symbols-outlined text-3xl text-[#f5a623] mb-3">api</span>
            <h3 class="font-bold text-gray-900 mb-1">Kompatibilita</h3>
            <p class="text-sm text-gray-600">Salto, Assa Abloy a další.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore More -->
    <section class="max-w-screen-2xl mx-auto px-7 py-12 sm:py-12 lg:py-32">
      <header class="sm:text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 not-sm:mr-4">
          Objevte další možnosti s Otel Apps
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Virtuální pokojová karta je jen jednou z mnoha funkcí. Prozkoumejte, jak může celá platforma pomoci vašemu hotelu.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">mobile_2</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Mobilní aplikace</h3>
          <p class="text-sm sm:text-base text-gray-600">Umožněte hostům spravovat celý pobyt z jejich telefonu.</p>
        </article>

        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">restaurant_menu</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Mobilní objednávky</h3>
          <p class="text-sm sm:text-base text-gray-600">Zvyšte prodeje díky snadnému objednávání na pokoj.</p>
        </article>

        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">info</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Hotelový průvodce</h3>
          <p class="text-sm sm:text-base text-gray-600">Veškeré informace o hotelu a službách přehledně na jednom místě.</p>
        </article>

        <article class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">task</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Task manager</h3>
          <p class="text-sm sm:text-base text-gray-600">Efektivní vyřizování požadavků hostů pro personál.</p>
        </article>
      </div>
    </section>
  </main>
</template>
