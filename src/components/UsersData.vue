<script setup lang="ts">
import Preloader from "./Preloader.vue";
import Cards, { type IDataUser } from "./Cards.vue";

defineProps<{
  data: IDataUser[];
  loading: boolean;
  error: boolean;
}>();
</script>

<template>
  <section class="users-data">
    <div v-if="loading || error" class="users-data__status">
      <Preloader v-if="loading" />
      <p v-if="error">Ошибка...</p>
    </div>

    <div v-if="!loading && !error && data?.length > 0">
      <Cards :data="data" />
    </div>
  </section>
</template>

<style scoped>
.users-data__status {
  display: block;
  margin: 25% auto;
  text-align: center;
}
</style>
