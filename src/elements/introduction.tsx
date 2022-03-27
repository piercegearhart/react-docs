// Sections
import { Codeblock, Simplecode, Text, Title } from '../components/sections'
// Components
import Content from '../components/content'
import Container from '../components/container'
// React Router
import { Link } from 'react-router-dom'

const Introduction = () => {
    return (
        <Content>
            <Container>
                <section className='mb-16'>
                    <Title size='lg'>Introduction</Title>
                    <Text spacing={false}>
                        Thanks for installing the React Documentation Template. Below you will find information on what all is included in this template, along with what options are available for you 
                        to customize each page. If you have any questions or need help, contact me on discord <Simplecode>Pierce#0001</Simplecode>
                    </Text>
                </section>
                <section className='mb-16'>
                    <Title size='lg'>How to install...</Title>
                    <Text spacing={true}>
                        Since this is a react project, you must have nodejs and npm installed on your windows computer. Once installed, using windows command prompt, cd into the directory containing the 
                        documentation project and run the following commands:
                    </Text>
                    <Codeblock spacing={true}>
                        npm i<br />
                        npm start
                    </Codeblock>
                    <Text spacing={false}>
                        The first command will install all of the dependencies to the project, which is needed for it to work. The second command will build the project
                        to a production version. Remember, the version you currently have is fully development only, and the second command is necessary to view this website on any sort of domain.
                    </Text>
                </section>
                <section className='mb-16'>
                    <Title size='lg'>How to upload to domain...</Title>
                    <Text spacing={true}>
                        Actually uploading the project to a domain is super simple, start by running the following command:
                    </Text>
                    <Codeblock spacing={true}>
                        npm run-script build
                    </Codeblock>
                    <Text spacing={true}>
                        Running that command will build the project to a production version. Remember, the version you currently have is fully development only, so this is necessary to view the
                        documentation on an actual domain/webserver.
                    </Text>
                    <Text spacing={false}>
                        Once you have your production files, simply setup your webserver like you would any other website, and upload the files inside of the new <Simplecode>Build</Simplecode> folder.
                    </Text>
                </section>
                <section>
                    <Text spacing={false}>
                        ... and you are complete! Your documenation is now up and running, although, we suggest you first <Link to='/customize' className='dark:text-zinc-100 hover:text-sky-500 dark:hover:text-sky-500 underline'>customize</Link> your documenation.
                    </Text>
                </section>
            </Container>
        </Content>
    )
}

export default Introduction