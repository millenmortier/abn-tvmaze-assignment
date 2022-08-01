<script setup lang="ts">
defineProps<{
  modelValue: string;
  large?: boolean;
}>();
</script>

<template>
  <input
    :class="[$style.root, large && $style.large]"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', ($event as any).target.value)"
  />
</template>

<style module>
.root {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid var(--color-neutral-200);
  border-radius: 0.25rem;
  color: var(--color-neutral-900);
  background-color: var(--color-neutral-100);
  font-size: 1rem;
  font-family: var(--main-font);
  box-shadow: var(--shadow-md);
  transition: 0.15s border-color, 0.2s box-shadow;
}
.root:focus {
  box-shadow: var(--shadow-sm);
}

.root:hover {
  border-color: var(--color-brand);
}

.large {
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}
</style>
