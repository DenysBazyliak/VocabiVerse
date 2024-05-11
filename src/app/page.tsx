const WordsArray = [
  {
    word: 'Dictionary',
    translation: 'das Wörterbuch'

  },
  {
    word: 'Sock',
    translation: 'die Socke'

  },
  {
    word: 'Gauntlet',
    translation: 'die Stulpe'

  },
  {
    word: 'Boot',
    translation: 'der Stiefel'

  }
]
const ButtonsArray = [
  {
    name: 'Group 1'
  },
  {
    name: 'Group 2'
  },
]
const Words = ()=>{
  return WordsArray.map((word)=>{
    return (
      <div key={word.word} className={' mr-6 my-4 px-6 py-4 w-[260px] h-[100px] rounded-md flex flex-col items-center justify-center bg-[#0b0c10] text-[#c5c6c7] border border-[#45A29E]'}>
        <span>Word: {word.word}</span>
        <span className={'truncate'}>Translation: {word.translation}</span>
      </div>
    )
  })
}

const Buttons = ()=>{
  return ButtonsArray.map((button)=>{
    return (
      <button key={button.name} className={' border-b-[1.3px] border-[#45A29E] text-[#66FCF1] pr-2'}>{button.name} </button>
    )
  })
}
export default function Dictionary() {
  return (
    <main className={'w-[calc(100vw-260px)] fixed right-0 '}>
      <p className={'mt-12 ml-16 text-[#66FCF1] text-5xl'} >DICTIONARY</p>
      <div className={'flex flex-row mt-4'}>
        <span className={'pl-2 border-b-[1.3px] w-[67px] border-[#45A29E] pb-1'}></span>
        <Buttons/>
        <button className={' border-b-[1.3px] border-[#45A29E] text-[#66FCF1] pr-1'}>+</button>
      </div>
      <div className={'flex flex-row px-[67px]'}>
        <Words/>
      </div>
    </main>
  );
}
