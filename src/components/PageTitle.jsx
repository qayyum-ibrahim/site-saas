import { useEffect } from 'react'

const BASE = 'Tallybase'

function setMeta(selector, value) {
  const el = document.head.querySelector(selector)
  if (el && value) el.setAttribute('content', value)
}

export default function PageTitle({ title, description }) {
  useEffect(() => {
    const full = title ? `${title} | ${BASE}` : `${BASE}: invoicing and payments for small businesses`
    document.title = full
    setMeta('meta[property="og:title"]', full)
    if (description) {
      setMeta('meta[name="description"]', description)
      setMeta('meta[property="og:description"]', description)
    }
  }, [title, description])
  return null
}
