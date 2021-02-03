import Bar from "./bar"
import List from "./list"
const Skills = () => {
    const style = {
        display : "flex",
        flezDirection : "row"
    }
    return ( 
        <div className="rate">
            <h6>FRONT END</h6>
            <div className="inner" style={style}>
           <List />
            <Bar />
           </div>

        </div>
     );
}
 
export default Skills;