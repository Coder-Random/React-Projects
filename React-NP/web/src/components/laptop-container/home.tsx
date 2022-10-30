import "../App.css";

interface HomeProps {
    show: boolean;
    onHome: () => void;
    onCancel: () => void;
    message: string;
}
    
const Home = (props: HomeProps) => {

    return (
        <div className="Home-Container" style={{ display: props.show ? '' : 'none' }}>
                <button className="Home-Button" onClick={props.onHome}></button>
        </div>
    )
}

export default Home;