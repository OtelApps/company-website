<script setup>
  import { useTheme } from '../useTheme.js'

  const { isDark, toggleTheme } = useTheme()
</script>
<template>
  <header
    ref="header"
    class="border-b not-dark:border-gray-200 bg-white transition-transform duration-300 ease-out dark:bg-[#16171A]"
    :style="{ position: 'sticky', top: 0, zIndex: 50, transform: headerTransform }"
  >
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <div class="flex items-center">
          <router-link to="/">
            <img src="../assets/otelapps.webp" alt="OtelApps logo" class="h-10 sm:h-16 w-auto" />
          </router-link>

          <!-- Desktop Navigation (grouped with logo) -->
          <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 ml-4">
            <div class="flex items-center space-x-1 cursor-pointer" @click.stop="toggleProductMenu">
              <span :class="['text-gray-700 hover:text-gray-900 text-sm lg:text-base dark:text-white', { 'font-bold': isProductActive }]">Produkty</span>
              <svg
                class="w-3 h-3 lg:w-4 lg:h-4 text-gray-500 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div
              class="flex items-center space-x-1 cursor-pointer"
              @click.stop="toggleSolutionsMenu"
            >
              <span :class="['text-gray-700 hover:text-gray-900 text-sm lg:text-base dark:text-white', { 'font-bold': isSolutionsActive }]">Řešení</span>
              <svg
                class="w-3 h-3 lg:w-4 lg:h-4 text-gray-500 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <router-link to="/Pricing">
              <span :class="['text-gray-700 hover:text-gray-900 cursor-pointer text-sm lg:text-base dark:text-white', { 'font-bold': isPricingActive }]"
                >Ceník</span
              >
            </router-link>
            <router-link to="/AboutUs">
              <span :class="['text-gray-700 hover:text-gray-900 cursor-pointer text-sm lg:text-base dark:text-white', { 'font-bold': isAboutUsActive }]"
                >O nás</span
              >
            </router-link>
            <router-link to="/Contact">
              <span :class="['text-gray-700 hover:text-gray-900 cursor-pointer text-sm lg:text-base dark:text-white', { 'font-bold': isContactActive }]"
                >Kontakt</span
              >
            </router-link>
          </nav>
        </div>

        <!-- Mobile right controls: globe | divider | hamburger -->
        <div class="flex items-center md:hidden space-x-3">
          <!-- 
          <button @click="toggleTheme" 
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              {{ isDark ? 'Light' : 'Dark' }}
          </button>
          -->
          <div class="p-2 rounded-md text-gray-700 dark:text-white">
            <span class="material-symbols-outlined">language</span>
          </div>

          <div class="w-px h-6 bg-gray-300"></div>

          <button
            @click.stop="toggleMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <span v-if="!isMobileMenuOpen" class="material-symbols-outlined">menu</span>
            <span v-else class="material-symbols-outlined">close</span>
          </button>
        </div>

        <!-- Right side elements -->
        <div class="hidden md:flex items-center space-x-4">
          <!--
          <div>
            <button @click="toggleTheme" 
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              {{ isDark ? 'Light' : 'Dark' }}
            </button>
          </div>
          -->

          <!-- Language selector -->
          <div class="flex items-center space-x-1 cursor-pointer">
            <span class="material-symbols-outlined">language</span>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300 dark:bg-white"></div>

          <!-- Log in button -->
          <router-link to="">
            <span
              class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              Přihlásit se</span>
          </router-link>

          <!-- Book a demo button -->
          <router-link to="/Pricing">
            <span
              class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              Vyzkoušet demo-verzi
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-50 bg-white dark:bg-[#16171A]">
      <!-- Mobile menu header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <router-link to="/" @click="closeMobileMenu">
          <img src="../assets/otelapps.webp" alt="OtelApps logo" class="h-8 w-auto" />
        </router-link>

        
        <div class="flex items-center space-x-4">
          <button @click="toggleTheme" 
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              {{ isDark ? 'Light' : 'Dark' }}
          </button>
          <!-- Language selector -->
          <div class="flex items-center space-x-1 cursor-pointer">
            <span class="material-symbols-outlined">language</span>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300"></div>

          <!-- Close button -->
          <button
            @click="closeMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-white"
          >
            <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu content -->
      <div class="px-4 py-6 bg-white dark:bg-[#16171A]">
        <!-- Navigation items -->
        <nav class="space-y-0">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            @click.stop="toggleProductMenu"
          >
            <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isProductActive }]">Produkty</span>
            <svg
              class="w-4 h-4 text-gray-600 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div v-if="isProductOpen" class="py-4 border-b border-gray-200">
            <div class="grid grid-cols-1 gap-6">
              <!-- Ecosystem -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
                  Ecosystem
                </div>
                <div class="flex flex-col gap-y-6">
                  <div class="flex items-start space-x-3">
                  <svg
                    class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                    />
                  </svg>
                  <div>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu">
                      <div class="font-medium text-gray-900 dark:text-white">Mobilní aplikace pro hosty</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Ukažte hostům to nejlepší z vaší nabídky a nastartujte tím růst tržeb.
                      </p>
                    </router-link>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <svg
                    class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                    />
                  </svg>
                  <div>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu">
                      <div class="font-medium text-gray-900 dark:text-white">Webová aplikace pro hosty (již brzy)</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Nezatěžujte hosty stahováním aplikací. Stačí otevřít webový prohlížeč k tomu, aby měl váš host vše na dosah ruky.
                      </p>
                    </router-link>
                  </div>
                </div>
                </div>
              </div>

              <!-- Main Features -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
                  Hlavní funkce
                </div>
                <div class="grid grid-cols-1 gap-y-6">
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/HotelDirectory" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Informace o hotelu</div>
                        <p class="text-sm text-gray-600 dark:text-white">
                          Detailní informace o vašem hotelu na jednom místě.
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/MobileOrdering" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Mobilní objednávání a rezervace</div>
                        <p class="text-sm text-gray-600 dark:text-white">
                          Snadné objednávání a rezervace bez front a čekání.
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/InstantFeedback" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Okamžitá zpětná vazba</div>
                        <p class="text-sm text-gray-600 dark:text-white">
                          Získávejte zpětnou vazbu ve chvílích, kdy na ní skutečně záleží.
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/TaskManager" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Task management</div>
                        <p class="text-sm text-gray-600 dark:text-white">Mějte všechny požadavky svých hostů přehledně a na jednom místě.</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12h6l3 8 3-16 3 8h3"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/TripPlanner" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Trip planner</div>
                        <p class="text-sm text-gray-600 dark:text-white">
                          Naplánujte si celý pobyt i výlety v okolí pohodlně ze svého mobilu.
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/AnalyticsInsights" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Analytika a statistiky</div>
                        <p class="text-sm text-gray-600 dark:text-white">Dělejte správná rozhodnutí podložená reálnými daty a analýzami.</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                    <div>
                      <div @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Live chat + AI virtuální recepční</div>
                        <p class="text-sm text-gray-600 dark:text-white">Buďte neustále ve spojení se svými hosty, kdykoliv to potřebují.</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                    <div>
                      <div @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Online check-in + check-out</div>
                        <p class="text-sm text-gray-600 dark:text-white">Ušetřete čas svému personálu i hostům při příjezdu či odjezdu.</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                    <div>
                      <div @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Virtuální pokojová karta</div>
                        <p class="text-sm text-gray-600 dark:text-white">Bez zbytečných karet, otevírejte pokoj i celý hotel jednoduše svým mobilem.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer dark:text-white"
            @click.stop="toggleSolutionsMenu"
          >
            <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isSolutionsActive }]">Řešení</span>
            <svg
              class="w-4 h-4 text-gray-600 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div v-if="isSolutionsOpen" class="py-4 border-b border-gray-200">
            <div class="grid grid-cols-1 gap-6">
              <!-- Ecosystem -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
                  Ecosystem
                </div>
                <div class="grid grid-cols-1 gap-y-6">
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/CityCenter" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Městské hotely</div>
                        <p class="text-sm text-gray-600 dark:text-white">Zefektivněte provoz a maximalizujte své zisky</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/Boutiques" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Butikové hotely</div>
                        <p class="text-sm text-gray-600 dark:text-white">
                          Dopřejte svým hostům pozornost, kterou si zaslouží
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/SmallHotels" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Malé a střední hotely</div>
                        <p class="text-sm text-gray-600 dark:text-white">Služby vašeho hotelu na dosah ruky</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/Boutiques" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900 dark:text-white">Rezorty (již brzy)</div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/Pricing" @click="closeMobileMenu">
            <div class="py-4 border-b border-gray-200 cursor-pointer">
              <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isPricingActive }]">Ceník</span>
            </div>
          </router-link>

          <router-link to="/AboutUs" @click="closeMobileMenu">
            <div class="py-4 border-b border-gray-200 cursor-pointer">
              <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isAboutUsActive }]">O nás</span>
            </div>
          </router-link>

          <router-link to="/Contact" @click="closeMobileMenu">
            <div class="py-4 border-b border-gray-200 cursor-pointer">
              <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isContactActive }]">Kontakt</span>
            </div>
          </router-link>
        </nav>

        <!-- Buttons -->
        <div class="mt-8 space-y-4">
          <router-link to="" @click="closeMobileMenu">
            <span
              class="block w-full border border-black text-gray-900 text-center px-4 py-3 bg-white transition-colors text-base mb-5"
            >
              Přihlásit se
            </span>
          </router-link>

          <router-link to="/Pricing" @click="closeMobileMenu">
            <span
              class="block w-full bg-black dark:bg-white text-white dark:text-black text-center px-4 py-3 hover:bg-gray-900 transition-colors text-base cursor-pointer"
              >Vyzkoušet demo-verzi</span
            >
          </router-link>
        </div>
      </div>
    </div>
    <!-- Desktop Product mega menu -->
    <div
      v-if="isProductOpen"
      class="hidden md:block absolute left-0 right-0 z-40 bg-white dark:bg-[#16171A] border-t border-b not-dark:border-gray-300 shadow-lg"
      @click.stop
    >
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Ecosystem -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">Ecosystem</div>
            <div class="flex flex-col md:gap-y-10.5">
              <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                />
              </svg>
              <div>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false">
                  <div class="font-medium text-gray-900 dark:text-white">Mobilní aplikace pro hosty</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Ukažte hostům to nejlepší z vaší nabídky a nastartujte tím růst tržeb.
                  </p>
                </router-link>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                />
              </svg>
              <div>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false">
                  <div class="font-medium text-gray-900 dark:text-white">Webová aplikace pro hosty (již brzy)</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Nezatěžujte hosty stahováním aplikací. Stačí otevřít webový prohlížeč k tomu, aby měl váš host vše na dosah ruky.
                  </p>
                </router-link>
              </div>
            </div>
            </div>
          </div>

          <!-- Main Features -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">
              Hlavní funkce
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <div>
                  <router-link to="/Product/HotelDirectory" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Informace o hotelu</div>
                    <p class="text-sm text-gray-600 dark:text-white">
                      Detailní informace o vašem hotelu na jednom místě.
                    </p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                  />
                </svg>
                <div>
                  <router-link to="/Product/MobileOrdering" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Mobilní objednávání a rezervace</div>
                    <p class="text-sm text-gray-600 dark:text-white">Snadné objednávání a rezervace bez front a čekání.</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <router-link to="/Product/InstantFeedback" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Okamžitá zpětná vazba</div>
                    <p class="text-sm text-gray-600 dark:text-white">
                      Získávejte zpětnou vazbu ve chvílích, kdy na ní skutečně záleží.
                    </p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6l4 2"
                  />
                </svg>
                <div>
                  <router-link to="/Product/TaskManager" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Task management</div>
                    <p class="text-sm text-gray-600 dark:text-white">Mějte všechny požadavky svých hostů přehledně a na jednom místě.</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12h6l3 8 3-16 3 8h3"
                  />
                </svg>
                <div>
                  <router-link to="/Product/TripPlanner" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Trip Planner</div>
                    <p class="text-sm text-gray-600 dark:text-white">Naplánujte si celý pobyt i výlety v okolí pohodlně ze svého mobilu.</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                  />
                </svg>
                <div>
                  <router-link to="/Product/AnalyticsInsights" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Analytika a statistiky</div>
                    <p class="text-sm text-gray-600 dark:text-white">Dělejte správná rozhodnutí podložená reálnými daty a analýzami.</p>
                  </router-link>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                  />
                </svg>
                <div>
                  <div @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Live chat + AI virtuální recepční</div>
                    <p class="text-sm text-gray-600 dark:text-white">Buďte neustále ve spojení se svými hosty, kdykoliv to potřebují.</p>
                  </div>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                  />
                </svg>
                <div>
                  <div @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Online check-in + check-out</div>
                    <p class="text-sm text-gray-600 dark:text-white">Ušetřete čas svému personálu i hostům při příjezdu či odjezdu.</p>
                  </div>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                  />
                </svg>
                <div>
                  <div @click="isProductOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Virtuální pokojová karta</div>
                    <p class="text-sm text-gray-600 dark:text-white">Bez zbytečných karet, otevírejte pokoj i celý hotel jednoduše svým mobilem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Solutions mega menu -->
    <div
      v-if="isSolutionsOpen"
      class="hidden md:block absolute left-0 right-0 z-40 bg-white dark:bg-[#16171A] border-t border-b not-dark:border-gray-300 shadow-lg"
      @click.stop
    >
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Ecosystem -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700 dark:text-white">Ecosystem</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/CityCenter" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Městské hotely</div>
                    <p class="text-sm text-gray-600 dark:text-white">Zefektivněte provoz a maximalizujte své zisky</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Butikové hotely</div>
                    <p class="text-sm text-gray-600 dark:text-white">
                      Dopřejte svým hostům pozornost, kterou si zaslouží
                    </p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/SmallHotels" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Malé a střední hotely</div>
                    <p class="text-sm text-gray-600 dark:text-white">Služby vašeho hotelu na dosah ruky</p>
                  </router-link>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900 dark:text-white">Rezorty (již brzy)</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
      isProductOpen: false,
      isSolutionsOpen: false,
      headerTransform: 'translateY(0)',
      lastScrollY: 0,
      ticking: false,
    }
  },
  computed: {
    isProductActive() {
      return this.$route.path.startsWith('/Product')
    },
    isSolutionsActive() {
      return this.$route.path.startsWith('/Solution')
    },
    isPricingActive() {
      return this.$route.path === '/Pricing'
    },
    isAboutUsActive() {
      return this.$route.path === '/AboutUs'
    },
    isContactActive() {
      return this.$route.path === '/Contact'
    },
    isHomeActive() {
      return this.$route.path === '/'
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (this.isMobileMenuOpen) {
        this.isProductOpen = false
        this.isSolutionsOpen = false
      }
    },
    toggleProductMenu() {
      this.isProductOpen = !this.isProductOpen
      if (this.isProductOpen) this.isSolutionsOpen = false
    },
    toggleSolutionsMenu() {
      this.isSolutionsOpen = !this.isSolutionsOpen
      if (this.isSolutionsOpen) this.isProductOpen = false
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.isProductOpen = false
      this.isSolutionsOpen = false
    },
    onDocumentClick() {
      // Close only the desktop product menu on outside click
      this.isProductOpen = false
      this.isSolutionsOpen = false
    },
    handleScroll() {
      // Pouze pro zařízení > 767px (desktop/tablet). Na mobilech header neschovávej.
      if (window.innerWidth <= 767) {
        this.headerTransform = 'translateY(0)'
        this.lastScrollY =
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        this.ticking = false
        return
      }

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
          // Detekce směru scrollování
          const scrollDifference = currentScrollY - this.lastScrollY
          
          if (scrollDifference < 0) {
            this.headerTransform = 'translateY(0)'
          }
          else if (scrollDifference > 2) {
            this.headerTransform = 'translateY(-5000%)'
          }
          
          this.lastScrollY = currentScrollY
          this.ticking = false
        })
        this.ticking = true
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.onDocumentClick)
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.lastScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>