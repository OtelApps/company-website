<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Řešte negativní zážitky hostů hned, když nastanou
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
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
    Benefits
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
          icon: 'alarm',
        },
        {
          title: 'Předcházejte negativním recenzím',
          description:
            'Zasáhněte včas tam, kde vzniká nespokojenost hosta. Vyřešte problémy svých hostů okamžitě a nenechte je přerůst ve veřejné hodnocení na internetu.',
          icon: 'report',
        },
        {
          title: 'Budujte si špičkovou reputaci',
          description:
            'Aktivní práce se zpětnou vazbou přímo během pobytu vede k lepším recenzím a silnějšímu jménu vašeho hotelu na rezervačních portálech i sociálních sítích.',
          icon: 'trending_up',
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
          icon: 'bolt'
        },
        {
          title: 'Efektivní správa',
          description: 'Centrální schránka s chytrým filtrováním zjednodušuje zpracování hodnocení, odstraňuje administrativní chaos a šetří drahocenný čas vašemu týmu.',
          icon: 'manage_accounts'
        },
        {
          title: 'Lepší přehled',
          description: 'Získejte dokonalý vhled do svého provozu. Snadno identifikujte opakující se nedostatky a odhalte konkrétní oblasti, které vyžadují vaši pozornost, abyste mohli neustále zvyšovat standard svých služeb.',
          icon: 'dashboard'
        },
        {
          title: 'Minimalizujte negativní recenze',
          description:
            'Vyřešte problémy hostů okamžitě přímo v hotelu. Nedejte nespokojenosti šanci přerůst ve veřejnou negativní recenzi na internetu a chraňte dobré jméno svého hotelu.',
          icon: 'chat_error'
        },
      ],
    }
  },
}
</script>