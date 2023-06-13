import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles';
// import { Typography } from "@mui/material";


const alanKey='a60da7b8ce587373c6c46e2afedff8052e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=>{
    const [newsArticle, setnewsArticle] = useState([]);
    const classes=useStyles();
    useEffect(() => {
        alanBtn({
            key:alanKey,
            onCommand:({commandData,articles})=>{
                if(commandData==="News"){
                    // console.log(articles.articles)
                    setnewsArticle(articles.articles)
                }
                // else if(commandData==='open'){
                //     window.open(articles[number].url,'_blank')
                // }
            }
        })
    }, [])
    
    return(
        <div>
        <div className={classes.logoContainer}>
          <img src="https://media.gettyimages.com/id/1273758425/video/global-earth-rotating-digital-world-news-studio-stock-video.jpg?s=640x640&k=20&c=2JGgtJYAE6bncYxKl2fSVXfGoF7L95uXDC5F15tipFs=" className={classes.alanLogo} alt="logo" />
        </div>
        <NewsCards article={newsArticle}/>
        </div>
    )
}
export default App;