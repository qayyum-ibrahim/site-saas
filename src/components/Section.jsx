export default function Section({ id, tone = 'default', className = '', children, ...rest }) {
  return (
    <section id={id} className={`section section--${tone} ${className}`.trim()} {...rest}>
      <div className="container">{children}</div>
    </section>
  )
}
