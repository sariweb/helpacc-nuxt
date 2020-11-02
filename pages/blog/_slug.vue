<template>
  <main class="post individual">
    <h1>{{ post.title.rendered }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section v-html="post.content.rendered" />
  </main>
</template>

<script>
export default {
  data () {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    posts () {
      const posts = this.$store.state.posts
      return posts
    },
    post () {
      const post = this.posts.find(el => el.slug === this.slug)
      return post
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>
