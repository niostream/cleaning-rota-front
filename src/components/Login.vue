<template>
  <v-container>
    <v-snackbar v-model="errorSnackbar" top>
      {{ errorText }}
      <v-btn color="white" text @click="errorSnackbar = false">Close</v-btn>
    </v-snackbar>
    <v-layout my-3 justify-center>
      <h1>掃除当番表</h1>
    </v-layout>
    <v-layout justify-center>
      <!-- ログインフォーム -->
      <v-form class="login-form-layout">
        <!-- ユーザーID -->
        <v-layout>
          <v-text-field label="ユーザーID" type="text" v-model="user.userId" required autofocus />
        </v-layout>
        <!-- /ユーザーID -->
        <!-- パスワード -->
        <v-layout>
          <v-text-field label="パスワード" type="password" v-model="user.password" required />
        </v-layout>
        <!-- /パスワード -->
        <!-- ログインボタン -->
        <v-layout my-3 justify-center>
          <v-btn outlined rounded class="blue blue-text" @click="loginAction">Log in</v-btn>
        </v-layout>
        <!-- /ログインボタン -->
      </v-form>
      <!-- /ログインフォーム -->
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { UPDATE_USER } from "@/store/mutation-types";
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      errorSnackbar: false,
      errorText: "",
      user: {
        userId: "",
        password: ""
      }
    };
  },
  computed: mapGetters(["getUser"]),
  methods: {
    ...mapActions([UPDATE_USER]),
    async loginAction() {
      const userInfo = await axios
        .get("http://localhost:8081/login", {
          params: {
            userId: this.user.userId,
            password: this.user.password
          }
        })
        .then(res => {
          console.log(res);
          return res.data;
        })
        .catch(error => {
          console.log(error);
          return null;
        });
      if (userInfo) {
        this[UPDATE_USER](this.user);
        this.$router.push("/main-menu");
      } else {
        this.errorText = "ログイン認証に失敗しました。";
        this.errorSnackbar = true;
      }
    }
  }
};
</script>

<style scoped>
.login-form-layout {
  width: 50%;
  border: solid 1px blue;
  padding: 1rem;
}
</style>