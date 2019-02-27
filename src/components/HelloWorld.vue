/*
 * @Author: wanghaoyu
 * @Date: 2019-02-26 11:18:57
 * @Last Modified by: wanghaoyu
 * @Last Modified time: 2019-02-26 13:53:17
 */

<template>
  <div class="hello">
   <ul class="list-group list-group-flush">
     <template v-for="(item, index) in listData">
        <li
        v-if="item.titleImgUrl && index < 10"
        class="list-group-item flex-container"
        :key="item.prjId"
        @click="clickPic(item.titleImgUrl)">
          <img :src="item.titleImgUrl" alt="tumb">
          <div>{{item.prjLabels}}</div>
        </li>
     </template>
   </ul>
  </div>
</template>

<script>
import data from './data.json'
import { remote, ipcRenderer } from 'electron'
const { Menu } = remote

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      listData: data.result.list
    }
  },
  created () {
    this.initMenu()
  },
  methods: {
    initMenu () {
      const menu = Menu.buildFromTemplate([
        {
          label: 'File',
          submenu: [
            { label: 'New Window' },
            {
              label: 'Settings',
              accelerator: 'cmdOrCtrl+,',
              click: () => {
                ipcRenderer.send('toggle-settings')
              }
            }
          ]
        }
      ])
      Menu.setApplicationMenu(menu)
    },
    clickPic (url) {
      // eslint-disable-next-line
      console.log(111111, __static)
      ipcRenderer.send('toggle-image', url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.flex-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.flex-container > img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>
