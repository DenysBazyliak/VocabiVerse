import React from 'react'

function WordCard() {
  return (
    <div className={'w-[150px] h-[200px] m-4 rounded-md bg-zinc-50 flex flex-col justify-center'}>
      <div className={'h-[80%] bg-slate-400'}> </div>
      <div className={' h-[20%]'}>Word</div>
    </div>
  )
}

export default WordCard