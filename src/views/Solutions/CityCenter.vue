<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Guest Experience systém pro městské hotely
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Dnešní hosté vyžadují pobyt bez starostí. Naše digitální řešení se postarají o to, aby každé jejich přání bylo splněno rychle, 
              hladce a přesně tak, jak očekávají od moderního hotelu 21. století.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-center lg:justify-end">
            <img :src="image1" alt="City Center obrázek" class="w-4/5">
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nová éra městských hotelů
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Nabídněte moderním cestovatelům bezstarostný pobyt. Od hladkého odbavení po okamžitý servis, Otel Apps mění cestu hosta v zážitek, 
            který zvyšuje spokojenost i vaše zisky.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, index) in cityCenterFeatures"
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
            <img :src="image2" alt="City Center obrázek" class="w-full">
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3 px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ucelený ekosystém</h2>
            <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl">
              Otel Apps je víc než aplikace; je to komplexní operační systém pro váš hotel, který propojuje všechny vaše služby na jednom místě.
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
                  <h3 class="text-base sm:text-lg font-semibold text-gray-900">
                    {{ item.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HowItWorks
      title="Hladká implementace a špičkové technologie"
      subtitle="Naše flexibilní platforma se plně přizpůsobí specifickým potřebám vašeho hotelu. Nabízíme technologické řešení bez bariér, 
      které zajišťuje naprostý komfort pro vaše hosty a maximální efektivitu pro váš personál."
      :steps="cityCenterWork"
      :image="image3"
      image-alt="City Center obrázek"
    />

    <Benefits
      title="Navrženo pro rytmus velkoměsta"
      subtitle="Nabídněte zážitek na míru hostům, kteří jsou neustále v pohybu velkoměsta. S Otel Apps mají vše potřebné okamžitě k dispozici. 
      Otel Apps je navržen tak, aby odpovídal dynamickému životnímu stylu."
      :items="cityCenterBenefits"
      :rows="1"
      :columns="3"
    />
  </main>
</template>

<script>
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/solutions/CityCenter/1.png'
import image2 from '@/assets/solutions/CityCenter/2.png'
import image3 from '@/assets/solutions/CityCenter/3.png'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'CityCenter',
  components: {
    HowItWorks,
    Benefits,
    Improvement,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      cityCenterFeatures: [
        {
          title: 'Konec frontám a zbytečnému čekání',
          description: 'Zkraťte čekací doby na recepci i v restauraci na úplné minimum. Dopřejte svým hostům plynulý zážitek bez zbytečných prostojů a nechte svůj personál zazářit tam, kde je to skutečně potřeba.',
          icon: 'clock_arrow_down',
        },
        {
          title: 'Podpora týmu',
          description: 'Uvolněte svému týmu ruce, aby se mohl naplno věnovat tomu nejdůležitějšímu, budování osobních vztahů s hosty a poskytovaní špičkového servisu.',
          icon: 'help',
        },
        {
          title: 'Růst tržeb',
          description: 'Podpořte doplňkový prodej a mobilní objednávky díky cíleným akcím.',
          icon: 'chart_data',
        },
      ],
      keyFunctions: [
        {
          title: 'Digitální hotelový průvodce',
          icon: 'developer_guide',
        },
        {
          title: 'Room Service & Služby',
          icon: 'service_toolbox',
        },
        {
          title: 'Průvodce destinací',
          icon: 'location_on',
        },
        {
          title: 'Trip Planner',
          icon: 'trip',
        },
        {
          title: 'Task Manager & Provoz',
          icon: 'web_traffic',
        },
        {
          title: 'Mobilní objednávky',
          icon: 'mobile',
        },
        {
          title: 'Rezervace Restaurace & Wellness & Gym',
          icon: 'exercise',
        },
        {
          title: 'Analytika a statistiky',
          icon: 'analytics',
        },
        {
          title: 'Online check-in & check-out',
          icon: 'wifi',
        },
        {
          title: 'A mnoho dalších funkcí...',
          icon: 'more',
        },
      ],
      cityCenterWork: [
        {
          title: 'Okamžitý přístup přes QR',
          description:
            'Hosté se do aplikace dostanou okamžitě pouhým naskenováním QR kódu.',
        },
        {
          title: 'Podpora všech platforem',
          description:
            'Fungujeme jako nativní appka pro iOS/Android nebo progresivní webová aplikace (PWA).',
        },
        {
          title: 'Plně ve vašem brandu',
          description:
            "Přizpůsobte rozhraní logu, barvám a stylu svého hotelu. Vytvořte jednotný a profesionální styl.",
        },
        {
          title: 'Výkonné integrace',
          description:
            'Bezproblémově nás propojte se svým stávajícím PMS, pokladním systémem (POS) a dalším softwarem.',
        },
      ],
      cityCenterBenefits: [
        {
          title: 'Intuitivní ovládání',
          description:
            'Naše rozhraní zajišťuje hladký zážitek pro všechny hosty bez ohledu na jejich technické dovednosti. Jednoduchost je náš standard.',
          icon: 'sentiment_satisfied'
        },
        {
          title: 'Hotel, který mluví jazykem vašich hostů',
          description:
            'Obslužte svou mezinárodní klientelu v jejich rodném jazyce. Odstraňte bariéry a zvyšte komfort svých hostů z celého světa.',
          icon: 'emoji_language'
        },
        {
          title: 'Design bez bariér pro každého',
          description:
            'Naše platforma splňuje standardy přístupnosti a zajišťuje, že ji může snadno používat každý host bez ohledu na svá omezení.',
          icon: 'design_services'
        },
      ],
    }
  },
}
</script>
