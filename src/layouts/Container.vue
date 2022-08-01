<template>
  <div :class="$style.root">
    <slot></slot>
  </div>
</template>
<style module>
.root {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  box-sizing: border-box;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .root {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .root {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .root {
    max-width: 1280px;
  }
}
</style>
