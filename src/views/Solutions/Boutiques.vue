<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl leading-tight">
              Guest Experience systém pro boutique hotely
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Otel Apps je navržen tak, aby zachoval exkluzivitu vašeho hotelu a zároveň vám umožnil poskytovat kvalitní a 
              vysoce personalizovanou péči, kterou vaši hosté očekávají.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Boutigues obrázek" class="w-9/10">
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tvořte nezapomenutelné zážitky
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Dopřejte svým hostům výjimečný pobyt, který plně odráží jedinečný charakter a styl vašeho hotelu.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in boutiquesFeatures"
            :key="index"
            class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center"
          >
            <div
              class="w-10 h-10 rounded-lg bg-[#f5a623]/20 flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                <path :d="feature.icon" />
              </svg>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Functions Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <!-- Left visual placeholder -->
          <div class="lg:col-span-2 flex items-center justify-center">
            <img :src="image2" alt="Boutigues obrázek" class="w-full">
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Klíčové funkce pro boutique hotely
            </h2>
            <p class="text-gray-700 text-lg mb-8 max-w-2xl">
              Pečlivě vybraná sada nástrojů navržená k posílení komfortu a osobního přístupu, který vaši hosté ocení.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div
                v-for="(item, index) in keyFunctions"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 mt-1">
                  <div class="w-7 h-7 rounded-lg bg-[#f5a623]/20 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#f5a623]" viewBox="0 0 20 20" fill="currentColor">
                      <path :d="item.icon" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p class="text-gray-700">
                    <span class="font-semibold text-gray-900">{{ item.title }}</span>
                    <span class="ml-1">{{ item.description }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HowItWorks
      title="Technologie s lehkostí, zážitek s elegancí"
      subtitle="Digitální řešení, které působí stejně osobně jako váš hotel. Naše platforma je digitálním prodloužením vaší značky, navrženým pro snadnost a eleganci."
      :steps="boutiquesWork"
      :image="image3"
      image-alt="Boutigues obrázek"
    />

    <Benefits
      title="Výjimečný zážitek v boutique hotelu"
      :items="boutiquesBenefits"
      :rows="1"
      :columns="2"
    />
  </main>
</template>

<script>
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/solutions/Boutigues/1.png'
import image2 from '@/assets/solutions/Boutigues/2.png'
import image3 from '@/assets/solutions/Boutigues/3.png'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'Boutigues',
  components: {
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      boutiquesFeatures: [
        {
          title: 'Uchovejte si svou exkluzivitu',
          description: "Váš digitální prostor by měl být stejně okouzlující jako váš hotel sám.",
          icon: 'M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7h2v2h-2V9zm-2 0H7v2h2V9z',
        },
        {
          title: 'Péče, která buduje loajalitu',
          description: 'V digitálním věku je rychlost synonymem pro kvalitu. Otel Apps vám dává nástroj k okamžitému spojení s každým hostem.',
          icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z',
        },
        {
          title: 'Budování vztahu s hosty',
          description: 'Oslovte své hosty personalizovanými nabídkami a obsahem na míru.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
        {
          title: 'Konec zbytečného čekání',
          description: 'Umožněte hostům zadávat požadavky a hledat informace v čase, kdy se to hodí jim. Rychle, digitálně a bez front.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      keyFunctions: [
        {
          title: 'Hotelový digitální průvodce: ',
          description: "Esence vašeho hotelu v digitální podobě.",
          icon: 'M3 3h14a1 1 0 011 1v9a2 2 0 01-2 2H6l-3 3V4a1 1 0 011-1z',
        },
        {
          title: 'Okamžitá zpětná vazba: ',
          description: 'Vyřešte problémy dřív, než se stanou recenzí.',
          icon: 'M4 6h12v8H4V6zm2 2v4h8V8H6z',
        },
        {
          title: 'Analytika a statistiky: ',
          description: 'Poznejte své hosty do hloubky.',
          icon: 'M6 2h8v2H6V2zM4 6h12v10H4V6z',
        },
        {
          title: 'Trip planner: ',
          description: 'Staňte se pro své hosty tím nejlepším zdrojem inspirace a autentických zážitků.',
          icon: 'M2 5a2 2 0 012-2h12a2 2 0 012 2v10H2V5zm3 3h10v2H5V8z',
        },
        {
          title: 'Live chat: ',
          description: 'Osobní péče na jeden dotek.',
          icon: 'M3 10h14v2H3v-2zm0 4h14v2H3v-2z',
        },
        {
          title: 'Spa & Wellness: ',
          description: 'Relaxace, která začíná už při rezervaci.',
          icon: 'M7 2h6v2H7V2zM5 6h10v10H5V6z',
        },
        {
          title: 'Mobilní objednávky: ',
          description: 'Room Service a exkluzivní nabídky přímo v telefonu. Zvyšte tržby díky pohodlnému objednávání jídla i zážitků na pár kliknutí.',
          icon: 'M4 13h12v2H4v-2zm0-4h12v2H4V9zm0-4h12v2H4V5z',
        },
      ],
      boutiquesWork: [
        {
          title: 'Moderní řešení pro moderního hosta',
          description: 'Nabídněte hostům mobilní rozhraní pro okamžitý přístup k vašim službám.',
        },
        {
          title: 'Vaše identita v každém pixelu',
          description: 'Přizpůsobte platformu tak, aby dokonale odrážela unikátní charakter a vizuální styl vašeho hotelu.',
        },
        {
          title: 'Dokonalá souhra vašich systémů',
          description: 'Otel Apps spolupracuje s vašimi stávajícími nástroji a zajišťuje plynulý provoz.',
        },
      ],
      boutiquesBenefits: [
        {
          title: 'Služby v hostovo kapse',
          description:
            'Okamžitý přístup ke všemu podstatnému přímo z telefonu hosta',
        },
        {
          title: 'Personalizace',
          description: 'Nabídněte doporučení a služby šité na míru. Nadchněte své hosty pozorností k detailu, která promění obyčejný pobyt v nezapomenutelný zážitek.',
        },
      ],
    }
  },
}
</script>
