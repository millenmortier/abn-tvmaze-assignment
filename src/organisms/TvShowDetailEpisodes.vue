<script setup lang="ts">
import { useEpisodes } from '../composables/tvmaze';
import EpisodeTile from '../components/EpisodeTile.vue';

const props = defineProps<{
  tvShowId: number;
}>();

const {
  isFetching: isFetchingEpisodes,
  error: episodesError,
  episodes,
} = useEpisodes(props.tvShowId);
</script>

<template>
  <h2>Episodes</h2>
  <section>
    <template v-if="isFetchingEpisodes"> Loading episodes </template>
    <template v-else>
      <template v-if="episodesError"> Could not fetch the episodes </template>
      <template v-else>
        <a
          v-for="episode in episodes"
          :key="episode.id"
          :class="$style.link"
          target="_blank"
          :href="episode.url"
        >
          <EpisodeTile :class="$style.tile" :episode="episode" />
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
