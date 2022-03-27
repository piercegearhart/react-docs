import Introduction from './elements/introduction'
import Customize from './elements/customize'

const generateKey = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const routes = [
    {
        name: 'Introduction',
        path: '/introduction',
        key: generateKey(),
        element: Introduction
    },
    {
        name: 'Customization',
        path: '/customize',
        key: generateKey(),
        element: Customize,
        subRoutes: [
            {
                name: 'Editing Elements',
                path: '#editing-elements',
                key: generateKey(),
            },
            {
                name: 'Adding a new Page',
                path: '#adding-pages',
                key: generateKey(),
            },
            {
                name: 'Content Sections',
                path: '#content-sections',
                key: generateKey(),
            },
            {
                name: 'Sidebar Dropdowns',
                path: '#sidebar-dropdowns',
                key: generateKey(),
            },
        ]
    },
]

export default routes