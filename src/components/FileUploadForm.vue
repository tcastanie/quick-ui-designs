<script lang="ts" setup>
import { Label } from 'radix-vue'
import { computed, useTemplateRef } from 'vue'
const input1 = useTemplateRef('thumbImageInput');
const name1 = computed(() => input1.value?.files?.[0]?.name || 'No file uploaded');
const input2 = useTemplateRef('sourceFileInput');
const name2 = computed(() => input2.value?.files?.[0]?.name || 'No file uploaded');
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-[#171F38]">
    <div class="pointer-events-none absolute left-16 size-40 rotate-90 skew-5 rounded-full from-[#F073C8] to-[#FF6A95] bg-gradient-to-r" />
    <div class="pointer-events-none absolute bottom-24 left-48 size-74 rounded-full from-[#F073C8] to-[#FF6A95] bg-gradient-to-r" />
    <div class="pointer-events-none absolute size-128 rounded-full from-[#F073C8] to-[#FF6A95] bg-gradient-to-r -bottom-2 -right-32 -rotate-20" />
    <div class="z-1 grid grid-cols-[repeat(2,_minmax(380px,_1fr))] gap-x-7.5 gap-y-4 rounded-2xl bg-[#242E4C]/80 px-81 py-51 text-base text-white font-mulish">
      <div class="col-span-2 mb-10 text-center text-2xl text-[#EBEBF2] font-semibold font-montserrat">
        Upload Files
      </div>
      <div class="col-span-2 flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold md:col-span-1">
        <Label for="authKeyInput">Authorization key</Label>
        <input
          id="authKeyInput"
          type="password"
          value="0123456789"
          class="border border-[#171F38] rounded bg-transparent p-4 text-base text-white font-normal focus:(border-[#F073C8] outline-none) placeholder-[#97A5CE]/50"
        >
      </div>
      <div class="col-span-2 flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold md:col-span-1">
        <Label for="tagsInput">Tags (comma separated)</Label>
        <input
          id="tagsInput"
          type="text"
          placeholder="Tags (comma separated)"
          class="border border-[#171F38] rounded bg-transparent p-4 text-base text-white font-normal focus:(border-[#F073C8] outline-none) placeholder-[#97A5CE]/50"
        >
      </div>
      <div class="col-span-2 flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold md:col-span-1">
        <Label for="titleInput">Title</Label>
        <input
          id="titleInput"
          type="text"
          value="Day 001"
          class="border border-[#171F38] rounded bg-transparent p-4 text-base text-white font-normal focus:(border-[#F073C8] outline-none) placeholder-[#97A5CE]/50"
        >
      </div>
      <div class="col-span-2 flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold md:col-span-1">
        <Label for="dateInput">Date</Label>
        <input
          id="dateInput"
          type="text"
          placeholder="DD/MM/YYYY"
          class="border border-[#171F38] rounded bg-transparent p-4 text-base text-white font-normal focus:(border-[#F073C8] outline-none) placeholder-[#97A5CE]/50"
        >
      </div>
      <div class="col-span-2 row-span-2 flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold md:col-span-1">
        <Label for="descInput">Description</Label>
        <textarea
          id="descInput"
          placeholder="Description"
          class="h-full resize-none border border-[#171F38] rounded bg-transparent p-4 text-base text-white font-normal focus:(border-[#F073C8] outline-none) placeholder-[#97A5CE]/50"
        />
      </div>
      <div class="col-span-2 flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold md:col-span-1">
        <Label for="softwareInput">Software</Label>
        <select
          id="softwareInput" 
          class="h-full resize-none border border-[#171F38] rounded bg-[#242E4C] p-4 text-base text-white font-normal focus:(border-[#F073C8] outline-none) placeholder-[#97A5CE]/50"
        >
          <option value="Figma">
            Figma
          </option>
          <option value="Sketch">
            Sketch
          </option>
          <option value="Adobe XD">
            Adobe XD
          </option>
        </select>
      </div>
      <div class="grid col-span-2 grid-cols-2 gap-x-20 md:col-span-1">
        <div class="flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold">
          <Label for="thumbImage">Thumbnail Image</Label>
          <input
            id="thumbImage"
            ref="thumbImageInput"
            type="file"
            accept="image/*"
            class="hidden"
          >
          <button
            class="border border-[#171F38] rounded px-8 py-2.5 text-base text-[#97A5CE]/70 font-normal hover:(border-[#F073C8] text-white)"
            @click="input1?.click()"
          >
            Upload File
          </button>
          <Label
            for="thumbImage"
            class="text-base font-normal"
          >{{ name1 }}</Label>
        </div>
        <div class="flex flex-col gap-y-1.5 text-sm text-[#97A5CE] font-bold">
          <Label for="sourceFile">Source File</Label>
          <input
            id="sourceFile"
            ref="sourceFileInput"
            type="file"
            accept=".fig,.sketch,.xd"
            class="hidden"
          >
          <button
            class="border border-[#171F38] rounded px-8 py-2.5 text-base text-[#97A5CE]/70 font-normal hover:(border-[#F073C8] text-white)"
            @click="input2?.click()"
          >
            Upload File
          </button>
          <Label
            for="thumbImage"
            class="text-base font-normal"
          >{{ name2 }}</Label>
        </div>
      </div>
      <div class="col-span-2 mt-10 flex justify-center">
        <button class="max-w-[380px] w-full rounded from-[#F073C8] to-[#FF6A95] bg-gradient-to-r px-5 py-4 font-bold">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
