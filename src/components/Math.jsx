import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

export function Math({ expression, size = '2xl', inline = false, p = '2' }) {
  if (inline) return <InlineMath>{expression}</InlineMath>
  return (
    <span
      className={`rounded-lg border-2 border-solid border-gray-500 p-${p} text-center text-${size}`}
    >
      <InlineMath>{expression}</InlineMath>
    </span>
  )
}
