<template>
  <v-container>
    <!-- 入力エラー表示スナックバー -->
    <v-snackbar v-model="errorSnackbar" top>
      {{ errorText }}
      <v-btn color="white" text @click="errorSnackbar = false">Close</v-btn>
    </v-snackbar>
    <!-- ログイン画面エリア -->
    <v-container>
      <v-layout my-3 justify-center>
        <h1>掃除当番表</h1>
      </v-layout>
      <v-layout justify-center>
        <!-- ログインフォーム -->
        <v-form class="login-form-layout">
          <!-- ユーザーID -->
          <v-layout>
            <v-text-field label="ユーザーID" type="text" v-model="userId" required autofocus />
          </v-layout>
          <!-- /ユーザーID -->
          <!-- パスワード -->
          <v-layout>
            <v-text-field label="パスワード" type="password" v-model="password" required />
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
    <!-- /ログイン画面エリア -->
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
      userId: "",
      password: ""
    };
  },
  computed: mapGetters(["getUser"]),
  methods: {
    ...mapActions([UPDATE_USER]),
    async loginAction() {
      const userInfo = await axios
        .get("http://localhost:8081/login", {
          params: {
            userId: this.userId,
            password: this.password
          }
        })
        .then(res => {
          console.log(res);
          return res.data;
        })
        .catch(err => {
          console.log(err);
          return null;
        });
      if (userInfo) {
        const user = {
          userId: userInfo.userId,
          adminFlag: userInfo.configAdmin.adminFlag,
          dormitoryId: userInfo.dormitory.dormitoryId
        };
        this[UPDATE_USER](user);
        // console.log(this.getUser);
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
