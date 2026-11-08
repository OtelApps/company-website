<script setup>
defineProps({
  id: { type: String, required: true },
  // i18n klíč chybové hlášky (z useWeb3Form)
  error: { type: String, default: null },
})
</script>

<template>
  <p v-if="error" :id="id" class="mt-1.5 text-sm text-red-600">{{ $t(error) }}</p>
</template>
