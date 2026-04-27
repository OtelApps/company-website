<template>
  <main>
    <!-- Hero -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="max-w-4xl">
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Zlepšete komunikaci a budujte vztahy s vašimi hosty
          </h1>
          <p class=" text-base sm:text-lg text-gray-700 leading-relaxed">
            Vaši hosté už dnes telefonem ovládají a komunikují s celým svým svět. S OTEL APPS jim 
            otevřete dveře ke všem vašim službám přímo v jejich mobilu – a získáte jedinečnou šanci, 
            jak s nimi vybudovat silnější vztah.
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
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
            Vaše služby budou dostupné kdykoliv a kdekoliv pro vaše hosty.
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Objevte klíčové funkce a hlavní výhody, díky kterým je Otel Apps nepostradatelným partnerem 
            pro hotely, bez kterého se moderní hotelový provoz neobejde.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Hotel Directory -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">info</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Informace o hotelu</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Poskytněte hostům kompletní přehled o vašem hotelu, vybavení a dostupných službách.
            </p>
          </article>

          <!-- Spa Booking -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">menstrual_health</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Wellness a procedury</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Jednoduchý způsob, jak si objednat relaxaci. Hosté si své procedury zarezervují snadno a bez čekání.
            </p>
          </article>

          <!-- Mobile Ordering -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">mobile_2</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Mobilní objednávky</h3>
            <p class="text-sm sm:text-base text-gray-6000">
              Dejte hostům možnost objednat si jídlo, nápoje a další produkty odkudkoliv, přímo z jejich chytrého telefonu.
            </p>
          </article>

          <!-- Task Manager -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">task</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Task management</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Efektivně řiďte a sledujte požadavky hostů. Zajistěte bleskový servis a mějte dokonalý přehled o každém úkolu.
            </p>
          </article>

          <!-- Restaurant Reservations -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">table_restaurant</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Rezervace stolů</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Umožněte hostům zarezervovat si stůl v hotelové restauraci či baru snadno, rychle a bez nutnosti kamkoliv volat.
            </p>
          </article>

          <!-- Cabana Bookings -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">trip</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Trip planner</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Poskytněte hostům nástroj k plánování jejich pobytu s tipy na výlety a místa v hotelovém okolí.
            </p>
          </article>

          <!-- Instant Feedback -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">feedback</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Okamžitá zpětná vazba</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Mějte neustálý přehled o spokojenosti svých hostů. Díky okamžitým podnětům můžete ihned reagovat a neustále zvyšovat úroveň svých služeb.
            </p>
          </article>

          <!-- Analytics & Insights -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">analytics</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Analytika a statistiky</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Dělejte správná rozhodnutí podložená reálnými daty. Díky pokročilé analytice detailně porozumíte chování a preferencím svých hostů
            </p>
          </article>

          <!-- And Many More -->
          <article class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">more_horiz</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">A mnohem více</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Rezervace služeb, Nástroje pro zvýšení tržeb, Live chat + AI virtuální recepční, Online check-in + check-out, Virtuální pokojová karta, a další...
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Access Methods -->
    <section class="max-w-screen-2xl mx-auto px-7 py-12 sm:py-12 lg:py-32">
      <header class="sm:text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Moderní a srozumitelný přístup pro každého hosta
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Vaše služby jsou dostupné odkudkoliv. Díky různým možnostem přístupu k aplikaci garantujeme, 
          že se k vašemu digitálnímu obsahu dostane každý snadno a bez čekání.
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">Webová aplikace pro hosty (coming soon)</h3>
          <p class="text-sm sm:text-base text-gray-600">
            Nezatěžujte hosty stahováním aplikací. Stačí otevřít webový prohlížeč a všechny služby hotelu mají okamžitě na dosah ruky.
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">Mobilní aplikace pro iOS a Android</h3>
          <p class="text-sm sm:text-base text-gray-600">
            Nabídněte hostům aplikaci ve vašem vlastním designu. S exkluzivními funkcemi, jako je mobilní virtuální pokojový klíč od pokoje, 
            posunete zážitek z pobytu na tu nejvyšší úroveň.
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">Integrace na míru</h3>
          <p class="text-sm sm:text-base text-gray-600">
            Vážíme si vašich současných nástrojů. Otel Apps dokážeme plně přizpůsobit tak, 
            aby doplnily váš ekosystém a vytvořily jeden dokonale fungující celek.
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-4">Webová aplikace pro hotel</h3>
          <p class="text-sm sm:text-base text-gray-600">
            Mějte přehled o chodu celého hotelu a přáních vašich hostů na jednom místě.
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
              Proč zvolit mobilní řešení od Otel Apps?
            </h2>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed not-sm:text-center">
              Nejsme jen další aplikace v telefonu. Pomůžeme vám automatizovat procesy, zvýšit tržby a zajistit, aby se k vám hosté rádi vraceli.
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
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Vyšší efektivita</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    Automatizujte požadavky a služby, abyste uvolnili ruce svému personálu. Ten se pak může plně soustředit na to 
                    nejdůležitější – osobní a smysluplnou péči o hosty.
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
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Cesta k digitalizaci</h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    Zbavte se zbytečných papírů. Snížíte své náklady a zároveň oslovíte moderní cestovatele, 
                    kterým záleží na ekologii, udržitelnosti a technologiích.
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
                    Lepší zážitek pro hosty
                  </h3>
                  <p class="text-sm sm:text-base text-gray-600">
                    Nabídněte pohodlí a personalizaci, kterou dnešní hosté nejen očekávají, ale i vyžadují. Dopřejte jim servis, který odpovídá digitálnímu věku.
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
          Objevte další možnosti s Otel Apps
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Naše platforma je navržena tak, aby se snadno propojila s vašimi systémy a rostla společně s vaším podnikáním.
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Integrace</h3>
          <p class="text-sm sm:text-base text-gray-600">Propojte se s nástroji, které už denně používáte.</p>
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Příběhy úspěchu</h3>
          <p class="text-sm sm:text-base text-gray-600">Podívejte se, jak s Otel Apps rostou a prosperují ostatní hotely</p>
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Blog a inspirace</h3>
          <p class="text-sm sm:text-base text-gray-600">Mějte přehled o tom, co je nového z oboru a aktuální informace o našich produktech.</p>
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
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Zákaznická podpora</h3>
          <p class="text-sm sm:text-base text-gray-600">Jsme tu pro vás. Projděte si naše návody, nebo nás kontaktujte, pokud potřebujete s čímkoliv poradit.</p>
        </article>
      </div>
    </section>
  </main>
</template>