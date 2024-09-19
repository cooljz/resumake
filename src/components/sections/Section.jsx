
export default function Section({ title, subtitle, desc, children}) {
    // const [title, setTitle] = useState("title")
    // const [subtitle, setSubtitle] = useState("sub")
    // const [desc, setDesc] = useState("desc");

    return <section id="plain-section" className='mb-3'>
        <header>
            <h2 className='text-2xl font-bold border-b-4 border-b-black'>{title}</h2>
            {subtitle && <div>{subtitle}</div>}
        </header>
        {children || <div>{desc}</div>}
    </section>
}