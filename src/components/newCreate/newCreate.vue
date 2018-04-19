<template>
  <div class="newCreate">
    <ul class="newCreateBox">
      <li @click="changeActive(ind)" v-for="(i,ind) in formData" :class="selected==ind?'active':''" :key="ind">{{i.label}}</li>
      <li @click="addCreate">+添加创意</li>
    </ul>
    <div v-for="(x,idx) in formData" v-show="idx==selected" :key="idx">
      <Upload></Upload>
    </div>
  </div>
</template>

<script>
import Upload from '../upload/upload.vue'
export default {
  name: 'newCreate',
  data () {
    return {
      selected: 0,
      centerDialogVisible: false
    }
  },
  props: {
    formData: {
      required: true,
      type: Array
    }
  },
  components: {
    Upload
  },
  methods: {
    addCreate () {
      this.$emit('edit')
    },
    changeActive (ind) {
      this.selected = ind
    }
  }
}
</script>

<style>
.newCreateBox li{
  display: inline-block;
  line-height: 40px;
  margin: 0 10px;
}
.newCreateBox .active{
  color: skyblue;
  border-bottom: 2px solid skyblue;
}
</style>
