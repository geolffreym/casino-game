/* eslint-disable  @typescript-eslint/explicit-function-return-type */
export function getRandomNumberBetween (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getUniqueID () {
  return Math.random().toString(36).slice(2)
}
/* eslint-enable  @typescript-eslint/explicit-function-return-type */
