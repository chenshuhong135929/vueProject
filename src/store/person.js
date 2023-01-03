
export default  {
    namespaced: true,
    actions:{
        addPersonsonWang(context,value){
            if(value.name.indexOf('王')=== 0){
                context.commit('ADD',value)
            }
        }
    },
    mutations:{
        ADD(state,value){
            state.personList.unshift(value)
        }

    },
    state:{
        personList:[{
            id:'001',
            name:'小明'
        },
        
        {
            id:'002',
            name:'小虹'
        }
        ]
    },
    getters:{
        firstPersonName(state){
        
          return  state.personList[0].name
        }
    }
}