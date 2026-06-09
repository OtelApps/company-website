<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {{ $t('analyticsInsights.section1.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('analyticsInsights.section1.desc') }}
            </p>
            <button
              class="w-full sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              {{ $t('analyticsInsights.section1.button') }}
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
      :title="$t('analyticsInsights.section2.title')"
      :subtitle="$t('analyticsInsights.section2.subtitle')"
      :features="analyticsInsightsAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Analytics & Insights Obrázek'"
      :title="$t('analyticsInsights.section3.title')"
      :description="$t('analyticsInsights.section3.desc')"
      :features="analyticsInsightsFeatures"
    />

    <HowItWorks
      :title="$t('analyticsInsights.section4.title')"
      :subtitle="$t('analyticsInsights.section4.subtitle')"
      :steps="analyticsInsightsWork"
      :image="image3"
      image-alt="Analytics & Insights Obrázek"
    />

    <Benefits
      :title="$t('analyticsInsights.section5.title')"
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

export default {
  name: 'AnalyticsInsights',
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
    }
  },
  computed: {
    analyticsInsightsAdvantages() {
      return [
        {
          title: this.$t('analyticsInsights.section2.items.0'),
          description: this.$t('analyticsInsights.section2.desc.0'),
          icon: 'overview',
        },
        {
          title: this.$t('analyticsInsights.section2.items.1'),
          description: this.$t('analyticsInsights.section2.desc.1'),
          icon: 'trending_up',
        },
        {
          title: this.$t('analyticsInsights.section2.items.2'),
          description: this.$t('analyticsInsights.section2.desc.2'),
          icon: 'analytics',
        },
      ]
    },
    analyticsInsightsFeatures() {
      return [
        {
          title: this.$t('analyticsInsights.section3.items.0'),
          description: this.$t('analyticsInsights.section3.idesc.0'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('analyticsInsights.section3.items.1'),
          description: this.$t('analyticsInsights.section3.idesc.1'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('analyticsInsights.section3.items.2'),
          description: this.$t('analyticsInsights.section3.idesc.2'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('analyticsInsights.section3.items.3'),
          description: this.$t('analyticsInsights.section3.idesc.3'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ]
    },
    analyticsInsightsWork() {
      return [
        {
          title: this.$t('analyticsInsights.section4.items.0'),
          description: this.$t('analyticsInsights.section4.desc.0'),
        },
        {
          title: this.$t('analyticsInsights.section4.items.1'),
          description: this.$t('analyticsInsights.section4.desc.1'),
        },
        {
          title: this.$t('analyticsInsights.section4.items.2'),
          description: this.$t('analyticsInsights.section4.desc.2'),
        },
        {
          title: this.$t('analyticsInsights.section4.items.3'),
          description: this.$t('analyticsInsights.section4.desc.3'),
        },
      ]
    },
    analyticsInsightsBenefits() {
      return [
        {
          title: this.$t('analyticsInsights.section5.items.0'),
          description: this.$t('analyticsInsights.section5.desc.0'),
          icon: 'arrow_split',
        },
        {
          title: this.$t('analyticsInsights.section5.items.1'),
          description: this.$t('analyticsInsights.section5.desc.1'),
          icon: 'dashboard',
        },
        {
          title: this.$t('analyticsInsights.section5.items.2'),
          description: this.$t('analyticsInsights.section5.desc.2'),
          icon: 'featured_seasonal_and_gifts',
        },
        {
          title: this.$t('analyticsInsights.section5.items.3'),
          description: this.$t('analyticsInsights.section5.desc.3'),
          icon: 'calendar_month',
        },
        {
          title: this.$t('analyticsInsights.section5.items.4'),
          description: this.$t('analyticsInsights.section5.desc.4'),
          icon: 'settings',
        },
        {
          title: this.$t('analyticsInsights.section5.items.5'),
          description: this.$t('analyticsInsights.section5.desc.5'),
          icon: 'integration_instructions',
        },
      ]
    },
  },
}
</script>
