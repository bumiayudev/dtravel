type Props = {
    children : string
}

export const Button = ({ children} : Props) => {
  return (
    <button className="bg-blue-600 text-white p-3 h-4 tex-sm font-label rounded-md w-48">
        {children}
    </button>
  )
}
