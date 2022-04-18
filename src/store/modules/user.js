import { getToken, setToken, removeToken } from "@/utils/auth"
import getters from "../getters"
const state = {
    token: getToken() // get toekn init status 
}
const mutations = {
    //设置token
    setToken(state, token) {
        state.token = token //设置token,只是修改state的data,
        setToken(token) //vuex和缓存数据同步
    },

    //delete token
    removeToken(state) {
        state.token = null
        removeToken()
    }
}
const actions = {
    // invoke login interface ,if success ;set token to vuex,if fail 
    async login(context, data) {
        const result = await login(data)
        if (result.data.success) {
            context.commit('setToken', result.data.data)
        }
    }


    /*
    login(context,data){
        return new Promise(function(resolve){
        
            login(data).then(result=>{
                if(result.data.success){
                    context.commit('setToken',result.data.data)
                    提交mutations设置token 

                    resolve() //表示执行成功了
                }

            })
        })
    }
    //总结一下promise的使用；promise使用要传递两个参数（resolve,reject）
    new Promise(resolve,reject=>{
        //执行成功时 resolve()
        //执行失败时 reject()
    }).then() 用户获取异步执行的结果，如果传入两个参数（函数），第一个是成功之后的结果，第二个是失败之后的结果；
    一个参数就是成功之后的结果，catch,finally
    
    
    */

}
const getters = {
    sidebar: state = state.app.sidebar,
    device: state = state.app.device,
    token: state = state.user.token,
}


export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}