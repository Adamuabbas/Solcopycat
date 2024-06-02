import "../src/Main.css"
import "../src/Navbar.css"
import solanaVid from "../src/img/Solana2.mp4"


function Main(){
   
    return(
        <div className="video-container">
            <video src={solanaVid} autoPlay loop muted/>
                <div id="main-content">
                <h1>Powerful for developers. <br /> Fast for everyone.</h1>
                        <div className="btn-div">
                            <button className="main-btn real-main-btn">START BUILDING</button>
                            <button className="main-btn second-btn" >READ DOCUMENTATION</button>
                        </div>
                <h3>Solana is a decentralized blockchain built to enable<br />scalable, user-friendly apps for the world.</h3>
            </div>
      </div>




    )

    

}



export default Main;