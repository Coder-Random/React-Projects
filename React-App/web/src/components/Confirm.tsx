import "./App.css";

interface ConfirmProps {
    show: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}
    
const Confirm = (props: ConfirmProps) => {

    return (
        <div className="NUI-Accept-Container" style={{ display: props.show ? '' : 'none' }}>
            <div className="NUI-Accept-Background">
                <p className="NUI-Accept-Text">{props.message ?? 'Please Confirm you want it!'}</p>
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
    )
}

export default Confirm;