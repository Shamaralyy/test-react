import { ReactNode, useRef } from "react";

interface Props {
    a: ReactNode,
    getContext: any
}

const App: any = (props: Props) => {
    const btn = useRef(null);

    const submitMsg = (c: any) => {
        props.getContext(c);
        console.dir(btn.current);
    }

    return (
        <div>
            <div>{props.a}</div>
            <button ref={btn} onClick={() => submitMsg('子传父')}>按钮</button>
        </div>
    )
}

export default App;