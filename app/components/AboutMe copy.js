export default function AboutMe({ isVisible }) {
    const statusText = "Online";
    const className = ["about-me-content", !isVisible && "hidden"]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={className} aria-hidden={!isVisible}>
           <div className="retro-window">
            <span className="retro-title">About me</span>
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
                <h2>About me</h2>
                <p>Add quick introduction to me</p>
           </div>
        </div>
    )
}
