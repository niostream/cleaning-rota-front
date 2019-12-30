<template>
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
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    loginAction() {
      this.$router.push("/main-menu");
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