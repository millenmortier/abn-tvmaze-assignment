<script setup lang="ts">
import { Episode } from '../api-clients/tvmaze/types';

defineProps<{
  episode: Episode;
}>();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.title">{{ episode.name }}</div>
    <div :class="$style.subtitle">
      Season {{ episode.season }}, Episode {{ episode.number }}, Aired on
      {{ episode.airdate }}
    </div>

    <div :class="$style.description" v-html="episode.summary"></div>
  </div>
</template>

<style module>
.root {
  padding: 1rem;
  border: 1px solid var(--color-neutral-200);
  background-color: white;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
}

.title {
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--text-color);
}
.subtitle {
  color: var(--light-text-color);
  margin-bottom: 1rem;
}

.description p {
  margin-bottom: 0;
  color: var(--light-text-color);
}
</style>
