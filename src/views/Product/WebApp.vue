<template>
  <main>
    <!-- Hero -->
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {{ $t('webApp.section1.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('webApp.section1.desc') }}
            </p>
            <button
              class="w-full sm:w-auto bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              {{ $t('webApp.section1.button') }}
            </button>
          </div>

          <div class="flex items-center justify-center lg:justify-end">
            <div class="relative w-[280px] sm:w-[300px]">
              <div
                class="rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden"
              >
                <div class="h-6 bg-gray-900 flex items-center justify-center">
                  <div class="w-20 h-1 rounded-full bg-gray-700" />
                </div>
                <img
                  :src="image1"
                  :alt="$t('webApp.preview.screens.0')"
                  class="w-full aspect-[9/19] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- App preview -->
    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {{ $t('webApp.preview.title') }}
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {{ $t('webApp.preview.subtitle') }}
          </p>
        </header>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <figure
            v-for="(screen, index) in previewScreens"
            :key="screen.src"
            class="flex flex-col items-center"
          >
            <div
              class="w-full max-w-[200px] rounded-[1.75rem] border-[6px] border-gray-900 bg-gray-900 shadow-lg overflow-hidden"
            >
              <div class="h-4 bg-gray-900 flex items-center justify-center">
                <div class="w-14 h-0.5 rounded-full bg-gray-700" />
              </div>
              <img
                :src="screen.src"
                :alt="screen.label"
                class="w-full aspect-[9/16] object-cover object-top"
              />
            </div>
            <figcaption class="mt-4 text-sm sm:text-base font-semibold text-gray-900 text-center">
              {{ screen.label }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <Advantages
      :title="$t('webApp.section2.title')"
      :subtitle="$t('webApp.section2.subtitle')"
      :features="webAppAdvantages"
      background-color="bg-white"
    />

    <Features
      :image-src="image2"
      :image-alt="$t('webApp.section3.title')"
      :title="$t('webApp.section3.title')"
      :description="$t('webApp.section3.desc')"
      :features="webAppFeatures"
    />

    <HowItWorks
      :title="$t('webApp.section4.title')"
      :subtitle="$t('webApp.section4.subtitle')"
      :steps="webAppWork"
      :image="image3"
      :image-alt="$t('webApp.section4.title')"
      background-color="bg-[#f4f4f4]"
    />

    <Benefits
      :title="$t('webApp.section5.title')"
      :items="webAppBenefits"
      :rows="2"
      :columns="3"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import Features from '@/components/Features.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Benefits from '@/components/Benefits.vue'
import image1 from '@/assets/product/WebApp/1.png'
import image2 from '@/assets/product/WebApp/2.png'
import image3 from '@/assets/product/WebApp/3.png'
import image4 from '@/assets/product/WebApp/4.png'

export default {
  name: 'WebApp',
  components: {
    Advantages,
    Features,
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1,
      image2,
      image3,
      image4,
    }
  },
  computed: {
    previewScreens() {
      return [
        { src: image1, label: this.$t('webApp.preview.screens.0') },
        { src: image2, label: this.$t('webApp.preview.screens.1') },
        { src: image3, label: this.$t('webApp.preview.screens.2') },
        { src: image4, label: this.$t('webApp.preview.screens.3') },
      ]
    },
    webAppAdvantages() {
      return [
        {
          title: this.$t('webApp.section2.items.0'),
          description: this.$t('webApp.section2.desc.0'),
          icon: 'download',
        },
        {
          title: this.$t('webApp.section2.items.1'),
          description: this.$t('webApp.section2.desc.1'),
          icon: 'link',
        },
        {
          title: this.$t('webApp.section2.items.2'),
          description: this.$t('webApp.section2.desc.2'),
          icon: 'devices',
        },
      ]
    },
    webAppFeatures() {
      return [
        {
          title: this.$t('webApp.section3.items.0'),
          description: this.$t('webApp.section3.idesc.0'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('webApp.section3.items.1'),
          description: this.$t('webApp.section3.idesc.1'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('webApp.section3.items.2'),
          description: this.$t('webApp.section3.idesc.2'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('webApp.section3.items.3'),
          description: this.$t('webApp.section3.idesc.3'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: this.$t('webApp.section3.items.4'),
          description: this.$t('webApp.section3.idesc.4'),
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ]
    },
    webAppWork() {
      return [
        {
          title: this.$t('webApp.section4.items.0'),
          description: this.$t('webApp.section4.desc.0'),
        },
        {
          title: this.$t('webApp.section4.items.1'),
          description: this.$t('webApp.section4.desc.1'),
        },
        {
          title: this.$t('webApp.section4.items.2'),
          description: this.$t('webApp.section4.desc.2'),
        },
        {
          title: this.$t('webApp.section4.items.3'),
          description: this.$t('webApp.section4.desc.3'),
        },
      ]
    },
    webAppBenefits() {
      return [
        {
          title: this.$t('webApp.section5.items.0'),
          description: this.$t('webApp.section5.desc.0'),
          icon: 'mood',
        },
        {
          title: this.$t('webApp.section5.items.1'),
          description: this.$t('webApp.section5.desc.1'),
          icon: 'speed',
        },
        {
          title: this.$t('webApp.section5.items.2'),
          description: this.$t('webApp.section5.desc.2'),
          icon: 'savings',
        },
        {
          title: this.$t('webApp.section5.items.3'),
          description: this.$t('webApp.section5.desc.3'),
          icon: 'trending_up',
        },
        {
          title: this.$t('webApp.section5.items.4'),
          description: this.$t('webApp.section5.desc.4'),
          icon: 'palette',
        },
        {
          title: this.$t('webApp.section5.items.5'),
          description: this.$t('webApp.section5.desc.5'),
          icon: 'update',
        },
      ]
    },
  },
}
</script>
