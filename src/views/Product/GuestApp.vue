<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Zlepšete komunikaci a budujte vztahy s vašimi hosty
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Vaši hosté už dnes telefonem ovládají a komunikují s celým svým svět. S OTEL APPS jim 
              otevřete dveře ke všem vašim službám přímo v jejich mobilu – a získáte jedinečnou šanci, 
              jak s nimi vybudovat silnější vztah.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Placeholder -->
          <div class="flex items-center justify-center">
            <img src="../../assets/product/GuestApp/1.png" alt="Guest app page image" class="w-2/3">
          </div>
        </div>
      </div>
    </section>
    <!-- Features Section -->
    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vaše služby budou dostupné kdykoliv a kdekoliv pro vaše hosty.
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Objevte klíčové funkce a hlavní výhody, díky kterým je Otel Apps nepostradatelným partnerem 
            pro hotely, bez kterého se moderní hotelový provoz neobejde.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Hotel Directory -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Informace o hotelu</h3>
            <p class="text-gray-600">
              Poskytněte hostům kompletní přehled o vašem hotelu, vybavení a dostupných službách.
            </p>
          </div>

          <!-- Spa Booking -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Wellness a procedury</h3>
            <p class="text-gray-600">
              Jednoduchý způsob, jak si objednat relaxaci. Hosté si své procedury zarezervují snadno a bez čekání.
            </p>
          </div>

          <!-- Mobile Ordering -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mobilní objednávky</h3>
            <p class="text-gray-600">
              Dejte hostům možnost objednat si jídlo, nápoje a další produkty odkudkoliv, přímo z jejich chytrého telefonu.
            </p>
          </div>

          <!-- Task Manager -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Task management</h3>
            <p class="text-gray-600">
              Efektivně řiďte a sledujte požadavky hostů. Zajistěte bleskový servis a mějte dokonalý přehled o každém úkolu.
            </p>
          </div>

          <!-- Restaurant Reservations -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Rezervace stolů</h3>
            <p class="text-gray-600">
              Umožněte hostům zarezervovat si stůl v hotelové restauraci či baru snadno, rychle a bez nutnosti kamkoliv volat.
            </p>
          </div>

          <!-- Cabana Bookings -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Trip planner</h3>
            <p class="text-gray-600">
              Poskytněte hostům nástroj k plánování jejich pobytu s tipy na výlety a místa v hotelovém okolí.
            </p>
          </div>

          <!-- Instant Feedback -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Okamžitá zpětná vazba</h3>
            <p class="text-gray-600">
              Mějte neustálý přehled o spokojenosti svých hostů. Díky okamžitým podnětům můžete ihned reagovat a neustále zvyšovat úroveň svých služeb.
            </p>
          </div>

          <!-- Analytics & Insights -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Analytika a statistiky</h3>
            <p class="text-gray-600">
              Dělejte správná rozhodnutí podložená reálnými daty. Díky pokročilé analytice detailně porozumíte chování a preferencím svých hostů
            </p>
          </div>

          <!-- And Many More -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">A mnohem více</h3>
            <p class="text-gray-600">
              Rezervace služeb, Nástroje pro zvýšení tržeb, Live chat + AI virtuální recepční, Online check-in + check-out, Virtuální pokojová karta, a další...
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Access Methods Section -->
    <section class="py-32">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Moderní a srozumitelný přístup pro každého hosta
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Vaše služby jsou dostupné odkudkoliv. Díky různým možnostem přístupu k aplikaci garantujeme, 
            že se k vašemu digitálnímu obsahu dostane každý snadno a bez čekání.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Web App -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Webová aplikace pro hosty (coming soon)</h3>
            <p class="text-gray-600">
              Nezatěžujte hosty stahováním aplikací. Stačí otevřít webový prohlížeč a všechny služby hotelu mají okamžitě na dosah ruky.
            </p>
          </div>

          <!-- Native iOS & Android App -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Mobilní aplikace pro iOS a Android</h3>
            <p class="text-gray-600">
              Nabídněte hostům aplikaci ve vašem vlastním designu. S exkluzivními funkcemi, jako je mobilní virtuální pokojový klíč od pokoje, 
              posunete zážitek z pobytu na tu nejvyšší úroveň.
            </p>
          </div>

          <!-- Embedded Integration -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Integrace na míru</h3>
            <p class="text-gray-600">
              Vážíme si vašich současných nástrojů. Otel Apps dokážeme plně přizpůsobit tak, 
              aby doplnily váš ekosystém a vytvořily jeden dokonale fungující celek.
            </p>
          </div>
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Webová aplikace pro hotel</h3>
            <p class="text-gray-600">
              Mějte přehled o chodu celého hotelu a přáních vašich hostů na jednom místě.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Section -->
    <section class="py-32 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-8">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Proč zvolit mobilní řešení od Otel Apps?
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              Nejsme jen další aplikace v telefonu. Pomůžeme vám automatizovat procesy, zvýšit tržby a zajistit, aby se k vám hosté rádi vraceli.
            </p>

            <!-- Benefits List -->
            <div class="space-y-6">
              <!-- Boost Efficiency -->
              <div class="flex items-start space-x-4">
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
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Vyšší efektivita</h3>
                  <p class="text-gray-600">
                    Automatizujte požadavky a služby, abyste uvolnili ruce svému personálu. Ten se pak může plně soustředit na to 
                    nejdůležitější – osobní a smysluplnou péči o hosty.
                  </p>
                </div>
              </div>

              <!-- Embrace Digitization -->
              <div class="flex items-start space-x-4">
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
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Cesta k digitalizaci</h3>
                  <p class="text-gray-600">
                    Zbavte se zbytečných papírů. Snížíte své náklady a zároveň oslovíte moderní cestovatele, 
                    kterým záleží na ekologii, udržitelnosti a technologiích.
                  </p>
                </div>
              </div>

              <!-- Enhance Guest Experience -->
              <div class="flex items-start space-x-4">
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
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    Lepší zážitek pro hosty
                  </h3>
                  <p class="text-gray-600">
                    Nabídněte pohodlí a personalizaci, kterou dnešní hosté nejen očekávají, ale i vyžadují. Dopřejte jim servis, který odpovídá digitálnímu věku.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Section - Video Placeholder -->
          <div class="flex items-center justify-center">
            <img src="../../assets/product/GuestApp/2.png" alt="Guest app page image" class="w-3/4">
          </div>
        </div>
      </div>
    </section>

    <!-- Explore More Section -->
    <section class="py-32">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Objevte další možnosti s Otel Apps
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Naše platforma je navržena tak, aby se snadno propojila s vašimi systémy a rostla společně s vaším podnikáním.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Integrations -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Integrace</h3>
            <p class="text-gray-600">Propojte se s nástroji, které už denně používáte.</p>
          </div>

          <!-- Case Studies -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Příběhy úspěchu</h3>
            <p class="text-gray-600">Podívejte se, jak s Otel Apps rostou a prosperují ostatní hotely</p>
          </div>

          <!-- Blog & Resources -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Blog a inspirace</h3>
            <p class="text-gray-600">Mějte přehled o tom, co je nového z oboru a aktuální informace o našich produktech.</p>
          </div>

          <!-- Support Center -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Zákaznická podpora</h3>
            <p class="text-gray-600">Jsme tu pro vás. Projděte si naše návody, nebo nás kontaktujte, pokud potřebujete s čímkoliv poradit.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
