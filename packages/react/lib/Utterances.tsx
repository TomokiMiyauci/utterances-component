import React, { FC, useRef, useEffect, ReactNode } from 'react'
import { UtterancesProps, Theme } from '@shared/types'
import {
  createScriptElement,
  hiddenElement,
  forEach,
  hideOrShow
} from '@shared/util'
import { useLoader } from './hooks'

const Utterances: FC<UtterancesProps<ReactNode>> = ({
  repo,
  label,
  theme,
  issueTerm,
  issueNumber,
  delay = 200,
  Loader
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const cache = useRef<{ [k in Theme]?: number }>()

  const [loaderState, { changeLoaderState, delayFn }] = useLoader(!Loader)

  useEffect(() => {
    changeLoaderState(false)

    if (!ref.current) return
    const index = cache.current?.[theme]
    if (typeof index === 'number') {
      forEach((item, i) => hideOrShow(item, index === i), ref.current.children)
      changeLoaderState(true)

      return
    }

    cache.current = {
      ...cache.current,
      [theme]: ref.current.childNodes.length
    }

    const scriptEl = createScriptElement({
      repo,
      label,
      theme,
      issueTerm,
      issueNumber: issueNumber as never
    })

    scriptEl.onload = () => {
      changeLoaderState(true)
    }

    forEach(hiddenElement, ref.current!.children)
    delayFn(() => ref.current!.appendChild(scriptEl), delay)
  }, [theme])

  return (
    <>
      {!loaderState && Loader}
      <div ref={ref} />
    </>
  )
}

export default Utterances
