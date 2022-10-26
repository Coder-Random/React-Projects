import "./App.css";

interface NotifyProps {
    show: boolean;
    onNotify: () => void;
    onCancel: () => void;
    message: string;
}

const Notify = (props: NotifyProps) => {

    return (
        <div className="Notify-Container" style={{ display: props.show ? '' : 'none' }}>
            <div className="Notify-Background">
                <p className="Notify-Text">{props.message ?? 'This is a notification'}</p>
            </div>
        </div>
    )
}

export default Notify;
