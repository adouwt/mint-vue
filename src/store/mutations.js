/**
 * Created by luowendi on 2017/4/16.
 */
import * as types from './mutation_types'

export default {
  // 改变当前主题id
  [types.CHANGE_CURRENT_THEME_ID] (state, id) {
    state.currentThemeId = id;
  },
  // 改变模式
  [types.CHANGE_MODEL] (state) {
    state.isNight = !state.isNight;
  }
}
