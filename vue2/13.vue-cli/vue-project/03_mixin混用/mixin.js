//将多个组件都需要用到的同一个方法装入一个js文件中，并将其导出

export const mixin={
    methods:{
        show(){
            console.log(this.name)
        }
    }
}