<template>
  <section class="py-16 px-6" :class="backgroundColor">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Levá strana - title, subtitle a kroky -->
        <div>
          <div class="text-left mb-8">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{{ title }}</h2>
            <p class="text-base sm:text-lg text-gray-700">
              {{ subtitle }}
            </p>
          </div>

          <div class="space-y-8">
            <div v-for="(step, index) in steps" :key="index" class="flex items-start space-x-4">
              <!-- Číslovaný kruh -->
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
                </div>
              </div>

              <!-- Obsah kroku -->
              <div class="flex-1">
                <h3 class=" text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-sm sm:text-base text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pravá strana - obrázek -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <img :src="image" :alt="imageAlt" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
      validator: (steps) => {
        return steps.every((step) => step.title && step.description)
      },
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'How it works illustration',
    },
    backgroundColor: {
      type: String,
      default: 'bg-white',
    },
    showDecorativeElements: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
