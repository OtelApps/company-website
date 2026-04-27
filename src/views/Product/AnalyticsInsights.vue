<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dělejte rozhodnutí na základě reálných dat
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Získejte okamžitý přehled o tom, jak hosté využívají vaše služby. Díky statistikám přesně zjistíte, 
              co funguje skvěle a kde je prostor pro zlepšení. S jasnými daty v ruce učiníte moudřejší rozhodnutí, 
              která podpoří růst vašeho hotelu.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Analytics & Insights Obrázek" class="w-3/4">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Proměňte data v chytrá rozhodnutí"
      subtitle="Analytika vám poskytnou dokonalý vhled do chodu vašeho hotelu. Pomůžou vám včas odhalit trendy, 
      lépe porozumět chování hostů a optimalizovat vaši nabídku tak, abyste dosáhli maximálních výsledků a vyššího zisku."
      :features="analyticsInsightsAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Analytics & Insights Obrázek'"
      title="Klíčové funkce pro váš růst"
      description="Získejte vhled, který posunou váš hotel vpřed. Naše výkonné analytické nástroje vám poskytnou přesně ta data, 
      která potřebujete pro strategická rozhodnutí a trvalý rozvoj vašeho hotelu."
      :features="analyticsInsightsFeatures"
    />

    <HowItWorks
      title="Jak to funguje?"
      subtitle="Naše platforma mění složitou analýzu dat na srozumitelný a snadný proces. Získejte snadný přístup ke klíčovým informacím, 
      které vám umožní okamžitě reagovat a dělat rozhodnutí, která posunou váš hotel vpřed."
      :steps="analyticsInsightsWork"
      :image="image3"
      image-alt="Analytics & Insights Obrázek"
    />

    <Benefits
      title="Výhody pro váš hotelový management"
      :items="analyticsInsightsBenefits"
      :rows="2"
      :columns="3"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/Analytics/1.png'
import image2 from '@/assets/product/Analytics/2.png'
import image3 from '@/assets/product/Analytics/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import Improvement from '@/components/Improvement.vue'

export default {
  name: 'AnalyticsInsights',
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
      analyticsInsightsAdvantages: [
        {
          title: 'Okamžitý přehled',
          description: 'Sledujte zájem o své služby a aktuální tržby v momentě, kdy vznikají. Mějte okamžitý a přesný přehled o dění v hotelu.',
          icon: 'overview',
        },
        {
          title: 'Rozpoznejte trendy',
          description:
            'Analyzujte historická data a odhalte skryté vzorce v chování svých hostů. Předvídejte budoucí trendy a přizpůsobte svou nabídku i kapacity dříve, než to udělá konkurence.',
          icon: 'trending_up',
        },
        {
          title: 'Hloubková analýza a segmentace',
          description:
            'Ponořte se do detailů, které rozhodují o vašem zisku. Segmentujte data podle času, typu služby nebo demografie hostů. Získejte tak dokonalý přehled o tom, kdo jsou vaši zákazníci a co přesně v vyhledávají.',
          icon: 'analytics',
        },
      ],
      analyticsInsightsFeatures: [
        {
          title: 'Real-Time Dashboards: ',
          description:
            'Sledujte využívání služeb, toky tržeb a spokojenost hostů v reálném čase.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Export dat do CSV: ',
          description:
            'Snadno exportujte svá data pro offline analýzu nebo pro použití v dalších nástrojích.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Uživatelská oprávnění a role: ',
          description: 'Mějte plnou kontrolu nad tím, kdo má přístup k citlivým datům díky definovaným rolím.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Integrace pomoci API: ',
          description:
            'Propojte data z Otel Apps se svými stávajícími systémy (PMS, CRM, ERP) pro ucelený pohled na provoz.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      analyticsInsightsWork: [
        {
          title: 'Přehledný dashboard',
          description: 'Data z celého hotelu se automaticky sbírají a vizualizují v reálném čase na intuitivní nástěnce.',
        },
        {
          title: 'Chytrá filtrace a analýza',
          description:
            'Používejte filtry pro hloubkovou analýzu konkrétních oblastí. Odhalte skryté souvislosti a získejte cenné vhledy do chodu hotelu.',
        },
        {
          title: 'Export a integrace',
          description: 'Snadno exportujte reporty pro další zpracování nebo využijte naše API pro propojení s vašimi dalšími systémy.',
        },
        {
          title: 'Zabezpečený přístup',
          description:
            'Spravujte uživatelská oprávnění tak, aby ke konkrétním a citlivým datům měli přístup jen ti správní lidé.',
        },
      ],
      analyticsInsightsBenefits: [
        {
          title: 'Lepší Decision-Making',
          description: 'Přestaňte se spoléhat na odhady a začněte budovat úspěch svého hotelu na datech, která máte díky Otel Apps neustále k dispozici.',
          icon: 'arrow_split'
        },
        {
          title: 'Jasný přehled o výsledcích',
          description: 'Získejte ucelený pohled na výkonnost celého hotelu. Sledujte, jak se daří jednotlivým službám a odhalte skrytý potenciál svého hotelu.',
          icon: 'dashboard'
        },
        {
          title: 'Nabídka ušitá na míru',
          description: 'Zjistěte, co vaši hosté skutečně milují, a přizpůsobte své služby jejich přáním.',
          icon: 'featured_seasonal_and_gifts'
        },
        {
          title: 'Strategické plánování',
          description: 'Dívejte se dál než jen na příští sezónu. Identifikujte dlouhodobé trendy, které se stanou pevným základem pro vaše budoucí investice a plány růstu.',
          icon: 'calendar_month'
        },
        {
          title: 'Absolutní kontrola nad přístupem',
          description: 'Zajistěte stoprocentní bezpečnost svých informací. Mějte pod kontrolou, kdo může nahlížet do citlivých dat nebo finančních reportů, a chraňte své firemní know-how i soukromí svých hostů.',
          icon: 'settings'
        },
        {
          title: 'Hladká integrace bez komplikací',
          description: 'Bezproblémové propojení s vašimi stávajícími hotelovými systémy.',
          icon: 'integration_instructions'
        },
      ],
    }
  },
}
</script>
