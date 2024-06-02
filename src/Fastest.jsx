import solana1 from "../src/img/Solana1.mp4"
import "../src/Fastest.css"

function Fastest() {
    return ( 
        <div className="fastest-container">
           <div className="eco-div"> 
           <span>
                     <h1>
                    Join the fastest <br />growing <br /> ecosystem
                    </h1>
            </span>
            <span>
                <p>Solana is the fastest blockchain in the world and the <br /> fastest growing ecosystem in crypto, with thousands of <br />projects spanning DeFi, NFTs, Web3 and more.</p>
                <button className="exp-btn">EXPLORE THE ECOSYSTEM</button>
            </span>
           </div>
            <video className="fastest-video" src={solana1} autoPlay loop muted/>
            <div className="cube">
                <div className="Face Front">
                    <div>
                        <h1>Say hello</h1>  <p>Learn more about Solana and see what makes it great.</p> <button className="watch-btn">WATCH VIDEO</button></div>
                    </div>
                <div className="Face Top"></div>
            
            </div>

        </div>
     );
}

export default Fastest;