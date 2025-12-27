<script setup>
import { ref } from 'vue'

const activeButton = ref('f&b')
</script>

<template>
  <!-- Main Content -->
  <main class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
    <section>
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Section - Text Content -->
        <div class="space-y-6 sm:space-y-8">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            Vylepšete hotelový provoz pomocí chytrého digitálního řešení!
          </h1>

          <p class="text-base sm:text-lg text-gray-700 dark:text-white leading-relaxed">
            Prostřednictvím naší intuitivní mobilní aplikace dáváme hostům do rukou nástroj pro
            snadnou komunikaci a přístup ke službám. Hotelům poskytujeme webové rozhraní, které
            zjednodušuje správu těchto požadavků, pomáhá řídit interní procesy, efektivně spravovat
            náklady, navyšovat tržby a spokojenost hostů.
          </p>

          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
          >
            Book a demo
          </button>
        </div>

        <!-- Right Section - Image -->
        <div class="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <img
            src="../assets/home/image1.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Hotel app mockup"
          />
        </div>
      </div>
    </section>

    <!-- Centered Half Width Image Section with Text Overlay -->
    <section
      class="relative w-screen left-1/2 -translate-x-1/2 flex justify-center mt-16 sm:mt-20 lg:mt-24 min-h-[681px] sm:min-h-[440px] lg:min-h-[560px]"
    >
      <div class="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-full">
        <img
          src="../assets/home/analytics.png"
          class="w-full h-auto object-cover translate-y-[40%] sm:translate-y-0"
          alt="Analytics dashboard"
        />
      </div>

      <!-- Text Overlay with full-width semi-transparent background (fills the section) -->
      <div class="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div class="text-center text-white w-full px-4 sm:px-6 lg:px-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4"
          >
            Zvyšte tržby svého hotelu a
            <br />
            spokojenost vašich hostů.
          </h2>
          <p class="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Zvyšte své tržby pomocí jednoduchého a rychlého systému
            <br />
            objednávek přes naši mobilní aplikaci. Nabízejte všechny své
            <br />
            produkty a služby pohodlně na mobilním telefonu vašeho hosta.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
        <!-- Left Section - Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="../assets/home/image2.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Mobile app interface"
          />
        </div>

        <!-- Right Section - Text Content -->
        <div class="order-1 lg:order-2 space-y-6 sm:space-y-8">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            Všechny vaše služby dostupné pouze na jedno kliknutí.
          </h2>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              @click="activeButton = 'f&b'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'f&b'
                  ? 'bg-[#ffa500] text-white border-2 border-black dark:border-[#ffa500]'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Objednávání produktů
            </button>

            <button
              @click="activeButton = 'requests'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'requests'
                  ? 'bg-[#ffa500] text-white border-2 border-black dark:border-[#ffa500]'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Požadavky
            </button>

            <button
              @click="activeButton = 'reservations'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'reservations'
                  ? 'bg-[#ffa500] text-white border-2 border-black dark:border-[#ffa500]'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Rezervace
            </button>
          </div>

          <!-- Dynamic Content based on active button -->
          <div v-if="activeButton === 'f&b'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Digitální menu</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Intuitivní objednávání z menu vaší resturace, baru či kavárny.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Objednávky na míru</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host může v objednávce specifikovat své vlastní požadavky.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Room Service</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host si může objednat jídlo, nápoje a další produkty z vaší nabídky pomocí telefonu až na svůj pokoj.
                </p>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'requests'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Vybavení</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host si může požádat o doplnění toaletního papíru, zubní kartáče, fén, župan, ručníky a další.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Poruchy</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host může hlásit poruchy na pokoj, například výměnu žárovky prostřednictvím aplikace.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Live chat s recepcí</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Poskytněte hostům osobnější péči pomocí přímého komunikačního kanálu k vyřízení jeho potřeb.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Úklid</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host si může pomocí aplikace objednat nebo zrušit plánovaný úklid pokoje.
                </p>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'reservations'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Restaurace</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host si může jednoduše rezervovat stůl ve vaší restauraci.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">SPA & Wellness</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Host se může jednoduše objednat na masáž nebo jiné procedury.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Výlety</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Zjednodušte hostům přehled a možnost rezervace výletů s průvodcem a denních výletů.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full dark:bg-gray-900"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Aktivity</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1 dark:text-white">
                  Nabídněte hostům jednoduchý přístup k denním a večerním aktivitám ve vašem hotelu a účasti na hotelovém programu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Staff operations section -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            Zvyšte efektivitu práce vašeho personálu
          </h2>

          <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <!-- Feature 1 -->
            <div class="flex items-start space-x-4">
              <div
                class="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Mějte požadavky pod kontrolou
                </h3>
                <p class="text-sm text-gray-600 mt-1 sm:mt-2 dark:text-white">
                  Získávejte požadavky hostů okamžitě a vyřizujte je přehledněji a rychleji.
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="flex items-start space-x-4">
              <div
                class="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Mějte přehled o vašich službách v přítomném čase.
                </h3>
                <p class="text-sm text-gray-600 mt-1 sm:mt-2 dark:text-white">
                  Aktualizujte nabídku a informace o vašich službách a udržujte vše neustále přehledné pro váš personál i hosty.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="../assets/home/image3.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Staff operations"
          />
        </div>
      </div>
    </section>
    <!-- Feedback section: left image, right text -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="../assets/home/image4.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Feedback analytics"
          />
        </div>

        <!-- Right: Text -->
        <div class="order-1 lg:order-2">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            Získávejte rychle a přehledně zpětnou vazbu od vašich hostů.
          </h2>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6 dark:text-white">
            Proměňte nespokojeného hosta ve spokojeného díky okamžité
            <br />
            zpětné vazbě ke všem vašim produktům a službám.
          </p>
        </div>
      </div>
    </section>
    <!-- Branded guest experience: left text, right image -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight dark:text-white"
          >
            Dopřejte hostům zážitek, který jste skutečně Vy!
          </h2>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6 dark:text-white">
            Nabídněte hostům plně personalizovaný zážitek, který odráží identitu vašeho hotelu a přizpůsobí se jejich preferencím.
          </p>

          <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Jednotný design vaší značky a identity</h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 dark:text-white">
                Reagujte na potřeby hostů okamžitě díky chytrému systému žádostí a plynulé komunikaci, který zvyšuje spokojenost hostů a uvolňuje ruce vašemu personálu.
              </p>
            </div>

            <div>
              <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Propagujte své nejlepší služby</h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 dark:text-white">
                Získejte přehled o preferencích hostů a zvyšujte kvalitu i prodeje tam, kde to má největší přínos pro váš hotel.
              </p>
            </div>

            <div class="sm:col-span-2">
              <h3 class="text-sm sm:text-base font-bold text-gray-900 dark:text-whitev">
                Personalizovaný zážitek pro každého hosta
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 dark:text-white">
                Doporučujte každému hostovi nabídky a obsah na
                <br />
                míru podle jeho preferencí, abyste zvýšili jeho zapojení,
                <br />
                spokojenost i prodeje služeb.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="../assets/home/image5.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Branded guest experience"
          />
        </div>
      </div>
    </section>
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Posuňte zážitek ve vašem hotelu na vyšší úroveň s naším chytrým softwarem.
          </h2>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed dark:text-white">
            Náš software promění běžný hotelový provoz v dokonale sehraný systém, kde má každý host vše
            na dosah ruky a personál pracuje efektivněji než kdykoli předtím. Digitalizujeme komunikaci,
            zrychlujeme reakční dobu a odstraňujeme zbytečné prostoje, díky čemuž získáte spokojenější
            hosty i méně zatížený tým. Výsledkem je hladší provoz, vyšší kvalita služeb, optimalizace nákladů
            a růst tržeb, který pocítíte okamžitě.
          </p>
        </div>

        <div class="mt-12 sm:mt-16 grid gap-8 sm:gap-12 md:grid-cols-3">
          <!-- Feature 1 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Zvyšte efektivitu vašeho personálu
            </h3>
            <p class="mt-2 sm:mt-3 text-sm text-gray-600 dark:text-white">
              Zjednodušte každodenní úkoly a zkraťte reakční dobu díky chytře organizovaným procesům.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Poskytněte vaším hostům výjimečný zážitek a vyšší úroveň spokojenosti
            </h3>
            <p class="mt-2 sm:mt-3 text-sm text-gray-600 dark:text-white">
              Nadchněte vašeho hosty personalizovanými službami, které budou mít na dosah ruky.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Efektivní provoz pro maximální produktivitu
            </h3>
            <p class="mt-2 sm:mt-3 text-sm text-gray-600 dark:text-white">
              Optimalizovaný provoz pro maximální efektivitu řízení hotelu.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
