function Badge({ label, color = 'cyan' }) {
  const palette = {
    cyan: 'bg-electric/10 text-electric border border-electric/20',
    green: 'bg-circuit/10 text-circuit border border-circuit/20',
    gold: 'bg-gold/10 text-gold border border-gold/20',
    purple: 'bg-purple/10 text-purple border border-purple/20'
  }

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${palette[color] || palette.cyan}`}>
      {label}
    </span>
  )
}

export default Badge
