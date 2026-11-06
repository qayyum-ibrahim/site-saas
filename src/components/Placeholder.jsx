import PageTitle from './PageTitle.jsx'
import Section from './Section.jsx'

export default function Placeholder({ title, metaTitle, description }) {
  return (
    <>
      <PageTitle title={metaTitle} description={description} />
      <Section className="placeholder">
        <span className="eyebrow">Coming soon</span>
        <h1>{title}</h1>
      </Section>
    </>
  )
}
