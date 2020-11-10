/* eslint-disable curly */
/* eslint-disable no-console */
const prodURL = 'http://helpacc.ru'
const siteURL = process.dev ? process.env.DEV_URL : prodURL

function propIsDefined (prop) {
  return (prop !== undefined) && (prop !== '')
}

function getAuth () {
  const auth = process.dev ? (process.env.USER + ':' + process.env.PASSWORD) : ''
  return 'Basic ' +
    Buffer
      .from(auth, 'binary')
      .toString('base64')
}

export const state = () => ({
  posts: [],
  tags: [],
  categories: [],
  settings: {
    title: 'Консультации бухгалтера',
    description: 'Бухгалтерский учет, налоговый учет, управленческий учет'
  }
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  },
  updateSettings: (state, settings) => {
    state.settings = settings
  }
}

export const actions = {
  async getPosts ({ state, commit }) {
    if (state.posts.length) return

    try {
      let posts = await this.$axios.$get(`${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`)
      posts = posts
        .filter(el => el.status === 'publish')
        .map(({ id, slug, title, excerpt, date, tags, categories, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          categories,
          content
        }))

      commit('updatePosts', posts)
    } catch (err) {
      console.error(err)
    }
  },
  async getTags ({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await this.$axios.$get(`${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`)

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))

      commit('updateTags', tags)
    } catch (err) {
      console.error(err)
    }
  },
  async getCategories ({ state, commit }) {
    if (state.categories.length) return

    let allCategories = state.posts.reduce((acc, item) => {
      return acc.concat(item.categories)
    }, [])
    allCategories = allCategories.join()

    try {
      let categories = await this.$axios.$get(`${siteURL}/wp-json/wp/v2/categories?page=1&per_page=40&include=${allCategories}`)

      categories = categories.map(({ id, name }) => ({
        id,
        name
      }))

      commit('updateCategories', categories)
    } catch (err) {
      console.error(err)
    }
  },
  async getSettings ({ state, commit }) {
    if (propIsDefined(state.settings.title)) return

    try {
      const settings = await this.$axios.$get(
        `${siteURL}/wp-json/wp/v2/settings`,
        {
          headers: { Authorization: getAuth() }
        }
      )

      commit('updateSettings', {
        title: settings.title,
        description: settings.description
      })
    } catch (err) {
      console.error(err)
    }
  }
}
