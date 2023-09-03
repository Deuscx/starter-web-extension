import { useDark } from '@/hooks'

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="mt-6 inline-flex gap-2 text-xl">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </button>

      <a
        className="i-carbon-logo-github icon-btn"
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}
