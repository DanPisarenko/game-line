import "../main.css"
export default function Reviews(){

    let base = [
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },
    {
        'id': 1,
        'title': 'Ивестна дата Выхода GTA 6',
        'img': "https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg",
        'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    },

]

    return (
        <div className="main__reviews">
        <h2>Недавние обзоры</h2>
        <div className="main__reviews_list">
            {base.map((e) => {
                return(
                    <div className="main__reviews_list_item" key={e.id}  onClick={() => window.location.href = "/review/1"}>
                        <img className="main__reviews_list_item-img" src={e.img} alt={e.title} width="320"/>
                        <div className="main__reviews_list_item-div">
                            <h3>{e.title}</h3>
                            <p>{e.short_descr}</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
</div>
    )

}
