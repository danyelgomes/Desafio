  import { useEffect, useState } from "react"

  function App() {
    const [progress, setProgress] = useState(0)
    const [stage2Color, setStage2Color] = useState("skyblue")
    const [stage3Color, setStage3Color] = useState("skyblue")
    const [stage4Color, setStage4Color] = useState("skyblue")
    const [stage5Color, setStage5Color] = useState("skyblue")
    useEffect (() => {
    if (progress >= 130 ) {
      setTimeout(() => {
        setStage2Color('green')
      }, 900)  
    } else {
      setStage2Color('skyblue')
    }
  })
    useEffect(() => {
    if (progress >= 260 ) {
      setTimeout(() => {
        setStage3Color('green')
      }, 900)
    } else {
      setStage3Color('skyblue')
    }
  })

    if (progress >= 390 ) {
      setTimeout(() => {
        stage4.style.backgroundColor = 'skyblue'
      }, 1100)
    }
    if (progress >= 520 ) {
      setTimeout(() => {
        stage5.style.backgroundColor = 'skyblue'
      }, 1300)
    }

    function diminui() {
      setProgress(prev => Math.max(prev -130,0))
    }
    function aumenta() {
      setProgress(prev =>  prev + 130)
    }

    return (
      <main className="w-full h-full flex justify-evenly border-2 border-blue-400 rounded-md p-2.5 " >
        <div id="stages" className="w-24 flex flex-col items-center">
          <div className="bg-green-700  text-black ml-4 w-10 h-10 rounded-3xl text-center leading-10 mr-6" >1</div>
          <p className="text-center">About you</p>
        </div>
        
        <div id="stages" className="w-24 flex flex-col items-center">
          <div style={{backgroundColor: stage2Color}} className="bg-blue-400 text-black w-10 h-10 rounded-3xl ml-5 text-center leading-10 mr-6">2</div>
        <p className="text-center">about book</p> 
        </div>

        <div id="stages" className=" flex flex-col items-center">
          <div style={{backgroundColor: stage3Color}} className="bg-blue-400 text-black w-10  h-10 ml-5 rounded-3xl text-center leading-10 mr-6">3</div>
          <p className="text-center">Review</p>
        </div>

        <div id="stages" className=" flex flex-col items-center">
          <div style={{backgroundColor: stage4Color}} className="bg-blue-400 text-black w-10 h-10 rounded-3xl ml-5 text-center leading-10 mr-6">4</div>
          <p className="text-center">signing</p>
        </div>

        <div id="stages" className=" flex flex-col items-center">
          <div style={{backgroundColor: stage5Color}} className="bg-blue-400 text-black w-10 h-10 rounded-3xl text-center leading-10">5</div>
          <p className="text-center">contact</p>
        </div>

        <div className="border-4 h-1 block absolute top-11.5 w-80%"></div>

        <div id="progress" className="border-4 border-cyan-500 h-1 block absolute top-11.5 w-0  left-26.5" style={{ width: progress + "px" }} ></div>

        <button className="mr-40" type="button" onClick={diminui}>Previous</button>

        <button className="ml-40" type="button" onClick={aumenta}>Next</button>
      </main>
    )
  }

  export default App