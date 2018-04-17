<template>
  <div class="planBox">
    <h1>建立广告计划</h1>
    <el-row :gutter="12" :span="24">
      <el-col :span="6">
        <el-card shadow="always">
          <span class="iconfont icon-wenjian"></span>
          <div>
            <h3>已有计划</h3>
            <span>选择已有计划，直接创建广告</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <span class="iconfont icon-shuju"></span>
          <div>
            <h3>已有计划</h3>
            <span>选择已有计划，直接创建广告</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.planBox{
  width: 100%;
  height: 100%;
}
.planBox h1{
  margin: 0 20px 20px 20px;
}
.el-card__body{
  display: flex;
  align-items: center;
}
.el-card__body .iconfont{
  width: 30px;
  text-align: center;
}
.el-card__body div{
  flex:1;
}
.el-row{
  margin-left:20px;
}
</style>
