import './styles.css';


type Props = {
    text: string;
}
const Button = ({ text } : Props) => {
    return (
        <button type="submit">{text}</button>
    )
}

export default Button;