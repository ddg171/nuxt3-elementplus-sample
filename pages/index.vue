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
            <h2>h2</h2>
            <p>
              {{ msg }}
            </p>
          </el-col>
        </el-row>
        <hr>
        <el-row>
          <el-col>
            <sample-form />
          </el-col>
        </el-row>
        <hr>
        <button-group />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
const msg = ref<string>('ebi')
</script>
