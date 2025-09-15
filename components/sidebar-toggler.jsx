import { Hamburger, Close } from './svg-icons'
import { useContext } from 'react'
import SideBarContext from './store/sidebar-context'
import { _ } from 'components/text'

const SideBarToggler = () => {
  const sideBarCtx = useContext(SideBarContext)

  return (
    <div className='flex ml-1 md:hidden'>
      <button
        onClick={sideBarCtx.toggleSideBar}
        title={_('Toggle mobile sidebar')}
        className='shadow bg-purple-100 text-purple-600 dark:text-purple-400 dark:bg-purple-800 hover:bg-purple-200 dark:hover:bg-purple-700 rounded p-1 focus:outline-none w-8 h-8 transition-colors'
      >
        {sideBarCtx.sideBar ? <Close /> : <Hamburger />}
      </button>
    </div>
  )
}

export default SideBarToggler
