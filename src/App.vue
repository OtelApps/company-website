<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <div class="overflow-x-hidden">
      <RouterView />
    </div>

    <Footer />

    <CookieBanner />
  </div>
</template>