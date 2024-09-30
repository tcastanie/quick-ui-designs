<template>
  <div class="grid min-h-screen place-items-center gap-y-4 bg-[#F1F1F1] text-(lg/6 white) font-ibm-plex-sans lg:grid-cols-2">
    <div class="max-w-5xl flex flex-1 flex-wrap place-items-center gap-4 rounded-lg bg-[#373F4D] px-14 py-13 lg:col-span-2">
      <div class="relative min-w-50 flex-1 md:max-w-2/5">
        <input
          type="search"
          placeholder="Search Keyword"
          class="w-full rounded py-5 pl-15 pr-6 text-[#373F4D] focus:(outline-2 outline-[#FF855C] outline) placeholder-[#737882]"
        >
        <div class="i-ph-magnifying-glass-light absolute left-5 top-4 size-8 text-[#737882]" />
      </div>
      <div class="relative min-w-50 flex-1 md:max-w-2/5">
        <input
          type="search"
          placeholder="Search Location"
          class="w-full rounded py-5 pl-15 pr-6 text-[#373F4D] focus:(outline-2 outline-[#FF855C] outline) placeholder-[#737882]"
        >
        <div class="i-ph-map-pin-light absolute left-5 top-4 size-8 text-[#737882]" />
      </div>
      <button class="min-w-16 flex-1 rounded from-[#FF7A59] to-[#FF9863] bg-gradient-to-br py-5 text-center font-medium md:max-w-1/5 hover:(bg-[#FF9863] bg-none)">
        Search
      </button>
    </div>
    
    <div class="grid max-w-md place-items-stretch gap-3 rounded-lg bg-[#373F4D] px-18 py-23">
      <div class="grid mb-9 gap-6 text-center">
        <div class="text-[22px]/7 font-(bold merriweather)">
          Need to hire a freelancer?
        </div>
        <p>Sign up, type in what you need and receive free quotes in seconds</p>
      </div>
      <input
        type="text"
        placeholder="What do you need done?"
        class="rounded px-6 py-5 text-[#373F4D] focus:(outline-2 outline-[#FF855C] outline) placeholder-[#737882]"
      >
      <button class="rounded from-[#FF7A59] to-[#FF9863] bg-gradient-to-br py-5 text-center font-medium hover:(bg-[#FF9863] bg-none)">
        Post a project
      </button>
    </div>
    <div class="max-w-lg flex flex-wrap items-center gap-(x-4 y-10) rounded-lg bg-[#373F4D] px-11 py-14">
      <div class="flex-full text-(center [22px]/7) font-bold font-merriweather">
        What do you need?
      </div>
      <button class="max-w-1/2 flex-1 rounded from-[#FF7A59] to-[#FF9863] bg-gradient-to-br py-5 text-center font-medium hover:(bg-[#FF9863] bg-none)">
        I want to hire
      </button>
      <button class="max-w-1/2 flex-1 border border-white rounded py-5 text-center font-medium hover:border-[#FF9863]">
        I want to work
      </button>
    </div>
  </div>
</template>
