<script setup lang="ts">
defineProps<{ active: boolean; href: string }>();
defineEmits<{}>();
</script>

<template>
  <a :class="[$style.link, active && $style.active]" :href="href">
    <span :class="$style.icon"><slot name="icon"></slot></span>
    <span :class="$style.text"><slot></slot></span>
  </a>
</template>

<style module>
.link {
  color: var(--text-color);
  text-decoration: none;
  transition: 0.1s color;
}

.link:hover {
  color: var(--color-brand);
}
.active {
  color: var(--light-text-color) !important;
}

.active .icon {
  background-color: var(--color-brand-100);
}

.icon {
  font-size: 1.5rem;
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
}

.text {
  display: none;
}

@media (min-width: 768px) {
  .active {
    border-bottom: 2px solid var(--color-brand);
  }
}

@media (min-width: 1024px) {
  .icon {
    font-size: 1rem;
    margin-right: 0.25rem;
    padding: 0;
  }

  .active .icon {
    background-color: transparent;
  }

  .text {
    display: inline-block;
  }
}
</style>
