<template>
  <v-container>
    <!-- 一般メニュー -->
    <v-container>
      <v-layout justify-center>
        <h1>メニュー一覧</h1>
      </v-layout>
      <v-layout wrap>
        <v-row>
          <v-col :sm="4">
            <v-card>
              <v-img :src="cleaningRotaImg" />
              <v-card-title>掃除当番表</v-card-title>
              <v-card-actions>
                <v-btn outlined rounded class="blue blue-text">説明</v-btn>
                <v-btn
                  outlined
                  rounded
                  class="blue blue-text"
                  @click="forwardCleaningRota"
                  >実行</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col :sm="4">
            <v-card>
              <v-img :src="passwordImg" />
              <v-card-title>パスワード変更</v-card-title>
              <v-card-actions>
                <v-btn outlined rounded class="blue blue-text">説明</v-btn>
                <v-btn
                  outlined
                  rounded
                  class="blue blue-text"
                  @click="forwardChangePassword"
                  >実行</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col :sm="4">
            <v-card>
              <v-img :src="logoutImg" />
              <v-card-title>ログアウト</v-card-title>
              <v-card-actions>
                <v-btn outlined rounded class="blue blue-text">説明</v-btn>
                <v-btn
                  outlined
                  rounded
                  class="blue blue-text"
                  @click="forwardLogin"
                  >実行</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <!-- /一般メニュー -->
    <!-- 管理者メニュー -->
    <v-container v-if="adminUser">
      <v-layout justify-center>
        <h1>管理者メニュー</h1>
      </v-layout>
      <v-layout wrap>
        <v-row>
          <v-col :sm="4">
            <v-card>
              <v-img :src="registUserImg" />
              <v-card-title>ユーザー登録</v-card-title>
              <v-card-actions>
                <v-btn outlined rounded class="blue blue-text">説明</v-btn>
                <v-btn
                  outlined
                  rounded
                  class="blue blue-text"
                  @click="forwardRegistUser"
                  >実行</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- 検証用 -->
          <v-col :sm="4">
            <v-card>
              <v-img :src="registUserImg" />
              <v-card-title>Java連携テスト</v-card-title>
              <v-card-actions>
                <v-btn outlined rounded class="blue blue-text">説明</v-btn>
                <v-btn
                  outlined
                  rounded
                  class="blue blue-text"
                  @click="forwardTry"
                  >実行</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- /検証用 -->
        </v-row>
      </v-layout>
    </v-container>
    <!-- /管理者メニュー -->
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { UPDATE_USER } from "@/store/mutation-types";

export default {
  name: "mainMenu",
  data() {
    return {
      adminUser: false,
      cleaningRotaImg: "/img/main-menu/menu-cleaning-rota.png",
      passwordImg: "/img/main-menu/menu-password.png",
      logoutImg: "/img/main-menu/menu-logout.png",
      registUserImg: "/img/main-menu/menu-regist-user.png"
    };
  },
  created() {
    // 管理者メニュー表示(管理者のみ)
    if (this.getUser.adminFlag === 1) {
      this.adminUser = true;
    }
  },
  computed: mapGetters(["getUser"]),
  methods: {
    ...mapActions([UPDATE_USER]),
    forwardCleaningRota() {
      this.$router.push("/cleaning-rota");
    },
    forwardChangePassword() {
      this.$router.push("/change-password");
    },
    forwardLogin() {
      this[UPDATE_USER]([]);
      this.$router.push("/");
    },
    forwardRegistUser() {
      this.$router.push("/regist-user");
    },
    forwardTry() {
      this.$router.push("/try");
    }
  }
};
</script>

<style scoped></style>
