<script setup lang="ts">
import { useCityForecastData } from "./composables/useCityData";
import { ref } from "vue";

const city = ref<"rio" | "beijing" | "los-angeles">("rio");
const { data } = useCityForecastData(city);
</script>

<template>
  <select v-model="city">
    <option value="rio">Rio de Janeiro</option>
    <option value="beijing">Beijing</option>
    <option value="los-angeles">Los Angeles</option>
  </select>
  <pre>{{ city }}</pre>
  <pre>{{ data }}</pre>
</template>

<style scoped></style>
