import "./projects.css"
import Project from "./project"
import Recipe from "./recipe.jpg"
import Gallery from "./gallery.jpg"
import Checkout from "./checkout.jpg"

const Projects = () => {
   const RecipeArticle="In this project, I design a Recipe page with HTML and CSS, the design is gotten from devChallenge.io and pretty inspiring."
    return (<div  className="work-wrapper">
        <Project image={Recipe} Head="Recipe blog"  paragraph={RecipeArticle}/>
        <Project image={Gallery}  Head="Gallery Page" paragraph={RecipeArticle}/>
        <Project image={Gallery}  Head="Checkout page" paragraph={RecipeArticle}/>
    </div> );
}
 
export default Projects;