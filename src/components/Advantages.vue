<template>
  <section class="py-16" :class="backgroundColor">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{{ title }}</h2>
        <p class="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
        <div class="w-12 h-12 flex items-center justify-center mb-4">
          <span class="material-symbols-outlined text-[#f5a623]"
                style="font-size: 35px; font-variation-settings: 'opsz' 40;"
          >
            {{ feature.icon }}
          </span>
        </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-sm sm:text-base text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Advantages',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: 'bg-[#f4f4f4]',
    },
  },
}
</script>
