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
            <img src="../assets/otelapps.webp" alt="OtelApps logo" class="hidden md:block h-10 md:h-12 lg:h-16 w-auto" />
            <img src="../assets/logo_text.jpg" alt="OtelApps logo" class="block md:hidden h-10 w-auto" />
          </router-link>

          <!-- Desktop Navigation (grouped with logo) -->
          <nav class="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-8 ml-2 md:ml-4">
            <button
              class="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white"
              :class="{ 'font-bold': isProductActive }"
              @click.stop="toggleProductMenu"
            >
              <span class="whitespace-nowrap">Produkty</span>
              <span class="material-symbols-outlined text-sm md:text-base">keyboard_arrow_down</span>
            </button>
            <button
              class="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white"
              :class="{ 'font-bold': isSolutionsActive }"
              @click.stop="toggleSolutionsMenu"
            >
              <span class="whitespace-nowrap">Řešení</span>
              <span class="material-symbols-outlined text-sm md:text-base">keyboard_arrow_down</span>
            </button>
            <router-link
              to="/Pricing"
              class="text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white whitespace-nowrap"
              :class="{ 'font-bold': isPricingActive }"
            >
              Ceník
            </router-link>
            <router-link
              to="/AboutUs"
              class="text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white whitespace-nowrap"
              :class="{ 'font-bold': isAboutUsActive }"
            >
              O nás
            </router-link>
            <router-link
              to="/Contact"
              class="text-gray-700 hover:text-gray-900 text-xs md:text-sm lg:text-base dark:text-white whitespace-nowrap"
              :class="{ 'font-bold': isContactActive }"
            >
              Kontakt
            </router-link>
          </nav>
        </div>

        <!-- Mobile right controls: globe | divider | hamburger -->
        <div class="flex items-center md:hidden space-x-3">
          <button class="p-2 rounded-md text-gray-700 dark:text-white">
            <span class="material-symbols-outlined">language</span>
          </button>

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
        <div class="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <!-- Language selector -->
          <button class="cursor-pointer">
            <span class="material-symbols-outlined text-base md:text-lg text-gray-700 dark:text-white">language</span>
          </button>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300 dark:bg-white"></div>

          <!-- Log in button -->
          <router-link
            to=""
            class="border border-gray-300 text-gray-700 px-2 md:px-3 lg:px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-xs md:text-sm cursor-pointer dark:text-white whitespace-nowrap"
          >
            Přihlásit se
          </router-link>

          <!-- Book a demo button -->
          <router-link
            to="/BookDemo"
            class="border border-gray-300 text-gray-700 px-2 md:px-3 lg:px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-xs md:text-sm cursor-pointer dark:text-white whitespace-nowrap"
          >
            Vyzkoušet demo-verzi
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 z-50 bg-white dark:bg-[#16171A] flex flex-col h-full"
    >
      <!-- Mobile menu header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <router-link to="/" @click="closeMobileMenu">
          <img src="../assets/logo_text.jpg" alt="OtelApps logo" class="h-10 w-auto" />
        </router-link>

        
        <div class="flex items-center space-x-4">
          <!--
          <button @click="toggleTheme" 
            class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md not-dark:hover:bg-gray-50 transition-colors text-sm cursor-pointer dark:text-white"
            >
              {{ isDark ? 'Light' : 'Dark' }}
          </button>
          -->
          <!-- Language selector -->
          <button class="cursor-pointer">
            <span class="material-symbols-outlined text-gray-700 dark:text-white">language</span>
          </button>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300"></div>

          <!-- Close button -->
          <button
            @click="closeMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-white"
          >
          <span class="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <!-- Mobile menu content -->
      <div class="flex-1 overflow-y-auto px-4 py-6 bg-white dark:bg-[#16171A]">
        <!-- Navigation items -->
        <nav class="space-y-0">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            @click.stop="toggleProductMenu"
          >
            <span :class="['text-gray-900 text-base dark:text-white', { 'font-bold': isProductActive }]">Produkty</span>
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
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
                    <span class="material-symbols-outlined">mobile_2</span>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Mobilní aplikace pro hosty</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Ukažte hostům to nejlepší z vaší nabídky a nastartujte tím růst tržeb.
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">desktop_windows</span>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Webová aplikace pro hosty (již brzy)</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Nezatěžujte hosty stahováním aplikací. Stačí otevřít webový prohlížeč k tomu, aby měl váš host vše na dosah ruky.
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">admin_panel_settings</span>
                    <router-link to="/Product/WebAdmin" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">WebAdmin pro obsluhu hotelu</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Jedno místo pro správu obsahu a služeb mobilní aplikace — bez chaosu v e-mailech a tabulkách.
                      </p>
                    </router-link>
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
                    <span class="material-symbols-outlined">info</span>
                    <router-link to="/Product/HotelDirectory" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Informace o hotelu</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Detailní informace o vašem hotelu na jednom místě.
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">mobile_ticket</span>
                    <router-link to="/Product/MobileOrdering" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Mobilní objednávání a rezervace</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Snadné objednávání a rezervace bez front a čekání.
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">chat</span>
                    <router-link to="/Product/InstantFeedback" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Okamžitá zpětná vazba</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Získávejte zpětnou vazbu ve chvílích, kdy na ní skutečně záleží.
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">task</span>
                    <router-link to="/Product/TaskManager" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Task management</div>
                      <p class="text-sm text-gray-600 dark:text-white">Mějte všechny požadavky svých hostů přehledně a na jednom místě.</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">trip</span>
                    <router-link to="/Product/TripPlanner" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Trip planner</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Naplánujte si celý pobyt i výlety v okolí pohodlně ze svého mobilu.
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">analytics</span>
                    <router-link to="/Product/AnalyticsInsights" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Analytika a statistiky</div>
                      <p class="text-sm text-gray-600 dark:text-white">Dělejte správná rozhodnutí podložená reálnými daty a analýzami.</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">chat_info</span>
                    <button @click="closeMobileMenu" class="flex flex-col text-left">
                      <div class="font-medium text-gray-900 dark:text-white">Live chat + AI virtuální recepční</div>
                      <p class="text-sm text-gray-600 dark:text-white">Buďte neustále ve spojení se svými hosty, kdykoliv to potřebují.</p>
                    </button>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">desktop_cloud</span>
                    <button @click="closeMobileMenu" class="flex flex-col text-left">
                      <div class="font-medium text-gray-900 dark:text-white">Online check-in + check-out</div>
                      <p class="text-sm text-gray-600 dark:text-white">Ušetřete čas svému personálu i hostům při příjezdu či odjezdu.</p>
                    </button>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">credit_card</span>
                    <button @click="closeMobileMenu" class="flex flex-col text-left">
                      <div class="font-medium text-gray-900 dark:text-white">Virtuální pokojová karta</div>
                      <p class="text-sm text-gray-600 dark:text-white">Bez zbytečných karet, otevírejte pokoj i celý hotel jednoduše svým mobilem.</p>
                    </button>
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
            <span class="material-symbols-outlined">keyboard_arrow_down</span>
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
                    <span class="material-symbols-outlined">location_city</span>
                    <router-link to="/Solution/CityCenter" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Městské hotely</div>
                      <p class="text-sm text-gray-600 dark:text-white">Zefektivněte provoz a maximalizujte své zisky</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">home</span>
                    <router-link to="/Solution/Boutiques" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Butikové hotely</div>
                      <p class="text-sm text-gray-600 dark:text-white">
                        Dopřejte svým hostům pozornost, kterou si zaslouží
                      </p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">apartment</span>
                    <router-link to="/Solution/SmallHotels" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Malé a střední hotely</div>
                      <p class="text-sm text-gray-600 dark:text-white">Služby vašeho hotelu na dosah ruky</p>
                    </router-link>
                  </div>
                  <div class="flex items-start space-x-3">
                    <span class="material-symbols-outlined">chair_umbrella</span>
                    <router-link to="/Solution/Boutiques" @click="closeMobileMenu" class="flex flex-col">
                      <div class="font-medium text-gray-900 dark:text-white">Rezorty (již brzy)</div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link
            to="/Pricing"
            @click="closeMobileMenu"
            class="block py-4 border-b border-gray-200 text-gray-900 text-base dark:text-white"
            :class="{ 'font-bold': isPricingActive }"
          >
            Ceník
          </router-link>

          <router-link
            to="/AboutUs"
            @click="closeMobileMenu"
            class="block py-4 border-b border-gray-200 text-gray-900 text-base dark:text-white"
            :class="{ 'font-bold': isAboutUsActive }"
          >
            O nás
          </router-link>

          <router-link
            to="/Contact"
            @click="closeMobileMenu"
            class="block py-4 border-b border-gray-200 text-gray-900 text-base dark:text-white"
            :class="{ 'font-bold': isContactActive }"
          >
            Kontakt
          </router-link>
        </nav>

        <!-- Buttons -->
        <div class="mt-8 space-y-4">
          <router-link
            to=""
            @click="closeMobileMenu"
            class="block w-full border border-black text-gray-900 text-center px-4 py-3 bg-white transition-colors text-base mb-5"
          >
            Přihlásit se
          </router-link>

          <router-link
            to="/BookDemo"
            @click="closeMobileMenu"
            class="block w-full bg-black dark:bg-white text-white dark:text-black text-center px-4 py-3 hover:bg-gray-900 transition-colors text-base cursor-pointer"
          >
            Vyzkoušet demo-verzi
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
                <span class="material-symbols-outlined">mobile_2</span>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Mobilní aplikace pro hosty</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Ukažte hostům to nejlepší z vaší nabídky a nastartujte tím růst tržeb.
                  </p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">desktop_windows</span>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Webová aplikace pro hosty (již brzy)</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Nezatěžujte hosty stahováním aplikací. Stačí otevřít webový prohlížeč k tomu, aby měl váš host vše na dosah ruky.
                  </p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">admin_panel_settings</span>
                <router-link to="/Product/WebAdmin" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">WebAdmin pro obsluhu hotelu</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Jedno místo pro správu obsahu a služeb mobilní aplikace — bez chaosu v e-mailech a tabulkách.
                  </p>
                </router-link>
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
                <span class="material-symbols-outlined">info</span>
                <router-link to="/Product/HotelDirectory" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Informace o hotelu</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Detailní informace o vašem hotelu na jednom místě.
                  </p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">mobile_ticket</span>
                <router-link to="/Product/MobileOrdering" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Mobilní objednávání a rezervace</div>
                  <p class="text-sm text-gray-600 dark:text-white">Snadné objednávání a rezervace bez front a čekání.</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">chat</span>
                <router-link to="/Product/InstantFeedback" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Okamžitá zpětná vazba</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Získávejte zpětnou vazbu ve chvílích, kdy na ní skutečně záleží.
                  </p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">task</span>
                <router-link to="/Product/TaskManager" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Task management</div>
                  <p class="text-sm text-gray-600 dark:text-white">Mějte všechny požadavky svých hostů přehledně a na jednom místě.</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">trip</span>
                <router-link to="/Product/TripPlanner" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Trip Planner</div>
                  <p class="text-sm text-gray-600 dark:text-white">Naplánujte si celý pobyt i výlety v okolí pohodlně ze svého mobilu.</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">analytics</span>
                <router-link to="/Product/AnalyticsInsights" @click="isProductOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Analytika a statistiky</div>
                  <p class="text-sm text-gray-600 dark:text-white">Dělejte správná rozhodnutí podložená reálnými daty a analýzami.</p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">chat_info</span>
                <button @click="isProductOpen = false" class="flex flex-col text-left">
                  <div class="font-medium text-gray-900 dark:text-white">Live chat + AI virtuální recepční</div>
                  <p class="text-sm text-gray-600 dark:text-white">Buďte neustále ve spojení se svými hosty, kdykoliv to potřebují.</p>
                </button>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">desktop_cloud</span>
                <button @click="isProductOpen = false" class="flex flex-col text-left">
                  <div class="font-medium text-gray-900 dark:text-white">Online check-in + check-out</div>
                  <p class="text-sm text-gray-600 dark:text-white">Ušetřete čas svému personálu i hostům při příjezdu či odjezdu.</p>
                </button>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">credit_card</span>
                <button @click="isProductOpen = false" class="flex flex-col text-left">
                  <div class="font-medium text-gray-900 dark:text-white">Virtuální pokojová karta</div>
                  <p class="text-sm text-gray-600 dark:text-white">Bez zbytečných karet, otevírejte pokoj i celý hotel jednoduše svým mobilem.</p>
                </button>
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
                <span class="material-symbols-outlined">location_city</span>
                <router-link to="/Solution/CityCenter" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Městské hotely</div>
                  <p class="text-sm text-gray-600 dark:text-white">Zefektivněte provoz a maximalizujte své zisky</p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">home</span>
                <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Butikové hotely</div>
                  <p class="text-sm text-gray-600 dark:text-white">
                    Dopřejte svým hostům pozornost, kterou si zaslouží
                  </p>
                </router-link>
              </div>

              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">apartment</span>
                <router-link to="/Solution/SmallHotels" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Malé a střední hotely</div>
                  <p class="text-sm text-gray-600 dark:text-white">Služby vašeho hotelu na dosah ruky</p>
                </router-link>
              </div>
              <div class="flex items-start space-x-3">
                <span class="material-symbols-outlined">chair_umbrella</span>
                <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false" class="flex flex-col">
                  <div class="font-medium text-gray-900 dark:text-white">Rezorty (již brzy)</div>
                </router-link>
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
      headerTransform: 'none',
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
        this.headerTransform = 'none'
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
            this.headerTransform = 'none'
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