<template>
  <div class="settings">
    <div v-if="user" class="wrapper">
      <div class="title">
        <span class="title-update">Update Your Account</span>
        <span class="title-delete">Delete Account</span>
      </div>
      <form class="form">
        <label>Profile Picture</label>
        <div class="profile">
          <img v-if="user" :src="user.profilePic" alt="" />
          <label for="file-input">
            <i class="profile-icon far fa-user-circle"></i>
          </label>
          <input
            id="file-input"
            type="file"
            style="display: none"
            class="profile-input"
          />
        </div>
        <label>Username</label>
        <input type="text" v-model="user.username" name="name" />
        <label>Email</label>
        <input type="email" v-model="user.email" name="email" />
        <label>Password</label>
        <input type="password" v-model="user.password" name="password" />
        <button class="submit-button" type="submit">Update</button>
      </form>
    </div>
    <side-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideBar from "../components/SideBar.vue";

export default {
  components: { SideBar },
  name: "Setting",
  computed: { ...mapGetters(["user"]) },
};
</script>

<style scoped>
.settings {
  display: flex;
}

.wrapper {
  flex: 9;
  padding: 20px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-update {
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
}

.title-delete {
  color: red;
  font-size: 12px;
  cursor: pointer;
}

.form {
  display: flex;
  flex-direction: column;
}

.profile {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.profile > img {
  height: 70px;
  width: 70px;
  border-radius: 20px;
  object-fit: cover;
}

.profile-icon {
  width: 25px;
  height: 25px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  margin-left: 10px;
  color: white;
  background-color: lightcoral;
  cursor: pointer;
}

.profile-button:focus {
  outline-style: none;
}

.form > label {
  font-size: 20px;
  margin-top: 20px;
}

.profile-input {
  width: 30%;
}

.form > input {
  color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border: none;
  border-bottom: 1px solid lightgray;
}

.submit-button {
  align-self: center;
  width: 150px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:hover {
  background-color: rgb(1, 114, 114);
}
</style>