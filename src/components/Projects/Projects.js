import "./projects.css"
import Project from "./project"
import Recipe from "./recipe.jpg"
import Gallery from "./gallery.jpg"
import Checkout from "./check.png"

const Projects = () => {
   const RecipeArticle="In this project, I design a Recipe page with HTML and CSS, the design is gotten from devChallenge.io and pretty inspiring."
    return (<div  className="work-wrapper">
        <Project image={Recipe} Head="Recipe blog"  paragraph={RecipeArticle} preview="http://sideeq12.github.io/Recipee" code=""/>
        <Project image={Gallery}  Head="Gallery Page" paragraph={RecipeArticle} preview="http://sideeq12.github.io/my-gallery"/>
        <Project image={Checkout}  Head="Checkout page" paragraph={RecipeArticle} preview="http://sideeq12.github.io/checkout-page"/>
    </div> );
}
 
export default Projects;