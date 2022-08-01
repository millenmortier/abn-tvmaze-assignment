<script setup lang="ts">
import { ref, watch } from 'vue';
import Container from '../layouts/Container.vue';
import Input from '../components/Input.vue';
import SearchResultCard from '../components/SearchResultCard.vue';
import LoadingIndicator from '../components/LoadingIndicator.vue';
import { useSearch } from '../composables/tvmaze';

const searchText = ref('');

const { isFetching, error, searchResults, search } = useSearch();

watch(searchText, async () => {
  search(searchText.value);
});
</script>

<template>
  <Container :class="$style.container">
    <h1>Search</h1>

    <Input
      v-model="searchText"
      large
      placeholder="Start typing your query..."
    />

    <LoadingIndicator :class="$style.loading" v-if="isFetching" />
    <template v-else>
      <template v-if="searchResults.length">
        <p>{{ searchResults.length }} results found:</p>

        <RouterLink
          v-for="{ score, show } in searchResults"
          :key="show.id"
          :to="`/detail/${show.id}`"
          :class="$style.link"
        >
          <SearchResultCard :tv-show="show" :class="$style.card" />
        </RouterLink>
      </template>
      <template v-else-if="!!searchText"> No results </template>
      <template v-else-if="error">An error occurred while searching</template>
    </template>
  </Container>
</template>

<style module>
.container {
  margin-bottom: 5rem;
}
.loading {
  padding: 5rem 0;
  text-align: center;
}

.link {
  text-decoration: none;
}
.link:hover .card {
  border-color: var(--color-brand);
}
.card {
  margin-bottom: 1rem;
  transition: 0.2s border-color;
}
</style>
