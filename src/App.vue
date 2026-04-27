<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 dark:bg-[#292C35]">
    <Header />

    <div class="overflow-x-hidden">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>