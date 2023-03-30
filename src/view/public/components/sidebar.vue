<template>
  <div class="wrapper">
    <nav class="sidebar">
      <ul>
        <li class="logo"><a href="#">ToolsDar</a></li>
        <li><a href="#">在线工具</a></li>
        <li><a href="#">代码编辑器</a></li>
        <li>
          <a href="#">API 工具</a>
          <!-- 添加二级菜单 -->
          <ul>
            <li><a href="#">API1</a></li>
            <li><a href="#">API2</a></li>
            <li><a href="#">API3</a></li>
          </ul>
        </li>
        <li><a href="#">设计工具</a></li>
        <li><a href="#">常用工具</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </nav>

    <div class="main-content">
      <!-- 这里是页面主要内容 -->
      <h1>欢迎来到 ToolsDar</h1>
      <p>这里是一个在线工具集合网站，提供各种实用的工具。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 基本样式 */
.wrapper {
  display: flex;
  flex-direction: row;
}

.sidebar {
  background-color: #2f3542;
  width: 240px;
  height: 100vh;
  position: fixed;
  z-index: 0;
  top: 0;
  padding-top: 20px;
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  margin-bottom: 16px;
}

.sidebar li a {
  display: block;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  padding: 12px;
  border-left: 4px solid transparent;
  transition: all 0.3s ease-in-out;
}

.sidebar li a:hover {
  border-left: 4px solid #1e90ff;
  background-color: rgba(30, 144, 255, 0.1);
}

/* 添加二级菜单的样式 */
.sidebar li ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 24px; /* 缩进以示层次感 */
}

.sidebar li ul li {
  margin-bottom: 8px;
}

.sidebar li ul li a {
  font-size: 14px;
}
</style>