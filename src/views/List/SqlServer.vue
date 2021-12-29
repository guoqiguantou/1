<template>
  <div class="con">
    <p class="Title">SqlServer产品信息列表</p>
    <el-form
      :inline="true"
      :model="formInline"
      class="form-inline"
      size="small"
    >
      <el-form-item label="sqlServer激活状态">
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
      <el-table-column prop="sql_version" label="Sql Server版本" />
      <el-table-column prop="sql_expiration" label="Sql Server激活到期日期" />
      <el-table-column prop="sqllicense_status" label="Sql Server激活状态">
        <template slot-scope="scope">
          <el-tag type="success" disable-transitions size="small">{{
            scope.row.sqllicense_status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="computer_user" label="计算机名" />
      <el-table-column prop="sqllicense_status" label="操作系统版本" />
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
  name: "sqlServer",
  components: {},
  data() {
    const item = {
      ip: "127.0.0.1",
      sql_version: "01-05-02",
      sql_expiration: "2012-03-12",
      sqllicense_status: "已激活",
      computer_user: "admin1",
      sqllicense_status: "344下二",
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