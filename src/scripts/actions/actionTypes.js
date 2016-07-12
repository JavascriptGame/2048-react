import { generateAction } from 'js/utils/actions'
const actions = ['NEW_TILE', 'MOVE_TILES', "ACTUALIZE",
  "MERGE_TILES",
  "INIT_GAME",
  "GAME_OVER",
  "SAVE_GAME",
  "RESET_RESULT"
]
export default generateActions(actions)