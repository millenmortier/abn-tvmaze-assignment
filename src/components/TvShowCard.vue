<script setup lang="ts">
import { TvShow } from '../api-clients/tvmaze/types';

defineProps<{
  tvShow: TvShow;
}>();
</script>

<template>
  <div :class="$style.root">
    <img :src="tvShow.image.medium" :class="$style.thumbnail" />
  </div>
</template>

<style module>
.root {
  width: 160px;
  height: 240px;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

@media (min-width: 1024px) {
  .root {
    width: 256px;
    height: 400px;
  }
}
</style>
