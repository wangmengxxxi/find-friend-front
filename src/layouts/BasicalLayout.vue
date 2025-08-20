<template>
  <div class="nav-bar">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
  <div class="container"></div>
  <div class="footer">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">队伍</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'
const active = ref('home')
const onChange = (index) => showToast(`标签 ${index}`)
</script>
