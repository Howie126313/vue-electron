/*
 * @Author: wanghaoyu
 * @Date: 2019-02-26 11:41:25
 * @Last Modified by: wanghaoyu
 * @Last Modified time: 2019-02-26 15:36:47
 */

<template>
  <div class="about">
    <h1>Image</h1>
    <img :src="imgUrl" alt="imgUrl">
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'image',
  data () {
    return {
      imgUrl: ''
    }
  },
  created () {
    ipcRenderer.on('image', (event, arg) => {
      this.imgUrl = arg
    })
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
