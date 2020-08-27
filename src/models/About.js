import React from "react"
import {Heading, Content, Work, Education, Skills} from "resume-react";
import {makeStyles} from "@material-ui/core/styles";


const exampleStyles = makeStyles({
    resume: {
        padding: "32px",
        "& > :not(:first-child)": {
            paddingTop: "8px",
        },
        "& > :not(:last-child)": {
            borderBottom: "solid 1px #CFCFCF",
            paddingBottom: "8px",
        },
    },
});


export default function About({props}) {
    const classes = exampleStyles();

    return (
        <div className={classes.resume}>
            <h1>Resume</h1>
            <Heading
                name="Vitalii Adler"
                title="Software Engineer"
                // email="adler.vitalii@gmail.com"
                // phone="Phone - 0584830390"
                location={{
                    address: " ",
                    city: "Haifa",
                    region: " ",
                    postalCode: " ",
                    countryCode: "Israel"
                }}
            />
            <Content title="SUMMARY">
                <span>I am a software developer with 3 years of experience. Focused on the front-end development using cutting-edge technologies. Highly motivated team player with "out of the box" thinking! Worked in multinational and geographically distributed teams. </span>
            </Content>
            <Content title="SKILLS">
                <Skills
                    name="Technologies and tools implemented"
                    level="prof"
                    keywords={[
                        "Java Core",
                        "Java Spring Framework",
                        "Java Spring Boot",
                        "Spring Security",
                        "JPA",
                        "Hibernate",
                        "Spring Data",
                        "JUnit Tests",
                        "Node.js / Express"
                    ]}
                />
                <Skills
                    name="FrontEnd Technologies:"
                    level="prof"
                    keywords={[
                        "Responsive Web Design with HTML5/CSS3/Javascript",
                        "Bootstrap", "React", "React-REDUX", "React-HOOKS"
                    ]}
                />
                <Skills
                    name="BackEnd Technologies:"
                    level="prof"
                    keywords={[
                        "API's", "Java", "Java", "Spring Framework", "Node.js / Express", "OOP"
                    ]}
                />
                <Skills
                    name="Databases"
                    level="prof"
                    keywords={[
                        "MySQL", "MongoDB"
                    ]}
                />
                <Skills
                    name="Tools"
                    level="prof"
                    keywords={[
                        "Git", "NPM", "FireBase"
                    ]}
                />
            </Content>
            <Content title="CERT">
                <span>Feb 2020 Udemy, Express.JS</span>
                <span>Feb 2020 Udemy, React-Redux Professional Development</span>
            </Content>
            <Content title="EXPERIENCE">
                <Work
                    name="Otisor LTD, Haifa IL"
                    position="Full-Stack Developer "
                    startDate="2018-09-01"
                    highlights={[
                        "- Designed and developed Java/J2EE/JS applications. Used most popular frameworks and design patterns.",
                        "- Project - Car Rental Service:",
                        "- Developed controllers, services logic and data structure for storing in DB on Server side.",
                        "- Participating in design and development front-end side.",
                        "- Tools (Swagger, Java, Spring Security, Spring Data, Spring Cloud, MongoDB, JavaScript, CSS, React, Bootstrap)"
                    ]}
                />
                <Work
                    name="Megapolis Invest LTD"
                    position="IT Specialist"
                    startDate="2016-03-01"
                    endDate="2018-05-01"
                    highlights={[
                        "Remote technical support for company customers",
                        "Setting up computers and office equipment",
                        "Troubleshooting and support Office 2016",
                        "Troubleshooting and support operating systems (MacOS, Windows OS)",
                        "Manual Software Testing",
                        "Support company server and network",
                        "Writing Support Documentation",
                        "Manual testing of web interface of Internet site.",
                    ]}
                />

                <Work
                    name="IT specialist Baltic-Tour-Service LTD "
                    position="IT Specialist"
                    startDate="2014-06-01"
                    endDate="2016-10-01"
                    highlights={[
                        "Setting up computers, testing, detection and troubleshooting of computers and copying equipment. Installation and configuration of programs and software",
                        "Assistance in the selection of software required to meet the needs of the company."
                    ]}
                />
            </Content>
            <Content title="EDUCATION">
                <Education
                    institution="High School of Computer Technologies, Russia"
                    area="Computer Science"
                    studyType="Graduated"
                    startDate="1994-09-01"
                    endDate="1999-06-01"
                    gpa="4.0"
                    courses={[
                        " "
                    ]}
                />

                <Education
                    institution="Tel-Ran Education center of Computer science, Haifa"
                    area="Full Stack Java Developer "
                    studyType="Graduated"
                    startDate="2018-06-01"
                    endDate="2019-12-01"
                    courses={[
                        "Java+Spring Framework",
                        "RDBS, NoSql",
                        "Javascript",
                        "React+Redux"
                    ]}
                />

                <Education
                    institution="Udemy, online courses (Front End Development)"
                    area="Front End Development"
                    studyType="Graduated"
                    startDate="2020-02-01"
                    endDate="2020-08-01"
                    courses={[
                        "React-Redux Professional Development",
                        "RExpress.JS"
                    ]}
                />
            </Content>
            <Content title="LANGUAGES">
                <span><strong>English, Hebrew, Russian</strong></span>
            </Content>
        </div>

    )
}
