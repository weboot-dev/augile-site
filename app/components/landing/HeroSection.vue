<template>
  <section id="inicio" class="relative overflow-hidden bg-slate-50 pt-28 sm:pt-32">
    <div class="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,.12),transparent_55%)]" aria-hidden="true" />
    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-24">
      <div class="max-w-2xl">
        <p class="mb-5 text-sm font-bold uppercase tracking-[.16em] text-blue-700">Gestão simples para oficinas automotivas</p>
        <h1 class="text-balance text-[clamp(2.35rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-slate-950">Organize sua oficina e tenha controle de cada serviço</h1>
        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">Ordens de serviço, clientes, veículos, agenda e serviços em um só lugar — sem planilhas e sem complicação.</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <button class="landing-button-primary sm:min-w-40" @click="primaryClick">Começar grátis</button>
          <a href="#demonstracao" class="landing-button-secondary sm:min-w-44" @click="track('showcase_click', { source: 'hero' })">Ver como funciona</a>
        </div>
        <p class="mt-4 text-sm font-medium text-slate-500">Plano gratuito para sempre <span aria-hidden="true">•</span> Sem cartão <span aria-hidden="true">•</span> Cancele quando quiser</p>
      </div>
      <div class="relative mx-auto w-full max-w-2xl">
        <!-- TODO: substituir esta prévia pela captura oficial do dashboard quando o asset for disponibilizado. -->
        <div class="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-2xl shadow-blue-950/10">
          <div class="flex h-11 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4"><span class="size-2.5 rounded-full bg-slate-300" /><span class="size-2.5 rounded-full bg-slate-300" /><span class="size-2.5 rounded-full bg-slate-300" /><span class="ml-3 text-xs font-medium text-slate-500">Painel Augile</span></div>
          <div class="grid min-h-82 grid-cols-[68px_1fr] bg-slate-50 sm:grid-cols-[150px_1fr]">
            <div class="border-r border-slate-200 bg-slate-950 p-3 sm:p-4"><div class="mb-8 h-5 rounded bg-blue-500/80" /><div v-for="n in 5" :key="n" class="mb-3 h-3 rounded bg-white/10" /></div>
            <div class="p-4 sm:p-6"><p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Visão da oficina</p><h2 class="mt-1 text-xl font-bold text-slate-900">Resumo do dia</h2><div class="mt-5 grid gap-3 sm:grid-cols-2"><div class="rounded-xl border border-slate-200 bg-white p-4"><LandingIcon name="clipboard" class="mb-4 size-6 text-blue-600" /><p class="font-bold text-slate-900">Ordens de serviço</p><p class="mt-1 text-xs text-slate-500">Acompanhe os serviços em andamento</p></div><div class="rounded-xl border border-slate-200 bg-white p-4"><LandingIcon name="calendar" class="mb-4 size-6 text-blue-600" /><p class="font-bold text-slate-900">Agenda</p><p class="mt-1 text-xs text-slate-500">Consulte os atendimentos do dia</p></div></div><div class="mt-3 h-20 rounded-xl border border-slate-200 bg-white p-4"><div class="h-2 w-2/3 rounded bg-slate-200" /><div class="mt-3 h-2 w-4/5 rounded bg-slate-100" /></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { openSignup, track } = useLanding()
function primaryClick() { track('cta_primary_click', { source: 'hero' }); openSignup('GRATUITO', 'hero') }
</script>
