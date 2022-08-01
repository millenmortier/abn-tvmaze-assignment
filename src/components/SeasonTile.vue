<script setup lang="ts">
import { Season } from '../api-clients/tvmaze/types';

defineProps<{
  season: Season;
}>();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.title">Season {{ season.number }}</div>
    <div :class="$style.subtitle">
      {{ season.premiereDate }} - {{ season.endDate }},
      {{ season.episodeOrder }} episodes
    </div>
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
}
</style>
