<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Řešte negativní zážitky hostů hned, když nastanou
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Negativní recenze bolí a to zejména ty, kterým jste mohli předejít. Otel Apps vám dává šanci zachytit nespokojenost hosta okamžitě, 
              ještě během jeho pobytu, a proměnit tak špatnou zkušenost v pozitivní.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Hotel Directory Obrázek" class="w-3/4">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Proměňte zpětnou vazbu ve svou největší výhodu"
      subtitle="Reagujte na dojmy svých hostů přesně ve chvíli, kdy na tom nejvíce záleží. Tento nástroj 
                vám umožní řešit problémy proaktivně, zvýšit spokojenost hostů a zajistit si skvělé hodnocení ještě před jejich odjezdem."
      :features="instantFeedbackAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Instant Feedback obrázek'"
      title="Špičkové nástroje pro váš hotel"
      description="Od plně personalizovaných dotazníků až po centrální schránku požadavků – naše platforma je vybavena vším, 
                  co potřebujete pro efektivní práci s hodnocením od svých hostů."
      :features="instantFeedbackFeatures"
    />

    <HowItWorks
      title="Jak to funguje"
      subtitle="Náš proces je jednoduchý a efektivní. Otel Apps jsme navrhli tak, aby se hladce integroval do vašeho každodenního provozu 
                a začal vám přinášet reálnou hodnotu od prvního dne."
      :steps="instantFeedbackWork"
      :image="image3"
      image-alt="Instant Feedback obrázek"
    />

    <Benefits
      title="Výhody pro váš tým"
      :items="instantFeedbackBenefits"
      :rows="1"
      :columns="4"
    />

    <Improvement
      title="Zvyšte své zisky společně s námi"
      subtitle="Naši partneři potvrzují výrazný nárůst spokojenosti hostů i prokazatelně lepší online hodnocení. Přidejte se k moderním hotelům, 
                které díky digitalizaci vydělávají více a šetří čas."
      :stats="instantFeedbackImprovementStats"
      :features="instantFeedbackImprovementFeatures"
      background-color="bg-[#f4f4f4]"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/InstantFeedback/1.png'
import image2 from '@/assets/product/InstantFeedback/2.png'
import image3 from '@/assets/product/InstantFeedback/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'InstantFeedback',
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
      instantFeedbackAdvantages: [
        {
          title: 'Zpětná vazba v reálném čase',
          description:
            'Oslovte své hosty přímo během pobytu. Získejte okamžitý přehled o jejich spokojenosti, dokud jsou ještě u vás, a ukažte jim, že vám na jejich pohodlí záleží.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Předcházejte negativním recenzím',
          description:
            'Zasáhněte včas tam, kde vzniká nespokojenost hosta. Vyřešte problémy svých hostů okamžitě a nenechte je přerůst ve veřejné hodnocení na internetu.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Budujte si špičkovou reputaci',
          description:
            'Aktivní práce se zpětnou vazbou přímo během pobytu vede k lepším recenzím a silnějšímu jménu vašeho hotelu na rezervačních portálech i sociálních sítích.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      instantFeedbackFeatures: [
        {
          title: 'Dotazníky na míru: ',
          description:
            'Sestavte si vlastní otázky a určete, ve které fázi pobytu a na kterém místě v aplikaci se mají hostům zobrazit.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Centrální schránka a oznámení: ',
          description:
            'Spravujte veškeré ohlasy na jednom místě. Díky chytrým filtrům a e-mailovým upozorněním vám nic neunikne.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Přímá komunikace: ',
          description:
            'Odpovídejte hostům přímo z rozhraní aplikace. Vyřešte jejich stížnosti nebo jim poděkujte za pochvalu během pár vteřin.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Analytika v praxi: ',
          description:
            'Sledujte trendy, odhalujte slabá místa a dělejte strategická rozhodnutí podložená reálnými daty pro neustálé zlepšování vašich služeb.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      instantFeedbackWork: [
        {
          title: 'Získejte zpětnou vazbu',
          description:
            'Hosté dostávají dotazníky na míru v klíčových momentech svého pobytu, kdy jsou jejich dojmy nejčerstvější.',
        },
        {
          title: 'Vše na jednom místě',
          description:
            'Odpovědi se okamžitě sbírají v centrální schránce a váš tým dostává upozornění v reálném čase, aby mohl jednat.',
        },
        {
          title: 'Komunikujte napřímo',
          description:
            'Spojte se s hostem přímo skrze aplikaci. Vyřešte případný problém nebo poděkujte za pochvalu.',
        },
        {
          title: 'Analyzujte a vylepšujte',
          description:
            'Díky datům pochopíte, kde váš hotel září a kde je prostor pro zlepšení. Dělejte rozhodnutí, která zvýší vaše zisky a reputaci.',
        },
      ],
      instantFeedbackBenefits: [
        {
          title: 'Blesková odezva',
          description: 'Upozornění v reálném čase vám umožní okamžitě reagovat na podněty hostů a vyřešit situaci dříve, než se z ní stane problém.',
        },
        {
          title: 'Efektivní správa',
          description: 'Centrální schránka s chytrým filtrováním zjednodušuje zpracování hodnocení, odstraňuje administrativní chaos a šetří drahocenný čas vašemu týmu.',
        },
        {
          title: 'Lepší přehled',
          description: 'Získejte dokonalý vhled do svého provozu. Snadno identifikujte opakující se nedostatky a odhalte konkrétní oblasti, které vyžadují vaši pozornost, abyste mohli neustále zvyšovat standard svých služeb.',
        },
        {
          title: 'Minimalizujte negativní recenze',
          description:
            'Vyřešte problémy hostů okamžitě přímo v hotelu. Nedejte nespokojenosti šanci přerůst ve veřejnou negativní recenzi na internetu a chraňte dobré jméno svého hotelu.',
        },
      ],
      instantFeedbackImprovementStats: [
        {
          value: '40%',
          label: 'Snížení negativních recenzí',
        },
        {
          value: '+15%',
          label: 'Nárůst pozitivních zmínek',
        },
        {
          value: '24/7',
          label: 'Řešení problémů v reálném čase',
        },
      ],
      instantFeedbackImprovementFeatures: [
        {
          title: 'Analytika',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Komunikace',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Správa služeb',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Virtuální průvodce hotelem',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    }
  },
}
</script>
