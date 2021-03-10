import headerStyles from '../styles/Header.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <div className={utilStyles.centerImage}>
            <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
            />
            </div>
            <h1 className={headerStyles.title}>
                <span>Dan Chang</span>,
                <br></br>
                Front End Devloper
            </h1>
            <br></br>
            <i>"Learning is rooted in repetition and convexity, meaning that the reading of a single text twice is more profitable than reading two different things once."</i>
            <p>- Nassim Nicholas Taleb in Skin in the Game</p>
        </div>
    )
}

export default Header