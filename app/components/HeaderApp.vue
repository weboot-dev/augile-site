<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all',
      isScrolled ? 'bg-white shadow' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <span class="text-xl font-bold text-slate-900">Augile</span>

      <nav class="hidden md:flex gap-6">
        <a href="#planos" class="text-slate-700 hover:text-blue-600">Planos</a>
        <a href="#depoimentos" class="text-slate-700 hover:text-blue-600">Clientes</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>