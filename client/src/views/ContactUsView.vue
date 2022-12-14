<template>
  <div class="about">
    <h1>Contact us!</h1>
    <div class="profile-container">
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
.about {
  display: flex;
  flex-direction: column;
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