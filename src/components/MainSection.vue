<script setup lang="ts">
import type { TransformedForecastData } from "@/types/TransformedForecastData";
import NextHoursCard from "./NextHoursCard.vue";
import { computed } from "vue";

const { data } = defineProps<{
  data: TransformedForecastData;
}>();
const nextHours = computed(() => data.nextHours);
const nextDays = computed(() => data.nextDays);
</script>

<template>
  <NextHoursCard :data="nextHours" />
  <!-- <NextDaysCard :data="nextDays" /> -->
</template>

<style scoped></style>
