import { useState } from "react"


export default function Reviews(props) {
  // Declare the state
  const [counter, setCounter] = useState(1281)

  const addOne = () => {
    // sets counter to its current value + 1
    setCounter(counter + 1)
  }
  const subtractOne = () => {
    // sets counter to its current value + 1
    setCounter(counter - 1)
  }
    return(
        <div className="Reviews">
          <h5>Reviews</h5>
          <h2>{counter}</h2>
          <button onClick={addOne}>Add One</button>
          <button onClick={subtractOne}>Subtract One</button>
        </div>
    )
}