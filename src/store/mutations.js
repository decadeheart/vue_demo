import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + ~~time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'http://res.cloudinary.com/dyb29pfpm/image/upload/v1491824706/privateinvestocat_fompng.jpg';
    
    state.list.push(
      Object.assign({ name: 'DecadeXun', avatar: avatar }, plan)
    )
  },
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
