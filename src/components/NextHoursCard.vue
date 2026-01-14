<script setup lang="ts">
import type { TransformedForecastData } from "@/types/TransformedForecastData";

const { data } = defineProps<{
  data: TransformedForecastData["nextHours"];
}>();
</script>

<template>
  <pre>{{ data }}</pre>
</template>

<style scoped></style>
