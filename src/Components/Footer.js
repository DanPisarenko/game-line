
export default function Footer() {
    let ftst = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "32px",
        paddingRight: "32px",
        backgroundColor: "rgb(255, 221, 158)"
    }
    return (
        <div className="footer" style={ftst}>
            <h2 className="footer-left">
                2024 Dan Pisarenko
            </h2>
            <p className="footer-right">
                Game-Line TG VK
            </p>
        </div>
    )
}