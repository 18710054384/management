<template>
  <div class="Origin">
      <el-row :gutter="12">
        <el-col :span="6">
          广告创意
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12">
          <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="创意ID">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-row :span="24">
            <el-col :span="12">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <el-button type="info">查询</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="12">
          <el-button type="primary">新建创意</el-button>
          <el-select v-model="value" placeholder="批量修改">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          <el-select v-model="value" placeholder="自定义列">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <table>
            <thead>
              <tr>
                <td>创意素材</td>
                <td>创意ID</td>
                <td>创意类型</td>
                <td>尺寸</td>
                <td>落地页链接</td>
                <td>监测链接</td>
                <td>所属单元</td>
                <td>所属计划</td>
                <td>曝光量</td>
                <td>点击量</td>
                <td>状态</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(x,idx) in origin" :key="idx">
                <td>{{x.material}}</td>
                <td>{{x.materialId}}</td>
                <td>{{x.materialType}}</td>
                <td>{{x.size}}</td>
                <td>{{x.fall}}</td>
                <td>{{x.monitor}}</td>
                <td>{{x.element}}</td>
                <td>{{x.plan}}</td>
                <td>{{x.exposure}}</td>
                <td>{{x.click}}</td>
                <td>{{x.status}}</td>
              </tr>
            </tbody>
          </table>
          <el-table
            :data="tableData"
            style="width: 100%" >
            
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="mini" @click="dialogVisible = true">编辑</el-button>
                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="12">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { origin } from '../../until/request'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false,
      searchValue: '',
      select: '',
      value: '',
      value1: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      tableData: [{
        material: '2016-05-02',
        materialId: '171102-4',
        materialType: '图文（单）',
        size: '320*240',
        fall: 'https://baidu.com',
        monitor: 'https://www.baidu.com',
        element: '123456',
        plan: 'DD-广告测试团队',
        exposure: 2000,
        click: 1000,
        status: '投放中'
      }]
    }
  },
  computed: {
    ...mapState(['origin'])
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  mounted () {
    origin().then(res=> {
      this.$store.commit('saveOrigin',res.data)
    })
    console.log(origin)
  }
}
</script>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
<style>

</style>
