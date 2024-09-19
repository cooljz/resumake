import Section from './Section';

export default function Experience({ title, experience }) {

    return <Section title={title}>
        {experience && experience?.map((exp, i) => 
            <div key={i}>
                <h3 className='text-xl font-semibold'>{exp.jobTitle}</h3>
                <h4 className="tex-lg text-neutral-600 font-semibold">{exp.company}</h4>
                <p>📅 <span>{exp.from}</span> - <span>{exp.to}</span></p>
                <p>{exp.desc.map((paragraph, i) => {
                    if (paragraph instanceof Array) {
                        return <ul key={i} className='list-inside list-disc'>
                            {paragraph.map((item, j) => <li key={j} className='mb-1'>{item}</li>)}
                        </ul>
                    }
                    return paragraph;
                })}</p>
            </div>
        )}
    </Section>
}