<template>
  <div id="myChart1"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EChartColorConfig } from "~/common/constant";
export default {
  name: "Echart1",
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
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      //   绘制图表
      myChart.setOption({
        color: EChartColorConfig,
        tooltip: {
          trigger: "item",
        },
        grid: {
          containLabel: true,
        },
        series: [
          {
            name: "批量授权",
            type: "pie",
            radius: ["50%", "80%"],
            itemStyle: {
              borderRadius: 3,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: true,
              formatter: "{c}%\n{b}",
              align: "center",
              width: 80,
              overflow: "truncate",
            },
            emphasis: {
              label: {
                show: true,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 38, name: "未授权" },
              { value: 23, name: "Windows" },
              { value: 18, name: "Office" },
              { value: 16, name: "Windows Server" },
              { value: 5, name: "Sql Server" },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#myChart1 {
  width: 100%;
  height: 100%;
}
</style>