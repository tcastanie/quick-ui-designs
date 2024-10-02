<script lang="ts" setup>
import AvailabilityCard from './components/AvailabilityCard.vue';
import WebshopComponents from './components/WebshopComponents.vue';
import BillingPage from './components/BillingPage.vue';
import PricingCard from './components/PricingCard.vue';
import SearchComponents from './components/SearchComponents.vue';
import UiProfileCard from './components/UiProfileCard.vue';
import ComponentDisplay from './components/ComponentDisplay.vue';
</script>

<template>
  <div class="grid divide-y divide-zinc">
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/edit-availability"
    >
      <AvailabilityCard />
    </ComponentDisplay>
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/sketch-webshop-components-button-card-day-1149"
    >
      <WebshopComponents />
    </ComponentDisplay>
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/figma-billing-page-payment-day-1585"
    >
      <BillingPage />
    </ComponentDisplay>
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/figma-pricing-card-day-1454"
    >
      <PricingCard />
    </ComponentDisplay>
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/sketch-search-components-filter-dropdown-button-input-day-1261"
    >
      <SearchComponents />
    </ComponentDisplay>
    <ComponentDisplay
      link="https://www.uidesigndaily.com/posts/figma-profile-card-day-1558"
    >
      <UiProfileCard />
    </ComponentDisplay>
  </div>
</template>
