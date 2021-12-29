<template>
  <ul id="myChart3">
    <li>
      <el-progress
        type="circle"
        :percentage="total"
        :stroke-width="strokeWidth"
        :width="width"
        color="#1884FC"
      ></el-progress>
      <p>微软产品总激活率</p>
    </li>
    <li>
      <el-progress
        type="circle"
        :percentage="windows"
        :stroke-width="strokeWidth"
        :width="width"
        color="#DF3332"
      ></el-progress>
      <p>Windows激活率</p>
    </li>
    <li>
      <el-progress
        type="circle"
        :percentage="windowsServer"
        :stroke-width="strokeWidth"
        :width="width"
        color="#57C167"
      ></el-progress>
      <p>Windows Server激活率</p>
    </li>
    <li>
      <el-progress
        type="circle"
        :percentage="office"
        :stroke-width="strokeWidth"
        :width="width"
        color="#DACB6C"
      ></el-progress>
      <p>Office激活率</p>
    </li>
    <li>
      <el-progress
        type="circle"
        :percentage="sqlServer"
        :stroke-width="strokeWidth"
        :width="width"
        color="#5FC0C7"
      ></el-progress>
      <p>Sql Server激活率</p>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Echart3",
  components: {},
  data() {
    return {
      width: 70,
      strokeWidth: 10,
      total: 50,
      windows: 30,
      windowsServer: 29,
      office: 12,
      sqlServer: 6,
    };
  },
  mounted() {
    this.drawLine();
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped lang="less">
#myChart3 {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > li {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #f5f5f5;
    .el-progress--circle {
      transition: all 0.2s ease-in;
      transform-origin: center center;
    }
    &:hover {
      .el-progress--circle {
        transform: scale(1.1);
      }
      p{
        font-weight: 500;
      }
    }
    &:last-child {
      border-right: 1px solid transparent;
    }
    & > p {
      margin-top: 10px;
      font-size: 13px;
      color: #666;
      text-align: center;
    }
  }
}
</style>