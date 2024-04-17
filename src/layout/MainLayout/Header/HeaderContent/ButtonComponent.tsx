import React from 'react'

// Types
type ButtonComponentProps = {
  rotate: boolean,
  setRotate: React.Dispatch<React.SetStateAction<boolean>>,
  icon: React.ReactElement
}

function ButtonComponent({rotate, setRotate, icon}:ButtonComponentProps) {
  return (
    <button className={`${rotate ? '' : 'rotate-180'}`} onClick={() => {
      console.log(rotate);
      return setRotate(!rotate);
  }}>
      {icon}
  </button>
  )
}

export default ButtonComponent