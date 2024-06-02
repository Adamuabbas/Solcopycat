// import { useRef, useEffect, useState } from "react";
import "../src/Decent.css"
import DecentImg from "../src/img/Decent-img.png"
import { useInView } from 'react-intersection-observer';




function Decentralized() {
    
    
    const { ref, inView} = useInView({
        root : null
    }
    
    );
    
    const {  ref : myRef, inView : myInview} = useInView(
    
    );
   
   
 
   

    
    return ( 
        <div className="Decent-content">
            <img className="decent-img" src={DecentImg} alt="" />
            <div className="unstop-div">
                <h1>Decentralized</h1>
                <h2>and unstoppable</h2>
                 <p>
                    Not only is Solana ultra-fast and low cost, it is censorship resistant. 
                    Meaning, the <br /> network will remain open for applications to run freely and transactions 
                    will never be <br />stopped.
                </p>
             </div>

             <div className="box-div"  ref={ref}>
                <div  className={`${ "box-span box-span-1"}  ${inView? "animateClass": " " }`}    >
                    <h1> Solana Community </h1>

                    <p>There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.</p>

                    <button className="decen-btn">LEARN MORE</button>

                </div>
                <div    className={`${ "box-span box-span-2"}  ${inView? "animateClass": " " }`} >
                    <h1> Become a Validator</h1>
                <p>Help secure the network by running decentralized infrastructure. Learn about operating a validator node.</p>
                <button className="decen-btn">GET STARTED</button>
                </div>
              
             </div>
             <div className={`${"decen-cube"}  ${myInview? "animateClass2": " " }`} ref={myRef}>
                    <div className={`${ "face face-front"} `}> 
                    <h1>Developer Resources</h1>
                    <div >
                        <p>See the get started guide, videos, tutorials, SDKs, reference implementations, and more.</p>
                       
                        <button className="decen-btn">START BUILDING</button>
                    </div>
                    </div>
                    <div  className={`${ "face face-bottom"}  `} > </div>

                </div>
          


        </div>
     );
}

export default Decentralized;

// const effectChecker = useRef(false)
    // const myRef = useRef(); 
    // const [isIntersecting , setIsIntersecting] = useState();
    // console.log("visibility", isIntersecting)

       // useEffect(() => {
    //     if(effectChecker.current === false){
    //         const observer = new IntersectionObserver( (entries) => {
    //             const entry = entries[0];
    //             setIsIntersecting(entry.isIntersecting)
               
    //         }

    //         )
    //         observer.observe(myRef.current)
            
            
    //     }
    //     return() => {
    //         effectChecker.current = true
            
    //     }
       

    // },[])