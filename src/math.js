export const sum = (...items) => items.reduce((total, current) => {
  return total + current;
})

export const mult = (...items) => items.reduce((total, current) => total * current)
