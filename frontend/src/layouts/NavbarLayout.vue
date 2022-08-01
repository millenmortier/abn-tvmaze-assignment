<template>
  <div :class="$style.root">
    <div :class="$style.headerContainer">
      <slot name="header"></slot>
    </div>
    <div :class="$style.contentContainer">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style module>
.root {
  --header-height: 104px;
}
.headerContainer {
  position: fixed;
  top: 0;
  z-index: var(--z-index-header);
  width: 100%;
}

.contentContainer {
  box-sizing: border-box;
  padding-top: var(--header-height);
  min-height: calc(100vh - 40px);
}

@media (min-width: 768px) {
  .root {
    --header-height: 80px;
  }
}
</style>
