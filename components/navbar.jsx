import { useContext } from 'react'
import ColorModeToggler from './colormode-toggler'
import SideBarToggler from './sidebar-toggler'
import ThemeContext from './store/theme-context'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const { navbarItems } = config
  const router = useRouter()
  const themeCtx = useContext(ThemeContext)

  return (
    <div className='flex pt-1 text-xs lg:text-sm items-center'>
      <SideBarToggler />
      <Link href='/intro'>
        <a className='ml-4 mr-6'>
          <img
            src={themeCtx.theme === 'dark' ? '/codelabs_white.svg' : '/logo.svg'}
            alt='Code Labs'
            className='h-8 w-auto'
          />
        </a>
      </Link>
      <nav className='text-left text-xs lg:text-sm flex-auto space-x-1'>
        {navbarItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`border border-transparent hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-800
               dark:hover:text-purple-200 px-2 py-2 rounded-md font-medium hidden md:inline-block transition-colors ${
                 router.query.part && item.path.includes(router.query.part)
                   ? 'dark:bg-purple-700 dark:text-purple-100 bg-purple-200 text-purple-800'
                   : 'dark:text-gray-300 text-gray-600'
               }`}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </nav>
      <ColorModeToggler />
    </div>
  )
}

export default NavBar
