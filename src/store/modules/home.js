import Lead from '../api/lead';
const state = {
  Title: '安庆市第一人民医院软件资产管理平台'
};
const mutations = {
  setTitle(state, data) {
    state.Title = data;
  },
};
const actions = {
  //线索详情
  async getLeadDetail({ dispatch, commit }, params) {
    const { data, retCode } = await Lead.getLeadDetailApi(params);
    if (retCode === 200 && data) commit('setDetail', data)
    return data;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
