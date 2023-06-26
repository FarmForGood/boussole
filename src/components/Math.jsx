import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

export function Math({ expression, size = '2xl', inline = false, p = '6' }) {
  console.log("Inline: ", inline)
  console.log("expression: ", expression)
  if (inline) return <InlineMath>{expression}</InlineMath>
  return (
    <span
      className={`block rounded-lg border-2 border-solid border-gray-500 p-${p} text-center text-${size}`}
    >
      <InlineMath>{expression}</InlineMath>
    </span>
  )
}
