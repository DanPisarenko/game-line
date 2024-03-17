import "../gameInfo.css"
export default function GameInfo() {
    // let ftst = {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     paddingLeft: "32px",
    //     paddingRight: "32px",
    //     backgroundColor: "rgb(255, 221, 158)"
    // }
    return (
        <div className="game-info">
            <div className="game-info_main">
                <div className="game-info_main__left">
                    <h2>Hogwarts Legacy</h2>
                    <img src="https://www.digiseller.ru/preview/928496/p1_3740137_6c8e439a.jpg" alt="uuu" width='400'/>
                    <div className="rus_avail">
                        <p><b>STEAM</b>: Недоступно в РФ</p>
                        <p><b>PS Store</b>: Недоступно в РФ</p>
                        <p><b>XBox Store</b>: Недоступно в РФ</p>
                    </div>
                </div>
                <div className="game-info_main__right">
                    <div className="info_short">
<p>Жанр: Action</p>
<p>Год выхода: 2023</p>
                    </div>
                    <div className="sys_req">
                        <h3>Минимальные системные требования</h3>
                        <p>Процессор: Intel Core i5-8400</p>
                        <p>ОЗУ: 8 Гб</p>
                        <p>Видеокарта: NVIDIA GeForce GTX 1070</p>
                        <p>ОС: Windows 10 x64 или новее</p>
                        <p>Свободное место: 85 Гб, желательно SSD.</p>
                        <button>Свертить совместимость</button>
                    </div>
                </div>
            </div>
            <div className="game-Info_descr">
                <p className="game-Info_descr_text">Компьютерная игра в жанре action/RPG, разработанная американской студией Avalanche Software и изданная Warner Bros. Games под лейблом Portkey Games. Действие игры разворачивается в фэнтезийной вселенной «Гарри Поттера» в XIX веке. Изначально выход игры на платформах Windows, PlayStation 4, PlayStation 5, Xbox One и Xbox Series X/S был запланирован на 2021 год, но в январе 2021 года разработчики объявили о переносе даты выхода на 2022 год. 15 декабря разработчики анонсировали дату выхода игры - 10 февраля 2023 года, для консолей текущего поколения и ПК. Релиз игры для консолей прошлого поколения изначально должен был состояться 4 апреля 2023 года, но позднее был перенесён на 5 мая того же года.</p>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BtyBjOW8sGY?si=kBVnI2gvwvFM8MUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}