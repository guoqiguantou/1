<template>
  <div class="con">
    <p class="Title">Windows产品信息列表</p>
    <el-form
      :inline="true"
      :model="formInline"
      class="form-inline"
      size="small"
    >
      <el-form-item label="windows激活状态">
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
    <el-table :data="tableData" class="con-table" size="small"  v-loading="loading">
      <el-table-column prop="ip" label="主机IP" width="140" />
      <el-table-column prop="win_version" label="软件版本" />
      <el-table-column prop="win_expiration" label="Windows激活到期日期" />
      <el-table-column prop="winlicense_status" label="Windows激活状态">
        <template slot-scope="scope">
          <el-tag type="danger" size="small" disable-transitions>{{
            scope.row.winlicense_status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="computer_user" label="计算机名" />
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
  name: "windows",
  components: {},
  data() {
    const item = {
      ip: "127.0.0.1",
      win_version: "01-05-02",
      win_expiration: "2012-03-12",
      winlicense_status: "未激活",
      computer_user: "admin1",
    };
    return {
      tableData: Array(10).fill(item),
      currentPage: 1,
      loading: false,
      formInline: {
        region: 0,
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    onSubmit() {
      this.loading=true;
      setTimeout(()=>{
        this.loading=false;
      },1000)
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