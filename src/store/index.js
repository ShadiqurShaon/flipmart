import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import manu from './manu'

Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        manu
    },
    plugins:[createPersistedState()]

})