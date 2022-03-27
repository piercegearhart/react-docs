// Sections
import { Alert, Codeblock, Simplecode, Text, Title, Spacing } from '../components/sections'
// Components
import Content from '../components/content'
import Container from '../components/container'

const Customize = () => {
    return (
        <Content>
            <Container>
                <Alert theme='warning'>
                    Editing this documenation requires basic knowledge of react/jsx. If you cant figure it out, please contact me so I can provide you with the correct assistance.
                </Alert>
                <section id='editing-elements' className='mb-16'>
                    <Title size='lg'>Editing Elements</Title>
                    <div className='mb-16'>
                        <Text spacing={false}>
                            Editing the elements of the documentation is super easy to do. These include the topbar, sidebar, and other important components.
                        </Text>
                    </div>
                    <div className='mb-16'>
                        <Title size='sm'>Topbar:</Title>
                        <Text spacing={true}>
                            We don't recommend editing much of the topbar, but it is important to update the navbar to your branding. Navigate to the following file:
                        </Text>
                        <Codeblock spacing={true}>
                            /src/components/topNav.tsx
                        </Codeblock>
                        <Text spacing={true}>
                            Open the file in your favorite code editor, and on the following line change <Simplecode>Documentation Template</Simplecode> to whatever you'd like:
                        </Text>
                        <Codeblock spacing={false}>
                            Line 10: {
                                "<h1 className='text-xl text-zinc-900 dark:text-zinc-100 font-medium'>Documentation Template</h1>"
                            }
                        </Codeblock>
                    </div>
                    <div className='mb-16'>
                        <Title size='sm'>Routes:</Title>
                        <Text spacing={true}>
                            It's important that you can edit the routes or pages of the documenation. These routes are automatically displayed on the sidebar. You can edit routes in the following file:
                        </Text>
                        <Codeblock spacing={true}>
                            /src/routes.tsx
                        </Codeblock>
                        <Text spacing={true}>
                            On <Simplecode>Line 8</Simplecode>, you will find the routes variable. You can edit any of the routes inside. Here is an example of a specific route:
                        </Text>
                        <Codeblock spacing={true}>
                            { '{' }
                                <br />
                                <span><Spacing amount={3} />name: 'Introduction',</span><br />
                                <span><Spacing amount={3} />path: '/introduction',</span><br />
                                <span><Spacing amount={3} />key: generateKey(),</span><br />
                                <span><Spacing amount={3} />element: Introduction</span><br />
                            { '},' }
                        </Codeblock>
                        <Text spacing={false}>
                            This is the default route for the documenation. Editing the  <Simplecode>name</Simplecode> field will change the text this route displays on the sidebar, 
                            the <Simplecode>path</Simplecode> field changes what the ending url is to view the route, and the <Simplecode>element</Simplecode> field attaches the page file to the route.
                            You wont need to touch <Simplecode>key</Simplecode> ever, as its a default necessity for the routes to function correctly.
                        </Text>
                    </div>
                </section>
                <section id='adding-pages' className='mb-16'>
                    <Title size='lg'>Adding a new Page</Title>
                    <Text spacing={true}>
                        Lets make your documenation show exactly what you need, to do this you'll need to add multiple new pages yourself. Lets start by creating a brand new file in this directory:
                    </Text>
                    <Codeblock spacing={true}>
                        /src/elements/
                    </Codeblock>
                    <Text spacing={true}>
                        You can name the file whatever you wish, preferably something very close to what the page name is, so its easy to find and edit later down the line. Its important that when naming
                        the file, you MUST end it with .tsx, adding .tsx tells the system what file type it is, and it will allow everything to work as it should. Copy and paste the following code to your file:
                    </Text>
                    <Codeblock spacing={true}>
                        // Sections<br />
                        import {'{'} Alert, Codeblock, Simplecode, Text, Title {'}'} from '../components/sections'<br />
                        // Components<br />
                        import Content from '../components/content'<br />
                        import Container from '../components/container'<br /><br />
                        {'const FunctionName = () => {'}<br />
                        <span><Spacing amount={3} />return (</span><br />
                        <span><Spacing amount={6} />{"<div className='py-10 ml-80 mr-36'>"}</span><br />
                        <span><Spacing amount={9} />{"<Container>"}</span><br />
                        <span><Spacing amount={12} />{"<section className='mb-16'>"}</span><br />
                        <span><Spacing amount={15} />// Code here</span><br />
                        <span><Spacing amount={12} />{"</section>"}</span><br />
                        <span><Spacing amount={9} />{"</Container>"}</span><br />
                        <span><Spacing amount={6} />{'</div>'}</span><br />
                        <span><Spacing amount={3} />)</span><br />
                        {'}'}<br /><br />
                        export default FunctionName
                    </Codeblock>
                    <Text spacing={true}>
                        You can change everywhere it says <Simplecode>FunctionName</Simplecode> to the same name as the file, or something similar. Once the file is saved, navigate back to your routes 
                        file, and paste the following code at the top:
                    </Text>
                    <Codeblock spacing={true}>
                        import FunctionName from './elements/filename.tsx'
                    </Codeblock>
                    <Text spacing={false}>
                        Replace where it says <Simplecode>FunctionName</Simplecode> with what you replaced it with in the file, and replace <Simplecode>filename</Simplecode> with what you named the file. 
                        Boom, you now have a new page! But... it has no content, scroll below to see how to add content to your new page.
                    </Text>
                </section>
                <section id='content-sections' className='mb-16'>
                    <Title size='lg'>Content Sections</Title>
                    <div className='mb-16'>
                        <Text spacing={false}>
                            Below you will see all the components for different pieces of content you can display on your page. Simply copy and paste what element you'd like to use, and customize it.
                        </Text>
                    </div>
                    <div className='mb-16'>
                        <div className='header mb-4'>
                            <Title size='sm'>Title Component:</Title>
                        </div>
                        <Text spacing={true}>
                            This allows you to put a heading title for a specific section on the page, view the code below for title sections:
                        </Text>
                        <Codeblock spacing={true}>
                            {"<Title size='lg'>"}<br />
                            <span><Spacing amount={3} />// Text Here</span><br />
                            {'</Title>'}
                        </Codeblock>
                        <Text spacing={false}>
                            Simply change the <Simplecode>// Text Here</Simplecode> to the text you'd like to be displayed. The title component has one attribute, size. It accepts 2 parameters, 
                            <Simplecode>sm, lg</Simplecode>. <Simplecode>lg</Simplecode> will make the texter larger, and <Simplecode>sm</Simplecode> will make the text smaller. For example, the text 
                            above that says <Simplecode>Title Component:</Simplecode> is displayed using the title section code with the sm parameter.
                        </Text>
                    </div>
                    <div className='mb-16'>
                        <Title size='sm'>Text Component:</Title>
                        <Text spacing={true}>
                            This allows you to put regular text on the page, view the code below for text sections:
                        </Text>
                        <Codeblock spacing={true}>
                            {'<Text spacing={true}>'}<br />
                            <span><Spacing amount={3} />// Text Here</span><br />
                            {'</Text>'}
                        </Codeblock>
                        <Text spacing={false}>
                            Simply change the <Simplecode>// Text Here</Simplecode> to the text you'd like to be displayed. The component has a <Simplecode>spacing</Simplecode> attribute. It accepts 2
                            parameters, true and false. Setting it to true will add spacing to the bottom of the text, so components you put after it wont be touching. The text you're reading right now uses the
                            text component to be displayed.
                        </Text>
                    </div>
                    <div className='mb-16'>
                        <Title size='sm'>Alert Component:</Title>
                        <Text spacing={true}>
                            The alert component shows a colored box on the screen with text of your choice, usually used for important text. View the alert code below:
                        </Text>
                        <Codeblock spacing={true}>
                            {"<Alert theme='success' spacing={true}>"}<br />
                            <span><Spacing amount={3} />// Text Here</span><br />
                            {'</Alert>'}
                        </Codeblock>
                        <Text spacing={false}>
                            Simply change the <Simplecode>// Text Here</Simplecode> to the text you'd like to be displayed. The component has a <Simplecode>theme</Simplecode> and 
                            <Simplecode>spacing</Simplecode> attribute. The theme attribute accepts multiple parameters, the parameters it accepts are <Simplecode>success, error, info, warning</Simplecode>.
                            The parameter names are pretty simple, but success shows green, error shows red, info shows blue, and warning shows yellow. The spacing attribute accepts 2 parameters, 
                            true and false. Setting it to true will add spacing to the bottom of the alert, so components you put after it wont be touching. You can see an example of the alerts at the top of this page.
                        </Text>
                    </div>
                    <div className='mb-16'>
                        <Title size='sm'>Simple Code Component:</Title>
                        <Text spacing={true}>
                            This component will show your text with a lighter background. Usually used to make small text stand out inside of a normal text component. View the code below:
                        </Text>
                        <Codeblock spacing={true}>
                            {'<Simplecode>'}<br />
                            <span><Spacing amount={3} />// Text Here</span><br />
                            {'</Simplecode>'}
                        </Codeblock>
                        <Text spacing={false}>
                            Simply change the <Simplecode>// Text Here</Simplecode> to the text you'd like to be displayed. Using this component will look like: <Simplecode>this</Simplecode>
                        </Text>
                    </div>
                    <div className='mb-16'>
                        <Title size='sm'>Codeblock Component:</Title>
                        <Text spacing={true}>
                            The codeblock component is much like the simple code component, this is used to make important information stand out, but separate it from the
                            rest of the text on the page. Usually used for displaying code or commands, view the codeblock code below:
                        </Text>
                        <Codeblock spacing={true}>
                            {'<Codeblock spacing={true}>'}<br />
                            <span><Spacing amount={3} />// Text Here</span><br />
                            {'</Codeblock>'}
                        </Codeblock>
                        <Text spacing={true}>
                            Simply change the <Simplecode>// Text Here</Simplecode> to the text you'd like to be displayed. Below will be an example of what it looks like:
                        </Text>
                        <Codeblock spacing={false}>
                            The code block component looks like this!
                        </Codeblock>
                    </div>
                    <div>
                        <Title size='sm'>Spacing Component:</Title>
                        <Text spacing={true}>
                            Last, but surely not least, the spacing component. This is used add spacing/indentation to lines of text inside of a codeblock file. View the code for the spacing component below:
                        </Text>
                        <Codeblock spacing={true}>
                            {'<Spacing amount={3} />'}
                        </Codeblock>
                        <Text spacing={true}>
                            Changing the amount will increase the amount of space it adds. Usually we will do 3 for a normal sized indentation of code, but you can do whatever amount you wish.
                        </Text>
                    </div>
                </section>
                <section id='sidebar-dropdowns' className='mb-16'>
                    <Title size='lg'>Sidebar Dropdowns</Title>
                        <Text spacing={true}>
                            Sometimes your pages will need to have separated content, you can use our dropdown functionality to achieve this when creating your pages route. Instead of creating the route how
                            you normally would, paste this code for your route:
                        </Text>
                        <Codeblock spacing={true}>
                            { '{' }
                                <br />
                                <span className='ml-6'>name: 'Introduction',</span><br />
                                <span className='ml-6'>path: '/introduction',</span><br />
                                <span className='ml-6'>key: generateKey(),</span><br />
                                <span className='ml-6'>element: Introduction,</span><br />
                                <span className='ml-6'>subRoutes: [</span><br />
                                <span className='ml-12'>{ '{' }</span><br />
                                <span style={{marginLeft: '72px'}}>name: 'Subroute 1',</span><br />
                                <span style={{marginLeft: '72px'}}>path: '#subroute1',</span><br />
                                <span style={{marginLeft: '72px'}}>key: generateKey(),</span><br />
                                <span className='ml-12'>{ '},' }</span><br />
                                <span className='ml-6'>]</span><br />
                            { '},' }
                        </Codeblock>
                        <Text spacing={true}>
                            Using the code above, the website will automatically add the dropdown functionality to the sidebar. You can add as many subroutes as you'd like. As you can see, the main route
                            has a path attribute, and each subroute has a path attribute. The main route attribute must always start with a <Simplecode>/</Simplecode> and the subroute must always start with
                            a <Simplecode>#</Simplecode>. The reason for this, is each subroute will remain attached to the same file and route as the main route, but just have a trailing bit to the URL.
                            For example, the above code would produce <Simplecode>/introduction#subroute1</Simplecode>.
                        </Text>
                        <Text spacing={true}>
                            After adding all your subroutes to the main route, we will need to do a bit of work in the page file for it to work correctly as well. Instead of using the page code provided earlier,
                            use this code:
                        </Text>
                        <Codeblock spacing={true}>
                            // Components<br />
                            import Container from '../components/container'<br /><br />
                            {'const FunctionName = () => {'}<br />
                            <span style={{marginLeft: '24px'}}>return (</span><br />
                            <span style={{marginLeft: '48px'}}>{"<div className='py-10 ml-80 mr-36'>"}</span><br />
                            <span style={{marginLeft: '72px'}}>{"<Container>"}</span><br />
                            <span style={{marginLeft: '96px'}}>{"<section id='subroute1' className='mb-16'>"}</span><br />
                            <span style={{marginLeft: '120px'}}>// Code here</span><br />
                            <span style={{marginLeft: '96px'}}>{"</section>"}</span><br />
                            <span style={{marginLeft: '72px'}}>{"</Container>"}</span><br />
                            <span style={{marginLeft: '48px'}}>{'</div>'}</span><br />
                            <span style={{marginLeft: '24px'}}>)</span><br />
                            {'}'}<br /><br />
                            export default FunctionName
                        </Codeblock>
                        <Text spacing={false}>
                            As you can see, the section now has an ID with the parameter of <Simplecode>subroute1</Simplecode>. Each subroute will need to have its own section component, with an ID matching the
                            path you entered for the subroute in the route folder, which in this case was <Simplecode>#subroute1</Simplecode>. You do not need to include the <Simplecode>#</Simplecode>
                            in the ID attribute, it does it automatically. If you do not do this step correctly, clicking on the subroute will not work in the sidebar. Review this step and make sure you did it correctly.
                        </Text>
                </section>
                <section>
                    <Text spacing={false}>
                        ... and just like that, you are done. We recommend keeping your code as clean and separated as possible, so each time you are adding a new 'section' with a title, use the section
                        component as shown in the code you pasted when creating your new file.
                    </Text>
                </section>
            </Container>
        </Content>
    )
}

export default Customize