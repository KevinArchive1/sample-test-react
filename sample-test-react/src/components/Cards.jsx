import "./cards.css"

function Cards(props) {
    return(
        <div className="cards_container">
            <div className="text_content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Cards