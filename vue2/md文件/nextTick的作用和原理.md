# nextTick

[TOC]

### nextTick 使用的场景

在我们更改组件中的插值数据时，如果想要在更改的方法中去同时获取结点，那么结点中的内容在更改后不会立即生效，虽然 DOM 树已经渲染，但是访问到的内容还是更改后的内容.
而 nextTick 就解决了这个问题。
产生这种问题的主要原因在于:Vue在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。

```js
changeMsg(){
this.msg='i am not a student'
//i am a student
console.log(this.$refs['msg'].innerHTML)

this.$nextTick(()=>{
console.log(this.$refs['msg'].innerHTML)
})
}
```

这就是 this.$nextTick()的作用，帮助我们在改变组件中属性以后，立刻拿到渲染以后的 dom 节点对象

### 实现原理

##### Vue 异步更新

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。

##### nextTick 是什么

`nextTick`指的是执行延迟回调的一个钩子，它接收一个回调函数作为参数，在下次 DOM 更新循环结束之后进行延迟回调。在修改数据后立即调用此方法以获取更新后的 DOM
