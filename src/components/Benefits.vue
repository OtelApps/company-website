<template>
  <section class="py-16 bg-[#f4f4f4]">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title" class="text-center mb-12">
        <h2 v-if="title" class="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">{{ title }}</h2>
        <p v-if="subtitle" class="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            {{ subtitle }}
        </p>
      </div>

      <div class="grid gap-12 text-center" :class="gridClasses">
        <div
          v-for="(item, index) in visibleItems"
          :key="item.title + index"
          class="flex flex-col items-center"
        >
          <div
            class="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
            :class="item.iconText ? 'bg-[#f4f4f4]' : 'bg-[#f5a623]/20'"
          >
            <span v-if="item.iconText" class="text-[#f5a623] font-extrabold text-2xl lg:text-4xl">{{
              item.iconText
            }}</span>
            <svg v-else class="w-6 h-6 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
              <path :d="item.icon || defaultIcons[index % defaultIcons.length]" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 max-w-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits',
  props: {
    title: {
      type: String,
      default: 'Benefits for Your Hotel & Team',
    },
    subtitle: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
      validator: (arr) =>
        arr.every((i) => i && typeof i.title === 'string' && typeof i.description === 'string'),
    },
    rows: {
      type: Number,
      default: 2,
    },
    columns: {
      type: Number,
      default: 3,
      validator: (n) => Number.isInteger(n) && n >= 1 && n <= 6,
    },
  },
  computed: {
    gridClasses() {
      const lgCols = `lg:grid-cols-${this.columns}`
      return [`grid-cols-1`, `sm:grid-cols-2`, lgCols]
    },
    visibleItems() {
      const max = this.rows * this.columns
      return this.items.slice(0, max)
    },
  },
  data() {
    return {
      defaultIcons: [
        'M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm5 5a1 1 0 00-1 1v7a1 1 0 102 0V9a1 1 0 00-1-1zm4-3a1 1 0 00-1 1v10a1 1 0 102 0V6a1 1 0 00-1-1zm4 6a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z',
        'M18 10c0 3.866-3.582 7-8 7-.91 0-1.783-.126-2.597-.36L3 18l1.36-3.403A7.62 7.62 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z',
        'M2 6a2 2 0 012-2h2a2 2 0 012 2h4a2 2 0 012-2h2a2 2 0 012 2v3H2V6zm0 5h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z',
        'M4 3h9a3 3 0 013 3v11a1 1 0 01-1 1H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 3v11h10V6a1 1 0 00-1-1H4z',
        'M10 2a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0V8H6a1 1 0 110-2h3V3a1 1 0 011-1z',
        'M12 6l-2-2-2 2H5v8h10V6h-3z',
      ],
    }
  },
}
</script>
