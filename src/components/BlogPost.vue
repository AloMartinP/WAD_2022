<template>
  <div class="post">

    <div class="top-row">

      <div class="post-author">
        <font-awesome-icon icon="fa-solid fa-user-secret"/>
        <p> {{ post.author }}</p>
      </div>

      <p class="post-time"> {{ post.time }}</p>

    </div>

    <div class="post-body">

      <img v-if="post.img" :src="post.img" alt="" class="responsive">

      <div class="body-text">
        <p>{{ post.text }}</p>
      </div>

    </div>

    <button @click="increment">
      <font-awesome-icon icon="fa-solid fa-thumbs-up fa-xl"/>
      {{ count }}
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  name: "BlogPost",
  props: ['post'],
  methods: {
    increment() {
      this.count++
    }
  },
};

</script>

<style scoped>
.post {
  margin: 2rem auto;
  width: 80%;
  border: 3px solid green;
  padding: 10px;
  border-radius: .5rem;
}
.responsive{
  width: 100%;
  height: auto;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 3rem;
}
button {
  all: unset;
  cursor: pointer;
}
.fa-thumbs-up{
  color: #007bff;
}

</style>