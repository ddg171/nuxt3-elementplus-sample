
<template>
  <div class="contents-wrapper">
    <el-header class="">
      Header
    </el-header>
    <el-container>
      <el-aside width="200px" class="">
        Aside
      </el-aside>
      <el-main>
        <el-row>
          <el-col>
            {{ msg }}
          </el-col>
        </el-row>
        <button-group />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
const msg = ref<string>('ebi')
</script>
