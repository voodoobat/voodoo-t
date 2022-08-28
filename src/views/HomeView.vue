<script lang="ts" setup>
import { reactive } from 'vue'
import { postsStore } from '@/stores/posts'
import { usersStore } from '@/stores/users'

import LayoutContainer from '@/components/LayoutContainer.vue'
import PostCard from '@/components/PostCard.vue'

const { posts } = reactive(postsStore())
const { usersHash } = reactive(usersStore())
</script>

<template>
  <layout-container class="posts">
    <post-card
      v-for="post in posts"
      :key="post.id"
      class="posts-column"
      :post="post"
      :author="usersHash[post.userId]"
    />
  </layout-container>
</template>

<style lang="scss" scoped>
.posts {
  padding-top: $GRID_GAP;
  padding-bottom: $GRID_GAP;
  @include flex-container;
}

.posts-column {
  @include media($MQ_MOBILE) {
    @include flex-column(1 2);
  }
  @include media($MQ_LAPTOP) {
    @include flex-column(1 3);
  }
}
</style>
