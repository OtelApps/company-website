<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>
