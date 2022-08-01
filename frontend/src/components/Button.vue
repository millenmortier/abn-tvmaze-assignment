<script setup lang="ts"></script>

<template>
  <button><slot></slot></button>
</template>

<style module>
button {
  border-radius: 8px;
  border: 1px solid var(--color-neutral-200);
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: var(--light-text-color);
  background-color: white;
  cursor: pointer;
  transition: 0.2s border-color, 0.2s color;
}
button:hover {
  border-color: var(--color-brand);
  color: var(--color-brand);
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
