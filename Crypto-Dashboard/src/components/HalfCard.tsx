import React from 'react'

function HalfCard(props: any) {
  return (
    <div className="relative w-6/12 bg-white rounded-xl border border-2 border-grayish">
        {props.children}
    </div>
  )
}

export default HalfCard