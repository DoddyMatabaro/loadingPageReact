import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./slides.css"


let UseInView = useInView;
function slides({imgSrc, title, subtitle,filpped}) {
    const { ref, inView } = UseInView({
        /* Optional options */
        threshold: 0.4,
      });
    const renderContent  = () =>{

    if(filpped){
        return (<>
            <img src={imgSrc} alt="family" className='slider_image' />
            <div className="slider_content">
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </>)
    }else{
        return <>
            <img src={imgSrc} alt="family" className='slider_image' />
            <div className="slider_content">
                <h1 className='slider_title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </>;
    }
  }
    return (
    <div className={inView ? "slider slider--zoom" : 'slider'} ref={ref}>{renderContent()}</div>
  )
}

export default slides