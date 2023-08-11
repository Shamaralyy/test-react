//A.tsx
import { MyContext } from '../../Context/context'
import B from '../B/index'

export default function index() {
  return (
    <div>
      <div>我是A组件：</div>
      <MyContext.Provider value={'Context共享值'}>
        <B />
      </MyContext.Provider>
    </div>
  )
}
