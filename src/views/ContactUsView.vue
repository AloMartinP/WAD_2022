<template>
  <div class="wrap"></div>
  <h1>Contact us!</h1>
  <div class="about">
    <div class="profile-container" :key="i" v-for="i in 5">
      <div class="circle-wrapper">
        <img src="https://www.ivey.uwo.ca/imageGen.ashx?image=/media/3781222/executive-presence.jpg&width=1110&format=jpeg" alt="">
      </div>
      <div class="profile-information-container">
        <p class="contact-img">Avery Smith</p>
        <p class="contact-info">HR Support</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ContactUsView",

}
</script>

<style scoped>
.wrap{
  width: 100%;
  display: flex;
}
.about {
  margin: auto;
  display: flex;
}
.circle-wrapper {
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-left: 5rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
}
.circle-wrapper img {
  width: auto;
  height: 100%;

  margin-left: -15px;
}
.profile-container {
  display: flex;
}
.profile-information-container {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
}
</style>