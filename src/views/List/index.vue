<template>
  <el-container class="list">
    <el-aside class="list-left">
      <p class="Title">微软产品目录</p>
      <el-tree
        class="list-tree"
        :data="data"
        highlight-current
        node-key="id"
        @node-click="handleNodeClick"
        :default-checked-keys="[0]"
        :current-node-key="active"
        default-expand-all
      ></el-tree>
    </el-aside>
    <el-main class="list-main">
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </el-main>
  </el-container>
</template>

<script>
import _ from "lodash";
import Office from "./Office.vue";
import SqlServer from "./SqlServer.vue";
import Windows from "./Windows.vue";
import WindowsServer from "./WindowsServer.vue";
export default {
  name: "list",
  components: {
    Windows,
    WindowsServer,
    SqlServer,
    Office,
  },
  data() {
    return {
      comArr: [Windows, WindowsServer, Office, SqlServer],
      defaultProps: {
        children: "children",
        label: "label",
      },
      active: "0",
      data: [
        {
          label: "微软正版产品类型",
          id: "-1",
          children: [
            {
              id: "0",
              label: "Windows",
            },
            {
              id: "1",
              label: "Windows Server",
            },
            {
              id: "2",
              label: "Office",
            },
            {
              id: "3",
              label: "Sql Server",
            },
          ],
        },
      ],
    };
  },
  created() {},
  computed: {
    currentTabComponent() {
      return this.comArr[this.active];
    },
  },
  methods: {
    handleNodeClick(data) {
      if (data.id > 0) {
        this.active = data.id;
      }
    },
  },
};
</script>
<style scoped lang="less">
.list {
  height: 100%;
  .list-left {
    background: #fff;
    height: 100%;
    width: 250px !important;
    .Title {
      border-bottom: 1px solid #ebeaea;
    }
  }
  .list-main {
    padding: 0px;
    margin-left: 10px;
  }
}

.el-tree-node__content {
  height: 35px !important;
}
</style>