import A from '../A'

export default function Who({ name, jobTitle, email, phoneNumber, blog, location}) {
    // const [name, setName] = useState("");
    // const [title, setTitle] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");

    return <section className='mb-4'>
        <h1 className='text-3xl text-center'>{name}</h1>
        <div className='text-xl text-center text-gray-400'>{jobTitle}</div>
        <address className='text-center'>
            📧 <A href={"mailto:" + email} className="">{email}</A>
            📞 <A href={"tel:+" + phoneNumber}>{phoneNumber}</A>
            🌐 <A href={blog} className=''>{blog}</A>
            📍 <span className='text-neutral-600'>{location}</span>
        </address>
    </section>
}