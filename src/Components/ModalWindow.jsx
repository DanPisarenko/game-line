export default function ModalWindow({ show, onCloseButtonClick, linkImg }){

    if (!show) {
        return null;
      }    

    return(
        <div className="modal-wrapper" onClick={onCloseButtonClick}>
            <div className="modal" >
            <button className="modal_btn" onClick={onCloseButtonClick}>X</button>

                {/* <div className="body">Click on the close button to close the modal.</div> */}
                <img src={linkImg} alt="" width={800}/>
                <div className="footer">
                </div>
            </div>
      </div>
    )
}

