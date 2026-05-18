<template>
  <main>
    <!-- Hero -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="max-w-4xl">
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
