<script lang="ts" setup>
import type { Post } from '@/contracts/Post'

defineProps<{
  post: Post
  author: string
}>()
</script>

<template>
  <div class="post-card">
    <h2 class="post-title">
      {{ post.title }}
    </h2>
    <div class="post-body" v-html="post.body" />
    <div class="post-foot">
      {{ author }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  display: flex;
  flex-direction: column;
  background: $COLOR_WHITE;
  border-radius: 0.25em;
  box-shadow: 1px 1px 3px rgba($COLOR_BLACK, 15%);
}

.post-title {
  padding: 1em;
  color: $COLOR_BLUE;
}

.post-body {
  flex-grow: 10;
  padding: 0 1em;
}

.post-foot {
  padding: 1em;
  font-size: 0.85em;
}
</style>
