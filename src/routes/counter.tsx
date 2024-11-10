import { useState } from "react";
import { Layout } from "../components/shared/layout"

export const CounterRoute = () => {
    const [count, setCount] = useState(0);
    return (
        <Layout>
            <div>
                <button onClick={() => {setCount(count - 1)}}>-</button>
                <p>{count}</p>
                <button onClick={() => {setCount(count + 1)}}>+</button>
            </div>
        </Layout>
    )
}