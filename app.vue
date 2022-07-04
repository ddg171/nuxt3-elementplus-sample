<template>
  <sample-component />
</template>
<script setup>
import { ID_INJECTION_KEY } from 'element-plus'
provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0
})
</script>

<style>
.contents-wrapper{
  height: 100vh;
  overflow-y: scroll;
}

.el-header{
  background-color:lightgray
}

.el-aside{
  background-color:lightblue
}
.el-container{
  height: 100%;
}
</style>
