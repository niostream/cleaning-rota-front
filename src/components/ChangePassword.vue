<template>
  <v-container>
    <v-layout my-3 justify-center>
      <h1>パスワード変更</h1>
    </v-layout>
    <v-layout justify-center>
      <!-- パスワード変更フォーム -->
      <v-form class="login-form-layout">
        <!-- 変更前パスワード -->
        <v-layout>
          <v-text-field label="変更前パスワード" type="text" v-model="beforePassword" required autofocus />
        </v-layout>
        <!-- /変更前パスワード -->
        <!-- 変更パスワード -->
        <v-layout>
          <v-text-field label="変更パスワード" type="password" v-model="afterPassword" required />
        </v-layout>
        <!-- /変更パスワード -->
        <!-- 確認パスワード -->
        <v-layout>
          <v-text-field label="確認パスワード" type="password" v-model="confirmPassword" required />
        </v-layout>
        <!-- /確認パスワード -->
        <!-- 変更ボタン -->
        <v-layout my-3 justify-center>
          <v-btn outlined rounded class="blue blue-text" @click="changePasswordAction">変更</v-btn>
        </v-layout>
        <!-- /変更ボタン -->
      </v-form>
      <!-- /パスワード変更フォーム -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      beforePassword: "",
      afterPassword: "",
      confirmPassword: ""
    };
  },
  methods: {
    changePasswordAction() {
      this.$router.push("/main-menu");
    }
  }
};
</script>

<style scoped>
</style>