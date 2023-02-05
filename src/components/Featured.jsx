import React from 'react';
import "../../css/featured.css";

function Featured(props) {
    
    return (
        <div className='banner'>
            <div className='feature-img'
                style={{
                    backgroundImage: `url(${props.link})`,
                    backgroundSize: "cover"
            }}>
            <div className='gradient'>    
                <div className='contents'>
                    <div className='heading'>Lorem Ipsum</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi est quae corporis, voluptas facere cumque magni vero ipsum dolores pariatur quia natus eaque, molestias labore. Nihil adipisci illo quos.</div>
                </div>  
            </div>
        </div>
        </div>
    )
}


export default Featured;