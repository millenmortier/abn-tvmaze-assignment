<script setup lang="ts">
import { inject } from 'vue';
import Button from '../components/Button.vue';
import { injectionKey, FavoritesContext } from '../composables/favorites';
import { TvShow } from '../api-clients/tvmaze/types';

defineProps<{
  tvShow: TvShow;
}>();

const { isFavorite, toggleShow } = inject(injectionKey) as FavoritesContext;
</script>

<template>
  <Button
    :class="$style.favButton"
    @click="
      () => {
        toggleShow(tvShow as TvShow);
      }
    "
  >
    <template v-if="isFavorite(tvShow)">
      <span :class="$style.emoji">💔</span> Remove from favorites
    </template>
    <template v-else>
      <span :class="$style.emoji">💜</span> Add to favorites
    </template>
  </Button>
</template>

<style module>
.favButton {
  float: right;
}
.emoji {
  margin-right: 0.5rem;
}
</style>
