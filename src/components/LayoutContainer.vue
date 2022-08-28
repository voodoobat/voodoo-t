<template>
  <div class="layout-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  max-width: $CONTAINER_WIDTH;
  padding-right: $GRID_GAP;
  padding-left: $GRID_GAP;
  margin-right: auto;
  margin-left: auto;
}
</style>
