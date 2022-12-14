<template>
  <div>
    <BlogPost v-for="post in posts" :post="post" :key="post.id"/>
    <button class="reset-button" @click="resetAllPosts">Reset</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "BlogPage",
  components: {
    BlogPost
  },
  computed: mapGetters(['posts']),
  mounted() {
    this.$store.dispatch('loadItems');
  },
  methods: {
    resetAllPosts() {
      this.$store.commit('resetAllPosts');
    },
  },
}
</script>

<style scoped>
.reset-button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>