<template>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
  <script src="https://kit.fontawesome.com/de237329f7.js" crossorigin="anonymous"></script>
  <div class="post-list">
    <div class="post">
      <div class="top-row">
          <div class="post-author">
            <fa-icon icon="fa-solid fa-user-secret"/>
            <p> {{ post.author }}</p>
          </div>
          <p class="post-time"> {{ post.time }}</p>
      </div>
      <div class="post-body">
        <img v-if="post.img" :src="post.img" alt="">
        <p>{{ post.text }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ['post'],
};

</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  margin: auto;
  width: 80%;

}
.post {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 3rem;
  justify-content: center;
  align-items: center;
}
.post-body{
  display: block;
  width: 90%;
  object-fit: cover;
}
.top-row {
  display: flex;
  justify-content: space-between;
  width: 90%;
}
.post-author{
  display: flex;
  width: 25%;
  align-items: center;
}

</style>