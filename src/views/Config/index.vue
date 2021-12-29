<template>
  <el-container class="config">
    <p class="Title">数据配置管理</p>
    <el-main class="config-main">
      <p class="form-text">批量授权（永久使用权限）数量</p>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        size="small"
        ref="form1"
        :disabled="disabled"
      >
        <div>
          <el-form-item label="windows" prop="windows" :rules="rules.Number">
            <el-input
              v-model.number="formInline.windows"
              placeholder="请输入"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="office" prop="office" :rules="rules.Number">
            <el-input
              v-model.number="formInline.office"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item
            label="windows Server"
            prop="windowsServer"
            :rules="rules.Number"
          >
            <el-input
              v-model.number="formInline.windowsServer"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="sqlServer"
            prop="sqlServer"
            :rules="rules.Number"
          >
            <el-input
              v-model.number="formInline.sqlServer"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="未激活" prop="noActive" :rules="rules.Number">
            <el-input
              v-model.number="formInline.noActive"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="btn">
        <el-button
          type="primary"
          @click="onSubmit"
          size="small"
          :disabled="disabled"
          >保存</el-button
        >
        <el-button
          type="primary"
          @click="onEdit"
          size="small"
          :disabled="!disabled"
          >编辑</el-button
        >
      </div>

      <p class="form-text">平台所属名称</p>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        size="small"
        ref="form2"
        :disabled="disabled2"
        :rules="rules"
      >
        <el-form-item label="" prop="Title">
          <el-input
            placeholder="请输入"
            v-model="formInline.Title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button
          type="primary"
          @click="onSubmit2"
          size="small"
          :disabled="disabled2"
          >保存</el-button
        >
        <el-button
          type="primary"
          @click="onEdit2"
          size="small"
          :disabled="!disabled2"
          >编辑</el-button
        >
      </div>
    </el-main>
  </el-container>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "config",
  components: {},
  data() {
    var validateFunc = (rule, value, callback) => {
      if (value.length > 20) {
        callback(new Error("平台所属名称不超过20个字"));
      } else if (!/^[\u4e00-\u9fa5]+$/.test(value)) {
        callback(new Error("请输入中文"));
      } else {
        callback();
      }
    };
    return {
      formInline: {
        Title: "",
        windowsServer: "",
        windows: "",
        office: "",
        sqlServer: "",
        noActive: "",
      },
      rules: {
        Title: [
          {
            validator: validateFunc,
          },
        ],
        Number: [
          { required: true, message: "输入框不能为空" },
          {
            type: "number",
            message: "请输入数字",
          },
          {
            type: "number",
            validator: (rule, value, callback) => {
              if (1 > value || value > 9999) {
                callback(new Error("数字边界值为1-9999"));
              } else {
                callback();
              }
            },
          },
        ],
      },
      disabled: true,
      disabled2: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    ...mapMutations("home", ["setTitle"]),
    onSubmit() {
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.disabled = true;
        } else {
          this.$message({
            message: "抱歉，这是一条失败消息",
            type: "error",
          });
        }
      });
    },
    onSubmit2() {
      this.$refs.form2.validate((valid) => {
        if (valid) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.disabled2 = true;
          this.setTitle(this.formInline.Title);
        } else {
          this.$message({
            message: "抱歉，这是一条失败消息",
            type: "error",
          });
        }
      });
    },
    onEdit() {
      this.disabled = false;
    },
    onEdit2() {
      this.disabled2 = false;
    },
  },
};
</script>
<style  lang="less">
.config {
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  .config-main {
    flex: 1;
    overflow-y: auto;
  }
  .form-text {
    font-size: 14px;
    color: #333;
    margin-bottom: 20px;
  }
  .el-form-item__label {
    width: 130px;
  }
  .btn {
    margin-left: 130px;
  }
}
</style>