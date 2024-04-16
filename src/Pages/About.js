
export default function About() {
 let styleText = {
    width: "512px",
    fontSize: "18pt"
    
 }
 let styleAbout = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'
 }
    return(
        <div className="about" style={styleAbout}>
            <div className="about-wrapper" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center", width: "80%", backgroundColor:"white", paddingBottom: "256px"}}>
                <h2 className="about_hdr_text">О нас</h2>
                <p className="about_text" style={styleText}>Данный проект создается в учебных целях и содержит в себе информацию об играх, включающие в себя полную информацию об играх, обзоры/новости, рецензии, "Фанфики", патчи и моды к игре, комментрарии к игре. Данный сайт будет дорабатываться в дальнейшем.</p>
                <img src="https://i.pinimg.com/originals/c7/ed/85/c7ed850867a9d4481c3300f4aa4701a7.jpg" alt="room" width="480px"/>
            </div>
           
        </div>
    )
}