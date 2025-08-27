export default function AboutMe() {
    return (
        <div id="about-me-window">
            <div id="about-me-navbar"> About Me</div>
            <div id="profile-block">
                <div id="profile-pic">
                    <img src="/images/avatar-sprite.png"
                    alt="Avatar Sprite"
                    className="pixel-img"
                    width={150}
                    height={150}/>
                </div>
                <div id="profile-text">
                    <p>Jacky C.</p>
                    <div id="status-container">
                        <div id="status-indicator"></div>
                        <p>Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
