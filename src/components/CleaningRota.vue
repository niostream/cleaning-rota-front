<template>
  <v-container>
    <!-- 掃除当番表画面エリア -->
    <v-container>
      <v-layout my-3 justify-center>
        <h1>掃除当番表一覧</h1>
      </v-layout>
      <v-layout my-3 justify-space-around="1">
        <v-btn outlined rounded class="green accent-1">前月</v-btn>
        <v-btn outlined rounded class="green accent-1">表示切替</v-btn>
        <v-btn outlined rounded class="green accent-1">Excel出力</v-btn>
        <v-btn outlined rounded class="green accent-1">次月</v-btn>
      </v-layout>
      <v-layout my-3>
        <v-data-table
          :headers="headers"
          :items="records"
          hide-default-footer
          class="elevation-1"
        >
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.date }}</td>
              <td>
                <v-btn v-if="!row.item.kitchen" class="blue">登録</v-btn>
                <div v-else>{{ row.item.kitchen }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.bath" class="blue">登録</v-btn>
                <div v-else>{{ row.item.bath }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.toilet" class="blue">登録</v-btn>
                <div v-else>{{ row.item.toilet }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.basin" class="blue">登録</v-btn>
                <div v-else>{{ row.item.basin }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.cleaner" class="blue">登録</v-btn>
                <div v-else>{{ row.item.cleaner }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.combustible" class="blue">登録</v-btn>
                <div v-else>{{ row.item.combustible }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.incombustible" class="blue">登録</v-btn>
                <div v-else>{{ row.item.incombustible }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.resource" class="blue">登録</v-btn>
                <div v-else>{{ row.item.resource }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.electricity" class="blue">登録</v-btn>
                <div v-else>{{ row.item.electricity }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.gas" class="blue">登録</v-btn>
                <div v-else>{{ row.item.gas }}</div>
              </td>
              <td>
                <v-btn v-if="!row.item.tap" class="blue">登録</v-btn>
                <div v-else>{{ row.item.tap }}</div>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-layout>
      <v-layout my-3 justify-space-around="1">
        <v-btn outlined rounded class="green accent-1">前月</v-btn>
        <v-btn outlined rounded class="green accent-1">表示切替</v-btn>
        <v-btn outlined rounded class="green accent-1">Excel出力</v-btn>
        <v-btn outlined rounded class="green accent-1">次月</v-btn>
      </v-layout>
    </v-container>
    <!-- /掃除当番表画面エリア -->
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        {
          text: "日付",
          sortable: false,
          value: "date"
        }
      ],
      records: [
        {
          date: "2020/1/1(火)",
          kitchen: "漆原",
          bath: "",
          toilet: "",
          basin: "漆原",
          cleaner: "漆原",
          combustible: "",
          incombustible: "",
          resource: "",
          electricity: "",
          gas: "漆原",
          tap: ""
        },
        {
          date: "2020/1/2(水)",
          kitchen: "",
          bath: "漆原",
          toilet: "",
          basin: "",
          cleaner: "",
          combustible: "",
          incombustible: "",
          resource: "",
          electricity: "漆原",
          gas: "",
          tap: ""
        }
      ]
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const itemList = await axios
        .get("http://localhost:8081/cleaning-rota/item-list")
        .then(res => {
          console.log(res);
          return res.data;
        })
        .catch(err => {
          console.log(err);
          return null;
        });
      if (itemList === null) {
        return;
      }
      itemList.forEach(element => {
        this.headers.push({
          text: element.itemName,
          sortable: false,
          value: element.itemValue
        });
      });
    }
  }
};
</script>

<style scoped></style>
