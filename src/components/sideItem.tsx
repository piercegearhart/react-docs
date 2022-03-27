import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

type Props = {
    path: string;
    routes?: any;
}

const Item: React.FC<Props> = ({path, routes, children}) => {
    const route = useLocation()
    const classes = path === route.pathname ? 'border-l-4 border-sky-500 text-lg text-zinc-800 dark:text-zinc-100 ' : 'border-l-4 border-transparent text-lg text-zinc-800 dark:text-zinc-300 hover:dark:text-zinc-100 '

    const [showRoutes, setShowRoutes] = useState(path === route.pathname)
    
    return (
        <li className='py-1'>
            {!routes ?
                <Link to={path} className={classes + 'py-1 pl-4 font-medium flex items-center select-none'}>
                    {children}
                </Link>
            :
                <>
                    <p className={classes + 'py-1 pl-4 font-medium flex items-center cursor-pointer select-none'} onClick={() => showRoutes === true ? setShowRoutes(false) : setShowRoutes(true)}>
                        {children}
                        {showRoutes === true ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        }
                    </p>
                    {showRoutes === true &&
                        <div className='mt-1'>
                            {routes.map((route:any) => (
                                <p className='py-1'>
                                    <HashLink to={path + route.path} className='pl-8 dark:text-zinc-300'>{route.name}</HashLink>
                                </p>
                            ))}
                        </div>
                    }
                </>
            }
        </li>
    )
}

export default Item