import React, { FC } from 'react'
import { balloon } from './skelton.module.css'

const SkeltonLoader: FC = () => {
  return (
    <div className="my-16px px-4px max-w-760px mx-auto">
      <div className="rounded-md ml-16px sm:ml-60px min-h-21px opacity-10 bg-gray-400" />
      <div className="flex flex-start mt-16px">
        <span className="w-44px h-44px mr-16px hidden sm:inline-block rounded-md bg-opacity-10 bg-gray-400"></span>
        <div
          className={`flex-grow border h-200px rounded-md  bg-opacity-10 bg-gray-400 relative ${balloon}`}
        >
          <div />
          <div className="p-2">
            <div className="min-h-90px rounded-md  p-2" />
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default SkeltonLoader
