// Components
import Theme from './theme'
import Container from './container'
// Sidebar State
import state from './sidebarState'

const topNav = () => {
    return (
        <header className='py-4 w-full fixed bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-600'>
            <Container>
                <div className='grid grid-cols-4 items-center'>
                    <div className='brand hidden lg:block'>
                        <h1 className='text-xl text-zinc-900 dark:text-zinc-100 font-medium'>Documentation Template</h1>
                    </div>
                    <div className='mobile flex items-center block lg:hidden col-span-1'>
                        <div className='mobile'>
                            <div className='mobile-icon'>
                                <span onClick={() => state.showSideBar === true ? state.setShowSideBar(false) : state.setShowSideBar(true)} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-zinc-800 dark:text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='search flex items-center justify-center col-span-3 lg:col-span-2 text-center'>
                        <input type="text" className='w-full lg:w-3/5 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 focus:border-zinc-400 dark:focus:border-zinc-400 text-zinc-600 dark:text-zinc-300 px-5 py-2 rounded-md outline-none' placeholder='Search...' />
                        <div className='theme block lg:hidden ml-5'>
                            <Theme />
                        </div>
                    </div>
                    <div className='theme hidden lg:block ml-auto'>
                        <Theme />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default topNav