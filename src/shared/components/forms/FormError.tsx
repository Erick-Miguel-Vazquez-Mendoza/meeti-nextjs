

export default function FormError({children} : {children: React.ReactNode}) {
    return (
        <p className="border-l-2 p-2 text-red-600 w-full font-bold border-red-600 bg-red-100 text-sm">{children}</p>
    )
}
