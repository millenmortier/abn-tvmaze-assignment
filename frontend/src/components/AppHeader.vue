<script setup lang="ts">
import Container from '../layouts/Container.vue';
import Logo from './Logo.vue';

defineProps<{
  logoHref?: string;
}>();
</script>

<template>
  <div :class="$style.root">
    <Container>
      <div :class="$style.container">
        <RouterLink :to="logoHref || '/'" :class="$style.logoLink"
          ><Logo
        /></RouterLink>

        <div :class="$style.navItemContainer">
          <slot name="navItems"></slot>
        </div>
      </div>
    </Container>
  </div>
</template>

<style module>
.root {
  height: var(--header-height, 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--color-brand-100);
  background-color: rgba(var(--color-neutral-100-rgb), 0.9);
  backdrop-filter: blur(8px);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logoLink {
  margin-bottom: 1rem;
  text-decoration: none;
  color: var(--text-color);
}

.navItemContainer {
  display: flex;
  align-self: flex-end;
  padding: 0.5rem 0;
  gap: 1rem;
}

@media (min-width: 768px) {
  .root {
    border-bottom: none;
  }

  .logoLink {
    margin: 0;
  }
  .container {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
  .navItemContainer {
    gap: 2rem;
  }
}
</style>
