<script setup lang="ts">
const prices = [
  {
    title: 'Free',
    price: 0,
    priceDescription: 'Free for your whole team',
    description: 'For individuals or teams looking to organize anything.',
    ctaLabel: 'Get started',
    ctaColor: 'bg-[#EDBBFF]',
  },
  {
    title: 'Standard',
    price: 6,
    priceDescription: 'Per user per month',
    description: 'For teams that need to manage more work.',
    ctaLabel: 'Upgrade now',
    ctaColor: 'bg-[#AEF1F5]',
  },
  {
    title: 'Premium',
    price: 12,
    priceDescription: 'Per user per month',
    description: 'Best for teams that need to track multiple projects.',
    ctaLabel: 'Try for free',
    ctaColor: 'bg-[#FFDDB6]',
  }
]
</script>

<template>
  <div class="relative grid min-h-screen place-items-center overflow-hidden">
    <div class="pointer-events-none absolute left-1/4 top-3/200 size-132 rounded-full bg-[#C6FCFF]/60 blur-3xl -z-1" />
    <div class="pointer-events-none absolute left-4/7 top-1/7 size-156 rounded-full bg-[#FFDDB6]/60 blur-3xl -z-1" />
    <div class="pointer-events-none absolute right-4/9 top-1/2 size-250 rounded-full bg-[#EDBBFF]/60 blur-[128px] -z-1" />
    <div class="max-w-[1098px] w-full flex gap-x-4 border border-20 border-white rounded-[30px] bg-white/70 p-8 text-[#141843] font-ibm-plex-sans md:gap-x-11 md:p-22">
      <div
        v-for="price of prices"
        :key="price.title"
        class="grid justify-items-start"
      >
        <div class="mb-5 text-2xl font-(bold merriweather)">
          {{ price.title }}
        </div>
        <div class="text-4xl/12 font-bold">
          $<span class="text-6xl/20">{{ price.price }}</span>
        </div>
        <div class="mb-10 text-base font-medium">
          {{ price.priceDescription }}
        </div>
        <p class="mb-12.5 text-xl font-medium">
          {{ price.description }}
        </p>
        <button :class="[price.ctaColor, 'rounded-[10px] p-5 text-(xl black) font-medium hover:shadow']">
          {{ price.ctaLabel }}
        </button>
      </div>
    </div>
  </div>
</template>
