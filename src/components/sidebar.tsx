// Components
import Item from './sideItem'
import Routes from '../routes'
// Sidebar State
import state from './sidebarState'

const SideBar = () => {
    
    // window.addEventListener('resize', function(event:any) {
    //     if(event.currentTarget.innerWidth <= 1023) {
    //         state.setShowSideBar(false)
    //     } else {
    //         state.setShowSideBar(true)
    //     }
    // }, true)

    return (
        // <>
        //     {state.SidebarStateshowSideBar &&
        //         <div className='hidden lg:block h-full w-full lg:w-60 py-4 bg-zinc-100 dark:bg-zinc-800 border-r fixed border-zinc-300 dark:border-zinc-500'>
        //             <ul>
        //                 {Routes.map(route => (
        //                     <Item key={route.key} path={route.path} routes={route.subRoutes}>
        //                         {route.name}
        //                     </Item>
        //                 ))}
        //             </ul>
        //         </div>
        //     }
        // </>
        <div className='hidden lg:block h-full w-full lg:w-60 py-4 bg-zinc-100 dark:bg-zinc-800 border-r fixed z-10 border-zinc-300 dark:border-zinc-500'>
            <ul>
                {Routes.map(route => (
                    <Item key={route.key} path={route.path} routes={route.subRoutes}>
                        {route.name}
                    </Item>
                ))}
            </ul>
        </div>
    )
}

export default SideBar