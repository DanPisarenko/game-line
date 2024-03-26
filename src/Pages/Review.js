import "../gameInfo.css"

export default function Review(){

    return(
        <div className="review">
            <div className="review__main-img">
                <h2 className="review__main-img_h2">Ивестна дата Выхода GTA 6</h2>
                <img className="main__reviews_list_item-img" src="https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg" alt="Gta6" width="512"/>

            </div>
            <div className="review__main_txtm">
                <div className="review__main_txtm_sets">
                    <h4 className="review__main_txtm_date">Дата: 02/02/2024</h4>
                    <h4 className="review__main_txtm_category">Новость ДНЯ</h4>
                </div>
                <div className="review__main_txtm_descr" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <p className="review__main_txtm_descr_p" style={{width: "800px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec fermentum tellus, id iaculis metus. Maecenas tincidunt et ex ac accumsan. Ut sollicitudin, tortor vitae ornare maximus, elit libero iaculis arcu, sed imperdiet mauris tellus sed turpis. Nullam finibus tortor quis est egestas, sed tristique justo porta. Duis dictum pulvinar sem, a efficitur ex lobortis eu. Donec ornare vehicula dui at fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt magna eget ultricies tincidunt. Maecenas nec vestibulum ex. Nullam faucibus, arcu at rhoncus aliquet, neque nunc mollis turpis, eget porttitor augue nisl id libero.
Quisque sodales vel velit ac eleifend. Suspendisse tincidunt sem id quam pellentesque vulputate. Pellentesque nec arcu libero. Donec eu aliquam nibh. Proin luctus ornare ligula, ac fringilla erat pretium eget. Curabitur lacinia metus velit, eu ultricies mauris imperdiet ut. Mauris dignissim tortor sit amet mi sagittis, quis convallis mi posuere.
Duis a dolor felis. Ut faucibus rutrum faucibus. Maecenas nec auctor nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id ligula lectus. Aliquam vel orci velit. Sed nec ipsum volutpat, tempus lacus et, malesuada enim. Integer congue, nunc non pretium pulvinar, nibh sapien posuere nunc, ut tempus mauris arcu ut augue. Praesent porta condimentum interdum. Mauris eros nisi, congue et nisi a, consectetur tincidunt ligula.
Suspendisse at tempus justo. Maecenas ac condimentum libero. Vivamus ornare ex ex, sit amet condimentum purus lobortis eu. Nam tempus bibendum tellus vitae mollis. Quisque ornare felis tincidunt mi posuere, a varius augue pharetra. Ut faucibus et purus interdum facilisis. Ut velit risus, vulputate quis faucibus id, faucibus vitae nisi. Maecenas rutrum lectus vitae metus dignissim efficitur. Vivamus scelerisque massa magna, quis porttitor elit lobortis sit amet. Donec ac auctor odio. Sed ultricies quam augue.
Donec ac porta dolor. Pellentesque facilisis sem vitae mattis feugiat. Mauris sagittis ex aliquet, faucibus leo vulputate, fermentum eros. Etiam auctor odio dolor, vel eleifend justo blandit dictum. Fusce ornare vitae quam sed porta. In hac habitasse platea dictumst. Sed dictum lorem eget felis porttitor finibus. Sed eu ligula orci. In nec ante metus. Suspendisse rhoncus ultrices dui eu ultricies.
                    </p>
                    <a href="#">Ссылка на сайт</a>
                    <a href="#">Ссылка на сайт</a>
                    <h3>Рейтинг: 4.2 из 5</h3>
                    <div className="game-Info_comments">
                    <h3>Комментарии</h3>
                    <form className="game-Info_comments_form">
                        <input type="text" placeholder="Оставить комментарий"></input>
                        <input type="submit" placeholder="отправить"></input>
                    </form>
                    <div className="game-Info_comments_list">
                        <div className="game-Info_comments_list_item">
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-38.jpg" width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">Jack Garry</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    Великолепная игра!!!
                                </p>
                            </div>
                        </div>
                        <div className="game-Info_comments_list_item">
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-38.jpg" width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">Jack Garry</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    Великолепная игра!!!
                                </p>
                            </div>
                        </div>
                        <div className="game-Info_comments_list_item">
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-38.jpg" width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">Jack Garry</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    Великолепная игра!!!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}