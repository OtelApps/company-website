<template>
  <section class="py-16 bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">{{ title }}</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">{{ subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 lg:ml-50 lg:mr-50">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-[#f9fafb] rounded-xl border border-gray-800 p-6 text-center shadow-sm"
        >
          <div class="text-3xl font-extrabold text-[#f5a623] mb-2">{{ stat.value }}</div>
          <p class="text-sm text-gray-600 leading-5 whitespace-pre-line">{{ stat.label }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          v-for="(feature, index) in features"
          :key="feature.title + index"
          type="button"
          class="bg-[#f9fafb] rounded-xl border border-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          @click="$emit('feature-click', feature, index)"
        >
          <div
            class="mx-auto mb-3 w-10 h-10 rounded-lg bg-[#f5a623]/20 flex items-center justify-center"
          >
            <svg class="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
              <path :d="feature.icon || defaultIcons[index % defaultIcons.length]" />
            </svg>
          </div>
          <div class="text-base font-semibold text-gray-800">{{ feature.title }}</div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Improvement',
  props: {
    title: {
      type: String,
      default: 'Improve your revenue with us',
    },
    subtitle: {
      type: String,
      default:
        'Our partners have seen significant improvements in guest satisfaction and online ratings.',
    },
    stats: {
      type: Array,
      required: true,
      validator: (stats) =>
        stats.every((s) => typeof s.value === 'string' && typeof s.label === 'string'),
    },
    features: {
      type: Array,
      required: true,
      validator: (features) => features.every((f) => f && typeof f.title === 'string'),
    },
    backgroundColor: {
      type: String,
      default: 'bg-white',
    },
  },
  emits: ['feature-click'],
  data() {
    return {
      defaultIcons: [
        'M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm5 5a1 1 0 00-1 1v7a1 1 0 102 0V9a1 1 0 00-1-1zm4-3a1 1 0 00-1 1v10a1 1 0 102 0V6a1 1 0 00-1-1zm4 6a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z',
        'M18 10c0 3.866-3.582 7-8 7-.91 0-1.783-.126-2.597-.36L3 18l1.36-3.403A7.62 7.62 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z',
        'M2 6a2 2 0 012-2h2a2 2 0 012 2h4a2 2 0 012-2h2a2 2 0 012 2v3H2V6zm0 5h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z',
        'M4 3h9a3 3 0 013 3v11a1 1 0 01-1 1H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 3v11h10V6a1 1 0 00-1-1H4z',
      ],
    }
  },
}
</script>
