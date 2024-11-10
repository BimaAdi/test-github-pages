import { useLoaderData } from "react-router-dom"
import { Layout } from "../components/shared/layout"

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
    return [
        {
            id: 1,
            name: "hello",
            isDone: false
        }
    ]
}

export const FormLoaderRoute = () => {
    const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    return <Layout>
        <ul>
            {data.map((x) => <li key={x.id}>{x.name}</li>)}
        </ul>
    </Layout>
}