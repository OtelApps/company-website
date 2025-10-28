<template>
  <section class="py-16 px-4" :class="backgroundColor">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path :d="feature.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">
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
