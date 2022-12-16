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


