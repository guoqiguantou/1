<template>
  <div id="myChart4"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EChartColorConfig } from "~/common/constant";
export default {
  name: "Echart4",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  created() {},
  computed: {},
  methods: {
    drawLine() {
      //   基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      //   绘制图表
      myChart.setOption({
        color: EChartColorConfig,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: [
            "激活总数",
            "Windows",
            "Windows Server",
            "Office",
            "Sql Server",
          ],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            fontSize: 11,
            color: "#666",
          },
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 0,
          top: 30,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "2022-1月",
              "2022-2月",
              "2022-3月",
              "2022-4月",
              "2022-5月",
              "2022-6月",
              "2022-7月",
              "2022-8月",
              "2022-9月",
              "2022-10月",
              "2022-11月",
              "2022-12月",
            ],
            axisLabel: {
              fontSize: 11,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              fontSize: 11,
            },
          },
        ],
        series: [
          {
            name: "激活总数",
            type: "bar",
            data: [30, 32, 41, 34, 40, 30, 10, 42, 31, 34, 29, 30],
          },
          {
            name: "Windows",
            type: "bar",
            data: [22, 12, 19, 24, 22, 13, 10, 32, 9, 24, 20, 30],
          },
          {
            name: "Windows Server",
            type: "bar",
            data: [15, 32, 7, 13, 11, 34, 9, 23, 14, 19, 13, 41],
          },
          {
            name: "Office",
            type: "bar",
            data: [12, 11, 14, 9, 23, 32, 32, 31, 34, 39, 30, 20],
          },
          {
            name: "Sql Server",
            type: "bar",
            data: [20, 32, 0, 4, 9, 13, 20, 10, 29, 12, 22, 40],
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#myChart4 {
  width: 100%;
  height: 100%;
}
</style>