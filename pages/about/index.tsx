//index.tsx
import {useEffect, useRef, useState} from "react";
import store from "../../redux/store";
import {createIncrementAction} from '../../redux/count_action'

function App() {
  const [,setUpdate] :any = useState();
  const sel:any = useRef(null);
  useEffect(() => {
    store.subscribe(() => {
      setUpdate({});
    })
  })
  const add = () => {
    store.dispatch(createIncrementAction(Number(sel.current.value)));
    
  }
  const cut = () => {
    store.dispatch({type:'decrement',data:Number(sel.current.value)});
  }
  return (
    <div style={{marginTop: '10px'}}>
        <span style={{marginRight: '10px'}}>数字：{store.getState()}</span>
        <select ref={sel} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={add}>+</button>
        <button onClick={cut}>-</button>
    </div>
  );
}

export default App;
