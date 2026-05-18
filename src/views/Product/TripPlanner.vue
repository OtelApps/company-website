<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Section - Text -->
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Naplánujte hostům nezapomenutelné zážitky v Praze
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            S funkcí Trip Planner v naší mobilní aplikaci mají vaši hosté celou Prahu jako na dlani. 
            Pomozte jim objevit nejznámější místa, naplánovat skvělé výlety a užít si pobyt na maximum.
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          >
            Vyzkoušet demo-verzi
          </button>
        </section>

        <!-- Right Section - Trip Planner Phone Mockup -->
        <figure class="flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col relative" style="height: 480px;">
             <!-- Phone UI Header / Search -->
             <div class="bg-white border-b px-5 py-4 flex flex-col space-y-3 shadow-sm z-10 relative">
                <div class="flex items-center justify-between">
                   <div class="flex items-center space-x-2">
                      <span class="material-symbols-outlined text-[#f5a623] text-lg">explore</span>
                      <span class="font-bold text-gray-900 text-sm">Trip Planner</span>
                   </div>
                   <span class="text-xs text-gray-500 font-medium">Praha</span>
                </div>
                <!-- Search bar -->
                <div class="flex items-center bg-gray-100 rounded-lg px-3 py-1.5 border border-gray-200">
                   <span class="material-symbols-outlined text-gray-400 text-sm mr-2">search</span>
                   <span class="text-xs text-gray-400">Kam se chcete vydat?</span>
                </div>
             </div>

             <!-- Phone UI Body (Map Simulation) -->
             <div class="flex-1 relative bg-blue-50/40 overflow-hidden flex flex-col justify-between p-4">
                <!-- Map Grid Gridlines/Roads (SVG Background Mockup) -->
                <svg class="absolute inset-0 w-full h-full text-gray-200/60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 100 L 400 150 M 50 0 L 150 400 M 300 0 C 200 200, 350 300, 250 500" stroke="currentColor" stroke-width="6" fill="none" />
                  <path d="M 0 250 Q 200 120 400 300" stroke="#cbe0ff" stroke-width="20" fill="none" opacity="0.4" /> <!-- Vltava River simulation -->
                </svg>

                <!-- Map Pins (Points of Interest) -->
                <!-- Pin 1: Castle -->
                <div class="absolute top-[25%] left-[20%] flex flex-col items-center">
                   <div class="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                      <span class="material-symbols-outlined text-white text-xs">castle</span>
                   </div>
                   <span class="text-[10px] font-bold text-gray-800 bg-white/95 px-1.5 py-0.5 rounded shadow mt-1">Pražský hrad</span>
                </div>

                <!-- Pin 2: Bridge (Active item) -->
                <div class="absolute top-[45%] left-[55%] flex flex-col items-center">
                   <div class="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform cursor-pointer relative">
                      <span class="material-symbols-outlined text-white text-sm">directions_walk</span>
                      <span class="absolute -top-1 -right-1 flex h-3 w-3">
                         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                         <span class="relative inline-flex rounded-full h-3 w-3 bg-[#f5a623]"></span>
                      </span>
                   </div>
                   <span class="text-[10px] font-extrabold text-white bg-gray-900 px-1.5 py-0.5 rounded shadow mt-1">Karlův most</span>
                </div>

                <!-- Pin 3: Square -->
                <div class="absolute top-[60%] left-[80%] flex flex-col items-center">
                   <div class="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                      <span class="material-symbols-outlined text-white text-xs">account_balance</span>
                   </div>
                   <span class="text-[10px] font-bold text-gray-800 bg-white/95 px-1.5 py-0.5 rounded shadow mt-1">Orloj</span>
                </div>

                <!-- Active Monument Popup Card (Bottom Float) -->
                <div class="mt-auto bg-white rounded-2xl p-3 shadow-xl border border-gray-100 flex items-center justify-between z-10 space-x-3">
                   <div class="flex items-center space-x-3">
                      <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                         <span class="material-symbols-outlined text-[#f5a623] text-xl">map</span>
                      </div>
                      <div class="text-left text-left-important">
                         <h4 class="font-bold text-gray-900 text-xs sm:text-sm text-left">Karlův most</h4>
                         <p class="text-[10px] text-gray-500 flex items-center">
                            <span class="material-symbols-outlined text-[10px] text-[#f5a623] mr-1">location_on</span>
                            1.2 km od Vašeho hotelu
                         </p>
                      </div>
                   </div>
                   <div class="flex flex-col items-end space-y-1">
                      <button class="bg-gray-900 text-white text-[10px] font-semibold px-3 py-1 rounded-md hover:bg-gray-800 transition-colors">
                         Navigovat
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </figure>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vše pro dokonalé objevování města
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Interaktivní nástroj, který udělá z každé procházky Prahou perfektní zážitek.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Interactive Map -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">map</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Interaktivní mapa</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Přehledná mapa Prahy s vyznačenými body zájmu, která hosty navede přímo k cíli.
            </p>
          </article>

          <!-- Top Monuments -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">account_balance</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Nejznámější památky</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Katedrála sv. Víta, Karlův most nebo Staroměstské náměstí. Hosté snadno zjistí informace a otevírací doby.
            </p>
          </article>

          <!-- Route Planning -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">route</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Plánování tras</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Jednoduše propojitelné body do jedné trasy pro efektivní využití času při procházkách Prahou.
            </p>
          </article>

          <!-- Hotel Recommendations -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">recommend</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Doporučení od hotelu</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Možnost přidat vaše osobní tipy na skryté kavárny, restaurace nebo oblíbená místa, která v průvodci nenajdou.
            </p>
          </article>

          <!-- Offline Mode -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">wifi_off</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Dostupné v mobilu</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Plánovač je vždy po ruce v hostově chytrém telefonu, přesně když ho potřebují na cestách městem.
            </p>
          </article>

          <!-- Navigation integration -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">directions</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Chytrá navigace</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Propojení s běžnými mapovými aplikacemi pro plynulý přechod k samotné navigaci krok za krokem.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="py-12 bg-white">
      <div class="max-w-screen-2xl mx-auto px-7 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <section class="space-y-8">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight not-sm:text-center">
              Proč nabídnout hostům plánování výletů?
            </h2>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed not-sm:text-center">
              Trip Planner není jen mapa, je to váš digitální průvodce. Usnadníte hostům pobyt a zároveň jim nabídnete profesionální péči.
            </p>

            <!-- Benefits List -->
            <ul class="space-y-6">
              <li class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <section>
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Úspora času pro recepci</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    Méně opakujících se dotazů na cestu a památky znamená více času pro personál na důležitější úkoly.
                  </p>
                </section>
              </li>

              <li class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <section>
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Hodnotná doporučení</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    Sdílejte své lokální znalosti a pomozte hostům zažít autentickou Prahu, což ocení v pozitivních recenzích.
                  </p>
                </section>
              </li>

              <li class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <section>
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Lepší zážitek z pobytu</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    Hosté, kteří se ve městě snadno orientují a vidí to nejlepší, odjíždějí mnohem spokojenější.
                  </p>
                </section>
              </li>
            </ul>
          </section>

          <!-- Right Section - Placeholder Image -->
          <figure class="flex items-center justify-center bg-gray-100 rounded-xl p-8 h-full min-h-[300px]">
             <div class="text-center text-gray-400">
               <span class="material-symbols-outlined text-8xl mb-4 text-[#f5a623]">explore</span>
               <p class="text-lg">Ukázka interaktivní mapy v aplikaci</p>
             </div>
          </figure>
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
          Trip Planner je jen jedna z mnoha funkcí. Prozkoumejte, jak může celá platforma pomoci vašemu hotelu.
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
