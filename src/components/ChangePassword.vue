<template>
  <v-container>
    <!-- パスワード更新表示モーダル -->
    <v-dialog persistent v-model="successSnackbar" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Dialog 3</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" text @click="doNext">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 入力エラー表示スナックバー -->
    <v-snackbar v-model="errorSnackbar" top>
      {{ errorText }}
      <v-btn color="white" text @click="errorSnackbar = false">Close</v-btn>
    </v-snackbar>
    <!-- パスワード変更画面エリア -->
    <v-container>
      <v-layout my-3 justify-center>
        <h1>パスワード変更</h1>
      </v-layout>
      <v-layout justify-center>
        <!-- パスワード変更フォーム -->
        <v-form class="login-form-layout">
          <!-- 変更前パスワード -->
          <v-layout>
            <v-text-field
              label="変更前パスワード"
              type="password"
              v-model="defaultPassword"
              required
              autofocus
            />
          </v-layout>
          <!-- /変更前パスワード -->
          <!-- 変更パスワード -->
          <v-layout>
            <v-text-field
              label="変更パスワード"
              type="password"
              v-model="changePassword"
              required
            />
          </v-layout>
          <!-- /変更パスワード -->
          <!-- 確認パスワード -->
          <v-layout>
            <v-text-field
              label="確認パスワード"
              type="password"
              v-model="confirmPassword"
              required
            />
          </v-layout>
          <!-- /確認パスワード -->
          <!-- 変更ボタン -->
          <v-layout my-3 justify-center>
            <v-btn
              outlined
              rounded
              class="blue blue-text"
              @click="changePasswordAction"
              >変更</v-btn
            >
          </v-layout>
          <!-- /変更ボタン -->
        </v-form>
        <!-- /パスワード変更フォーム -->
      </v-layout>
    </v-container>
    <!-- /パスワード変更画面エリア -->
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { UPDATE_USER } from "@/store/mutation-types";
import axios from "axios";

export default {
  name: "changePassword",
  data() {
    return {
      successSnackbar: false,
      successText: "",
      errorSnackbar: false,
      errorText: "",
      defaultPassword: "",
      changePassword: "",
      confirmPassword: ""
    };
  },
  computed: mapGetters(["getUser"]),
  methods: {
    ...mapActions([UPDATE_USER]),
    async changePasswordAction() {
      // エラーチェック
      if (!this.checkPasswordForm()) {
        this.errorSnackbar = true;
        return;
      }
      // パスワード更新
      // TODO: Postメソッドに変更する必要があるが、SpringSecurityの関係上エラーになる。
      const updateResult = await axios
        .get("http://localhost:8081/change-password/update", {
          params: {
            userId: this.getUser.userId,
            defaultPassword: this.defaultPassword,
            changePassword: this.changePassword
          }
        })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
          return null;
        });
      if (updateResult === null) {
        this.errorText = "パスワードの更新に失敗しました。";
        this.errorSnackbar = true;
      } else {
        this.successText = "パスワードを更新しました。";
        this.successSnackbar = true;
      }
    },
    /**
     * パスワードフォームチェック
     */
    checkPasswordForm() {
      // 半角英数字含む8〜50文字の正規表現
      const regexString = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,50}$/i;
      if (this.defaultPassword.length === 0) {
        this.errorText = "変更前のパスワードが未入力です。";
        return false;
      } else if (this.changePassword.length === 0) {
        this.errorText = "変更後のパスワードが未入力です。";
        return false;
      } else if (this.confirmPassword.length === 0) {
        this.errorText = "確認用のパスワードが未入力です。";
        return false;
      } else if (!this.defaultPassword.match(regexString)) {
        this.errorText =
          "変更前のパスワードは8文字以上かつ50文字以内で、英字と数字を組み合わせてください。";
        return false;
      } else if (!this.changePassword.match(regexString)) {
        this.errorText =
          "変更後のパスワードは8文字以上かつ50文字以内で、英字と数字を組み合わせてください。";
        return false;
      } else if (!this.confirmPassword.match(regexString)) {
        this.errorText =
          "確認用のパスワードは8文字以上かつ50文字以内で、英字と数字を組み合わせてください。";
        return false;
      } else if (this.defaultPassword === this.changePassword) {
        this.errorText =
          "変更前のパスワードと変更後のパスワードが一致しています。";
        return false;
      } else if (this.changePassword !== this.confirmPassword) {
        this.errorText =
          "変更後のパスワードと確認用のパスワードが一致していません。";
        return false;
      }
      return true;
    },
    doNext() {
      // TODO: モーダルの`閉じる`ボタンを押さないと遷移できないので、外側のアクションでも遷移出来るようにしたい。
      this.successSnackbar = false;
      this.$router.push("/main-menu");
    }
  }
};
</script>

<style scoped></style>
