<script setup lang="ts">
import { inject } from 'vue';
import Container from '../layouts/Container.vue';
import { injectionKey, FavoritesContext } from '../composables/favorites';
import TvShowCard from '../components/TvShowCard.vue';
import HScrollContainer from '../layouts/HScrollContainer.vue';
import HScrollContainerPadding from '../layouts/HScrollContainerPadding.vue';
import CtaCard from '../components/CtaCard.vue';

const { favorites } = inject(injectionKey) as FavoritesContext;
</script>

<template>
  <Container>
    <h1>My favorite shows</h1>
  </Container>

  <div>
    <template v-if="!favorites.length">
      <Container>
        You haven't added any shows to your favorites list. Click the 'favorite'
        button for a show to add it to this list. Trying to find your favorite
        shows? <RouterLink to="/search">You can search for it here</RouterLink>
      </Container>
    </template>
    <template v-else>
      <HScrollContainer>
        <template v-for="tvShow in favorites" :key="tvShow.id">
          <RouterLink :to="`/detail/${tvShow.id}`" :class="$style.link">
            <TvShowCard :tv-show="tvShow" />
          </RouterLink>
        </template>

        <RouterLink to="/search" :class="$style.link">
          <CtaCard>
            Want to add more shows? Find them on our Search Page 👉
          </CtaCard>
        </RouterLink>

        <HScrollContainerPadding />
      </HScrollContainer>
    </template>
  </div>
</template>

<style module>
.link {
  text-decoration: none;
  margin: 1rem 0 3rem;
}
</style>
