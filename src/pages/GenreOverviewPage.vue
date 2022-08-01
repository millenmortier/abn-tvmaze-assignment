<script setup lang="ts">
import Container from '../layouts/Container.vue';
import HScrollContainer from '../layouts/HScrollContainer.vue';
import TvShowCard from '../components/TvShowCard.vue';
import CtaCard from '../components/CtaCard.vue';
import { useGenreOverview } from '../composables/abn-tvmaze-proxy';
import HScrollContainerPadding from '../layouts/HScrollContainerPadding.vue';

const { isFetching, genreOverview } = useGenreOverview();
</script>

<template>
  <Container>
    <h1>Shows by genre</h1>
  </Container>

  <template v-if="isFetching"> Loading... </template>
  <template v-else>
    <div v-for="{ genre, tvShows } in genreOverview" :key="genre">
      <Container>
        <h3 :class="$style.genre">{{ genre }}</h3>
      </Container>

      <HScrollContainer :class="$style.scrollContainer">
        <template v-for="tvShow in tvShows" :key="tvShow.id">
          <RouterLink :to="`/detail/${tvShow.id}`" :class="$style.tvCardLink">
            <TvShowCard :tv-show="tvShow" />
          </RouterLink>
        </template>

        <RouterLink to="/search" :class="$style.tvCardLink">
          <CtaCard>
            Haven't found your show yet? Try our Search Page 👉
          </CtaCard>
        </RouterLink>

        <HScrollContainerPadding />
      </HScrollContainer>
    </div>
  </template>
</template>

<style module>
.genre {
  margin-bottom: 0;
}
.tvCardLink {
  margin: 1rem 0 3rem;
  text-decoration: none;
  transform: none;
  transition: 0.2s transform;
}
.tvCardLink:hover {
  transform: scale(1.05);
}

.scrollContainer {
  margin-bottom: 4rem;
}
</style>
