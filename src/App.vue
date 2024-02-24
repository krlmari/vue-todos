<script setup lang="ts">
import Button from "./components/Button.vue";

import type { IDataUser } from "./components/Cards.vue";
import UsersData from "./components/UsersData.vue";

// @ts-ignore
import { fetchUsersStats } from "./hooks/fetchUsersStats";

const { fetchData, loading, error, data } = fetchUsersStats();

defineProps<{
  fetchData: () => {};
  loading: boolean;
  error: boolean;
  data: IDataUser[];
}>();
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <Button text="Загрузить данные" :handleClick="fetchData" />
    <UsersData :data="data" :loading="loading" :error="error" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
