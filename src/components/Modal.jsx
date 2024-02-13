import { forwardRef,useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal= forwardRef(
    function Modal({children, buttonCaption, successMessage}, ref){
        const dialog = useRef();
        useImperativeHandle(ref, () => ({
            
                open (){
                    dialog.current.showModal();
                }
            
        }));
        return(
            createPortal
            (<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 roundede-md shadow-md">
                {children}
                {successMessage && <p>{successMessage}</p>}
                <form method ="dialog" className="mt-4 text-right">
                    <Button>{buttonCaption}</Button>
                </form>
            </dialog>, document.getElementById('modal-root'))
        );
    }
);
export default Modal;