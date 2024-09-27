<script lang="ts" setup>
import ComponentDisplay from './components/ComponentDisplay.vue';
import UiProfileCard from './components/UiProfileCard.vue';
import SearchComponents from './components/SearchComponents.vue';
</script>

<template>
  <div class="grid divide-y divide-zinc">
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/figma-profile-card-day-1558"
    >
      <UiProfileCard />
    </ComponentDisplay>
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/sketch-search-components-filter-dropdown-button-input-day-1261"
    >
      <SearchComponents />
    </ComponentDisplay>
  </div>
</template>
