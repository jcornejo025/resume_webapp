export default function AboutMe({ isVisible }) {
    const statusText = "Online";
    const className = ["about-me-window", !isVisible && "hidden"]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={className} aria-hidden={!isVisible}>
            <div className="about-me-navbar">
                <p className="title">About Me</p>
                <div className="header-btns">
                    <button type="button" className="winbtn" aria-label="close">✕</button>
                </div>
            </div>
            <div className="profile-block">
                <div className="profile-pic">
                    <img src="/images/avatar-sprite.png"
                    alt="Avatar Sprite"
                    className="pixel-img"
                    width={150}
                    height={150}
                    loading="lazy"
                    decoding="async" />
                </div>
                <div className="profile-text">
                    <p>Jacky C.</p>
                    <div className="status-container" role="status" aria-live="polite">
                        <div className="status-indicator" aria-hidden="true"></div>
                        <p>{statusText}</p>
                    </div>
                </div>
            </div>
            <div className="about-me-content">
                <div className="retro-window">
                    <div className="retro-titlebar">
                        <span className="retro-title">VENTABROWSER</span>
                        <div className="retro-controls">
                            <button type="button" className="retro-control-btn" aria-label="minimize">-</button>
                            <button type="button" className="retro-control-btn" aria-label="maximize">[]</button>
                            <button type="button" className="retro-control-btn" aria-label="close">x</button>
                        </div>
                    </div>
                    <div className="retro-menubar">
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Go</span>
                        <span>Favorites</span>
                        <span>Help</span>
                    </div>
                    <div className="retro-content">
                        <h2>AMEWAVE</h2>
                        <p>Add your retro window content here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
