import { useState } from "react"


function App() {
  const [color, setNumber] = useState({
    red: 0,
    green: 255,
    blue: 255
  });

  const [isRgb, setIsRgb] = useState(false);

  function handleColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    setNumber({
      red: r,
      green: g,
      blue: b
    })
  }

  function changeType(type) {
    setIsRgb(type === 'rgb')
  }


  const style = {
    backgroundColor: `rgb(${color.red}, ${color.blue}, ${color.green})`
  }

  return (
    <>
      <body style={style}>

        <div className="btns">
          <button  className="btn" onClick={handleColor}>Generat</button>
          <button className="btn" onClick={()=> changeType('rgb')}>RGB</button>
          <button className="btn" onClick={()=> changeType('hex')} >HEX</button>
        </div>

        {
          isRgb ? 
          <h1>RGB color</h1>
          :
          <h1>
            HEX color
          </h1>
        }


        {
          isRgb ?
            <h1>
              rgb({color.red}, {color.green},{color.blue})
            </h1>
            :
            <h1>
              #{(color.red).toString(16)}{(color.green).toString(16)}{(color.blue).toString(16)}
            </h1>
        }

      </body>




    </>
  )
}

export default App
