<script setup lang="ts">
import { TvShow } from '../api-clients/tvmaze/types';

defineProps<{
  tvShow: TvShow;
}>();

const displayedInfo: {
  label: string;
  // eslint-disable-next-line no-unused-vars
  value: (show: TvShow) => string;
}[] = [
  { label: 'Name', value: (show) => show.name },
  { label: 'Type', value: (show) => show.type },
  { label: 'Language', value: (show) => show.language },
  { label: 'Genres', value: (show) => show.genres.join(', ') },
  { label: 'Status', value: (show) => show.status },
  {
    label: 'Runtime (avg. runtime)',
    value: (show) => `${show.runtime} (${show.averageRuntime})`,
  },
  { label: 'Premiered on', value: (show) => show.premiered },
  { label: 'Ended on', value: (show) => show.ended || '-' },
];
</script>

<template>
  <section :class="$style.root">
    <dl>
      <div
        v-for="{ label, value } in displayedInfo"
        :key="label"
        :class="$style.row"
      >
        <dt>{{ label }}</dt>
        <dd>{{ value(tvShow) }}</dd>
      </div>
    </dl>
  </section>
</template>

<style module>
.root {
  padding: 1rem;
  background-color: white;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-neutral-200);
  border-radius: 1rem;
}

.root dl {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.row {
  display: flex;
  justify-content: space-between;
}

.row dt {
  font-weight: 900;
  color: var(--light-text-color);
}
</style>
