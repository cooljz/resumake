import Plain from './presets/Plain';
import Print from './Print';

export default () => {

    return <article className='relative grid justify-center aspect-a4 mx-auto shadow-lg
                               max-w-3xl p-7
                               print:shadow-none print:max-w-full portrait:max-w-full'>
        <Plain {...mockup} />
        <Print />
    </article>;
}

const mockup = {
    preset: "plain",
    who: {
        name: "JASON DAHL",
        jobTitle: "Data Scientist",
        email: "Jason@email.com",
        phoneNumber: "010-1234-4321",
        location: "Beijing",
        github: "https://www.github.com/",
        blog: "https://www.Jasonisme.com/"
    },
    education: {
        title: "Education",
        education: [
            {
                name: "education1",
                major: "Master of Science in Data Science",
                school: "University of XYZ, [City, State]",
                from: "",
                to: "Graduated May 2015",
            },
            {
                name: "education2",
                major: "Bachelor of Science in Computer Science",
                school: "University of ABC, [City, State]",
                from: "",
                to: "Graduated May 2013",
            },
        ],
    },
    experience: {
        title: "Experience",
        experience: [
            {
                jobTitle: "Senior Data Scientist",
                company: "XYZ Corporation, [City, State]",
                desc: [
                    [
                        "Led a team of data scientists in developing predictive models to forecast customer behavior, resulting in a 20% increase in customer retention.",
                        "Designed and implemented machine learning algorithms to detect fraudulent transactions, reducing financial losses by 30%.",
                        "Collaborated with cross-functional teams to identify data-driven opportunities and provide actionable insights.",
                        "Utilized advanced statistical techniques to conduct A/B testing, improving the effectiveness of marketing campaigns by 15%.",
                    ],
                ],
                from: "June 2020",
                to: "Present",
            },
            {
                jobTitle: "Data Scientist",
                company: "ABC Inc., [City, State]",
                desc: [
                    [
                        "Analyzed large datasets to identify trends, patterns, and insights, supporting strategic business decisions.",
                        "Developed and deployed machine learning models to optimize supply chain operations, leading to a 25% reduction in costs.",
                        "Created interactive dashboards and reports using Tableau to communicate findings to stakeholders.",
                        "Conducted sentiment analysis on customer reviews to improve product features and customer satisfaction.",
                    ],
                ],
                from: "May 2017",
                to: "May 2020",
            },
        ],
    },
    skills: {
        title: "Skill",
        skills: ["HTML", "CSS", "Javascript", "React", "Webpack"]
    },
    summary: {
        title: "Summary",
        desc: "Results-driven Data Scientist with over 5 years of experience in data analysis, machine learning, and statistical modeling. Proven track record of leveraging data to drive business solutions, optimize operations, and enhance customer experiences. Adept at using advanced analytical techniques and tools to extract meaningful insights from complex data sets."
    }
}
