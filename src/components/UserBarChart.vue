<script setup lang="ts">
import type { IDataUser } from "./UsersCards.vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps<{
  data: IDataUser[];
}>();

const chartData = {
  labels: props.data.map((data) => data.userId),
  datasets: [
    {
      label: "completed = true",
      data: props.data.map((data) => data.completedCount),
      backgroundColor: "green",
    },
    {
      label: "completed = false",
      data: props.data.map((data) => data.uncompletedCount),
      backgroundColor: "red",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Гистограмма",
      color: "black",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
</script>

<template>
  <div class="user-bar-chart">
    <Bar :data="chartData" :options="options" />
  </div>
</template>

<style scoped>
.user-bar-chart {
  padding: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}
</style>
