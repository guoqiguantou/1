<template>
  <div class="con">
    <p class="Title">WindowsServer产品信息列表</p>
    <el-form
      :inline="true"
      :model="formInline"
      class="form-inline"
      size="small"
    >
      <el-form-item label="windowsServer激活状态">
        <el-select v-model="formInline.region">
          <el-option label="全部" value="0"></el-option>
          <el-option label="已激活" value="1"></el-option>
          <el-option label="未激活" value="2"></el-option>
          <el-option label="已到期" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" class="con-table" size="small">
      <el-table-column prop="ip" label="主机IP" width="140" />
      <el-table-column prop="winsvr_version" label="Windows Server版本" />
      <el-table-column
        prop="winsvr_expiration"
        label="Windows Server激活到期日期"
        width="200"
      />
      <el-table-column
        prop="winsvrlicense_status"
        label="Windows Server激活状态"
      >
        <template slot-scope="scope">
          <el-tag type="danger" disable-transitions size="small">{{
            scope.row.winsvrlicense_status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="version" label="数据库版本" />
      <el-table-column prop="computer_user" label="计算机名" />
      <el-table-column prop="system_version" label="操作系统版本" />
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout=" prev, pager, next,jumper,total,sizes"
      :total="400"
      class="page"
    >
    </el-pagination>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "windowsServer",
  components: {},
  data() {
    const item = {
      ip: "127.0.0.1",
      version: "01-05-02",
      system_version: "01-05-02",
      winsvr_version: "01-05-02",
      winsvr_expiration: "2012-03-12",
      winsvrlicense_status: "未激活",
      computer_user: "admin1",
    };
    return {
      tableData: Array(10).fill(item),
      currentPage: 1,
      formInline: {
        region: 0,
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>
<style scoped lang="less">
.con {
  background: #fff;

  .Title {
    border-bottom: 1px solid #ebeaea;
  }
  .form-inline {
    padding: 15px 30px 5px;
  }
  .page {
    padding: 5px 0;
  }
}
</style>