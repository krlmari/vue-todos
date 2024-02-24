import { ref } from "vue";
import { getTodos } from "../lib/api";
import { groupUsersWithCount, sortUsersGroups } from "../helpers/users";
import { delay } from "../helpers/index";

export const fetchUsersStats = () => {
  const data = ref([]);
  const error = ref(false);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    if (error.value) {
      error.value = false;
    }

    try {
      await delay(500);
      const response = await getTodos();

      if (response.data) {
        data.value = sortUsersGroups(groupUsersWithCount(response.data)) as [];
      }
    } catch (err) {
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  return { fetchData, data, error, loading };
};
