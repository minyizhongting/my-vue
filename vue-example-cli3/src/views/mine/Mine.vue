<template>
  <div class="bh-con bh-mine">
    <div class="con-top">
      {{renderData.info}}
    </div>
    <h6>mock数据</h6>
    <div class="mock-box">
      <p>第一种方式：mock.js 暂无</p>
      <div class="data">
        {{mockdata}}
      </div>
      <p>第二种方式：json-server</p>
      <div class="data">
        {{serverdata}}
      </div>
    </div>
    <h6>图片上传<i>(图片根据尺寸调整横纵显示)</i></h6>
    <div class="upload-box">
      <input type="file" accept="image/*" @change="(e)=>{addImage(e)}">
      <div v-if="!renderData.imgUrl" class="upload">
        <i>+</i>
        <p>上传</p>
      </div>
      <div v-else class="img">
        <img :src="renderData.imgUrl" alt="" :class="renderData.imgStyle">
      </div>
    </div>
    <h6>组件</h6>
    <div class="comp-box">
      <com-button type="main" @click="showAlertBox">弹窗</com-button>
      <alert-box :show="alertFlag" :alertTitle="'弹窗标题'">
        desc
        <com-button type="main" @click="closeAlertBox" slot="alert-btn">确定</com-button>
      </alert-box>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  import AlertBox from '@/components/AlertBox.vue';
  import ComButton from '@/components/ComButton.vue';

  interface Render {
    info: string,
    imgUrl: string,
    imgStyle: string
  }

  interface ImgInfo {
    w: number,
    h: number,
    src: string
  }

  @Component({
    components: {
      AlertBox,
      ComButton
    }
  })

  export default class Mine extends Vue {
    mockdata: string | object = '';
    serverdata: string | object = '';
    alertFlag: boolean = false;
    renderData: Render = {
      info: 'mine',
      imgUrl: '',
      imgStyle: ''
    };

    mounted() {
      // axios.get('/api/data').then(res => {
      //   this.mockdata = res.data;
      // });
      axios.get('/server/data').then(res => {
        console.log(res);
        this.serverdata = res.data;
      });
    }

    addImage(e: any) {
      const self = this;
      let file = e.target.files[0];
      if (!file) {    // 上传后点击取消 未选择图片
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('请上传小于2M的图片');
        return;
      }
      // var formdata = new FormData();  // FormData可以异步上传一个二进制文件  提交服务器
      // formdata.append('file', file);
      // this.renderData.imgUrl = true;

      // util.Axios({
      //     url: '/survey/uploadImgFile',
      //     method: 'post',
      //     data: formdata,
      //     headers: {
      //         'Content-Type': 'multipart/form-data'
      //     }
      // }).then(function(res) {
      //
      // });

      let reader = new FileReader();      // 预览本地文件
      reader.readAsDataURL(file);     // 将图片转成base64编码，替换到预览图片的src属性即可
      reader.onload = function (arg: any) {
        const img = new Image();
        img.src = arg.target.result;
        new Promise<ImgInfo>(function (resolve) {
          if (img.complete) {
            let w = img.naturalWidth;
            let h = img.naturalHeight;
            let data = {
              w,
              h,
              src: arg.target.result
            };
            resolve(data);
          } else {
            img.onload = function () {
              let w = img.naturalWidth;
              let h = img.naturalHeight;
              let data = {
                w,
                h,
                src: arg.target.result
              };
              resolve(data);
            };
          }
        }).then(function (data: ImgInfo) {
          self.setPicStyle(data.w, data.h, data.src);
        });
      };
    }

    // 设置图片横向纵向样式
    setPicStyle(w: number, h: number, src: string) {
      const self = this;
      const rate = 210 / 115;
      if (w / h > rate) {
        self.renderData.imgStyle = 'x-aspect';
      } else {
        self.renderData.imgStyle = 'y-aspect';
      }
      self.renderData.imgUrl = src;
    }

    showAlertBox() {
      this.alertFlag = true;
    }

    closeAlertBox() {
      this.alertFlag = false;
    }
  }
</script>

<style lang="scss">
  @import '../../libs/scss/common.scss';

  .bh-mine {
    .con-top {
      line-height: 40px;
    }
    h6 {
      font-size: 16px;
      font-size: $mainStrong;
      font-weight: normal;
      margin: 50px 0 20px;
      padding: 0;
      color: $blue;
      i {
        color: $mainWeak;
        font-size: 14px;
        font-style: normal;
        margin-left: 5px;
      }
    }
    .mock-box {
      p {
        margin: 5px 0;
        font-size: 14px;
      }
      .data {
        margin-bottom: 20px;
      }
    }
    .upload-box {
      width: 210px;
      height: 115px;
      border: 2px dashed $borderColor;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      position: relative;
      .upload {
        text-align: center;
        i {
          display: block;
          margin: 0 auto;
          width: 30px;
          height: 30px;
          color: $blue;
          font-size: 30px;
          line-height: 30px;
          font-weight: bold;
          font-style: normal;
        }
        p {
          text-align: center;
          font-size: $size14;
          color: $main;
        }
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
        opacity: 0;
        cursor: pointer;
      }
      .img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .x-aspect {
          width: 100%;
          height: auto;
          max-width: 210px;
          max-height: 100%;
        }
        .y-aspect {
          height: 100%;
          width: auto;
          max-height: 115px;
          max-width: 100%;
        }
      }
    }
  }
</style>
