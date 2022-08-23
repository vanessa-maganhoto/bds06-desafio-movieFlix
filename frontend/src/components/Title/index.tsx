import './styles.css';

type Props = {
    text: string;
}

const Title = ({ text } : Props) => {
    return(
        <div className="title">
            <h1>{text}</h1>
        </div>
    );
}

export default Title;