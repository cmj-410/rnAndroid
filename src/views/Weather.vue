<template>
  <div class="Weatherwrapper">
    <!-- <select v-model="selectProvince" class="selectClass">
      <option value="">请选择省份</option>
      <option v-for="item in provinces" :key="item.ind" :value="item.index">
        {{ item.province }}
      </option>
    </select>
    <select
      v-model="selectedCity"
      class="selectClass"
      :disabled="!selectProvince"
    >
      <option value="">请选择城市</option>
      <option
        v-for="item in cities[selectProvince]"
        :key="item['编码']"
        :value="item['编码']"
      >
        {{ item["市名"] }}
      </option>
    </select> -->

    <div ref="tirggerRef">
      <div class="selectClass">{{ selectedName || "请选择城市" }}</div>
    </div>
    <div class="temperature" v-if="weatherData.temp">
      <span>{{ weatherData.temp }}</span>
    </div>
    <div class="weather">{{ weatherData.weather }}</div>
    <div class="others" v-if="weatherData.temp">
      <div class="item">
        <div>{{ weatherData.WS }}</div>
        <div class="gray">{{ weatherData.WD }}</div>
      </div>
      <div class="item">
        <div>{{ weatherData.SD }}</div>
        <div class="gray">湿度</div>
      </div>
      <div class="item">
        <div>{{ weatherData.AP }}</div>
        <div class="gray">气压</div>
      </div>
      <div class="item">
        <div>{{ weatherData.temp1 }}~{{ weatherData.temp2 }}</div>
        <div class="gray">气温范围</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { cityData } from "../data/cityId";
import MobileSelect from "mobile-select";
import axios from "axios";

const tirggerRef = ref();
const selectedVal = ref("101231001");
const selectedName = ref("");
let msInstance;

const weatherData = ref({});

onMounted(() => {
  msInstance = new MobileSelect({
    trigger: tirggerRef.value,
    wheels: [{ data: cityData.newList }],

    triggerDisplayValue: false, // 如果不想覆盖trigger内的html 这里需要设置为false
    onChange: getWeather,
  });
});

const getWeather = async (data) => {
  selectedName.value = data[0].value + " " + data[1].value;
  selectedVal.value = data[1].id;
  const res = await axios.get(`theWeather/${selectedVal.value}.html`);
  const temp = res.data.weatherinfo;
  weatherData.value["AP"] = temp.AP;
  weatherData.value["SD"] = temp.SD;
  weatherData.value["WD"] = temp.WD;
  weatherData.value["WS"] = temp.WS;
  weatherData.value["temp"] = temp.temp;
  //AP气压，SD湿度，WD风向，WS风量，temp当前温度
  const res2 = await axios.get(`wea2/${selectedVal.value}.html`);
  const temp2 = res2.data.weatherinfo;
  // temp1最低温，temp2最高温，weather天气
  weatherData.value["temp1"] = temp2.temp1;
  weatherData.value["temp2"] = temp2.temp2;
  weatherData.value["weather"] = temp2.weather;
};

getWeather([
  {
    id: 0,
    value: "四川",
  },
  {
    id: "101270101",
    value: "成都",
  },
]);
onUnmounted(() => {
  msInstance.destroy();
});

// const provinces = cityData.provinceList;
// const cities = cityData.cityList;

// const selectProvince = ref("");
// const selectedCity = ref("");

// watch(selectProvince, () => {
//   selectedCity.value = "";
// });
</script>

<style scoped lang="scss">
.Weatherwrapper {
  height: 100vh;
  background-color: #a0cfff;
}
select {
  /*隐藏select的下拉图标*/
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /*去除高亮*/
  -webkit-tap-highlight-color: #fff;
  /*去除边框样式*/
  outline: none;
}
.selectClass {
  color: red;
  position: fixed;
  top: 5vh;
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
}
.temperature {
  position: fixed;
  top: 30vh;
  text-align: center;
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  ::after {
    content: "℃";
    font-size: 16px;
    position: relative;
    bottom: 30px;
  }
}

.weather {
  position: fixed;
  top: 42vh;
  text-align: center;
  width: 100%;
  font-size: 18px;
}
.others {
  position: fixed;
  bottom: 20vh;
  width: 100%;
  display: flex;
  text-align: center;
  .item {
    flex: 1;
    .gray {
      color: gray;
      font-size: 12px;
    }
  }
}
</style>
