<template>
  <section class="py-16 bg-[#f4f4f4] px-6">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title" class="text-center mb-12">
        <h2 v-if="title" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">{{ title }}</h2>
        <p v-if="subtitle" class="text-base sm:text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            {{ subtitle }}
        </p>
      </div>

      <div class="grid gap-12 text-center" :class="gridClasses">
        <div
          v-for="(item, index) in visibleItems"
          :key="item.title + index"
          class="flex flex-col items-center"
        >
        <div class="w-12 h-12 flex items-center justify-center mb-4">
            <span class="material-symbols-outlined text-[#f5a623]"
                style="font-size: 35px; font-variation-settings: 'opsz' 40;"
            >
              {{ item.icon }}
            </span>
          </div>
          <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
          <p class="text-sm sm:text-base text-gray-600 max-w-sm">{{ item.description }}</p>
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
}
</script>
