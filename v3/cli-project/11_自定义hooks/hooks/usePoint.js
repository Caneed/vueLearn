import {onBeforeUnmount, onMounted, reactive} from "vue";

//将鼠标打点的逻辑放到一个方法中
function usePoint(){
    let point=reactive({
        x:0,
        y:0
    })
    function getPosition(event){
        point.x=event.pageX
        point.y=event.pageY
        console.log(event.pageX,event.pageY)
    }

    onMounted(()=>{
        window.addEventListener('click',getPosition)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',getPosition)
    })
    return point
}
export default usePoint