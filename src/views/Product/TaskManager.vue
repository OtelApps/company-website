<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Mějte přání svých hostů pod kontrolou
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Zvyšte produktivitu svého týmu při péči o hosty. Díky centralizaci všech úkolů a požadavků na jednom místě 
              získáte dokonalý přehled a zajistíte, že žádné přání nezůstane bez odezvy.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Task Manager Obrázek" class="w-3/4">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Už žádné zapomenuté přání hosta"
      subtitle="Náš Task Manager sjednocuje veškeré požadavky na jednom místě. Od objednávek na pokoj až po hlášení technických 
      závad. Váš tým tak může každý úkol sledovat a vyřešit s maximální efektivitou. Už žádné ztracené lístky, žádné zmatky a žádná frustrace."
      :features="taskManagerAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Task Manager obrázek'"
      title="Klíčové funkce"
      description="Náš Task Manager je navržen tak, aby do vašeho každodenního provozu vnesl dokonalý řád a efektivitu. 
      Díky výkonným a přitom intuitivním funkcím získáte nástroj, který vašemu týmu uvolní ruce pro to nejdůležitější, péči o hosty."
      :features="taskManagerFeatures"
    />

    <HowItWorks
      title="Jak to funguje?"
      subtitle="Zjednodušte své pracovní postupy díky procesu, který udrží celý váš tým v dokonalém souladu a zajistí, že vaši hosté budou odcházet nadšení."
      :steps="taskManagerWork"
      :image="image3"
      image-alt="Task Manager obrázek"
    />

    <Benefits
      title="Výhody pro váš hotelový a tým"
      :items="taskManagerBenefits"
      :rows="2"
      :columns="3"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/TaskManager/1.png'
import image2 from '@/assets/product/TaskManager/2.png'
import image3 from '@/assets/product/TaskManager/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'TaskManager',
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
      taskManagerAdvantages: [
        {
          title: 'Všechny úkoly pod jednou střechou',
          description:
            'Získejte absolutní kontrolu nad chodem hotelu. Sledujte všechny čekající, rozpracované i dokončené úkoly v reálném čase z jednoho přehledného dashboardu, kde vám nic neunikne.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Dokonalá souhra všech oddělení',
          description:
            'Delegujte požadavky hostů okamžitě těm správným lidem. Přiřazujte úkoly úklidu, údržbě nebo dalším týmům bleskově a bez chyb. Zajistěte, aby o každém požadavku věděli přesně ti kolegové, kteří ho mají vyřešit.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Aktualizace v reálném čase',
          description: 'Mějte hosty i svůj tým neustále v obraze. Sledujte průběh každého požadavku v přímém přenosu, od jeho přijetí až po finální vyřešení.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      taskManagerFeatures: [
        {
          title: 'Centrální dashboard: ',
          description:
            'Sledujte všechny úkoly přehledně podle jejich stavu: čekající, v řešení nebo dokončeno. Už nikdy neztratíte žádný požadavek.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Specifické typy požadavků: ',
          description:
            'Spravujte požadavky na vybavení, technickou podporu nebo úklid díky dedikovaným kategoriím, které vnesou do práce řád.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Sledování stavu případů: ',
          description:
            'Poskytněte hostům aktuální informace o průběhu jejich požadavku. Zvýšíte tím jejich klid i celkový zážitek z pobytu.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Mobilní přístup pro personál: ',
          description:
            'Váš tým může přijímat a spravovat úkoly „za pochodu“ na jakémkoli mobilním zařízení kdekoli v areálu hotelu.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Nastavitelná transparentnost: ',
          description: "Mějte plnou kontrolu nad tím, kolik detailů o průběhu řešení úkolu host uvidí. Vy rozhodujete, co je podstatné.",
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      taskManagerWork: [
        {
          title: 'Požadavky na jednom místě',
          description:
            'Veškerá přání hostů z jakéhokoli kanálu se automaticky zaznamenávají do centrálního systému.',
        },
        {
          title: 'Delegování',
          description:
            'Úkoly jsou okamžitě delegovány správnému oddělení a vy můžete v reálném čase sledovat jejich průběh od začátku až do konce.',
        },
        {
          title: 'Efektivita v terénu',
          description:
            'Váš tým spravuje a aktualizuje úkoly přímo v sytému. Informace jsou tak bleskově dostupné pro všechny kolegy.',
        },
        {
          title: 'Informovaný host i tým',
          description:
            'Jakmile se změní stav úkolu, host i personál dostanou automatické upozornění.',
        },
      ],
      taskManagerBenefits: [
        {
          title: 'Lepší organizace',
          description: 'Dejte sbohem provoznímu chaosu a zajistěte, aby žádný úkol nebyl zapomenut.',
        },
        {
          title: 'Navyšte efektivitu',
          description: 'Zrychlete vyřízení každého požadavku na maximum a získejte více času pro své hosty díky chytrému workflow, které pracuje za vás.',
        },
        {
          title: 'Zlepšete komunikaci',
          description: 'Díky centralizovaným informacím a automatickým upozorněním bude váš hotel fungovat jako jeden celek, kde každý přesně ví, co se právě děje i váš host.',
        },
        {
          title: 'Modernizace hotelového provozu',
          description: 'Nahraďte zastaralé metody elegantním digitálním řešením, které do vašeho hotelu vnese klid, profesionalitu a dokonalý přehled.',
        },
        {
          title: 'Měřitelný přínos pro váš hotel',
          description: 'Naše pokročilá analytika vám umožní sledovat výkonnost týmu , identifikovat slabá místa v provozu a okamžitě reagovat na podněty, které brzdí váš růst.',
        },
        {
          title: 'Intuitivní a jednoduché ovládání',
          description: 'Díky přehlednému prostředí se váš tým naučí se systémem Otel Apps pracovat během chvíle.',
        },
      ],
    }
  },
}
</script>