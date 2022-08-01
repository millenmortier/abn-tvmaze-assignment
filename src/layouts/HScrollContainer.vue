<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.root {
  max-width: 100vw;
  overflow-x: auto;
}

.root::-webkit-scrollbar {
  display: none;
}

.content {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 1rem;
  gap: 0.5rem;
}
.content > * {
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .content {
    padding: 0 calc((100vw - 768px) / 2 + 1rem);
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .content {
    padding: 0 calc((100vw - 1024px) / 2 + 1rem);
  }
}

@media (min-width: 1280px) {
  .content {
    padding: 0 calc((100vw - 1280px) / 2 + 1rem);
  }
}
</style>
