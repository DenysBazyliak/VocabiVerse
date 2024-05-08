import React from 'react'
import Link from 'next/link'
import WordCard from '@/_components/WordCard'

type Word = {
  picture: string
}

const Words: Word[] = [
  { 
    picture : 'picture' 
  }
] 

function post() {
  return (
    <main className={'flex p-5'}>
        <WordCard/>  
    </main>
    )
}

export default post