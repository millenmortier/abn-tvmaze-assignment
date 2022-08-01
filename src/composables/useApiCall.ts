import { ref, onMounted } from 'vue';

/**
 * This functionality is so common for all kinds of API calls that we make our
 * life a lot easier by extracting it into a separate function
 */
export function useApiCall<T>(action: () => Promise<T>) {
  const isFetching = ref(false);
  const error = ref(false);
  const value = ref<T>();

  onMounted(async () => {
    isFetching.value = true;
    try {
      value.value = await action();
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  });

  return { isFetching, error, value };
}
