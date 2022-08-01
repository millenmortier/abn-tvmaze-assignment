<template>
  <div :class="$style.root">
    <div :class="$style.top">
      <!-- <img src="../assets/vue.svg" height="24" /> -->
      <span :class="$style.icon" aria-label="rainbow-emoji">🌈</span>
      <span :class="$style.text">ABN AMRO / TVmaze</span>
    </div>
    <div :class="$style.subtitle">Browse your favorite TV shows</div>
  </div>
</template>

<style module>
.top {
  display: flex;
  align-items: center;
}

.icon {
  position: relative;
  top: 0;
  transition: 0.1s top;
}
.root:hover .icon {
  top: -2px;
}
.root:hover .subtitle {
  color: var(--color-brand);
}

.text {
  margin-left: 0.5rem;
  font-weight: 900;
  font-size: 1.25rem;
}

.subtitle {
  display: none;
  color: var(--color-neutral-500);
  font-size: 0.875rem;
  transition: 0.15s color;
}

@media (min-width: 768px) {
  .subtitle {
    display: block;
  }
}
</style>
