<template>
  <section class="relative min-h-screen flex items-center">
    <img
      src="/assets/imgs/oficina-mecanica.webp"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Oficina mecânica"
    >
    <div class="absolute inset-0 bg-slate-900/70" />

    <div class="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center text-white">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Controle total da sua oficina<br>
          <span class="text-blue-400">em um único sistema</span>
        </h1>

        <p class="text-slate-200 mb-8">
          Organize serviços, equipe e financeiro com o Augile.
          Simples, rápido e feito para oficinas mecânicas.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/checkout?plano=free14"
            class="px-8 py-4 bg-blue-600 rounded-lg font-semibold text-center"
          >
            Teste grátis por 14 dias
          </NuxtLink>

          <a href="#planos" class="px-8 py-4 border rounded-lg text-center">
            Ver planos
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
