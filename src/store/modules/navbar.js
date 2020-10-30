import { isFun, isString } from "@/utils/types";

import { layout } from "@/config";

const state = {
  //标题
  title: {},
  //左侧按钮组
  left: [],
  //右侧按钮组
  right: [],
  //是否占位？
  placeholder: false,
  //是否使用
  use: true
};

const mutations = {
  /**
   * 设置title
   * @date 29/10/2020
   * @param {*} state
   * @param {*} payload
   */
  SET_TITLE(state, payload) {
    state.title = payload;
  },

  /**
   * 设置左侧 icon
   *
   * @date 29/10/2020
   * @param {*} state
   * @param {*} { payload, type = "default" }
   */
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

  /**
   * 设置右侧 icon
   *
   * @date 29/10/2020
   * @param {*} state
   * @param {*} { payload, type = "default" }
   */
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
  },

  /**
   * 设置 placeholder
   *
   * @date 29/10/2020
   * @param {*} state
   * @param {*} payload
   */
  TOGGLE_PLACEHOLDER(state, payload) {
    state.placeholder = payload;
  },

  /**
   * 设置 use
   *
   * @date 29/10/2020
   * @param {*} state
   * @param {*} payload
   */
  TOGGLE_USE(state, payload) {
    state.use = payload;
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
   *切换顶部是否占位
   * @param {*} { commit }
   * @param {Boolean} payload
   */
  togglePlaceholder({ commit }, payload) {
    commit("TOGGLE_PLACEHOLDER", payload);
  },

  /**
   * 设置标题栏是否显示
   * @param {*} { commit }
   * @param {*} payload
   */
  toggleUse({ commit }, payload) {
    commit("TOGGLE_USE", payload);
  },

  /**
   * 设置默认情况下的 NavBar 信息
   * @param {*} { commit }
   */
  setDefaultNavBar({ commit }) {
    commit("SET_TITLE", layout.NavBarDefaultTitle);
    commit("SET_LEFT_ICON", { payload: layout.NavBarDefaultLeft });
    commit("SET_RIGHT_ICON", { payload: layout.NavBarDefaultRight });
  },
  setCurrentState({ commit }, payload) {
    //设置 title 信息
    if (payload.title) {
      let P = {};
      if (isString(payload.title)) {
        P = {
          type: "text",
          content: payload.title
        };
      }
      commit("SET_TITLE", P);
    }
    //设置 left 信息
    if (payload.leftBtn) {
      commit("SET_LEFT_ICON", {
        payload: payload.leftBtn
      });
    }
    //设置 right 信息
    if (payload.leftBtn) {
      commit("SET_RIGHT_ICON", {
        payload: payload.rightBtn
      });
    }
    // 设置 placeholder
    // eslint-disable-next-line no-prototype-builtins
    if (payload.hasOwnProperty("placeholder")) {
      commit("TOGGLE_PLACEHOLDER", payload.placeholder);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
