import { useState } from 'react'
import './Img.css'

export default function Img({ src, alt, ratio = '16 / 9', className = '', ...rest }) {
  const [failed, setFailed] = useState(!src)
  return (
    <div className={`img ${className}`.trim()} style={{ aspectRatio: ratio }}>
      {failed ? (
        <div className="img__fallback" role="img" aria-label={alt} />
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} {...rest} />
      )}
    </div>
  )
}
