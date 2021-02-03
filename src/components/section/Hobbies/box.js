const Box = ({image, label, random}) => {
    return (   <div className="box">
    <img src={image} alt="sideeq Abdwaheed Hobby"/>
    <label>{label}</label>
    <p>{random}</p>
</div>);
}
 
export default Box;