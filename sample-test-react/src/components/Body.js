import "./Body.css"
import Cards from "./Cards";

function Body() {
    return(
        <div className="body_container">
            <Cards title="React is Fun" description={"Im not lying"}/>
            <Cards title="React is Full of Suffering" description={"Im not lying"}/>
            <Cards title="React is Made me think of My life choices" description={"Im not lying"}/>
        </div>
    );
};

export default Body