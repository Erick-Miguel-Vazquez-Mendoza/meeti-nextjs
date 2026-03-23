import clsx from "clsx"
import { LabelHTMLAttributes } from "react"


type Props = LabelHTMLAttributes<HTMLLabelElement>

export default function FormLabel(props: Props) {

    const { className } = props

    return (
        <label
            {...props}
            className={clsx("mt-10 space-y-3", className)}
        >
            {props.children}
        </label>
    )
}
