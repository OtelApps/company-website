<template>
  <main>
    <section>
      <div class="max-w-screen-2xl mx-auto px-8 py-8 sm:py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              {{ $t('boutiques.hero.title') }}
            </h1>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              {{ $t('boutiques.hero.desc') }}
            </p>
            <button
              class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
            >
              {{ $t('boutiques.hero.button') }}
            </button>
          </div>

          <!-- Right Section - Image -->
          <div class="flex items-center justify-center lg:justify-end">
            <img :src="image1" alt="Boutigues obrázek" class="w-9/10" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {{ $t('boutiques.features.title') }}
          </h2>
          <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {{ $t('boutiques.features.desc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in boutiquesFeatures"
            :key="index"
            class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center"
          >
            <div class="w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <span
                class="material-symbols-outlined text-[#f5a623]"
                style="font-size: 35px; font-variation-settings: 'opsz' 40"
              >
                {{ feature.icon }}
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Functions Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <!-- Left visual placeholder -->
          <div class="lg:col-span-2 flex items-center justify-center">
            <img :src="image2" alt="Boutigues obrázek" class="w-full" />
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3 px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {{ $t('boutiques.keyFunctions.title') }}
            </h2>
            <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl">
              {{ $t('boutiques.keyFunctions.desc') }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div
                v-for="(item, index) in keyFunctions"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="w-12 h-12 flex items-start justify-start">
                  <span
                    class="material-symbols-outlined text-[#f5a623]"
                    style="font-size: 35px; font-variation-settings: 'opsz' 40"
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
      :title="$t('boutiques.howItWorks.title')"
      :subtitle="$t('boutiques.howItWorks.subtitle')"
      :steps="boutiquesWork"
      :image="image3"
      image-alt="Boutigues obrázek"
    />

    <Benefits
      :title="$t('boutiques.benefits.title')"
      :items="boutiquesBenefits"
      :rows="1"
      :columns="2"
    />
  </main>
</template>

<script>
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/solutions/Boutigues/1.png'
import image2 from '@/assets/solutions/Boutigues/2.png'
import image3 from '@/assets/solutions/Boutigues/3.png'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'Boutigues',
  components: {
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
    boutiquesFeatures() {
      return [
        {
          title: this.$t('boutiques.features.f1.title'),
          description: this.$t('boutiques.features.f1.desc'),
          icon: 'crown',
        },
        {
          title: this.$t('boutiques.features.f2.title'),
          description: this.$t('boutiques.features.f2.desc'),
          icon: 'loyalty',
        },
        {
          title: this.$t('boutiques.features.f3.title'),
          description: this.$t('boutiques.features.f3.desc'),
          icon: 'handshake',
        },
        {
          title: this.$t('boutiques.features.f4.title'),
          description: this.$t('boutiques.features.f4.desc'),
          icon: 'clock_arrow_down',
        },
      ]
    },
    keyFunctions() {
      return [
        {
          title: this.$t('boutiques.keyFunctions.f1.title'),
          description: this.$t('boutiques.keyFunctions.f1.desc'),
          icon: 'screen_search_desktop',
        },
        {
          title: this.$t('boutiques.keyFunctions.f2.title'),
          description: this.$t('boutiques.keyFunctions.f2.desc'),
          icon: 'comment',
        },
        {
          title: this.$t('boutiques.keyFunctions.f3.title'),
          description: this.$t('boutiques.keyFunctions.f3.desc'),
          icon: 'analytics',
        },
        {
          title: this.$t('boutiques.keyFunctions.f4.title'),
          description: this.$t('boutiques.keyFunctions.f4.desc'),
          icon: 'trip',
        },
        {
          title: this.$t('boutiques.keyFunctions.f5.title'),
          description: this.$t('boutiques.keyFunctions.f5.desc'),
          icon: 'chat',
        },
        {
          title: this.$t('boutiques.keyFunctions.f6.title'),
          description: this.$t('boutiques.keyFunctions.f6.desc'),
          icon: 'spa',
        },
        {
          title: this.$t('boutiques.keyFunctions.f7.title'),
          description: this.$t('boutiques.keyFunctions.f7.desc'),
          icon: 'mobile',
        },
      ]
    },
    boutiquesWork() {
      return [
        {
          title: this.$t('boutiques.howItWorks.step1.title'),
          description: this.$t('boutiques.howItWorks.step1.desc'),
        },
        {
          title: this.$t('boutiques.howItWorks.step2.title'),
          description: this.$t('boutiques.howItWorks.step2.desc'),
        },
        {
          title: this.$t('boutiques.howItWorks.step3.title'),
          description: this.$t('boutiques.howItWorks.step3.desc'),
        },
      ]
    },
    boutiquesBenefits() {
      return [
        {
          title: this.$t('boutiques.benefits.b1.title'),
          description: this.$t('boutiques.benefits.b1.desc'),
          icon: 'mobile_2',
        },
        {
          title: this.$t('boutiques.benefits.b2.title'),
          description: this.$t('boutiques.benefits.b2.desc'),
          icon: 'person',
        },
      ]
    },
  },
}
</script>
