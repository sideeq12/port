import "./project.css"


const style = {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-arounf"
}
const imageStyle ={
    height : "60%",
    width: "100%"
}
const Project = ({image, Head, paragraph, code, preview}) => {
    return ( <div className="work">
    <div className="work-image" style={imageStyle}>
        <img src={image} alt="" style={{width : "100%", height : "100%"}}/>
    </div>
    <div className="stories">
    <h5 style={{marginTop : "5px"}} >{Head}</h5>
    <p>{paragraph}</p>
    </div>
    <div className="preview" style={style}>
    <a href={preview} className="btn btn-primary">Preview</a>
    <a href={code} className="btn btn-secondary" style={{marginLeft: "20px"}}>Code</a>
    </div>
    </div>);
}
 
export default Project;