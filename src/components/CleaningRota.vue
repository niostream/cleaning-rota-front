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
        <v-btn outlined rounded class="green accent-1" @click="nextRecord">翌月</v-btn>
      </v-layout>
      <v-layout my-3>
        <v-data-table
          :headers="headers"
          :items="records"
          hide-default-footer
          items-per-page="31"
          class="elevation-1"
          fixed-header="true"
          height="70vh"
        >
          <template v-slot:item="row">
            <tr>
              <td
                :class="[
                  { saturday: row.item.weekDayNum === saturdayNum },
                  { sunday: row.item.weekDayNum === sundayNum },
                ]"
              >{{ row.item.date }}{{ row.item.weekDay }}</td>
              <td>
                <div v-if="row.item.kitchen.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.kitchen)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.kitchen.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.kitchen)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.bath.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.bath)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.bath.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.bath)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.toilet.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.toilet)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.toilet.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.toilet)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.basin.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.basin)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.basin.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.basin)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.cleaner.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.cleaner)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.cleaner.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.cleaner)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.combustible.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.combustible)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.combustible.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.combustible)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.incombustible.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.incombustible)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.incombustible.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.incombustible)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.resource.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.resource)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.resource.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.resource)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.electricity.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.electricity)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.electricity.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.electricity)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.gas.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.gas)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.gas.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.gas)">削除</v-btn>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="row.item.tap.user.userId == null">
                  <v-btn
                    v-show="switchDisp"
                    class="blue"
                    @click="registCleaningRecord(row.item.tap)"
                  >登録</v-btn>
                </div>
                <div v-else>
                  <div>{{ row.item.tap.user.firstName }}</div>
                  <div v-show="switchDisp">
                    <v-btn class="red" @click="cancelCleaningRecord(row.item.tap)">削除</v-btn>
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
        <v-btn outlined rounded class="green accent-1" @click="nextRecord">翌月</v-btn>
      </v-layout>
    </v-container>
    <!-- /掃除当番表画面エリア -->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      saturdayNum: "6",
      sundayNum: "7",
      executedDate: "",
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
    this.executedDate = moment(new Date().toLocaleDateString()).format(
      "YYYY-MM-DD"
    );
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
      // レコード表示
      this.recordList = await axios
        .get("http://localhost:8081/cleaning-rota/show-record", {
          params: {
            dormitoryId: this.getUser.dormitoryId,
            executedDate: this.executedDate
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
      this.recordList.forEach(record => {
        let dayRecords = {
          date: record[0].executedDate,
          weekDay: "(" + moment(record[0].executedDate).format("ddd") + ")",
          weekDayNum: moment(record[0].executedDate).format("E")
        };
        record.forEach(data => {
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
    async registCleaningRecord(item) {
      await axios
        .get("http://localhost:8081/cleaning-rota/regist-record", {
          params: {
            item: item,
            user: this.getUser
          }
        })
        .then(res => {
          console.log("res:", res);
          this.getCleaningRecord();
        })
        .catch(error => {
          console.log("error:", error);
        });
    },
    async cancelCleaningRecord(item) {
      await axios
        .get("http://localhost:8081/cleaning-rota/cancel-record", {
          params: {
            item: item,
            user: this.getUser
          }
        })
        .then(res => {
          console.log("res:", res);
          this.getCleaningRecord();
        })
        .catch(error => {
          console.log("error:", error);
        });
    },
    /**
     * `前月`ボタンクリック
     */
    prevRecord() {
      this.executedDate = moment(this.executedDate)
        .subtract(1, "M")
        .format("YYYY-MM-DD");
      this.getCleaningRecord();
    },
    /**
     * `翌月`ボタンクリック
     */
    nextRecord() {
      this.executedDate = moment(this.executedDate)
        .add(1, "M")
        .format("YYYY-MM-DD");
      this.getCleaningRecord();
    }
  }
};
</script>

<style scoped>
.saturday {
  color: blue;
}
.sunday {
  color: red;
}
</style>
