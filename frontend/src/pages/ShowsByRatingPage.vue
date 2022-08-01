<script setup lang="ts">
import Container from '../layouts/Container.vue';
import TvShowRatingTile from '../components/TvShowRatingTile.vue';
import { useShowsByRating } from '../composables/abn-tvmaze-proxy';

const { isFetching, shows } = useShowsByRating();
</script>

<template>
  <Container :class="$style.container">
    <h1>Shows by rating</h1>

    <p>Below are listed the top 100 highest rated shows on our platform.</p>

    <template v-if="isFetching"> Loading... </template>
    <template v-else>
      <RouterLink
        v-for="(show, index) of shows"
        :key="show.id"
        :to="`/detail/${show.id}`"
        :class="$style.link"
      >
        <TvShowRatingTile
          :rank="index + 1"
          :tv-show="show"
          :class="$style.tile"
        />
      </RouterLink>
    </template>
  </Container>
</template>

<style module>
.container {
  margin-bottom: 5rem;
}

.link {
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
}

.link:hover .tile {
  transition: 0.2s border-color;
  border-color: var(--color-brand);
}
</style>
