export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1E',
        secondary: '#0F1830',
        elevated: '#16213E',
        electric: '#00D9FF',
        circuit: '#39FF88',
        gold: '#FFC145',
        purple: '#8B5CF6'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,217,255,0.16), 0 20px 60px rgba(0,0,0,0.25)'
      },
      backgroundImage: {
        'grid-lines': 'radial-gradient(circle, rgba(0,217,255,0.12) 1px, transparent 1px)',
      }
    }
  },
  plugins: []
}
