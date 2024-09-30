<template>
  <div class="grid grid-cols-5 min-h-screen place-items-center gap-4 bg-[#D9E2E8] text-[#0E0E0C] font-semibold font-mulish">
    <div class="col-span-5 max-w-5xl flex rounded-2xl bg-[#EBF0F3] font-bold shadow-[#8FB6D1]/40 shadow-2xl">
      <div class="max-w-3/5 flex flex-col items-start px-24 py-27">
        <div class="mb-5 text-5xl font-bold">
          Keep it sporty
        </div>
        <div class="mb-16 text-lg font-bold">
          Our mission is to change the world through sport. Browse sportswear and shoes
        </div>
        <button class="bg-[#0E0E0C] px-9 py-4.5 text-[#FFA2AD]">
          View Collection
        </button>
      </div>
      <div class="max-w-2/5 border-l-[6px] border-[#FFA2AD]">
        <img
          src="/running-shoe.png"
          class="size-full scale-x-[-1] object-cover object-bottom-right"
        >
      </div>
    </div>
    
    <div class="col-span-3 max-w-2xl flex rounded-2xl bg-[#EBF0F3] shadow-([#8FB6D1]/40 2xl)">
      <div class="max-w-2/5 flex-auto">
        <img
          src="/running-shoe.png"
          class="object-none object-top-left"
        >
      </div>
      <div class="relative max-w-3/5 flex flex-(1 col) justify-center p-12">
        <div class="absolute right-8 top-8 rounded bg-[#FFA2AD] p-4 py-2 text-(lg/6 white) font-bold">
          Sold out
        </div>
        <div class="mb-2 text-2xl">
          Air monarch
        </div>
        <div class="text-3xl/10 font-bold">
          $345
        </div>
      </div>
    </div>

    <div class="col-span-2 max-w-sm w-full flex flex-col place-items-center rounded-2xl bg-[#EBF0F3] p-21 shadow-([#8FB6D1]/40 2xl)">
      <div class="mb-5 text-2xl">
        Legend essential
      </div>
      <div class="mb-12 text-3xl/10 font-bold">
        $345
      </div>
      <button class="bg-[#0E0E0C] px-9 py-4.5 text-[#FFA2AD]">
        Add to cart
      </button>
    </div>
  </div>
</template>
