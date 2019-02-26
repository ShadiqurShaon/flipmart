import Apiservice from '../common/api.service'
import {MANU} from './actions.type'
import {GET_MANUES} from './mutations.type'

const state = {

    manus:[]
}
const getters = {

    getManue(state){
        return state.manus
    }
}
const actions = {
    [MANU](context){
        return new Promise((resolve)=>{
            Apiservice.get('menu')
            .then((value)=>{
                console.log(value);
                context.commit(GET_MANUES,value.data)
            }).catch((res)=>{
                console.log(res);
                
            })
        })
    }
}
const mutations = {
    [GET_MANUES](state,data){
        state.manus = data
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
