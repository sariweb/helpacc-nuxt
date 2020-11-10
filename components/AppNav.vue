<template>
  <div>
    <div class="nav">
      <ul>
        <li>
          <nuxt-link exact to="/">
            <app-icon />{{ settings.title }}
          </nuxt-link>
          <h5>{{ settings.description }}</h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppIcon
  },
  computed: {
    ...mapState(['settings', 'categories'])
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
