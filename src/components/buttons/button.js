const Button = ({text, style}) => {
    const styl={
        marginTop : "20px",
        marginLeft : "5px"
    }
    const classes = "btn"+" "+ "btn-"+style
    return ( <div className={classes} style={styl}>{text}</div> );
}
 
export default Button;