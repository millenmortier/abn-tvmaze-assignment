<script setup lang="ts">
import { TvShow } from '../api-clients/tvmaze/types';

defineProps<{
  rank: number;
  tvShow: TvShow;
}>();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.left">
      <span :class="$style.rank">
        {{ rank }}
      </span>

      <div :class="$style.info">
        <div :class="$style.name">
          {{ tvShow.name }}
        </div>
        <div :class="$style.genres">{{ tvShow.genres.join(', ') }}</div>
      </div>
    </div>

    <div>
      <div :class="$style.ratingLabel">Rating</div>
      <div :class="$style.rating">
        {{ tvShow.rating.average }}
      </div>
    </div>
  </div>
</template>

<style module>
.root {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);
  background-color: white;
  border: 1px solid var(--color-neutral-100);
}

.left {
  display: flex;
}

.rank {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-neutral-400);
  background-color: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-200);
  border-radius: 50%;
  font-weight: 900;
}

.info {
  margin-left: 1rem;
}

.name {
  font-size: 1rem;
  font-weight: 900;
  color: var(--text-color);
}

.genres {
  font-size: 1rem;
  color: var(--light-text-color);
}

.right {
  font-size: 1rem;
  color: var(--light-text-color);
}

.ratingLabel {
  text-align: right;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1;
  color: var(--light-text-color);
}

.rating {
  color: var(--color-brand);
  font-weight: 900;
  font-size: 1.75rem;
  text-align: right;
}

@media (min-width: 768px) {
  .name {
    font-size: 1.5rem;
  }
}
</style>
