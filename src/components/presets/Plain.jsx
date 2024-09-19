import {Section, Who, Experience, Education, Summary, Skills} from '../sections'

export default ({ who, education, experience, skills, summary}) => {
    return <>
        <Who {...who} />
        <Experience {...experience} />
        <Education {...education} />
        <Summary {...summary} />
        <Skills {...skills} />
    </>
}