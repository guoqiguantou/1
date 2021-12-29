<template>
  <div id="myChart2"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EChartColorConfig } from "~/common/constant";
export default {
  name: "Echart2",
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
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
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
            radius: ["50%", "70%"],
            itemStyle: {
              //   borderRadius: 5,
              //   borderColor: "#fff",
              //   borderWidth: 1,
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
#myChart2 {
  width: 100%;
  height: 100%;
}
</style>