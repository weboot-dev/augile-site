<template>
  <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <div class="text-blue-600 mb-4 text-2xl">{{icon}}</div>
    <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
    <p class="text-slate-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description?: string
}>()
</script>
