<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">Vyšší úroveň zážitku pro menší hotely</h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Modernizujte svůj provoz s Otel Apps. Automatizujte rutinu, oslovte správné hosty 
              a získejte svobodu řídit svůj hotel po svém.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Placeholder -->
          <div class="flex items-center justify-center lg:justify-end">
            <img :src="image1" alt="Small Hotels obrázek" class="w-9/10">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Výkon, jednoduchost a flexibilita v jednom systému"
      subtitle="Náš PMS zjednodušuje každodenní provoz, omezuje manuální rutinu a zlepšuje cestu hosta od rezervace až po odjezd."
      :features="smallHotelsAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <!-- Key Functions Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <!-- Left visual placeholder -->
          <div class="lg:col-span-2 flex items-center justify-center">
            <img :src="image2" alt="Small Hotels obrázek" class="w-full">
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3 px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Klíčové funkce pro malé a střední hotely
            </h2>
            <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl">
              Komplexní sada nástrojů pro efektivní správu vašeho hotelu. Získejte systém, který se postará o každodenní operativu, 
              a věnujte svůj drahocenný čas tomu, co udělá váš hotel skutečně výjimečným, osobní péčí o vaše hosty.
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
      title="Navrženo pro jednoduchost a flexibilitu"
      subtitle="Věříme, že technologie by vám měla cestu usnadňovat, nikoli ji komplikovat. Naše cloudová platforma je od základu navržena jako intuitivní nástroj, 
      který si plně přizpůsobíte svým potřebám."
      :steps="smallHotelsWork"
      :image="image3"
      image-alt="Small Hotels obrázek"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/solutions/SmallHotels/1.png'
import image2 from '@/assets/solutions/SmallHotels/2.png'
import image3 from '@/assets/solutions/SmallHotels/3.png'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'SmallHotels',
  components: {
    Advantages,
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      smallHotelsAdvantages: [
        {
          title: 'Ušetřete čas',
          description: 'Automatizujte rutinu a zbavte svůj tým administrativy. Dejte jim prostor soustředit se na to nejdůležitější na vaše hosty.',
          icon: 'clock_arrow_down',
        },
        {
          title: 'Větší kontrola',
          description:
            'Mějte správu rezervací, cenotvorbu i koordinaci úklidu plně ve svých rukou. Díky jednomu intuitivnímu rozhraní vidíte vše podstatné okamžitě a na jednom místě.',
          icon: 'desktop_windows',
        },
        {
          title: 'Navyšte své tržby a ziskovost',
          description: 'Maximalizujte svůj výnos díky dynamické cenotvorbě a cílenému prodeji doplňkových služeb. Nabízejte hostům víc právě tehdy, kdy to nejvíce ocení.',
          icon: 'chart_data',
        },
        {
          title: 'Zážitek hostů na prvním místě',
          description: 'Nabídněte jim rychlý check-in bez front, hladké placení a možnost okamžité komunikace s vaším týmem.',
          icon: 'mood',
        },
        {
          title: 'Rychlejší check-in a check-out bez front',
          description: 'Nabídněte hostům komfort samoobslužných kiosků a mobilního check-inu. Zrychlete provoz recepce a dopřejte hostům snadný přístup k jejich pokojům.',
          icon: 'bolt',
        },
        {
          title: 'Automatizace procesů',
          description: 'Propojte celý svůj hotel – od rezervací po úklid – do jednoho plynulého toku práce. Minimalizujte chyby a maximalizujte efektivitu svého týmu.',
          icon: 'settings_applications',
        },
      ],
      keyFunctions: [
        {
          title: 'Cloudový přístup:',
          description: 'Řiďte svůj hotel odkudkoli a kdykoli. S cloudovým řešením máte veškerá data a kontrolu nad provozem neustále ve svých rukou.',
          icon: 'cloud_done',
        },
        {
          title: 'Přímé rezervace:',
          description: 'Získejte více objednávek napřímo a zvyšte své zisky díky integrovanému prodeji doplňkových služeb hned při rezervaci.',
          icon: 'date_range',
        },
        {
          title: 'Inteligentní správa rezervací:',
          description: 'Přehledná časová osa, snadné přiřazování pokojů a okamžitý náhled na celkovou obsazenost. Vše intuitivně na jednom místě.',
          icon: 'network_intel_node',
        },
        {
          title: 'Samoobslužná řešení:',
          description: 'Nabídněte hostům komfort v podobě mobilního check-inu a samoobslužných kiosků. Rychlé odbavení bez front a zbytečného čekání.',
          icon: 'ar_on_you',
        },
        {
          title: 'Chytré řízení cen a prodejů:',
          description: 'Flexibilní správa cen a automatická reakce na poptávku.',
          icon: 'price_change',
        },
        {
          title: 'Integrované a bezpečné platby:',
          description: 'Jednoduché a bezpečné transakce.',
          icon: 'health_and_safety',
        },
        {
          title: 'Efektivní správa úklidů:',
          description: 'Okamžitý přehled o stavu pokojů v reálném čase a automatické plánování prioritních úklidů.',
          icon: 'manage_accounts',
        },
        {
          title: 'Reporty & analytika:',
          description: 'Dělejte rozhodnutí podložená skutečnými daty.',
          icon: 'analytics',
        },
      ],
      smallHotelsWork: [
        {
          title: 'Hravě to zvládne každý',
          description: 'Intuitivní rozhraní, přehledné dashboardy a školení šité na míru konkrétním rolím v týmu.',
        },
        {
          title: 'Systém, který roste s vámi',
          description: 'Propojte se s velkým množstvím aplikací a přizpůsobte si vzhled i funkce přesně své potřebě.',
        },
        {
          title: 'Všechny rezervace pod jednou střechou',
          description: 'Připojte se k distribučním kanálům a spravujte vše z jednoho místa.',
        },
      ],
    }
  },
}
</script>
