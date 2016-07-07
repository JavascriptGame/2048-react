import { Map, List } from 'immutable';
import { randomNumber } from './utils/math'

export function generateGrid(height, width) {
  let cells = List()
  _.times(height, x => {
    cells = cells.set(x, List());
    _.times(width, y => {
      cells = cells.setIn([x, y], List())
    })
  })
  return cells

}