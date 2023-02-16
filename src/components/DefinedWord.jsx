import { useState } from 'react'

const definitions = {
  CP: 'Culture principale',
  CI: 'Culture intermédiaire',
  SAU: 'Surface Agricole Utile',
  ITK: 'Itinéraire cultural',
  AB: 'Agriculture Biologique',
  DPB: 'Droit au Paiement de Base',
  TEP: 'Tonne Equivalent Pétrole',
}

export function DefinedWord({ word }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      {isHovered && (
        <span className="h-18 absolute bottom-2 w-48 rounded-md bg-white shadow-md">
          {definitions[word]}
        </span>
      )}
      {word}
    </a>
  )
}
