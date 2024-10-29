<script setup lang="ts">
import { reactive } from 'vue'
const availabilityItems = reactive([
  { id: 'fulltime', label:'Full time', checked: true },
  { id: 'freelance', label:'Freelance & Projects', checked: true },
])
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-[#F5F8FF] text-lg/5.5 text-[#25297B] font-semibold font-inter">
    <div class="pointer-events-none absolute size-120 rounded-full bg-[#E7EEFC]" />
    <div class="z-1 grid max-w-sm border-(3 [#1C1E57]) rounded-[40px] bg-white p-14">
      <div class="mb-4 text-2xl font-bold font-merriweather">
        Edit availability
      </div>
      <p class="text-base/5">
        Add a “Hire me” button to let know that you’re available for new opportunities
      </p>
      <fieldset class="grid my-15 gap-4">
        <div
          v-for="item in availabilityItems"
          :key="item.id"
          class="flex items-center space-x-3"
        >
          <input
            :id="item.id"
            v-model="item.checked"
            type="checkbox"
            name="availability"
            class="size-9 accent-[#F5F8FF] ring-1 ring-[#C3C4DE]"
          >
          <label :for="item.id">{{ item.label }}</label>
        </div>
      </fieldset>
      <div class="grid grid-cols-2 gap-4">
        <button class="rounded-lg bg-[#25297B] p-4 text-white hover:(shadow-[#25297B] shadow-lg)">
          Done
        </button>
        <button class="rounded-lg bg-[#F5F8FF] p-4 hover:shadow-lg">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
