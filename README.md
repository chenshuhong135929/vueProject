# project

> one vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## ref属性
1，被用来给元素或子组件注册引用信息（id的替代者）
2，应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc)
3，使用方式：
    打标识：<h1 v-text="msg" ref="xxx"></h1>  或   <School ref="xxx"></School>
    获取：this.$refs.xxx

## 配置项props
    功能：让组件接收外部传过来的数据
        1，传递数据：
            第一种方式（只接收）：
            props:['name']

            第二种方式（限制类型）：
            props:{
                name:Number
            }

            第三种方式（限制类型，限制必要性，指定默认值）：
            props:{
                name:{
                    type:String.//类型
                    required:true,//必要性
                    default: '' //默认值
                }
            }
        备注：props 是只读的，Vue底层检测会对propos的修改，如果进行了修改，就会对发出警告
            若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据


            
## mixin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
        {
            data(){...}
            methods:{...}
            ...
        }

        第二步使用混入，例如：
          1，全局混入：Vue.mixin(xxx)
          2，局部混入：mixins:['xxx']


## 插件

    功能：用于曾强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象，install=function(Vue,options){
            //1，添加全局过滤器
            Vue.filter(...)
            //2，添加全局指令
            Vue.directive(...)
            //3，配置全局混入（合）
            Vue.mixin(...)
            4，添加实例方法
            Vue.prototype.$myMethod=function(){...}
            Vue.prototype.$myProperty=xxx
        }

    使用插件：Vue.use()

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## webStorage
   1，存储内容大小一般支持5MB左右（不同浏览器可能不一样）
   2，浏览器端通过window.sessionStorage 和window.localStorage属性来实现本地存储机制
   3，相关API
        1，xxxxStorage.setItem('key','value')
            该方法接受到一个键值作为参数，会把键值对添加到存储中，如果键名存在，则跟新其对应的值
        2，xxxxStorage.getItem('key')
            该方法接受一个键名作为参数，返回键名对应的值
        3，xxxxStorage.removeItem('key')
            该方法接受一个键名作为参数，并把该键名从存储中删除
        4，xxxxxStorage.clear() 
            该方法会清空存储中的所有数据


    4，备注：
        1，SessionStorage存储的内容会随着浏览器窗口关闭而消失
        2，LocalStorage 存储的内容需要手动清除才会消失
        3，xxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值就是null
        4,Json.parse(null)的结果依然是null
    
