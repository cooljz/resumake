import Section from './Section'

export default function Skills({title, skills}) {

    return <Section title={title}>
        <ul className='flex'>
            {skills && skills?.map((skill, i) => <li key={i} className='flex-1'>{skill}</li>)}
        </ul>
    </Section>
}
