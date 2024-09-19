import Section from './Section'

export default function Summary({title, desc}) {

    return <Section title={title}>
        {desc}
    </Section>
}