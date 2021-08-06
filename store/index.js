export const state = () => ({
    login: {},
    userInfo: {}
})
  
export const mutations = {
    setLogin(state, login) {
        state.login = login
    },
    setUserInfo(state, info) {
        state.userInfo = info
    }
}

export const getters = {
    userInfo: state => {
      return state.userInfo;
    },
    login: state => {
        return state.login;
      }
  };

export const actions = {
};
