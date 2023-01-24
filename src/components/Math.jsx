import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

export function Math({ expression, inline = false }) {
  if (inline) return <InlineMath>{expression}</InlineMath>
  return (
    <span className="rounded-lg border-2 border-solid border-gray-500 p-2 text-center text-2xl">
      <InlineMath>{expression}</InlineMath>
    </span>
  )
}
