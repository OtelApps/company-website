<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-4 sm:space-y-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Digitální průvodce hotelem
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Vytvořte pro své hosty digitální prostor, kde najdou vše potřebné. Veškeré důležité informace o 
              hotelu tak budou mít na jednom místě, vždy dostupné a aktuální.
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              Vyzkoušet demo-verzi
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-center lg:justify-end">
            <img :src="image1" alt="Hotel Directory Obrázek" class="w-[80%]">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Virtuální průvodce hotelem"
      subtitle="Váš virtuální průvodce sjednocuje veškeré důležité informace na jednom místě a nabízí hostům 
                intuitivní samoobslužný nástroj, díky kterému mají vše potřebné okamžitě po ruce."
      :features="hotelDirectoryAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Hotel Directory Obrázek'"
      title="Co všechno můžete aplikace zahrnout?"
      description="Náš flexibilní systém podporuje širokou škálu typů obsahu, díky čemuž pokryje veškeré individuální potřeby vašeho hotelu."
      :features="hotelDirectoryFeatures"
    />

    <HowItWorks
      title="Dynamický obsah pod vaší kontrolou"
      subtitle="Udržujte informace o svém hotelu neustále aktuální a snadno dostupné. Náš systém jsme navrhli pro maximálně 
                jednoduchou správu obsahu, která šetří čas personálu a hostům přináší ničím nerušený digitální zážitek"
      :steps="hotelDirectoryWork"
      :image="image3"
      image-alt="Hotel Directory Obrázek"
    />

    <Benefits
      title="Provozní výhody"
      :items="hotelDirectoryBenefits"
      :rows="1"
      :columns="5"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import image1 from '@/assets/product/HotelDirectory/1.png'
import image2 from '@/assets/product/HotelDirectory/2.png'
import image3 from '@/assets/product/HotelDirectory/3.png'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'HotelDirectory',
  components: {
    Advantages,
    Features,
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      hotelDirectoryAdvantages: [
        {
          title: 'Veškeré informace na jednom místě',
          description:
            'Od časů příjezdu a odjezdu přes instrukce k vybavení pokoje až po bezpečnostní pokyny a FAQ – vše je hostům k dispozici okamžitě, digitálně a přehledně.',
          icon: 'info',
        },
        {
          title: 'Méně volání na recepci',
          description:
            'Umožněte hostům najít odpovědi vlastními silami. Snížíte tím pracovní vytížení recepce a uvolníte ruce personálu pro důležitější úkoly.',
          icon: 'phone_callback',
        },
        {
          title: 'Příležitosti k upsellingu',
          description:
            'Propagujte speciální služby, exkluzivní balíčky a produkty přímo v aplikaci a navyšte své tržby z prodeje doplňkových produktů a služeb.',
          icon: 'sell',
        },
      ],
      hotelDirectoryFeatures: [
        {
          title: 'Klíčové informace: ',
          description: 'Přehledně zpracované časy příjezdu a odjezdu (check-in/out), instrukce k vybavení pokojů a jasná pravidla pro ubytování s domácími mazlíčky či zásady kouření',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Vybavení a služby: ',
          description: 'Aktuální otevírací doby bazénů, wellness centra, restaurací a další.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Bohatý obsah: ',
          description:
            'Každý záznam v aplikaci může obsahovat poutavé texty, ikony, fotografie, videa, interaktivní mapy nebo akční tlačítka pro okamžitou objednávku.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Aktualizace v reálném čase: ',
          description:
            'Upravujte veškeré informace v reálném čase skrze webové rozhraní. Tím zajistíte, že vaši hosté budou mít v aplikaci vždy ty nejčerstvější detaily.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
      hotelDirectoryWork: [
        {
          title: 'Aktualizace v reálném čase:',
          description:
            'Veškeré změny se u hostů projeví okamžitě. To zaručuje 100% konzistenci a aktuálnost informací napříč celým hotelem.',
        },
        {
          title: 'Strukturované kategorie:',
          description:
            'Organizujte svůj obsah pomocí intuitivních ikon pro snadné prohlížení a bleskový přístup ke službám.',
        },
        {
          title: 'Podpora více jazyků:',
          description:
            "Nabídněte hostům informace v jejich rodném jazyce. Personalizovaný zážitek je klíčem ke spokojenosti hostů a lepším recenzím.",
        },
      ],
      hotelDirectoryBenefits: [
        {
          title: 'Úleva pro váš personál',
          description:
            'Automatizace požadavků hostů výrazně snižuje pracovní vytížení personálu na recepci i v dalších odděleních',
          icon: 'group'
        },
        {
          title: 'Zefektivnění provozu a kontrola procesů',
          description: 'Digitalizace rutinních úkonů vede k vyšší efektivitě a lepší kontrole nad veškerými procesy v hotelu.',
          icon: 'rule_settings'
        },
        {
          title: 'Optimalizace nákladů',
          description:
            'Přechod na digitální řešení šetří náklady na tisk a zefektivňuje správu doplňkových služeb.',
          icon: 'payments'
        },
        {
          title: 'Data pro strategické řízení',
          description:
            'Management získává přístup k detailním reportům a analýzám, které umožňují dělat správná rozhodnutí podložená reálnými daty',
          icon: 'chart_data'
        },
        {
          title: 'Zlepšete zážitek svých hostů',
          description:
            'Usnadněte hostům přístup k informacím a vytvořte podmínky pro hladší a příjemnější pobyt ve vašem hotelu',
          icon: 'mood'
        },
      ],
    }
  },
}
</script>