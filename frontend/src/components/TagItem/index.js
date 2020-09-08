import React from 'react'

const TagItem = ({ tag, index }) => {
  let indexString = ''
  console.log({ tag })
  switch (index) {
    case 0:
      indexString = 'first'
      break;
    case 1:
      indexString = 'second'
      break;
    case 2:
      indexString = 'third'
      break;
    case 3:
      indexString = 'fourth'
      break;
    case 4:
      indexString = 'fifth'
      break;
    case 5:
      indexString = 'sixth'
      break;
    case 6:
      indexString = 'seventh'
      break;
    default:
      indexString = 'first'
      break;
  }
  return (
    <li className={`tag-item ${indexString}`} >
      <p>
        {tag}
      </p>
    </li >
  )
}

export default TagItem
