import { isFun } from "@/utils/types";

import { layout } from "@/config";

const state = {
  title: "",
  left: [],
  right: []
};

const mutations = {
  SET_TITLE(state, payload) {
    state.title = payload;
  },
  SET_LEFT_ICON(state, { payload, type = "default" }) {
    // 默认点击事件
    if (payload?.event && isFun(payload.event)) {
      payload.event = { click: payload.event };
    }

    if (type == "default") {
      state.left = payload || [];
    } else {
      state.left[type](payload);
    }
  },

  SET_RIGHT_ICON(state, { payload, type = "default" }) {
    // 默认点击事件
    if (payload?.event && isFun(payload.event)) {
      payload.event = { click: payload.event };
    }
    if (type == "default") {
      state.right = payload || [];
    } else {
      state.left[type](payload);
    }
  }
};

const actions = {
  /**
   * 设置标题
   * @param {*} { commit }
   * @param {String} payload
   */
  setTitle({ commit }, payload) {
    commit("SET_TITLE", payload);
  },

  /**
   * 设置左侧 icon
   * @param {*} { commit }
   * @param {Array} payload
   */
  setLeftIcon({ commit }, payload) {
    commit("SET_LEFT_ICON", { payload, type: "default" });
  },
  /**
   * 设置左侧 icon 后置插入
   * @param {*} { commit }
   * @param {Object} payload
   */
  setLeftIconPush({ commit }, payload) {
    commit("SET_LEFT_ICON", { payload, type: "push" });
  },
  /**
   * 设置左侧 icon 前置插入
   * @param {*} { commit }
   * @param {Object} payload
   */
  setLeftIconUnShift({ commit }, payload) {
    commit("SET_LEFT_ICON", { payload, type: "unshift" });
  },
  /**
   * 设置右侧 icon
   * @param {*} { commit }
   * @param {Array} payload
   */
  setRightIcon({ commit }, payload) {
    commit("SET_RIGHT_ICON", { payload, type: "default" });
  },
  /**
   * 设置右侧 icon 后置插入
   * @param {*} { commit }
   * @param {Object} payload
   */
  setRightIconPush({ commit }, payload) {
    commit("SET_RIGHT_ICON", { payload, type: "push" });
  },
  /**
   * 设置右侧 icon 前置插入
   * @param {*} { commit }
   * @param {Object} payload
   */
  setRightIconUnshift({ commit }, payload) {
    commit("SET_RIGHT_ICON", { payload, type: "unshift" });
  },
  /**
   * 设置默认情况下的 NavBar 信息
   * @param {*} { commit }
   */
  setDefaultNavBar({ commit }) {
    commit("SET_TITLE", layout.NavBarDefaultTitle);
    commit("SET_LEFT_ICON", { payload: layout.NavBarDefaultLeft });
    commit("SET_RIGHT_ICON", { payload: layout.NavBarDefaultRight });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
