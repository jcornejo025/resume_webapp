export default function AboutMe({isVisible}) {
    const cls = `about-me-window ${isVisible ? "" : "hidden"}`;

    return (
        <div id="about-me-window"
        className={cls} aria-hidden={!isVisible}>
            <div id="about-me-navbar"> 
                <p className="title">About Me</p>
                <div id="header-btns">
                    <button className="winbtn" aria-label="minimize">✕</button>
                </div>
            </div>
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
            <div id="about-me-content">

            </div>
        </div>
    )
}
