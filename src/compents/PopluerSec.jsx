import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import PopluerCard from './PopluerCard';
const PopluerSec = ()=>{
    const container = useRef()
    const [width,setWidth] = useState(0)
    const handleOnLoad =  ()=> {
        const newWidth = container.current.scrollWidth - container.current.offsetWidth
        setWidth(newWidth)
    } 
    const handleScroll = (direction)=> {
        const scrollAmount = direction === "left" ? -800 : 800 ;
        container.current.scrollTo({
            left: container.current.scrollLeft + scrollAmount ,
            behavior:"smooth"
        })
    }
    return (
        <div className="populer-sec">
            <h3>Populer of the week</h3>
            <i className="fa fa-chevron-right scrole scrole-left"  onClick={()=> handleScroll("right")}></i>
            <i className="fa fa-chevron-left scrole scrole-right" onClick={()=> handleScroll("left")}></i>
            <motion.div ref={container} className="container" onLoad={handleOnLoad}>
                <motion.div drag="x" whileTap={{cursor:"grabbing"}} dragConstraints={{right:0, left: -width}} className="inner-cur">
                    <PopluerCard/>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default PopluerSec;