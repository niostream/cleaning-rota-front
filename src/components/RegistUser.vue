<template>
  <v-container>
    <!-- ユーザー登録画面エリア -->
    <v-container>
      <v-layout my-3 justify-center>
        <h1>ユーザー登録</h1>
      </v-layout>
      <v-layout justify-center>
        <!-- ユーザー登録フォーム -->
        <v-form class="login-form-layout">
          <!-- ユーザーID -->
          <v-layout>
            <v-text-field label="ユーザーID" type="text" v-model="userId" required />
          </v-layout>
          <!-- /ユーザーID -->
          <!-- パスワード -->
          <v-layout>
            <v-text-field label="パスワード" type="password" v-model="password" required />
          </v-layout>
          <!-- /パスワード -->
          <!-- 姓 -->
          <v-layout>
            <v-text-field label="姓" type="text" v-model="firstName" required />
          </v-layout>
          <!-- /姓 -->
          <!-- 名 -->
          <v-layout>
            <v-text-field label="名" type="text" v-model="lastName" required />
          </v-layout>
          <!-- /名 -->
          <!-- ユーザー権限 -->
          <v-layout>
            <v-select
              label="ユーザー権限"
              v-model="admin"
              :items="adminList"
              item-text="text"
              item-value="value"
              return-object
            ></v-select>
          </v-layout>
          <!-- /ユーザー権限 -->
          <!-- 寮名 -->
          <v-layout>
            <v-select label="寮名" v-model="dormitory" :items="dormitoryList"></v-select>
          </v-layout>
          <!-- /寮名 -->
          <!-- ユーザー登録ボタン -->
          <v-layout my-3 justify-center>
            <v-btn outlined rounded class="blue blue-text" @click="registUserAction">ユーザー登録</v-btn>
          </v-layout>
          <!-- /ユーザー登録ボタン -->
        </v-form>
        <!-- /ユーザー登録フォーム -->
      </v-layout>
    </v-container>
    <!-- /ユーザー登録画面エリア -->
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      password: "",
      firstName: "",
      lastName: "",
      admin: "",
      dormitory: "",
      adminList: [
        { text: "権限なし", value: 0 },
        { text: "権限あり", value: 1 }
      ],
      dormitoryList: [
        { text: "武蔵境寮", value: 1 },
        { text: "A", value: 2 },
        { text: "C", value: 3 },
        { text: "B", value: 4 }
      ]
    };
  },
  methods: {
    async registUserAction() {
      const x = await axios
        .get("http://localhost:8081/regist-user", {
          params: {
            userId: this.userId,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            admin: this.admin,
            dormitory: this.dormitory
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
      console.log(x);
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