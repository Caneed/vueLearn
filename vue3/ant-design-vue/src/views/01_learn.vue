<script setup>

</script>


<template>
  <div>
    <h3>分隔线</h3>
    <a-divider></a-divider>
    <a-divider>with Text</a-divider>
    <h3>布局</h3>
    <h4>普通</h4>
    <a-layout>
      <a-layout-header>header</a-layout-header>
      <a-layout-content>content</a-layout-content>
      <a-layout-footer>footer</a-layout-footer>
    </a-layout>
    <a-layout>
      <h4>加上sider</h4>
      <a-layout>
        <a-layout-header>header</a-layout-header>
        <a-layout>
          <a-layout-content>content</a-layout-content>
          <a-layout-sider>sider</a-layout-sider>
        </a-layout>
        <a-layout-footer>footer</a-layout-footer>
      </a-layout>
    </a-layout>
    <h4>加上sider2</h4>
    <a-layout>
      <a-layout-sider>sider</a-layout-sider>
      <a-layout>
        <a-layout-header>header</a-layout-header>
        <a-layout-content>content</a-layout-content>
        <a-layout-footer>footer</a-layout-footer>
      </a-layout>
    </a-layout>

    <h2>间距space</h2>
    <a-space :size="8" align="center" direction="vertical">
      <a-button>btn1</a-button>
      <a-button>btn2</a-button>
      <a-button>btn3</a-button>
    </a-space>
  </div>
</template>


<style scoped>

</style>