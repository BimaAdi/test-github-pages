import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { PREFIX } from "../../settings"

export const Layout = ({children}:{children: ReactNode}) => {
    return <div>
    <ul>
        <li><Link to={`${PREFIX}/`}>Home</Link></li>
        <li><Link to={`${PREFIX}/counter`}>Counter</Link></li>
        <li><Link to={`${PREFIX}/formloader`}>Form And Loader</Link></li>
    </ul>
    {children}
</div>
}