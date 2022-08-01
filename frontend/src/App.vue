<script setup lang="ts">
import { provide } from 'vue';
import NavbarLayout from './layouts/NavbarLayout.vue';
import AppHeader from './components/AppHeader.vue';
import NavItem from './components/NavItem.vue';
import AppFooter from './components/AppFooter.vue';
import { useFavorites, injectionKey } from './composables/favorites';

const { favorites, isFavorite, setFavorites, toggleShow } = useFavorites();

provide(injectionKey, { favorites, isFavorite, setFavorites, toggleShow });
</script>

<template>
  <NavbarLayout>
    <template v-slot:header>
      <AppHeader>
        <template v-slot:navItems>
          <RouterLink to="/" custom v-slot="{ href, isActive, navigate }">
            <NavItem :href="href" :active="isActive" @click="navigate">
              <template v-slot:icon>📦</template> Shows by genre
            </NavItem>
          </RouterLink>

          <RouterLink
            to="/by-rating"
            custom
            v-slot="{ href, isActive, navigate }"
          >
            <NavItem :href="href" :active="isActive" @click="navigate">
              <template v-slot:icon>⭐️</template> Shows by rating
            </NavItem>
          </RouterLink>

          <RouterLink
            to="/favorites"
            custom
            v-slot="{ href, isActive, navigate }"
          >
            <NavItem :href="href" :active="isActive" @click="navigate">
              <template v-slot:icon>💜</template> My shows
            </NavItem>
          </RouterLink>

          <RouterLink to="/search" custom v-slot="{ href, isActive, navigate }">
            <NavItem :href="href" :active="isActive" @click="navigate">
              <template v-slot:icon>🔍</template> Search
            </NavItem>
          </RouterLink>
        </template>
      </AppHeader>
    </template>

    <template v-slot:content>
      <RouterView />
    </template>
  </NavbarLayout>

  <AppFooter />
</template>
