<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {{ $t('instantFeedback.section1.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('instantFeedback.section1.desc') }}
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
            {{ $t('instantFeedback.section1.button') }}
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
      :title="$t('instantFeedback.section2.title')"
      :subtitle="$t('instantFeedback.section2.subtitle')"
      :features="instantFeedbackAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Instant Feedback obrázek'"
      :title="$t('instantFeedback.section3.title')"
      :description="$t('instantFeedback.section3.desc')"
      :features="instantFeedbackFeatures"
    />

    <HowItWorks
      :title="$t('instantFeedback.section4.title')"
      :subtitle="$t('instantFeedback.section4.subtitle')"
      :steps="instantFeedbackWork"
      :image="image3"
      image-alt="Instant Feedback obrázek"
    />

    <Benefits
      :title="$t('instantFeedback.section5.title')"
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
    }
  },
  computed: {
    instantFeedbackAdvantages() {
      return [
        {
          title: this.$t('instantFeedback.section2.items.0'),
          description: this.$t('instantFeedback.section2.desc.0'),
          icon: 'alarm',
        },
        {
          title: this.$t('instantFeedback.section2.items.1'),
          description: this.$t('instantFeedback.section2.desc.1'),
          icon: 'report',
        },
        {
          title: this.$t('instantFeedback.section2.items.2'),
          description: this.$t('instantFeedback.section2.desc.2'),
          icon: 'trending_up',
        },
      ]
    },
    instantFeedbackFeatures() {
      return [
        {
          title: this.$t('instantFeedback.section3.items.0'),
          description: this.$t('instantFeedback.section3.idesc.0'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('instantFeedback.section3.items.1'),
          description: this.$t('instantFeedback.section3.idesc.1'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('instantFeedback.section3.items.2'),
          description: this.$t('instantFeedback.section3.idesc.2'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('instantFeedback.section3.items.3'),
          description: this.$t('instantFeedback.section3.idesc.3'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ]
    },
    instantFeedbackWork() {
      return [
        {
          title: this.$t('instantFeedback.section4.items.0'),
          description: this.$t('instantFeedback.section4.desc.0'),
        },
        {
          title: this.$t('instantFeedback.section4.items.1'),
          description: this.$t('instantFeedback.section4.desc.1'),
        },
        {
          title: this.$t('instantFeedback.section4.items.2'),
          description: this.$t('instantFeedback.section4.desc.2'),
        },
        {
          title: this.$t('instantFeedback.section4.items.3'),
          description: this.$t('instantFeedback.section4.desc.3'),
        },
      ]
    },
    instantFeedbackBenefits() {
      return [
        {
          title: this.$t('instantFeedback.section5.items.0'),
          description: this.$t('instantFeedback.section5.desc.0'),
          icon: 'bolt',
        },
        {
          title: this.$t('instantFeedback.section5.items.1'),
          description: this.$t('instantFeedback.section5.desc.1'),
          icon: 'manage_accounts',
        },
        {
          title: this.$t('instantFeedback.section5.items.2'),
          description: this.$t('instantFeedback.section5.desc.2'),
          icon: 'dashboard',
        },
        {
          title: this.$t('instantFeedback.section5.items.3'),
          description: this.$t('instantFeedback.section5.desc.3'),
          icon: 'chat_error',
        },
      ]
    },
  },
}
</script>