<template>
  <section id="demonstracao" class="landing-section scroll-mt-20 bg-slate-950 text-white">
    <div class="landing-container">
      <div class="landing-heading !mx-0 !text-left"><p class="landing-eyebrow !text-blue-300">Produto no dia a dia</p><h2 class="!text-white">Veja como a Augile funciona no dia a dia</h2><p class="!text-slate-300">Conheça os recursos que ajudam a oficina a manter a rotina em ordem.</p></div>
      <div role="tablist" aria-label="Recursos da Augile" class="mb-8 flex gap-2 overflow-x-auto pb-2">
        <button
          v-for="(item, index) in showcaseItems"
          :id="`tab-${item.id}`"
          :key="item.id"
          role="tab"
          :aria-selected="active === index"
          :aria-controls="`panel-${item.id}`"
          :tabindex="active === index ? 0 : -1"
          :class="['min-h-11 shrink-0 rounded-xl px-4 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white', active === index ? 'bg-white text-slate-950' : 'bg-white/10 text-slate-200 hover:bg-white/15']"
          @click="active = index"
          @keydown="onTabKeydown($event, index)"
        >
          {{ item.label }}
        </button>
      </div>
      <div
        v-for="(item, index) in showcaseItems"
        v-show="active === index"
        :id="`panel-${item.id}`"
        :key="item.id"
        role="tabpanel"
        :aria-labelledby="`tab-${item.id}`"
        class="grid overflow-hidden rounded-[20px] border border-white/10 bg-white/5 lg:grid-cols-[1.1fr_.9fr]"
      >
        <!-- TODO: substituir as prévias estruturais pelas screenshots oficiais de cada módulo. -->
        <div class="min-h-72 bg-slate-100 p-5 text-slate-900 sm:p-8"><div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"><div class="flex items-center justify-between border-b border-slate-100 pb-4"><div><p class="text-xs font-bold uppercase tracking-wider text-blue-600">{{ item.label }}</p><p class="mt-1 font-bold">Painel da oficina</p></div><LandingIcon :name="item.icon" class="size-7 text-blue-600" /></div><div v-for="n in 3" :key="n" class="mt-4 flex items-center gap-4 rounded-xl bg-slate-50 p-3"><span class="size-9 rounded-lg bg-blue-100" /><span class="flex-1"><span class="block h-2 w-2/3 rounded bg-slate-300" /><span class="mt-2 block h-2 w-1/2 rounded bg-slate-200" /></span></div></div></div>
        <div class="p-7 sm:p-10"><h3 class="text-2xl font-bold">{{ item.title }}</h3><p class="mt-4 leading-7 text-slate-300">{{ item.description }}</p><ul class="mt-7 space-y-3"><li v-for="point in item.points" :key="point" class="flex gap-3 text-slate-200"><span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-500"><LandingIcon name="check" class="size-3.5" /></span>{{ point }}</li></ul></div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { showcaseItems } from '~/data/landing'
const active = ref(0)
function onTabKeydown(event: KeyboardEvent, index: number) { if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); if (event.key === 'Home') active.value = 0; else if (event.key === 'End') active.value = showcaseItems.length - 1; else active.value = (index + (event.key === 'ArrowRight' ? 1 : -1) + showcaseItems.length) % showcaseItems.length; nextTick(() => { const item = showcaseItems[active.value]; if (item) document.getElementById(`tab-${item.id}`)?.focus() }) }
</script>
