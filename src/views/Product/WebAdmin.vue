<template>
  <main class="overflow-x-hidden">
    <!-- 1. Hero -->
    <section class="relative">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-5 space-y-6 lg:space-y-8">
            <p class="text-sm font-semibold uppercase tracking-wider text-[#f5a623]">Administrace hotelu</p>
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1]">
              OtelApps WebAdmin
            </h1>
            <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-prose">
              Dávám hotelům jedno místo, odkud ovládají mobilní aplikaci pro hosty — obsah, služby i zpětnou vazbu
              bez chaosu v e-mailech a tabulkách.
            </p>
            <div class="flex flex-wrap gap-3">
              <router-link
                to="/BookDemo"
                class="inline-flex items-center justify-center bg-black text-white px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-900 transition-colors"
              >
                Vyzkoušet demo-verzi
              </router-link>
              <router-link
                to="/Product/GuestApp"
                class="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-900 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-50 transition-colors"
              >
                Mobilní app pro hosty
              </router-link>
            </div>
          </div>
          <div class="lg:col-span-7">
            <div class="relative rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-2 sm:p-3 border border-gray-200/80 shadow-xl">
              <div
                class="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#f5a623]/20 blur-2xl"
                aria-hidden="true"
              />
              <img
                :src="imgDashboard"
                alt="OtelApps WebAdmin — přehled a dashboard"
                class="relative w-full rounded-xl shadow-md object-cover object-top"
              />
            </div>
            <p class="mt-3 text-center text-xs text-gray-500 sm:text-left">Přehled modulů a stavu obsahu v jednom pohledu</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Úvodní „karta“ -->
    <section class="border-y border-gray-100 bg-[#fafafa]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            OtelApps WebAdmin je administrace pro hotelový tým, který chce hostům nabídnout moderní mobilní zážitek
            bez IT oddělení na telefonu každý den. Z jednoho přehledného portálu spravujete to, co host uvidí v
            aplikaci: nabídky restaurací a barů, služby na pokoji, volnočasové tipy i důležité informace — rychle,
            konzistentně a podle toho, co váš hotel skutečně nabízí. Modulární stavba znamená, že zapínáte jen to, co
            potřebujete, takže rozhraní zůstává čisté a školení personálu je krátké.
          </p>
        </div>
      </div>
    </section>

    <!-- 3. Content.png — práce s obsahem -->
    <section class="py-14 sm:py-20 lg:py-24 bg-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <figure class="order-2 lg:order-1">
            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-2 sm:p-3 shadow-lg">
              <img
                :src="imgContent"
                alt="OtelApps WebAdmin — úpravy obsahu pro hosty"
                class="w-full rounded-xl object-cover object-top"
              />
            </div>
            <figcaption class="mt-3 text-sm text-gray-500">Editor a struktura toho, co host uvidí v mobilu</figcaption>
          </figure>
          <div class="order-1 lg:order-2 space-y-6">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Obsah pod kontrolou — bez rozházených verzí
            </h2>
            <p class="text-gray-600 leading-relaxed">
              Jeden přehled místo roztroušených dokumentů. Úpravy se promítnou do aplikace pro hosty tak, aby byl zážitek
              v souladu s vaší značkou.
            </p>
            <ul class="space-y-4">
              <li v-for="(row, i) in featureRows" :key="i" class="flex gap-3">
                <span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5a623] text-white"
                >
                  <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong class="text-gray-900">{{ row.title }}</strong
                  >{{ row.text }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. O projektu (text, bez opakování stejného screenshotu) -->
    <section class="py-14 sm:py-20 lg:py-24 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">O projektu</h2>
          <p class="text-gray-600">Od recepce po management — jedna pravda o obsahu v mobilu hosta.</p>
        </div>
        <div class="mx-auto max-w-4xl space-y-8 rounded-2xl border border-gray-200/80 bg-white px-6 py-8 sm:px-10 sm:py-12 shadow-sm">
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            Hotely dnes soutěží nejen postelí, ale i digitálním servisem. OtelApps WebAdmin jsem navrhl jako řídicí
            centrum pro takovou mobilní aplikaci: místo, kde recepce, gastronomie nebo concierge jedním klikem
            aktualizují nabídky, otevírací dobu, obsah pro hosta a kde má management přehled o aktivitách, zpětné
            vazbě nebo concierge požadavcích.
          </p>
          <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
            Cílem není „další admin“, ale méně chyb, rychlejší reakce na hosta a jednotná značka napříč tím, co host v
            telefonu vidí. Díky modulům se systém přizpůsobí velikosti provozu — od butikového hotelu po resort s více
            službami — bez zbytečných obrazovek, které by personál zahlcovaly.
          </p>
        </div>
      </div>
    </section>

    <!-- 5. Tři pilíře -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12 sm:mb-14">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Co z WebAdminu získáte</h2>
          <p class="text-gray-600">Tři principy, které drží obsah, tým i škálování pohromadě.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <article
            v-for="card in pillarCards"
            :key="card.title"
            class="flex flex-col rounded-2xl border border-gray-100 bg-[#fafafa] p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5a623] text-white">
              <span class="material-symbols-outlined text-2xl">{{ card.icon }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ card.title }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">{{ card.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 6. Galerie obou pohledů -->
    <section class="py-12 sm:py-16 bg-[#f4f4f4] border-t border-gray-200/60">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8 sm:mb-10">Dva pohledy na stejný systém</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <figure class="group rounded-2xl border border-gray-200 bg-white p-3 shadow-sm overflow-hidden">
            <img
              :src="imgDashboard"
              alt="Dashboard WebAdmin"
              class="w-full rounded-lg object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption class="px-1 pt-3 pb-1 text-sm font-medium text-gray-800">Dashboard a moduly</figcaption>
            <p class="px-1 pb-2 text-xs text-gray-500">Přehled toho, co je zapnuté a kde tým právě pracuje</p>
          </figure>
          <figure class="group rounded-2xl border border-gray-200 bg-white p-3 shadow-sm overflow-hidden">
            <img
              :src="imgContent"
              alt="Editor obsahu WebAdmin"
              class="w-full rounded-lg object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption class="px-1 pt-3 pb-1 text-sm font-medium text-gray-800">Editor obsahu pro hosta</figcaption>
            <p class="px-1 pb-2 text-xs text-gray-500">Struktura nabídek, textů a služeb, které host uvidí v aplikaci</p>
          </figure>
        </div>
      </div>
    </section>

    <!-- 7. Technologie + CTA -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <article
            class="lg:col-span-2 rounded-2xl border border-gray-200 bg-gradient-to-br from-[#fafafa] to-white p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start"
          >
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f5a623] text-white">
              <span class="material-symbols-outlined text-3xl">code</span>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Technologie</h2>
              <p class="text-gray-700 leading-relaxed max-w-xl">
                Postaveno na Laravel + React — rychlý, moderní webový zážitek pro administrátora a základ pro bezpečný
                provoz v hotelovém prostředí.
              </p>
            </div>
          </article>
          <article
            class="rounded-2xl border border-gray-900 bg-gray-900 text-white p-8 flex flex-col justify-center text-center lg:text-left"
          >
            <h2 class="text-lg font-bold mb-2">Ukázka na míru</h2>
            <p class="text-sm text-gray-300 mb-6 leading-relaxed">
              Projdem WebAdmin v kontextu vašeho provozu.
            </p>
            <router-link
              to="/BookDemo"
              class="inline-flex justify-center items-center w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Domluvit demo
            </router-link>
          </article>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <router-link
            to="/Product/GuestApp"
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#f5a623] transition-colors pb-0.5"
          >
            <span class="material-symbols-outlined text-[#f5a623] text-xl">mobile_2</span>
            Mobilní aplikace pro hosty
          </router-link>
          <router-link
            to="/Product/HotelDirectory"
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-[#f5a623] transition-colors pb-0.5"
          >
            <span class="material-symbols-outlined text-[#f5a623] text-xl">info</span>
            Informace o hotelu
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import imgDashboard from '@/assets/Webadmin/dashboard.png'
import imgContent from '@/assets/Webadmin/Content.png'

export default {
  name: 'WebAdmin',
  data() {
    return {
      imgDashboard,
      imgContent,
      featureRows: [
        {
          title: 'Restaurace, bary a pokojová služba: ',
          text: 'nabídky jídel a nápojů, služby na pokoji a informace k objednání — srozumitelně pro hosta.',
        },
        {
          title: 'Obsah a tipy: ',
          text: 'volnočasové tipy, pravidla hotelu a důležité informace bez zbytečných dotazů na recepci.',
        },
        {
          title: 'Provoz a zpětná vazba: ',
          text: 'přehled aktivit, concierge požadavků a signálů od hostů ještě během pobytu.',
        },
      ],
      pillarCards: [
        {
          title: 'Aktuální informace pro hosta',
          text: 'Měníte obsah centralizovaně, ne po pokojích a kanálech.',
          icon: 'update',
        },
        {
          title: 'Jedno místo pro personál',
          text: 'Méně ručního přepisování a domluvy „kdo to upraví“.',
          icon: 'groups',
        },
        {
          title: 'Škáluje se s hotelem',
          text: 'Moduly podle toho, co opravdu provozujete.',
          icon: 'apartment',
        },
      ],
    }
  },
}
</script>
