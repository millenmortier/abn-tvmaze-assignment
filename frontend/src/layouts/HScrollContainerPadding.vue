<template>
  <div :class="$style.root"></div>
</template>

<style module>
.root {
  width: 1rem;
}

@media (min-width: 768px) {
  .root {
    width: calc((100vw - 768px) / 2);
  }
}

@media (min-width: 1024px) {
  .root {
    width: calc((100vw - 1024px) / 2);
  }
}

@media (min-width: 1280px) {
  .root {
    width: calc((100vw - 1280px) / 2);
  }
}
</style>
