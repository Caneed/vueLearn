//调用插件

const obj={
    //插件中必须使用install方法，install方法接收一个参数，参数为Vue构造函数
    //在install中可以定义vue实例对象中的任何东西，并且在组件中可以使用
    install(Vue){
        console.log('install',Vue)
    }
}

export default obj