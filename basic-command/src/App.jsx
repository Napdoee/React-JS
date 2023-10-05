import React, { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const peoples = ['Udin', 'Bagas', 'Rudi', 'Joko', 'Lukman', 'Ardi', 'Riski', 'Jamal'];
  const headText = "Halo Bjir";

  const [text, setText] = useState("Heading Bjir");
  const [people, setPeople] = useState([]);
  const [data, setData] = useState(0);

  const linkRef = useRef(null);

  const changeText = () => {
    return setText(!text);
  }

  function changePeople() {
    (data >= peoples.length) ? setData(0) : setData((e) => e + 1);
    setPeople(peoples[data]);
    return;
  }

  useEffect(() => {
    if(data === 1) return console.log('Data has effect 1');
  }, [data]);

  useEffect(() => {
    if(text.includes('mantap')) {
      setText('OKE MANTAP');
    }
  }, [text])

  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  };

  const textChange = (input) => {
    setText(input);
  }

  return (
    <>
      <div style={{ display: "flex", gap: '10px' }}>
        <a onClick={() => goto(linkRef.current)}>Home</a>
        <a onClick={() => goto(linkRef.current)}>About</a>
      </div>

      <input type="text" placeholder="Enter your text" onChange={(e) => textChange(e.target.value)}/>

      <Heading text={headText}/>
      {/*<p>{text ? 'Text Pertama' : 'Text Kedua'}</p>*/}
      <p>{text}</p>
      <p>{people}</p>
      <p>Data: {data}</p>
      <div className="card">
        <Button clicked={changeText} text={"Change Text"}/> 
        <br /><br />
        <Button clicked={changePeople} text={"Change People"}/>
      </div>

      <h1 ref={linkRef}>Home</h1>
      <p>Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.</p>
      <p>Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.</p>
    </>
  )
}

export default App
