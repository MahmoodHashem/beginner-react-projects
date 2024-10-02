
import { useState } from "react";
import Accordion from "./components/Question"
import questions from "./assets/questions"

function App() {

  const [isOpen, setIsOpen] = useState(null);

  const [selected, setSelected] = useState(false)
  const [multiple, setMultiple] = useState([])
  

  function toggle(id) {  
    setIsOpen( isOpen => isOpen === id ? null : id)
  }

  function handleMultiple(id){
      const copy = [...multiple]

      const x = copy.indexOf(id)
      if(x === -1){
         copy.push(id)
        }else{
          
          copy.splice(x, 1); 
        }
    setMultiple(copy)
  }

  function toggleEnableMultiple(){
    setSelected(s => !s)
  }

  const qa = questions.map((question) => {
    return <Accordion
      key={question.id}
      toggle={ selected ?  () => handleMultiple(question.id) : ()=> toggle(question.id)}
      state={ selected ?  multiple.indexOf(question.id) !== -1 : isOpen === question.id}
      question={question.question}
      answer={question.answer} />
  })

  return (
    <>
      <div className="container">

        <button className="btn" onClick={toggleEnableMultiple}>
         {selected ? "Disable Multiple Selection" : "Enable multiple Selection"}
        </button>

        {qa}
      </div>
    </>
  )
}

export default App
