//C.tsx
import { MyContext } from '../../Context/context'

export default function index() {
    return (
        <MyContext.Consumer>
            {
                value => (
                    <div>我是C组件：{value}</div>
                )
            }
        </MyContext.Consumer>
    )
}
