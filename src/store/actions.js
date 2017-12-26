/**
 * Created by luowendi on 2017/4/16.
 */
import * as types from './mutation_types'

export default {
  // 改变模式
  changeModel: ({commit}) => {
    commit(types.CHANGE_MODEL)
  },

}
