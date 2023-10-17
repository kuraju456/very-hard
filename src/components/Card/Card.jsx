import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                        
                      
                      
                      src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600" alt="UserImage"></img> 
                
                 
                  
                  <div className="showStatus"> </div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
              {         
                tag?.map((elem, index) => {                   
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
              }              
        </div>
    </div>
  )
}
export default Card;
