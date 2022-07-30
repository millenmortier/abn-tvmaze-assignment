<script setup lang="ts">
import NavbarLayout from './layouts/NavbarLayout.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <NavbarLayout>
    <template v-slot:header>
      <AppHeader />
    </template>

    <template v-slot:content>
      <RouterView />
    </template>
  </NavbarLayout>
</template>
