<script setup>
import { onMounted, ref } from 'vue'

defineEmits(['again'])

const heading = ref(null)

// Přesune fokus (a u čteček i pozornost) na potvrzení, které nahradilo formulář.
onMounted(() => heading.value?.focus())
</script>

<template>
  <div role="status" class="flex flex-col items-center text-center py-6 md:py-10">
    <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffa500]/15 mb-6">
      <svg
        class="h-7 w-7 text-[#ffa500]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2.5"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h2 ref="heading" tabindex="-1" class="text-2xl font-bold text-[#383E42] mb-3 outline-none">
      {{ $t('forms.success.title') }}
    </h2>
    <p class="text-gray-600 mb-8 max-w-md">{{ $t('forms.success.text') }}</p>
    <button
      type="button"
      class="border-1 border-[#383E42] text-[#383E42] font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
      @click="$emit('again')"
    >
      {{ $t('forms.success.again') }}
    </button>
  </div>
</template>
