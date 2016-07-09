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

export function generateCells(height, width) {
  let cells = List()
  _.times(height, x => {
    _.times(width, y => {
      cells = cells.push(Map({x, y}))
    })
  })
  return cells
}

export forEachCell(grid, cb) {
  grid.forEach((row, x) => {
    row.forEach((cell, y) => {
      cb({cell, x, y})
    })
  })
}

export function randomcell(cells) {
  const max = cells.size - 1
  return randomNumber(0, max)
}