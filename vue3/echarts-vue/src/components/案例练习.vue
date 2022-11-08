<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from "vue";

const chart=ref(null)
const chartInstance=ref(null)

const option={
  title: {text: '游戏销量对比',
    subtext: 'origin和steam',
  },
  xAxis: {
    type: 'category',
    data: ['塞尔达', '彩虹六号', '怪猎', 'OW', '无主之地', 'COD', 'FF14']
  },
  yAxis: {
    type: 'value'
  },
  tooltip:{
    show:true,

  },
  legend:{
    type:''
  },
  series: [
    {
      name: 'steam',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    },
    {
      name: 'origin',
      data: [130, 90, 80, 60, 50, 200, 110],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 100, 0.2)'
      },
    }
  ]
}

onMounted(()=>{
  chartInstance.value=echarts.init(chart.value)
  chartInstance.value.setOption(option)
})

</script>


<template>
  <div>
    <div ref="chart" style="height: 500px;"></div>
  </div>
</template>


<style scoped>

</style>