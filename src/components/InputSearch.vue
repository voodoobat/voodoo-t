<script lang="ts" setup>
import SearchIcon from '@/assets/svg/search.svg'

const emit = defineEmits(['input'])

const onInput = ({ target }: { target: HTMLInputElement }) => {
  emit('input', target.value)
}
</script>

<template>
  <div class="base-input">
    <input class="input" type="search" @input="onInput" />
    <span class="icon">
      <search-icon class="svg" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  position: relative;
  overflow: hidden;
  border-radius: $RADIUS_DEFAULT;

  > .input {
    width: 100%;
    padding: 0.5em 1em 0.5em 3.5em;
    background: $COLOR_WHITE;
    border: 1px solid transparent;
    border-radius: $RADIUS_DEFAULT;
    box-shadow: $SHADOW_DEFAULT;
    transition: border-color 0.25s ease;
  }

  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: $COLOR_GRAY;
    pointer-events: none;
    border-right: 1px solid transparent;
    @include position(absolute, 0 null null 0);
    @include size(3em 100%);
  }

  > .input:focus {
    border-color: $COLOR_BLUE;

    ~ .icon {
      color: $COLOR_BLUE;
      border-color: $COLOR_BLUE;
    }
  }

  .svg {
    @include size(1.5em);
  }
}
</style>
