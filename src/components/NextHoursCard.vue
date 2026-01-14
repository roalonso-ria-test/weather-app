<script setup lang="ts">
import type { TransformedForecastData } from "@/types/TransformedForecastData";

const { data } = defineProps<{
  data: TransformedForecastData["nextHours"];
}>();
</script>

<template>
  <div class="next-hours-card">
    <div class="next-hours-card-header">
      <h2>Next hours</h2>
    </div>
    <div class="next-hours-card-main">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<style scoped>
.next-hours-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.next-hours-card-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.next-hours-card-main {
  padding: 16px;
}
</style>
