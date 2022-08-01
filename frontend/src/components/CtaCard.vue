<template>
  <div :class="[$style.root, $style.text]">
    <slot></slot>
  </div>
</template>

<style module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 240px;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  background-image: linear-gradient(to right, #2575fc 0%, #6a11cb 100%);
}

.text {
  text-align: center;
  font-size: 1.75rem;
  line-height: 1.25;
  color: var(--color-neutral-100);
  font-weight: 900;
}

@media (min-width: 1024px) {
  .root {
    width: 256px;
    height: 400px;
  }

  .text {
    font-size: 2.75rem;
  }
}
</style>
