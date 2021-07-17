import { useState } from 'react'

const useLoader = (through: boolean) => {
  const [state, changeState] = useState(false)

  const changeStateWithGuard = (val: boolean): void => {
    if (!through) {
      changeState(val)
    }
  }

  const delayFn = (fn: () => void, delay: number) => {
    if (through) {
      fn()
    } else {
      setTimeout(fn, delay)
    }
  }

  return [state, { changeLoaderState: changeStateWithGuard, delayFn }] as [
    boolean,
    { changeLoaderState: typeof changeStateWithGuard; delayFn: typeof delayFn }
  ]
}

export { useLoader }
