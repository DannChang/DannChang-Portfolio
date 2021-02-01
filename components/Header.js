import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Dan Chang</span>, UX Engineer
            </h1>
            <i>"Learning is rooted in repetition and convexity, meaning that the reading of a single text twice is more profitable than reading two different things once."</i>
            <p>- Nassim Nicholas Taleb in Skin in the Game</p>
        </div>
    )
}

export default Header