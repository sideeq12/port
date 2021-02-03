import Campus from "./campus.jpg"
import fiverr from "./five.jpg"
const Experience = () => {
    const style = {
        display : "flex",
        flexDirection : "row",
        margin: "5px"
    }
    return ( <div className="experience">
    <h4>Experience</h4>
    <div style={style}>
    <img src={Campus} alt=" Sideeq Abdwaheed image" style={{width : "50%" , marginRight : "5px"}}/> 
    <p><h5>Frontend Developer</h5> TENO Dev campus team, working with students in building 
    real life projects.</p>
    </div>
    <div style={style}>
    <img src={fiverr} alt=" Sideeq Abdwaheed image" style={{width : "50%", marginRight : "5px"}}/> 
    <p><h5>Freelancing</h5> I have been freelancing as a developer by working many clients.</p>
    </div>
</div> );
}
 
export default Experience;