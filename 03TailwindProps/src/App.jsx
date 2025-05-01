import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  // Array data to be passed as a prop
  let Arr = ['Welcome to React', 'Let’s build something amazing!'];

  // Object data to be passed as a prop
  let obj = {
    day: '01',
    subj: 'Introduction to Props'
  }

  return (
    <>
      {/* A simple heading with Tailwind styling */}
      <h1 className='bg-indigo-500 px-5 py-3 rounded-xl hover:bg-fuchsia-500 hover:text-black transition-all duration-300'>
        Welcome to the Learning Hub
      </h1>

      {/* Card component with string props */}
      <Card 
        title='Learn React JS' 
        content='Start your journey into building powerful UIs with React!' 
      />

      <Card 
        title='Master DSA' 
        content='Sharpen your problem-solving skills to crack interviews.' 
      />

      {/* Passing an array as a prop */}
      {/* You can access it in the child using props.Arr[0], props.Arr[1], etc. */}
      <Card Arr={Arr} />

      {/* Passing an object as a prop */}
      {/* You can access its properties like props.obj.subj, props.obj.day */}
      <Card obj={obj} />

      {/* Important:
        - Strings, numbers, arrays, objects, booleans, and functions can all be passed as props.
        - JSX and React components can also be passed as children.
        - Avoid passing raw arrays or objects without curly braces.
      */}
    </>
  )
}

export default App
