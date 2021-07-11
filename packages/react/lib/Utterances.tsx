import React, { FC, useRef, useEffect } from 'react'
import { UtterancesProps, Theme } from '@shared/types'
import {
  createScriptElement,
  hiddenElement,
  forEach,
  hideOrShow
} from '@shared/util'

const Utterances: FC<UtterancesProps> = ({
  repo,
  label,
  theme,
  issueTerm,
  issueNumber
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const cache = useRef<{ [k in Theme]?: number }>()

  useEffect(() => {
    if (!ref.current) return
    const index = cache.current?.[theme]
    if (typeof index === 'number') {
      forEach((item, i) => hideOrShow(item, index === i), ref.current.children)
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

    ref.current.appendChild(scriptEl)
    forEach(hiddenElement, ref.current.children)
  }, [theme])

  return <div ref={ref} />
}

export default Utterances
