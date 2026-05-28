<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-4 sm:space-y-8">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {{ $t('hotelDirectory.section1.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('hotelDirectory.section1.desc') }}
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
            {{ $t('hotelDirectory.section1.button') }}
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
      :title="$t('hotelDirectory.section2.title')"
      :subtitle="$t('hotelDirectory.section2.subtitle')"
      :features="hotelDirectoryAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <Features
      :image-src="image2"
      :image-alt="'Hotel Directory Obrázek'"
      :title="$t('hotelDirectory.section3.title')"
      :description="$t('hotelDirectory.section3.desc')"
      :features="hotelDirectoryFeatures"
    />

    <HowItWorks
      :title="$t('hotelDirectory.section4.title')"
      :subtitle="$t('hotelDirectory.section4.subtitle')"
      :steps="hotelDirectoryWork"
      :image="image3"
      image-alt="Hotel Directory Obrázek"
    />

    <Benefits
      :title="$t('hotelDirectory.section5.title')"
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
    }
  },
  computed: {
    hotelDirectoryAdvantages() {
      return [
        {
          title: this.$t('hotelDirectory.section2.items.0'),
          description: this.$t('hotelDirectory.section2.desc.0'),
          icon: 'info',
        },
        {
          title: this.$t('hotelDirectory.section2.items.1'),
          description: this.$t('hotelDirectory.section2.desc.1'),
          icon: 'phone_callback',
        },
        {
          title: this.$t('hotelDirectory.section2.items.2'),
          description: this.$t('hotelDirectory.section2.desc.2'),
          icon: 'sell',
        },
      ]
    },
    hotelDirectoryFeatures() {
      return [
        {
          title: this.$t('hotelDirectory.section3.items.0'),
          description: this.$t('hotelDirectory.section3.idesc.0'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('hotelDirectory.section3.items.1'),
          description: this.$t('hotelDirectory.section3.idesc.1'),
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: this.$t('hotelDirectory.section3.items.2'),
          description: this.$t('hotelDirectory.section3.idesc.2'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('hotelDirectory.section3.items.3'),
          description: this.$t('hotelDirectory.section3.idesc.3'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ]
    },
    hotelDirectoryWork() {
      return [
        {
          title: this.$t('hotelDirectory.section4.items.0'),
          description: this.$t('hotelDirectory.section4.desc.0'),
        },
        {
          title: this.$t('hotelDirectory.section4.items.1'),
          description: this.$t('hotelDirectory.section4.desc.1'),
        },
        {
          title: this.$t('hotelDirectory.section4.items.2'),
          description: this.$t('hotelDirectory.section4.desc.2'),
        },
      ]
    },
    hotelDirectoryBenefits() {
      return [
        {
          title: this.$t('hotelDirectory.section5.items.0'),
          description: this.$t('hotelDirectory.section5.desc.0'),
          icon: 'group'
        },
        {
          title: this.$t('hotelDirectory.section5.items.1'),
          description: this.$t('hotelDirectory.section5.desc.1'),
          icon: 'rule_settings'
        },
        {
          title: this.$t('hotelDirectory.section5.items.2'),
          description: this.$t('hotelDirectory.section5.desc.2'),
          icon: 'payments'
        },
        {
          title: this.$t('hotelDirectory.section5.items.3'),
          description: this.$t('hotelDirectory.section5.desc.3'),
          icon: 'chart_data'
        },
        {
          title: this.$t('hotelDirectory.section5.items.4'),
          description: this.$t('hotelDirectory.section5.desc.4'),
          icon: 'mood'
        },
      ]
    }
  }
}
</script>