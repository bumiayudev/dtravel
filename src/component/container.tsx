import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    size? : string
}
const Container = ({ children, size}: Props)=>{
    return (
        <div className={`${size == 'xl' ? 'max-w-screen-xl' : 'max-w-screen-lg'} max-auto`}>
            {children}
        </div>
    )
}

export default Container