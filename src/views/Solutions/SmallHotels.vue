<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">{{ $t('smallHotels.hero.title') }}</h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('smallHotels.hero.desc') }}
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              {{ $t('smallHotels.hero.button') }}
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
      :title="$t('smallHotels.advantages.title')"
      :subtitle="$t('smallHotels.advantages.subtitle')"
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
              {{ $t('smallHotels.keyFunctions.title') }}
            </h2>
            <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl">
              {{ $t('smallHotels.keyFunctions.desc') }}
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
      :title="$t('smallHotels.howItWorks.title')"
      :subtitle="$t('smallHotels.howItWorks.subtitle')"
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
    }
  },
  computed: {
    smallHotelsAdvantages() {
      return [
        {
          title: this.$t('smallHotels.advantages.f1.title'),
          description: this.$t('smallHotels.advantages.f1.desc'),
          icon: 'clock_arrow_down',
        },
        {
          title: this.$t('smallHotels.advantages.f2.title'),
          description: this.$t('smallHotels.advantages.f2.desc'),
          icon: 'desktop_windows',
        },
        {
          title: this.$t('smallHotels.advantages.f3.title'),
          description: this.$t('smallHotels.advantages.f3.desc'),
          icon: 'chart_data',
        },
        {
          title: this.$t('smallHotels.advantages.f4.title'),
          description: this.$t('smallHotels.advantages.f4.desc'),
          icon: 'mood',
        },
        {
          title: this.$t('smallHotels.advantages.f5.title'),
          description: this.$t('smallHotels.advantages.f5.desc'),
          icon: 'bolt',
        },
        {
          title: this.$t('smallHotels.advantages.f6.title'),
          description: this.$t('smallHotels.advantages.f6.desc'),
          icon: 'settings_applications',
        },
      ]
    },
    keyFunctions() {
      return [
        {
          title: this.$t('smallHotels.keyFunctions.f1.title'),
          description: this.$t('smallHotels.keyFunctions.f1.desc'),
          icon: 'cloud_done',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f2.title'),
          description: this.$t('smallHotels.keyFunctions.f2.desc'),
          icon: 'date_range',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f3.title'),
          description: this.$t('smallHotels.keyFunctions.f3.desc'),
          icon: 'network_intel_node',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f4.title'),
          description: this.$t('smallHotels.keyFunctions.f4.desc'),
          icon: 'ar_on_you',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f5.title'),
          description: this.$t('smallHotels.keyFunctions.f5.desc'),
          icon: 'price_change',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f6.title'),
          description: this.$t('smallHotels.keyFunctions.f6.desc'),
          icon: 'health_and_safety',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f7.title'),
          description: this.$t('smallHotels.keyFunctions.f7.desc'),
          icon: 'manage_accounts',
        },
        {
          title: this.$t('smallHotels.keyFunctions.f8.title'),
          description: this.$t('smallHotels.keyFunctions.f8.desc'),
          icon: 'analytics',
        },
      ]
    },
    smallHotelsWork() {
      return [
        {
          title: this.$t('smallHotels.howItWorks.step1.title'),
          description: this.$t('smallHotels.howItWorks.step1.desc'),
        },
        {
          title: this.$t('smallHotels.howItWorks.step2.title'),
          description: this.$t('smallHotels.howItWorks.step2.desc'),
        },
        {
          title: this.$t('smallHotels.howItWorks.step3.title'),
          description: this.$t('smallHotels.howItWorks.step3.desc'),
        },
      ]
    },
  },
}
</script>
