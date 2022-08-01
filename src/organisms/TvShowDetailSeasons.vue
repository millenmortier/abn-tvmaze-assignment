<script setup lang="ts">
import { useSeasons } from '../composables/tvmaze';
import SeasonTile from '../components/SeasonTile.vue';

const props = defineProps<{
  tvShowId: number;
}>();

const {
  isFetching: isFetchingSeasons,
  error: seasonsError,
  seasons,
} = useSeasons(props.tvShowId);
</script>

<template>
  <h2>Seasons</h2>
  <section>
    <template v-if="isFetchingSeasons"> Loading seasons </template>
    <template v-else>
      <template v-if="seasonsError"> Could not fetch the seasons </template>
      <template v-else>
        <a
          v-for="season in seasons"
          :key="season.id"
          :class="$style.link"
          target="_blank"
          :href="season.url"
        >
          <SeasonTile :class="$style.tile" :season="season" />
        </a>
      </template>
    </template>
  </section>
</template>

<style module>
.link {
  display: block;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.link:hover .tile {
  border-color: var(--color-brand);
}

.tile {
  transition: 0.2s border-color;
}
</style>
