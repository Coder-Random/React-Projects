import "../App.css";

interface ConfirmProps {
    show: boolean;
    onBoost: () => void;
    onHome: () => void;
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}
    
const Confirm = (props: ConfirmProps) => {

    return (
        <div className="Confirm-Container" style={{ display: props.show ? '' : 'none' }}>
            <div className="Confirm-blur">
            <div className="Confirm-Background">
                <p className="Confirm-Text">{props.message ?? 'Confirm Purchase?'}</p>
                <div className="Confirm-Button-hover">
                <button className="Confirm-Button" onClick={props.onConfirm}>
                    Confirm
                </button>
                <button className="Cancel-Accept-Button" onClick={props.onCancel}>
                    Cancel
                </button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Confirm;