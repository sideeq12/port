import Button from "./button"

const Buttons = () => {
    const style = {
        marginTop : "10px",
        marginLeft : "auto",
        marginRight : "auto",
        width : "50%",
        height : "80px",
        backgroundColor : "white",
        borderRadius : "10px"
    }
    return ( <div style={style}>
<Button text="React" style="success" />
<Button text="Node" style="info" />
<Button text="Responsive" style="primary" />
    </div> );
}
 
export default Buttons;