import * as Types from './types';

// create  store
export const state = () => ({
  isOpenSideout: false,
});

// getter
export const getters = {
  getIsOpenSideout(state) {
    return state.isOpenSideout;
  }
}

// mutations
export const mutations = {
  [Types.UPDATE_IS_OPEN_SIDEOUT](state, isOpen) {
    state.isOpenSideout = isOpen;
  }
}

// actions
export const actions = {
  updateIsOpenSideout({
    commit
  }, isOpen) {
    commit(Types.UPDATE_IS_OPEN_SIDEOUT, isOpen);
  }
}
