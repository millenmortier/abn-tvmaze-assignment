<script setup lang="ts">
import { TvShow } from '../api-clients/tvmaze/types';

defineProps<{
  tvShow: TvShow;
}>();
</script>

<template>
  <div :class="$style.root">
    <img :src="tvShow.image?.medium" :class="$style.image" />

    <div :class="$style.description">
      <h2 :class="$style.name">{{ tvShow.name }}</h2>
      <div :class="$style.summary" v-html="tvShow.summary"></div>
    </div>
  </div>
</template>

<style module>
.root {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: white;
  border: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-md);
}

.image {
  width: 128px;
  flex-shrink: 0;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  background-color: var(--color-neutral-500);
}

.name {
  margin-top: 0;
  color: var(--text-color);
}

.description {
  display: flex;
  flex-direction: column;
  max-height: 180px;
}

.summary {
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-color);
}
.summary p {
  margin-top: 0;
}
</style>
