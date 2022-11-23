<template>
  <div>
<!--    使用 type、plain、round 和 circle 来定义按钮的样式。-->
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button plain>Primary</el-button>
        <el-button round>Primary</el-button>
        <el-button circle>Primary</el-button>
<!--        使用disabled来禁用按钮-->
        <el-button disabled>禁用</el-button>
<!--        使用link来创建链接按钮-->
        <el-button link>link</el-button>
<!--        图标使用<el-icon>并将图标当作组件来使用-->
        <el-icon><Share/></el-icon>
      </el-row>

  </div>
</template>
<script>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
export default {
  components:{Delete, Edit, Search, Share, Upload}
}
</script>

<style scoped>
</style>