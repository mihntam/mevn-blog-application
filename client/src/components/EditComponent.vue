<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Cập nhật thông tin</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Họ tên</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Điện thoại</label>
          <input
            type="text"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Cập nhật</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

      axios
        .put(apiURL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>