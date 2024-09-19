import Section from './Section';

export default function Education({ title, education }) {

    return <Section title={title}>
        <div className="flex">
            {education && education?.map((edu, i) => 
                <div key={i} className='flex-1'>
                    <p className='text-md font-semibold'>{edu.major}</p>
                    <p>{edu.school}</p>
                    <p><span>{edu.from}</span>{edu.from.trim() && " - "}<span>{edu.to}</span></p>
                </div>
            )}
        </div>
    </Section>
}
