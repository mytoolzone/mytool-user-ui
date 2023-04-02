<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <h2 class="title">Mytool.zone</h2>
      <p class="content">
        Mytool.zone
        是一个功能强大的在线工具网站，提供了多种常用工具和实用资源，可以满足用户各种需求。以下是
        Mytool.zone 网站的简介：
      </p>
      <p class="content">
        Mytool.zone
        是一个全面的在线工具网站，提供了多种实用的工具和资源，包括文本处理、图像处理、代码编辑、加密解密、API
        接口等多个领域。这些工具和资源都是免费的，无需注册和下载，可以直接在网站上使用。
      </p>
      <p class="content">
        Mytool.zone
        的界面简洁、易用，所有工具和资源都可以在主页上找到。用户只需点击相应的工具或资源，输入或上传需要处理的数据，网站会自动进行处理，然后输出结果或下载处理后的文件。网站同时支持多种文件格式，可以方便地满足用户的需求。
      </p>
      <p class="content">
        Mytool.zone
        还提供了一些实用的辅助功能，比如代码高亮、语法检查、图像压缩等。这些功能可以帮助用户更方便地进行工作，提高工作效率。
      </p>
      <p class="content">
        总之，Mytool.zone是一个非常实用的在线工具网站，可以帮助用户轻松处理各种数据和文件，提高工作效率，同时也为用户节省了大量时间和精力。如果你需要处理一些数据或文件，可以尝试使用
        Mytool.zone 提供的工具和资源，相信你一定会有不错的使用体验。
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showModal = ref(true);
    return {
      showModal,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #413f3f;
  margin: 15% auto;
  padding: 20px;
  border: 5px solid #4e4b4b;
  width: 80%;
  color: #fbed9f;
  width: 600px;
  line-height: 1.8em;
  word-break: break-word;
  white-space: pre-line;
}
.title {
  text-align: center;
}
.content {
  width: 600px;
  text-indent: 2em;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>