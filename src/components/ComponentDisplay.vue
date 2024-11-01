<script lang="ts" setup>
defineProps<{ link?: string }>();
</script>

<template>
  <div class="relative overflow-hidden">
    <a
      v-if="link"
      :href="link"
      target="_blank"
      class="group absolute top-1 mx-1 rounded-full bg-white/70 px-2 text-xs/6 shadow-md"
    >
      <span>Original design: </span>
      <span class="group-hover:underline">{{ link }}</span>
      <span class="i-ph-arrow-square-out-light ml-2 inline-block size-4" />
    </a>
    <slot />
  </div>
</template>
