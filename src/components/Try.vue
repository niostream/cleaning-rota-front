<template>
  <v-container>
    <v-layout my-3 justify-center>
      <h1>Javaアクセス検証用フォーム</h1>
    </v-layout>
    <v-layout>
      <v-text-field label="ダミー" type="text" v-model="dummyText"></v-text-field>
    </v-layout>
    <v-layout justify-center>
      <v-btn outlined rounded class="blue blue-text" @click="dummy">ダミー</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dummyText: "emp"
    };
  },
  methods: {
    async dummy() {
      console.log("start!");
      const x = await axios
        .get("http://localhost:8081/param", {
          params: {
            before: "2019-06-01",
            after: "2019-07-01"
          }
        })
        .then(res => {
          console.log("done!");
          return res.data;
        })
        .catch(error => {
          console.log(error);
          return null;
        });
      console.log(x);
      // this.dummyText = x;
      if (x !== null) {
        this.dummyText = x;
      } else {
        this.dummyText = "error...Springを起動してください";
      }
    }
  }
};
</script>