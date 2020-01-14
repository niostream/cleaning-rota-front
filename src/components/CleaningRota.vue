<template>
  <v-container>
    <!-- 掃除当番表画面エリア -->
    <v-container>
      <v-layout my-3 justify-center>
        <h1>掃除当番表一覧</h1>
      </v-layout>
      <v-layout my-3 justify-space-around="1">
        <v-btn outlined rounded class="green accent-1" @click="prevRecord">前月</v-btn>
        <v-btn outlined rounded class="green accent-1" @click="switchDisp = !switchDisp">表示切替</v-btn>
        <v-btn outlined rounded class="green accent-1">Excel出力</v-btn>
        <v-btn outlined rounded class="green accent-1" @click="nextRecord">次月</v-btn>
      </v-layout>
      <v-layout my-3>
        <v-data-table
          :headers="headers"
          :items="records"
          hide-default-footer
          items-per-page="31"
          class="elevation-1"
        >
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.date }}</td>
              <td>
                <div v-if="row.item.kitchen.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.kitchen.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.bath.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.bath.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.toilet.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.toilet.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.basin.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.basin.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.cleaner.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.cleaner.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.combustible.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.combustible.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.incombustible.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.incombustible.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.resource.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.resource.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.electricity.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.electricity.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.gas.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.gas.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.tap.user.userId == null">
                  <v-btn v-show="switchDisp" class="blue">登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.tap.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red">削除</v-btn>
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-layout>
      <v-layout my-3 justify-space-around="1">
        <v-btn outlined rounded class="green accent-1" @click="prevRecord">前月</v-btn>
        <v-btn outlined rounded class="green accent-1" @click="switchDisp = !switchDisp">表示切替</v-btn>
        <v-btn outlined rounded class="green accent-1">Excel出力</v-btn>
        <v-btn outlined rounded class="green accent-1" @click="nextRecord">次月</v-btn>
      </v-layout>
    </v-container>
    <!-- /掃除当番表画面エリア -->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      year: "",
      month: "",
      switchDisp: true,
      itemList: [],
      recordList: [],
      headers: [
        {
          text: "日付",
          sortable: false,
          value: "date"
        }
      ],
      records: []
    };
  },
  created() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    // console.log("年月:", this.year, "/", this.month);
    this.getItem();
    this.getCleaningRecord();
  },
  computed: mapGetters(["getUser"]),
  methods: {
    /**
     * 掃除当番表アイテム取得
     */
    async getItem() {
      this.itemList = await axios
        .get("http://localhost:8081/cleaning-rota/item-list")
        .then(res => {
          console.log(res);
          return res.data;
        })
        .catch(err => {
          console.log(err);
          return null;
        });
      if (this.itemList === null) {
        return;
      }
      this.itemList.forEach(element => {
        this.headers.push({
          text: element.itemName,
          sortable: false,
          value: element.itemValue
        });
      });
      // console.log("アイテム:", this.itemList);
    },
    /**
     * 掃除当番表レコード取得
     */
    async getCleaningRecord() {
      // 初期化
      this.recordList = [];
      this.records = [];
      // レコード設定
      this.recordList = await axios
        .get("http://localhost:8081/cleaning-rota/record", {
          params: {
            dormitoryId: this.getUser.dormitoryId,
            yearMonth:
              new String(this.year) +
              new String(this.month >= 10 ? this.month : "0" + this.month)
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
      console.log("記録:", this.recordList);
      this.recordList.forEach(elem => {
        let dayRecords = {
          date: elem[0].executedDate
        };
        elem.forEach(data => {
          dayRecords[data.item.itemValue] = {
            executedDate: data.executedDate,
            item: {
              itemId: data.item.itemId,
              itemName: data.item.itemName,
              itemValue: data.item.itemValue
            },
            user: {
              userId: data.user.userId,
              firstName: data.user.firstName
            }
          };
        });
        this.records.push(dayRecords);
      });
      console.log("記録2:", this.records);
    },
    /**
     * `前月`ボタンクリック
     */
    prevRecord() {
      if (this.month === 1) {
        this.year -= 1;
        this.month = 12;
      } else {
        this.month -= 1;
      }
      // console.log("前年月:", this.year, "/", this.month);
      this.getCleaningRecord();
    },
    /**
     * `次月`ボタンクリック
     */
    nextRecord() {
      if (this.month === 12) {
        this.year += 1;
        this.month = 1;
      } else {
        this.month += 1;
      }
      // console.log("後年月:", this.year, "/", this.month);
      this.getCleaningRecord();
    }
  }
};
</script>

<style scoped></style>
