import "../main.css"
import kosmonaft from "../assets/kosmonaft.png"
import Reviews from "./Reviews"
export default function Main(){



    return(
        <div className="main">
            <div className="main-hdr_img">
                <div className="text_info_hdr">
                <h2 className="main-h2-text">Добро пожаловать на сайт Game-Line</h2>
                <p className="helper_line__descr">На данной странице можно посмотреть рецензии, написанные пользователями данного портала.</p>

                </div>
            <img src={kosmonaft} alt="космонафт" width={320} />
            </div>
            <div className="main_wrapper">
            <Reviews/>
            </div>
        </div>
    )

}