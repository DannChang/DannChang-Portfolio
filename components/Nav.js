import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import DarkModeSwitch from './DarkModeSwitch'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <DarkModeSwitch />
                </li>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href="https://github.com/DannChang">Github</Link>
                </li>
                {/* <li>
                    <Link href='/about'>About</Link>
                </li> */}
            </ul>
        </nav>
    )
}


export default Nav
