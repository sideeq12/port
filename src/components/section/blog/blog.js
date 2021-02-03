import React from "./react.jpg"

const Blog = () => {
    const style = {
        display : "flex",
        flexDirection : "row",
        height : "100%",
        marginTop : "15px"
    }
    const style1 ={
        display : "flex",
        flexDirection : "column",
        height : "80%"
    }
   const style2={
        width : "60%",
        height : "100%"
    }
    const paragraph = {
        marginTop : "15px", 
        fontSize : "20px",
        wordSpacing : "1px",
        marginLeft : "5px"
    }
    return ( 
        <div className="blog">
        <div style={style1}>
        <div style={style}>
                <div style={{display : "flex", justifyContent : "center", padding : "10px", alignItems : "center"}}>
                    <h5>Understanding react props</h5>
                </div>
            <img src={React} alt="Sideeq Abdwaheed" style={style2}/>
        </div>
       <p style={paragraph}> In this article, I discuss about using react props, and the feautres that comes with it, like passing props wrongly.</p>
        </div>
    </div>
     );
}
 

export default Blog;