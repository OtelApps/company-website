<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Jednodušší objednávky, vyšší tržby
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Umožněte hostům objednávat a platit přímo z jejich telefonu. Propojte přání hosta s kuchyní a zajistěte raketový růst 
              tržeb v restauraci i lobby baru díky rychlému a bezchybnému servisu.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-center lg:justify-end">
            <img :src="image1" alt="Mobile Ordering obrázek" class="w-[80%]">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Revoluce vašeho servisu služeb"
      subtitle="Naše řešení pro mobilní objednávky umožňuje hostům prohlížet menu, objednávat a platit s maximálním pohodlím. 
                Vy tím uvolníte ruce svému personálu a otevřete dveře novým příležitostem k navýšení tržeb."
      :features="mobileOrderingAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Mobile Ordering obrázek'"
      title="Klíčové funkce"
      description="Dejte svým hostům svobodu a svému týmu moderní nástroje pro plynulý provoz. Náš výkonný a flexibilní 
                systém mobilních objednávek se plně přizpůsobí rytmu vašeho hotelu."
      :features="mobileOrderingFeatures"
    />

    <HowItWorks
      title="Jak to funguje?"
      subtitle="Jednoduchý a intuitivní zážitek pro vaše hosty, výkonný a přehledný systém pro váš personál. Otel Apps propojuje oba světy v jeden dokonale fungující celek."
      :steps="mobileOrderingWork"
      :image="image3"
      image-alt="Mobile Ordering obrázek"
    />

    <Benefits
      title="Výhody pro váš hotel"
      :items="mobileOrderingBenefits"
      :rows="2"
      :columns="3"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/Mobile/1.png'
import image2 from '@/assets/product/Mobile/2.png'
import image3 from '@/assets/product/Mobile/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'MobileOrdering',
  components: {
    Advantages,
    Features,
    HowItWorks,
    Benefits,
    Improvement,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      mobileOrderingAdvantages: [
        {
          title: 'Objednávky přes QR kódy',
          description:
            'Bleskový přístup k menu kdekoli v hotelu. Stačí naskenovat, vybrat si a objednat!',
          icon: 'qr_code_2',
        },
        {
          title: 'Digitální menu na míru',
          description:
            'Představte svou nabídku v tom nejlepším světle. Vytvořte pro své hosty vizuálně atraktivní, interaktivní menu, která upravíte během okamžiku přímo ve svém prohlížeči.',
          icon: 'menu',
        },
        {
          title: 'Bezproblémové platby pro moderní hotel',
          description:
            'Propojte svůj hotelový systém s nejoblíbenějšími platebními metodami. Přijímejte Apple Pay, Google Pay i platební karty přímo v aplikaci.',
          icon: 'payments',
        },
      ],
      mobileOrderingFeatures: [
        {
          title: 'Interaktivní digitální menu: ',
          description:
            'Tvořte atraktivní, plně přizpůsobitelné jídelní lístky s kvalitními fotografiemi a detailními popisy, které prodávají samy.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Sledování objednávek v reálném čase: ',
          description: 'Hosté i personál mají okamžitý přehled o stavu objednávky, od jejího přijetí až po doručení ke stolu či na pokoj.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Integrace s pokladnou a platbami: ',
          description:
            'Propojte aplikaci se svým stávajícím POS systémem. Přijímejte Apple Pay, Google Pay i platební karty bezpečně a bez přepisování.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Podpora samoobsluhy: ',
          description: 'Ideální řešení pro pokojovou službu, bazény nebo wellness – místa, kde nemáte stálou obsluhu, ale hosté tam chtějí utrácet.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Upselling a speciální nabídky: ',
          description: 'Snadno zvýrazněte denní nabídky, dezerty nebo prémiové doplňky a zvyšte tak průměrnou hodnotu každé objednávky.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      mobileOrderingWork: [
        {
          title: 'Host naskenuje QR kód nebo otevřeny nabídku v aplikaci',
          description: 'Pomocí svého telefonu získá host okamžitý přístup k digitálnímu menu, kdekoli v hotelu nebo mimo něj.',
        },
        {
          title: 'Prohlížení, objednávka a platba',
          description: 'Host si v klidu vybere, odešle objednávku a během pár vteřin bezpečně zaplatí přímo v rozhraní aplikace.',
        },
        {
          title: 'Kuchyně přijímá objednávku',
          description:
            'Požadavek putuje bleskově do kuchyně nebo baru skrze naši aplikaci pro personál.',
        },
        {
          title: 'Spokojený host',
          description:
            'Personál připraví a doručí objednávku. Host může celou dobu sledovat stav objednávky v reálném čase na svém telefonu.',
        },
      ],
      mobileOrderingBenefits: [
        {
          title: 'Rychlejší servis pro více hostů',
          description: 'Zkraťte čekací doby na minimum. Díky digitálním objednávkám obsloužíte více hostů za kratší čas a zajistíte jim plynulý zážitek bez zbytečného čekání.',
          icon: 'speed'
        },
        {
          title: 'Vyšší prodeje',
          description: 'Odstraňte tření v prodejním procesu a sledujte, jak roste počet objednávek i průměrná útrata na každého hosta.',
          icon: 'chart_data'
        },
        {
          title: 'Nové zdroje příjmů',
          description: 'Umožněte hostům objednávat jídlo, pití nebo služby odkudkoli.',
          icon: 'paid'
        },
        {
          title: 'Plynulý provoz kuchyně',
          description: 'Objednávky jsou digitální, dokonale přehledné a systém je automaticky odešle přesně tam, kam patří.',
          icon: 'dining'
        },
        {
          title: 'Dokonalý zážitek pro vaše hosty',
          description: 'Umožněte jim objednávat služby přesně tehdy, kdy chtějí, a způsobem, který jim nejvíce vyhovuje.',
          icon: 'add_reaction'
        },
        {
          title: 'Sjednocená data a přehled',
          description: 'Díky plné integraci získáte ucelený pohled na veškeré výdaje a chování svých hostů. Všechna data o objednávkách a útratách se na jednom místě pro dokonalý přehled.',
          icon: 'analytics'
        },
      ],
    }
  },
}
</script>
