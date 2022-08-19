type Props = {
    text: string;
}

const Title = ({ text } : Props) => {
    return(
        <h1>{text}</h1>
    );
}

export default Title;