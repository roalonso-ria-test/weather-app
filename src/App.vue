<script setup lang="ts">
import MainSection from "./components/MainSection.vue";
import { useCityForecastData } from "./composables/useCityData";
import { ref } from "vue";

const city = ref<"rio" | "beijing" | "los-angeles">("rio");
const { data, isPending, refetch } = useCityForecastData(city);
</script>

<template>
  <div>
    <select v-model="city">
      <option value="rio">Rio de Janeiro</option>
      <option value="beijing">Beijing</option>
      <option value="los-angeles">Los Angeles</option>
    </select>
    <button :click="refetch">Refresh</button>
  </div>
  <div v-if="isPending">Loading...</div>
  <div v-else-if="!data">Something went wrong.</div>
  <MainSection v-else :data="data" />
</template>

<style scoped></style>
