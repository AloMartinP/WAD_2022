<template>
  <blog-post v-for="post in posts" :post="post" :key="post.id"/>
</template>

<script>
import {mapState} from "vuex";
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "BlogPage",
  components: {
    BlogPost
  },
  mounted() {
    this.$store.dispatch('loadItems')
  },
  computed: mapState(['posts'])
}
</script>

<style scoped>

</style>