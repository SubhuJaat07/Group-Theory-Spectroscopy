'use client'
import { motion } from 'framer-motion'

interface PYQBadgeProps {
  count: number
  years?: string[]
}

export default function PYQBadge({ count, years }: PYQBadgeProps) {
  const stars = count >= 6 ? 3 : count >= 4 ? 2 : 1
  const label = count >= 6 ? 'Most Important' : count >= 4 ? 'Very Important' : 'Important'
  const color = count >= 6 ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : count >= 4 ? 'bg-orange-500/20 border-orange-500/50 text-orange-300' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300'

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${color}`}
    >
      <span className="star-pulse">
        {'⭐'.repeat(stars)}
      </span>
      <span>{label}</span>
      {years && (
        <span className="opacity-70">({years.join(', ')})</span>
      )}
    </motion.span>
  )
}