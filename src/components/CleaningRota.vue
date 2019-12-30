<template>
  <v-container>
    <v-layout my-3 justify-center>
      <h1>掃除当番表一覧</h1>
    </v-layout>
    <v-layout my-3 justify-space-around="1">
      <v-btn outlined rounded class="blue blue-text">前月</v-btn>
      <v-btn outlined rounded class="blue blue-text">表示切替</v-btn>
      <v-btn outlined rounded class="blue blue-text">Excel出力</v-btn>
      <v-btn outlined rounded class="blue blue-text">次月</v-btn>
    </v-layout>
    <v-layout my-3>
      <v-data-table :headers="headers" :items="records" hide-default-footer class="elevation-1">
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.date }}</td>
            <td>
              <v-btn v-if="!row.item.kitchen" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.kitchen }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.bath" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.bath }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.toilet" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.toilet }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.basin" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.basin }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.cleaner" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.cleaner }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.combustible" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.combustible }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.incombustible" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.incombustible }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.resource" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.resource }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.electricity" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.electricity }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.gas" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.gas }}</div>
            </td>
            <td>
              <v-btn v-if="!row.item.tap" class="blue blue-text">登録</v-btn>
              <div v-else>{{ row.item.tap }}</div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
    <v-layout my-3 justify-space-around="1">
      <v-btn outlined rounded class="blue blue-text">前月</v-btn>
      <v-btn outlined rounded class="blue blue-text">表示切替</v-btn>
      <v-btn outlined rounded class="blue blue-text">Excel出力</v-btn>
      <v-btn outlined rounded class="blue blue-text">次月</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "日付",
          sortable: false,
          value: "date"
        },
        {
          text: "キッチン",
          sortable: false,
          value: "kitchen"
        },
        {
          text: "風呂",
          sortable: false,
          value: "bath"
        },
        {
          text: "トイレ",
          sortable: false,
          value: "toilet"
        },
        {
          text: "洗面台",
          sortable: false,
          value: "basin"
        },
        {
          text: "掃除機",
          sortable: false,
          value: "cleaner"
        },
        {
          text: "可燃ゴミ",
          sortable: false,
          value: "combustible"
        },
        {
          text: "不燃ゴミ",
          sortable: false,
          value: "incombustible"
        },
        {
          text: "資源ゴミ",
          sortable: false,
          value: "resource"
        },
        {
          text: "電気代",
          sortable: false,
          value: "electricity"
        },
        {
          text: "ガス代",
          sortable: false,
          value: "gas"
        },
        {
          text: "水道代",
          sortable: false,
          value: "tap"
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
  }
};
</script>

<style scoped>
</style>