import "./Hobbies.css"
import Game from "./Game.jpg"
import football from "./foot.jpg"
import cooking from "./cooking.png"
import Box from "./box"


const Hobbies = () => {
    return (  <div className="hobby">
    <h5 style={{marginLeft: "5px"}}>Hobbies</h5>
    <div className="hobby-list">
       <Box image={Game} label="Game" random="random piece of shit" />
       <Box image={cooking} label="cooking" random="random piece of shit" />
       <Box image={football} label="footbal" random="random piece of shit" />
    </div> 
</div>);
}
 
export default Hobbies;