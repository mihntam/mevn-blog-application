<template>
  <div class="header">
    <div class="title">
      <span class="title-small">React & NodeJS</span>
      <span class="title-large">Check it</span>
    </div>
    <div>
      <img
        class="header-image"
        src="https://www.pockettactics.com/wp-content/uploads/2021/07/Skyward-sword-wallpaper-7.jpg"
        alt="post-img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBan",
};
</script>

<style scoped>
.header {
  margin-top: 60px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
}

.title-small {
  position: absolute;
  top: 16%;
  font-size: 20px;
}

.title-large {
  position: absolute;
  top: 18%;
  font-size: 100px;
}

.header-image {
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
}
</style>