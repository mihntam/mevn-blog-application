<template>
  <div class="write">
    <img v-if="file" class="write-img" :src="post_photo" alt="" />
    <form class="write-form" @submit.prevent="handleSubmit">
      <div class="write-form-group">
        <label for="fileInput">
          <i class="write-icon fas fa-plus"></i>
        </label>
        <input
          id="fileInput"
          type="file"
          style="display: none"
          @change="onFileSelected"
        />
        <input
          class="write-input"
          placeholder="Title"
          type="text"
          autoFocus="true"
          v-model="title"
        />
      </div>
      <div class="write-form-group">
        <textarea
          class="write-input write-text"
          placeholder="Tell your story..."
          type="text"
          autoFocus="true"
          v-model="desc"
        />
      </div>
      <button class="write-submit" type="submit">Publish</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlogService from "../services/BlogService";

export default {
  name: "Write",
  data() {
    return {
      username: "",
      title: "",
      desc: "",
      file: "",
      post_photo: "",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    onFileSelected(event) {
      this.file = event.target.files[0];
      console.log(event.target.files[0]);
      const data = URL.createObjectURL(event.target.files[0]);
      this.post_photo = data;
    },
    handleSubmit() {
      const newPost = {
        username: this.user.username,
        title: this.title,
        desc: this.desc,
      };
      if (this.file) {
        const data = new FormData();
        const filename = Date.now() + this.file.name;

        data.append("name", filename);
        data.append("file", this.file);
        newPost.photo = filename;

        BlogService.postFile(data)
          .then(() => {
            console.log(data);
          })
          .catch((error) => {
            console.log("There was an error:" + error.res);
          });
      }
      BlogService.newPost(newPost)
        .then((res) => {
          this.$router.push("/post/" + res.data._id);
        })
        .catch((error) => {
          console.log("There was an error:" + error.res);
        });
    },
  },
};
</script>

<style scoped>
.write {
  padding-top: 50px;
}

.write-img {
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
}

.write-form {
  position: relative;
}

.write-form-group {
  margin-left: 150px;
  display: flex;
  align-items: center;
}

.write-icon {
  width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: rgb(129, 125, 125);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.write-input {
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
}

.write-input::placeholder {
  color: rgb(189, 185, 185);
  font-weight: 400;
}

.write-input:focus {
  outline-style: none;
}

.write-text {
  width: 70vw;
  height: 100vh;
  font-family: inherit;
  font-size: 20px;
}

.write-submit {
  position: absolute;
  top: 20px;
  right: 50px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>