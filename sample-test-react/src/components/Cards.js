import "./cards.css"

function Cards({title, description}) {
    return(
        <div className="cards_container">
            <div className="text_content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cards