export const state = () => ({
    matter: null
});
  
export const mutations = {
    setMatter(state, matter) {
        state.matter = matter;
    }
};

export const getters = {
    matter: state => {
      return state.matter;
    }
};

export const actions = {
};
