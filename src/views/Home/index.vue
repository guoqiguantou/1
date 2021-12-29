<template>
  <div class="warp">
    <div class="left">
      <div class="card">
        <p class="Title">批量授权（永久使用权）占比</p>
        <div>
          <div class="echart1"><Echart1 /></div>
          <ul class="list">
            <li>
              <div class="list-left">
                <p>247</p>
                <span>Windows</span>
              </div>
              <i class="icon iconfont">&#xe882;</i>
            </li>
            <li>
              <div class="list-left">
                <p>247</p>
                <span>Windows Server</span>
              </div>
               <i class="icon iconfont">&#xe880;</i>
            </li>
            <li>
              <div class="list-left">
                <p>247</p>
                <span>Office</span>
              </div>
               <i class="icon iconfont">&#xe9b6;</i>
            </li>
            <li>
              <div class="list-left">
                <p>247</p>
                <span>Sql Server</span>
              </div>
               <i class="icon iconfont">&#xe603;</i>
            </li>
          </ul>
        </div>
      </div>
      <div class="card">
        <p class="Title">批量授权（永久使用权）占比</p>
        <div class="echart2"><Echart2 /></div>
      </div>
    </div>
    <div class="right">
      <div class="card">
        <p class="Title">微软产品激活率</p>
        <div class="echart3"><Echart3 /></div>
      </div>
      <div class="card">
        <p class="Title">微软产品月激活数量</p>
        <div class="echart4"><Echart4 /></div>
      </div>
      <div class="bottom">
        <div class="card">
          <p class="Title">Windows版本统计图</p>
          <div class="echart5"><Echart5 /></div>
        </div>
        <div class="card">
          <p class="Title">Windows Server版本统计图</p>
          <div class="echart6"><Echart6 /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Echart1 from "./Echart1.vue";
import Echart2 from "./Echart2.vue";
import Echart3 from "./Echart3.vue";
import Echart4 from "./Echart4.vue";
import Echart5 from "./Echart5.vue";
import Echart6 from "./Echart6.vue";
export default {
  name: "home",
  components: {
    Echart1,
    Echart2,
    Echart3,
    Echart4,
    Echart5,
    Echart6,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped lang="less">
.warp {
  display: flex;
  height: 100%;
  overflow-y: auto;
  padding: 10px 15px;
  .left {
    width: 350px;
    margin-right: 10px;
  }
  .right {
    flex: 1;
    .bottom {
      display: flex;
      .card {
        &:nth-child(1) {
          margin-right: 10px;
          flex: 1;
        }
        &:nth-child(2) {
          flex: 1.5;
        }
      }
    }
  }

  .card {
    margin-bottom: 10px;
    background: #fff;
    padding-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
      box-shadow: 0 2px 10px rgba(63, 159, 233, 0.2);
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      padding: 0 15px;
      li {
        width: calc(50% - 10px);
        margin: 5px;
        border-radius: 5px;
        padding: 5px 10px;
        display: flex;
        align-items: center;

        .list-left {
          flex: 1;
          color: #fff;

          p {
            font-size: 13px;
            display: block;
            margin-bottom: 5px;
          }
          span {
            font-size: 12px;
            display: block;
            font-weight: 300;
          }
        }
        .icon {
          width: 30px;
          height: 30px;
          margin-left: 10px;
          font-size:30px;
          color:#fff;
          text-align: center;
          line-height: 30px;
          
        }
        &:nth-child(1) {
          background: #3a629b;
        }
        &:nth-child(2) {
          background: #c52f36;
        }
        &:nth-child(3) {
          background: #3a8e3d;
        }
        &:nth-child(4) {
          background: #50b4ba;
        }
      }
    }

    .echart1 {
      padding: 10px;
      height: 205px;
    }
    .echart2 {
      padding: 10px;
      height: 205px;
    }
    .echart3 {
      padding: 10px;
      height: 110px;
    }
    .echart4 {
      padding: 10px;
      height: 210px;
    }
    .echart5 {
      padding: 10px;
      height: 150px;
    }
    .echart6 {
      widows: 100%;
      padding: 10px;
      height: 150px;
    }
  }
}
</style>