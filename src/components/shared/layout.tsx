import { ReactNode } from "react"
import { Link } from "react-router-dom"

export const Layout = ({children}:{children: ReactNode}) => {
    return <div>
    <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/counter"}>Counter</Link></li>
        <li><Link to={"/formloader"}>Form And Loader</Link></li>
    </ul>
    {children}
</div>
}