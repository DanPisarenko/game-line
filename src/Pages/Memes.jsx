import React from "react"
import "../App.css"

export default function Memes(){

    return(
        <div className="memes">
            <h2>Мемы по играм 😆</h2>
            <div className="main_info">
                <h2 className="bg_text">В данном разделе публикуются мемы по игровой тематике.</h2>
            </div>
            <div className="meme_of_month">
                <div className="meme_item">
                    <img className="meme_item_image" src="https://otvet.imgsmail.ru/download/195456552_80a613f238eb39542bda6be2a45f04ea_800.jpg" alt="meme of month" width={512}/>
                    <div className="meme_item_text">
                        <h2 className="meme_item_text_name">Алмазик</h2>
                        <h3 className="meme_item_text_item_game">Игра: Minecraft</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


// https://pic.rutubelist.ru/userappearance/be/94/be947cfac1050bde325ea49ddebfcc38.jpeg