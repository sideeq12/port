import "./project.css"
import image from "./image.png"

const style = {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between"
}
const Project = () => {
    return ( <div className="work">
    <div className="work-image">
        <img src={image} alt="" style={{width : "100%"}}/>
    </div>
    <div className="stories">
    <h5 style={{marginTop : "5px"}} >Recipe Blog</h5>
    <p>TIn this project, I work with HTML and Css to create a responsive Recipe blog page. The design is from DevChallenge.io</p>
    </div>
    <div className="preview" style={style}>
    <div className="btn btn-primary">Demo</div>
    <div className="btn">Code</div>
    </div>
    </div>);
}
 
export default Project;