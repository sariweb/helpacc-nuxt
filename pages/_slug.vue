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
    // this.$store.dispatch('getPosts')
    // this.$store.dispatch('getSettings')
  }
}
</script>

<style lang="scss" scoped>
main.post {
  margin: 60px auto 50px;
  max-width: 1024px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>
