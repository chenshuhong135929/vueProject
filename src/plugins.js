export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        //定义全局指令
        Vue.directive('fbind',{
             
            big(e ,b){
              console.log(e.innerText,b.value )
              e.innerText= b.value*10
            },
            fbing:{
            /*  alert(b.value )
             e.value=b.value
             e.focus() */
             bind(e ,b){
              console.log('bind'+b.value )
              e.value= b.value
             },
             inserted(e ,b){
              console.log('inserted' +b.value )
              e.focus()
             },
             updated(e ,b) {
              console.log('updated'+b.value )
              e.value= b.value
             },
            }
        })
        //定义混入
        Vue.mixin({
          data(){
              return {
                  'x':10
              }
          }
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello= ()=>{
            alert('你好阿！！！')
        }
    }
}

 