<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {{ $t('mobileOrdering.section1.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('mobileOrdering.section1.desc') }}
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              {{ $t('mobileOrdering.section1.button') }}
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
      :title="$t('mobileOrdering.section2.title')"
      :subtitle="$t('mobileOrdering.section2.subtitle')"
      :features="mobileOrderingAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Mobile Ordering obrázek'"
      :title="$t('mobileOrdering.section3.title')"
      :description="$t('mobileOrdering.section3.desc')"
      :features="mobileOrderingFeatures"
    />

    <HowItWorks
      :title="$t('mobileOrdering.section4.title')"
      :subtitle="$t('mobileOrdering.section4.subtitle')"
      :steps="mobileOrderingWork"
      :image="image3"
      image-alt="Mobile Ordering obrázek"
    />

    <Benefits
      :title="$t('mobileOrdering.section5.title')"
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
    }
  },
  computed: {
    mobileOrderingAdvantages() {
      return [
        {
          title: this.$t('mobileOrdering.section2.items.0'),
          description: this.$t('mobileOrdering.section2.desc.0'),
          icon: 'qr_code_2',
        },
        {
          title: this.$t('mobileOrdering.section2.items.1'),
          description: this.$t('mobileOrdering.section2.desc.1'),
          icon: 'menu',
        },
        {
          title: this.$t('mobileOrdering.section2.items.2'),
          description: this.$t('mobileOrdering.section2.desc.2'),
          icon: 'payments',
        },
      ]
    },
    mobileOrderingFeatures() {
      return [
        {
          title: this.$t('mobileOrdering.section3.items.0'),
          description: this.$t('mobileOrdering.section3.idesc.0'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('mobileOrdering.section3.items.1'),
          description: this.$t('mobileOrdering.section3.idesc.1'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('mobileOrdering.section3.items.2'),
          description: this.$t('mobileOrdering.section3.idesc.2'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('mobileOrdering.section3.items.3'),
          description: this.$t('mobileOrdering.section3.idesc.3'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('mobileOrdering.section3.items.4'),
          description: this.$t('mobileOrdering.section3.idesc.4'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ]
    },
    mobileOrderingWork() {
      return [
        {
          title: this.$t('mobileOrdering.section4.items.0'),
          description: this.$t('mobileOrdering.section4.desc.0'),
        },
        {
          title: this.$t('mobileOrdering.section4.items.1'),
          description: this.$t('mobileOrdering.section4.desc.1'),
        },
        {
          title: this.$t('mobileOrdering.section4.items.2'),
          description: this.$t('mobileOrdering.section4.desc.2'),
        },
        {
          title: this.$t('mobileOrdering.section4.items.3'),
          description: this.$t('mobileOrdering.section4.desc.3'),
        },
      ]
    },
    mobileOrderingBenefits() {
      return [
        {
          title: this.$t('mobileOrdering.section5.items.0'),
          description: this.$t('mobileOrdering.section5.desc.0'),
          icon: 'speed',
        },
        {
          title: this.$t('mobileOrdering.section5.items.1'),
          description: this.$t('mobileOrdering.section5.desc.1'),
          icon: 'chart_data',
        },
        {
          title: this.$t('mobileOrdering.section5.items.2'),
          description: this.$t('mobileOrdering.section5.desc.2'),
          icon: 'paid',
        },
        {
          title: this.$t('mobileOrdering.section5.items.3'),
          description: this.$t('mobileOrdering.section5.desc.3'),
          icon: 'dining',
        },
        {
          title: this.$t('mobileOrdering.section5.items.4'),
          description: this.$t('mobileOrdering.section5.desc.4'),
          icon: 'add_reaction',
        },
        {
          title: this.$t('mobileOrdering.section5.items.5'),
          description: this.$t('mobileOrdering.section5.desc.5'),
          icon: 'analytics',
        },
      ]
    },
  },
}
</script>
