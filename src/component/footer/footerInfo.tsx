import Link from "next/link"

type Props = {
    title : string,
    content : Content[] | string[]

}

type Content = {
    label: string,
    href : string
}

export const FooterInfo = ({ title, content } : Props) => {

    return (
        <div className="flex flex-col">
            <h2 className="text-gray-700 font-label tex-3xl mb-4">{title}</h2>
            {content.map((item: Content | string, index: number) => {
                if(typeof  item !== 'string'){
                    return (
                        <Link href={item.href} key={index} className="tex-sm text-gray-400 mb-3">
                            {item.label}
                        </Link>
                    )
                }

                return (
                    <p className="text-sm text-gray-500 mb-3" key={index}>
                        {item}
                    </p>
                )
            })}
        </div>
    )
}