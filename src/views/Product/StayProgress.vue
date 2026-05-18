<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Section - Text -->
        <section class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Provázejte hosty celou jejich cestou
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            Od okamžiku rezervace, přes bezkontaktní pobyt, až po hladký online odjezd. OtelApps digitalizuje a zjednodušuje každý krok cesty hosta, zvyšuje vaše tržby a šetří čas hotelovému personálu.
          </p>
          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          >
            Vyzkoušet demo-verzi
          </button>
        </section>

        <!-- Right Section - Interactive Journey Mockup -->
        <figure class="flex items-center justify-center p-4">
          <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col relative" style="height: 480px;">
             <!-- Phone UI Header -->
             <div class="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm z-10 relative">
                <span class="font-bold text-gray-900 text-sm">Cesta vašeho hosta</span>
                <span class="text-xs bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded flex items-center">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                  Aktivní pobyt
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
                      <h4 class="font-bold text-gray-900 text-sm">1. Před příjezdem</h4>
                      <p class="text-xs text-gray-500 mt-0.5">Online Check-in dokončen, preference uloženy a doklady ověřeny.</p>
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
                         2. Během pobytu
                         <span class="ml-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-800 text-[9px] font-bold rounded">Právě teď</span>
                      </h4>
                      <!-- Mini Interactive Card inside Phone mockup -->
                      <div class="mt-2 bg-white p-3 rounded-xl shadow-md border border-gray-150 space-y-2">
                         <div class="flex items-center justify-between">
                            <span class="text-[10px] text-gray-500 font-semibold">Pokoj 204</span>
                            <span class="text-[10px] text-green-600 font-bold flex items-center">
                              <span class="h-1.5 w-1.5 bg-green-500 rounded-full mr-1"></span>Připojeno
                            </span>
                         </div>
                         <button class="w-full bg-gray-950 text-white text-xs font-semibold py-1.5 rounded-lg flex items-center justify-center space-x-1 hover:bg-gray-800 transition-colors">
                            <span class="material-symbols-outlined text-xs">door_front</span>
                            <span>Otevřít pokoj klíčem</span>
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
                      <h4 class="font-bold text-gray-900 text-sm">3. Odjezd z hotelu</h4>
                      <p class="text-xs text-gray-500 mt-0.5">Online vyúčtování minibaru a služeb, platba z pokoje bez front.</p>
                   </div>
                </div>
             </div>
          </div>
        </figure>
      </div>
    </section>

    <!-- Phase 1: Před příjezdem (Dark Section) -->
    <section class="py-20 bg-gray-950 text-white">
      <div class="max-w-screen-2xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text and feature lists -->
          <div class="space-y-8 order-2 lg:order-1">
            <header class="space-y-4">
              <span class="bg-[#f5a623]/25 text-[#f5a623] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Fáze 1</span>
              <h2 class="text-3xl sm:text-4xl font-bold leading-tight">Před příjezdem: První dojem dělá divy</h2>
              <p class="text-gray-400 text-base sm:text-lg">
                Zaujměte hosty ještě předtím, než překročí práh hotelu. Nabídněte jim plně digitální odbavení z pohodlí domova a zjistěte jejich preference.
              </p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">chat_bubble_outline</span>
                <h3 class="font-bold text-white text-base">Uvítací zpráva a e-mail</h3>
                <p class="text-xs text-gray-400">Automatické rozesílání SMS a e-mailů s uvítáním a instrukcemi pro hladký příjezd.</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">fingerprint</span>
                <h3 class="font-bold text-white text-base">Digitální Check-in a platba</h3>
                <p class="text-xs text-gray-400">Host pohodlně předem vyplní registraci, naskenuje doklady a provede platbu online.</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">page_info</span>
                <h3 class="font-bold text-white text-base">Digitální průvodce (Directory)</h3>
                <p class="text-xs text-gray-400">Zodpovězte často kladené dotazy dříve, než se hosté vůbec stihnou zeptat.</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">favorite</span>
                <h3 class="font-bold text-white text-base">Preference hostů</h3>
                <p class="text-xs text-gray-400">Zjistěte detaily (alergie, polštáře, účel) a připravte jim zážitek šitý na míru.</p>
              </article>
            </div>
          </div>

          <!-- Graphic Representation (Welcome Screen Mockup) -->
          <div class="flex justify-center order-1 lg:order-2">
            <div class="w-full max-w-sm bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl text-left space-y-6">
              <div class="flex items-center space-x-2 text-zinc-500">
                <span class="material-symbols-outlined text-sm">mail</span>
                <span class="text-xs">příchozí zpráva • Nyní</span>
              </div>
              <div class="bg-zinc-800 p-4 rounded-2xl space-y-3">
                <p class="text-sm font-semibold text-white">Vítejte v hotelu, pane Dvořáku! 👋</p>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  Váš pobyt začíná zítra. Chcete-li přeskočit fronty na recepci, vyplňte prosím online check-in za méně než 2 minuty.
                </p>
                <div class="pt-2">
                  <button class="bg-[#f5a623] hover:bg-yellow-600 text-white font-bold text-xs py-2 px-4 rounded-xl transition-colors">
                    Spustit rychlý check-in
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
                   <h3 class="font-bold text-gray-900 text-lg">Hotel Grand Praha</h3>
                   <p class="text-xs text-gray-500 font-medium">Pokoj 204 • Wifi: Grand_Guest</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                   <span class="material-symbols-outlined text-[#f5a623] text-sm">wifi</span>
                </div>
              </div>

              <!-- Services list mockup -->
              <div class="space-y-3">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Hotelové služby</p>
                
                <!-- Service 1 -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-150">
                  <div class="flex items-center space-x-3">
                     <span class="material-symbols-outlined text-[#f5a623]">room_service</span>
                     <div>
                        <p class="text-xs font-bold text-gray-800">Snídaně na pokoj</p>
                        <p class="text-[10px] text-gray-500">Objednat do 10:00</p>
                     </div>
                  </div>
                  <button class="bg-gray-900 text-white text-[10px] font-bold py-1 px-3 rounded-lg hover:bg-gray-800 transition-colors">Objednat</button>
                </div>

                <!-- Service 2 -->
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-150">
                  <div class="flex items-center space-x-3">
                     <span class="material-symbols-outlined text-[#f5a623]">spa</span>
                     <div>
                        <p class="text-xs font-bold text-gray-800">Privátní wellness</p>
                        <p class="text-[10px] text-gray-500">Rezervovat volné termíny</p>
                     </div>
                  </div>
                  <button class="bg-gray-900 text-white text-[10px] font-bold py-1 px-3 rounded-lg hover:bg-gray-800 transition-colors">Rezervovat</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Text and features list -->
          <div class="space-y-8">
            <header class="space-y-4">
              <span class="bg-[#f5a623]/25 text-[#f5a623] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Fáze 2</span>
              <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Během pobytu: Maximální zážitek s nulovým třením</h2>
              <p class="text-gray-600 text-base sm:text-lg">
                Udělejte pobyt svých hostů pohodlným a nezapomenutelným. Veškeré služby, mobilní klíče i komunikaci s recepcí mají okamžitě k dispozici ve svém telefonu bez instalace aplikací.
              </p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">key</span>
                <h3 class="font-bold text-gray-900 text-base">Virtuální klíč od pokoje</h3>
                <p class="text-xs text-gray-600">Bezkontaktní a bezpečné otevírání pokojových dveří rovnou ze smartphonu hosta.</p>
              </article>

              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">menu_book</span>
                <h3 class="font-bold text-gray-900 text-base">Chytrý katalog služeb</h3>
                <p class="text-xs text-gray-600">Objednávání pokojové služby, rezervace wellness a doplňkového prodeje na jeden klik.</p>
              </article>

              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">qr_code_2</span>
                <h3 class="font-bold text-gray-900 text-base">WiFi Landing Page & QR</h3>
                <p class="text-xs text-gray-600">Připojení na hotelovou WiFi automaticky otevře hotelový rozcestník a promo akce přes QR kódy.</p>
              </article>

              <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">support_agent</span>
                <h3 class="font-bold text-gray-900 text-base">Komunikace s recepcí</h3>
                <p class="text-xs text-gray-600">Hosté mohou komunikovat s recepcí prostřednictvím vestavěného chatu nebo přes WhatsApp.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Phase 3: Před odjezdem (Dark Section) -->
    <section class="py-20 bg-gray-950 text-white">
      <div class="max-w-screen-2xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text and feature lists -->
          <div class="space-y-8 order-2 lg:order-1">
            <header class="space-y-4">
              <span class="bg-[#f5a623]/25 text-[#f5a623] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Fáze 3</span>
              <h2 class="text-3xl sm:text-4xl font-bold leading-tight">Před odjezdem: Perfektní dojem až do konce</h2>
              <p class="text-gray-400 text-base sm:text-lg">
                Ujistěte se, že odjezd proběhne bez front na recepci. Umožněte hostům zkontrolovat účet a zaplatit z pokoje, a poté je potěšte personalizovaným rozloučením.
              </p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">credit_score</span>
                <h3 class="font-bold text-white text-base">Online Check-out a platba</h3>
                <p class="text-xs text-gray-400">Host zkontroluje finální hotelový účet (včetně útraty) a zaplatí jej online.</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">receipt_long</span>
                <h3 class="font-bold text-white text-base">Digitální faktura</h3>
                <p class="text-xs text-gray-400">Automatické zaslání faktury na e-mail hosta ihned po odhlášení z hotelu.</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">rate_review</span>
                <h3 class="font-bold text-white text-base">Feedback & Dotazník</h3>
                <p class="text-xs text-gray-400">Odeslání zprávy na rozloučenou s dotazníkem spokojenosti a nabídkou věrnostních slev.</p>
              </article>

              <article class="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                <span class="material-symbols-outlined text-3xl text-[#f5a623]">workspace_premium</span>
                <h3 class="font-bold text-white text-base">Věrnostní program</h3>
                <p class="text-xs text-gray-400">Snadné navázání vztahu pro přímé rezervace a zamezení vysokým provizím na OTA portálech.</p>
              </article>
            </div>
          </div>

          <!-- Graphic Representation (Check-Out billing mockup) -->
          <div class="flex justify-center order-1 lg:order-2">
            <div class="w-full max-w-sm bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl text-left space-y-6">
              <div class="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div>
                   <h3 class="font-bold text-white text-base">Hotelové vyúčtování</h3>
                   <p class="text-xs text-zinc-500 font-medium">Pokoj 204 • Odjezd dnes</p>
                </div>
                <span class="text-xs bg-zinc-800 text-zinc-300 font-bold px-2 py-0.5 rounded">Rychlý odjezd</span>
              </div>
              
              <!-- Billing items -->
              <div class="space-y-2 text-xs">
                <div class="flex justify-between text-zinc-300">
                  <span>Ubytování (2 noci)</span>
                  <span>4 200 Kč</span>
                </div>
                <div class="flex justify-between text-zinc-300">
                  <span>Minibar (Pilsner, Oříšky)</span>
                  <span>180 Kč</span>
                </div>
                <div class="flex justify-between text-zinc-300">
                  <span>Městský poplatek</span>
                  <span>100 Kč</span>
                </div>
                <div class="border-t border-zinc-850 pt-2 flex justify-between font-bold text-white text-sm">
                  <span>Celkem k úhradě</span>
                  <span class="text-[#f5a623]">4 480 Kč</span>
                </div>
              </div>

              <div class="pt-2 space-y-2">
                <button class="w-full bg-[#f5a623] hover:bg-yellow-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
                  Zaplatit a odhlásit se
                </button>
                <p class="text-[9px] text-zinc-500 text-center">Faktura Vám bude automaticky odeslána na e-mail.</p>
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
          Objevte další možnosti s Otel Apps
        </h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Průběh pobytu je jen jednou z částí platformy. Prozkoumejte další specializované funkce, které vám pomohou digitalizovat a zefektivnit provoz hotelu.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <router-link to="/Product/GuestApp" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">smartphone</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Mobilní aplikace</h3>
          <p class="text-sm sm:text-base text-gray-600">Umožněte hostům spravovat celý pobyt z jejich telefonu.</p>
        </router-link>

        <router-link to="/Product/VirtualReceptionist" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">support_agent</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Live chat + AI recepční</h3>
          <p class="text-sm sm:text-base text-gray-600">Zefektivněte komunikaci s hosty a zvyšte prodeje služeb.</p>
        </router-link>

        <router-link to="/Product/CheckInCheckOut" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">desktop_cloud</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Online check-in/out</h3>
          <p class="text-sm sm:text-base text-gray-600">Urychlete proces příjezdu a odjezdu hostů bez zbytečných front.</p>
        </router-link>

        <router-link to="/Product/VirtualKey" class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-102 text-center block cursor-pointer">
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="material-symbols-outlined text-white">credit_card</span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Virtuální pokojová karta</h3>
          <p class="text-sm sm:text-base text-gray-600">Moderní otevírání dveří pokoje pomocí mobilu místo klíčů.</p>
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
