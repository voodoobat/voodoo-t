<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { postsStore } from '@/stores/posts'
import { usersStore } from '@/stores/users'

import LayoutContainer from '@/components/LayoutContainer.vue'
import PostCard from '@/components/PostCard.vue'
import InputSearch from '@/components/InputSearch.vue'

const query = ref('')

const { posts } = reactive(postsStore())
const { usersHash } = reactive(usersStore())

const search = (str: string) => (query.value = str)
const posts2view = posts.map((post) => ({
  ...post,
  author: usersHash[post.userId],
}))

const filtered = computed(() => {
  if (query.value) {
    return posts2view.filter(({ author }) => {
      return author.includes(query.value)
    })
  }

  return posts2view
})
</script>

<template>
  <layout-container class="search">
    <div class="search-column">
      <input-search @input="search" />
    </div>
  </layout-container>
  <layout-container class="posts">
    <post-card
      v-for="post in filtered"
      :key="post.id"
      class="posts-column"
      :post="post"
      :author="post.author"
    />
  </layout-container>
</template>

<style lang="scss" scoped>
.search {
  padding-top: $GRID_GAP;
  @include flex-container;
}

.search-column {
  @include flex-column(1 1);
  @include media($MQ_MOBILE) {
    @include flex-column(1 2, 1 4);
  }
  @include media($MQ_LAPTOP) {
    @include flex-column(1 3, 1 3);
  }
}

.posts {
  padding-top: $GRID_GAP;
  padding-bottom: $GRID_GAP;
  @include flex-container;
}

.posts-column {
  @include flex-column(1 1);
  @include media($MQ_MOBILE) {
    @include flex-column(1 2);
  }
  @include media($MQ_LAPTOP) {
    @include flex-column(1 3);
  }
}
</style>
