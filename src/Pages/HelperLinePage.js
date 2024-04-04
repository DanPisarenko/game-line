import '../App.css'
export default function HelperLinePage(){



    return(
        <div className="helper_line_page">
            <div className='helper_line_page_quest'>
                <h4 className="helper_line__best_qa_item_theme">Автор: John1337</h4>
                <h4 className="helper_line__best_qa_item_theme">Старые игры</h4>
                <h3 className="helper_line__best_qa_item_title">Что лучше эмулятор старого ПК или реальный ретро-ПК</h3>
            </div>
            <div className='helper_line_page_quest_answers'>
                <h2 className='helper_line_page_quest_answers_title'>Ответы</h2>
                <div className='helper_line_page_quest_answers_list'>
                    <div className='helper_line_page_quest_answers_item'>
                        <h4 className="helper_line__best_qa_item_theme">Автор: Alex98</h4>
                        <p className="helper_line__best_qa_item_title">По поводу эмуляторов, на некоторых компьютерах даные программы могут барахлить из-за характеристик реального ПК, на реальном ретро-ПК может по разному, некоторые комплектующие могут выйти из строя, в основном жесткий диск может выйти из строя</p>
                    </div>
                </div>
            </div>
        </div>
    )
}