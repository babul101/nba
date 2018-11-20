import React from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';

const generateBlocks = ({blocks}) => {
    if(blocks) {
        return blocks.map((item) => {
            return(
                <Reveal key={item.id} effect='animated fadeInUp' className={`item ${item.type}`} >
                <div className='veil'></div>
                <div className='image'>
                <span style={{background:`url('/images/blocks/${encodeURIComponent(item.image)}.jpg') no-repeat`}}></span>
                </div>
                <div className='title'>
                    <Link to={item.link}>{item.title}</Link>
                </div>
                </Reveal>
            )
        })
    }
}



 const Blocks = (props) => {
    
  return (
    <div className='home-blocks'>
     {generateBlocks(props)}
    </div>
  )
}

export default Blocks;