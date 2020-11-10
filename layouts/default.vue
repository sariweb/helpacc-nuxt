<template>
  <div>
    <app-nav />
    <nuxt />
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav
  }
}
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #fff;
}

h1,
h2,
h3 {
  font-family: "Alata", serif;
  font-weight: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

/* img {
  width: 100%;
} */

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}

ul {
  padding-left: 2em;
}
/* Images */
.alignleft {
  float: left;
}

.alignright {
  float: right;
}

.aligncenter {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.buhtable {
  border: 5px double #ededed;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 12px;
  line-height: 1;
  margin: 0 0 20px;
  width: 100%;
}

.buhtable td {
  border: 1px solid #ededed;
  padding: 2px 5px 2px 2px;
  vertical-align:top;
}

.buhtable th {
  border: 1px solid #ededed;
  padding: 2px 5px 2px 2px;
  vertical-align:top;
  text-align:center;
}

.buhtable  p {
  margin-bottom:5px;
}

section img.alignleft {
    margin-left: -60px;
}

img.alignleft {
    margin: 5px 20px 5px 0;
}

img.size-full {
    height: auto;
    max-width: 100%;
}
</style>
