<script setup lang="ts">
import { useRoute } from 'vue-router';
import Container from '../layouts/Container.vue';
import { useShowInfo } from '../composables/tvmaze';
import LoadingIndicator from '../components/LoadingIndicator.vue';

import FavoriteButton from '../organisms/FavoriteButton.vue';
import TvShowDetailMetaData from '../organisms/TvShowDetailMetaData.vue';
import TvShowDetailSeasons from '../organisms/TvShowDetailSeasons.vue';
import TvShowDetailEpisodes from '../organisms/TvShowDetailEpisodes.vue';

const route = useRoute();
const tvShowId = parseInt(route.params.id as string, 10);

const {
  isFetching: isFetchingShowInfo,
  error: showInfoError,
  tvShow,
} = useShowInfo(tvShowId);
</script>

<template>
  <Container>
    <LoadingIndicator v-if="isFetchingShowInfo" />

    <template v-else-if="!isFetchingShowInfo && tvShow">
      <FavoriteButton :tv-show="tvShow" />

      <h1>{{ tvShow.name }}</h1>

      <h2>Summary</h2>

      <section :class="$style.infoContainer">
        <div :class="$style.summary">
          <img :src="tvShow.image.medium" :class="$style.image" />

          <div v-html="tvShow.summary"></div>
        </div>

        <div :class="$style.metaDataContainer">
          <TvShowDetailMetaData :tv-show="tvShow" />
        </div>
      </section>

      <div :class="$style.section">
        <TvShowDetailSeasons :tv-show-id="tvShowId" />
      </div>

      <div :class="$style.section">
        <TvShowDetailEpisodes :tv-show-id="tvShowId" />
      </div>
    </template>
    <template v-else-if="!isFetchingShowInfo && showInfoError">
      An error has occured while fetching the show's details
    </template>
  </Container>
</template>

<style module>
.infoContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
}

.image {
  height: 200px;
}

.section {
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .infoContainer {
    flex-direction: row;
    gap: 2rem;
  }
  .summary {
    display: flex;
    gap: 2rem;
    flex-basis: 60%;
  }

  .image {
    margin-top: 1rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
  }
  .metaDataContainer {
    flex-basis: 40%;
  }
}
</style>
