<template>
  <el-container class="layout">
    <el-header class="layout-header">
      <div class="layout-title">{{Title}}</div>
      <div class="layout-user">
        <el-dropdown>
          <div class="layout-user-con">
            <span class="auth">管理员<i class="el-icon-arrow-down"></i></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-tabs
      v-model="activeName"
      type="card"
      class="layout-tab"
      @tab-click="handleClick"
    >
      <el-tab-pane label="主页" name="/" />
      <el-tab-pane label="微软产品激活信息列表页" name="/list" />
      <el-tab-pane label="数据配置管理" name="/config" />
    </el-tabs>
    <div class="layout-main">
      <router-view />
    </div>
  </el-container>
</template>
<script>
import _ from "lodash";
import { mapState } from "vuex";
export default {
  name: "layout",
  data() {
    return {
      activeName: `/${this.$router.currentRoute.path.split("/")[1]}`,
    };
  },
  created() {},
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      Title: state => state.home.Title,
    }),
  },
  methods: {
    handleClick() {
      if (this.$router.currentRoute.path == this.activeName) return;
      this.$router.push(this.activeName);
    },
  },
};
</script>

<style  lang="less">
.layout {
  .layout-header {
    font-size: 12px;
    padding: 0 20px;
    background-color: #07173f;
    color: #fff;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .layout-title {
      font-size: 16px;
    }
    .layout-user {
      cursor: pointer;
      .layout-user-con {
        display: flex;
        height: 30px;
        align-items: center;
        .auth {
          text-align: center;
          color: #fff;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          vertical-align: middle;
          line-height: 30px;
        }
        i {
          margin-left: 8px;
        }
      }
    }
  }
  .layout-tab {
    .el-tabs__header {
      background-color: #07173f;
      margin-bottom: 0px;
      .el-tabs__nav {
        border-radius: 0;
      }
      .el-tabs__item {
        width: 200px;
        text-align: center;
        color: #fff;
      }
      .el-tabs__item.is-active {
        color: #fff;
        background: #d42730;
        outline: none;
      }
    }
  }
  .layout-main {
    background: #e4ebfa;
    height: calc(100vh - 100px);
  }
}
</style>
