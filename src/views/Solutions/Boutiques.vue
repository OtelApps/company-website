<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Guest Experience systém pro boutique hotely
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
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
          <div class="flex items-center justify-center lg:justify-end">
            <img :src="image1" alt="Boutigues obrázek" class="w-9/10">
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tvořte nezapomenutelné zážitky
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Dopřejte svým hostům výjimečný pobyt, který plně odráží jedinečný charakter a styl vašeho hotelu.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in boutiquesFeatures"
            :key="index"
            class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center"
          >
            <div class="w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <span class="material-symbols-outlined text-[#f5a623]"
                style="font-size: 35px; font-variation-settings: 'opsz' 40;"
              >
                {{ feature.icon }}
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm sm:text-base text-gray-600">{{ feature.description }}</p>
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
          <div class="lg:col-span-3 px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Klíčové funkce pro boutique hotely
            </h2>
            <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl">
              Pečlivě vybraná sada nástrojů navržená k posílení komfortu a osobního přístupu, který vaši hosté ocení.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div
                v-for="(item, index) in keyFunctions"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="w-12 h-12 flex items-start justify-start">
                  <span class="material-symbols-outlined text-[#f5a623]"
                    style="font-size: 35px; font-variation-settings: 'opsz' 40;"
                  >
                    {{ item.icon }}
                  </span>
                </div>
                <div>
                  <p class="text-base sm:text-lg text-gray-700">
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
          icon: 'crown',
        },
        {
          title: 'Péče, která buduje loajalitu',
          description: 'V digitálním věku je rychlost synonymem pro kvalitu. Otel Apps vám dává nástroj k okamžitému spojení s každým hostem.',
          icon: 'loyalty',
        },
        {
          title: 'Budování vztahu s hosty',
          description: 'Oslovte své hosty personalizovanými nabídkami a obsahem na míru.',
          icon: 'handshake',
        },
        {
          title: 'Konec zbytečného čekání',
          description: 'Umožněte hostům zadávat požadavky a hledat informace v čase, kdy se to hodí jim. Rychle, digitálně a bez front.',
          icon: 'clock_arrow_down',
        },
      ],
      keyFunctions: [
        {
          title: 'Hotelový digitální průvodce: ',
          description: "Esence vašeho hotelu v digitální podobě.",
          icon: 'screen_search_desktop',
        },
        {
          title: 'Okamžitá zpětná vazba: ',
          description: 'Vyřešte problémy dřív, než se stanou recenzí.',
          icon: 'comment',
        },
        {
          title: 'Analytika a statistiky: ',
          description: 'Poznejte své hosty do hloubky.',
          icon: 'analytics',
        },
        {
          title: 'Trip planner: ',
          description: 'Staňte se pro své hosty tím nejlepším zdrojem inspirace a autentických zážitků.',
          icon: 'trip',
        },
        {
          title: 'Live chat: ',
          description: 'Osobní péče na jeden dotek.',
          icon: 'chat',
        },
        {
          title: 'Spa & Wellness: ',
          description: 'Relaxace, která začíná už při rezervaci.',
          icon: 'spa',
        },
        {
          title: 'Mobilní objednávky: ',
          description: 'Room Service a exkluzivní nabídky přímo v telefonu. Zvyšte tržby díky pohodlnému objednávání jídla i zážitků na pár kliknutí.',
          icon: 'mobile',
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
          title: 'Služby v hostově kapse',
          description:
            'Okamžitý přístup ke všemu podstatnému přímo z telefonu hosta',
          icon: 'mobile_2'
        },
        {
          title: 'Personalizace',
          description: 'Nabídněte doporučení a služby šité na míru. Nadchněte své hosty pozorností k detailu, která promění obyčejný pobyt v nezapomenutelný zážitek.',
          icon: 'person'
        },
      ],
    }
  },
}
</script>
