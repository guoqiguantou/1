<template>
  <div id="myChart6"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EChartColorConfig } from "~/common/constant";
export default {
  name: "Echart6",
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
      let myChart = this.$echarts.init(document.getElementById("myChart6"));
      //   绘制图表
      myChart.setOption({
        color: EChartColorConfig,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 10,
          right: 30,
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [
            "2012 R2",
            "2016数据中心版",
            "2016标准版",
            "2012数据中心版",
            "2012标准版",
          ],
        },
        series: [
          {
            name: "2012",
            type: "bar",
            data: [193, 238, 310, 194, 141],
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
#myChart6 {
  width: 100%;
  height: 100%;
}
</style>