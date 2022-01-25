import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return(
    <>
      <div>
        <h1>Increment/Decrement Counter</h1>
        <h3>Using React and Redux</h3>

        <div>
          <a className="minus" title="Decrement"
          onClick={() => dispatch(decNumber()) }><span>-</span></a>
          <input name="quantity" type="text" className="quantity-input" value={myState} />
          <a className="plus" title="Increment"
          onClick={() => dispatch(incNumber(5)) }><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App;