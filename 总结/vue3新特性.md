# vue3的新特性

[TOC]

### 新特性的介绍

- 重写了 vue2 中的双向数据绑定
- VDOM 性能瓶颈
- Fragments
- 支持 Tree-Shaking
- 组合式 API

### 双向数据绑定

vue2: vue2 中的双向数据绑定主要是使用了 Object.defineProperty() 来实现的双向数据绑定

vue3: vue3 使用了 proxy 来实现的双向数据绑定

**区别:**