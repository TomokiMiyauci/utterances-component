import React, { FC, useState } from 'react'
import Utterances from '@/Utterances'
import { Theme } from '@shared/types'
import SkeltenLoader from '@/SkeltonLoader'

const App: FC = () => {
  const [theme, changeTheme] = useState<Theme>('github-light')
  const handleClick = () =>
    changeTheme(theme === 'github-light' ? 'github-dark' : 'github-light')
  return (
    <>
      <button onClick={handleClick}>switch</button>
      <Utterances
        repo="TomokiMiyauci/me"
        theme={theme}
        issueTerm="pathname"
        Loader={<SkeltenLoader />}
      />
    </>
  )
}

export default App
