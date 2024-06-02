import "../src/Getsol.css"
import sologoImg from "../src/img/images.png"




function Getsol() {
    return (  
        <div className="getsol-container">
            <h1>Get more out of Solana</h1>
            <div className="getsol-p">  
                
                <div className="footer-links">
                    <h2>BUILD</h2>
                    <p>Docs</p>
                    <p>Github ↘</p>
                    <p>Chat on Discord ↘</p>
                    <p>Status ↘</p>

                </div>
                <div className="footer-links">
                    <h2>APPLY</h2>
                    <p>Grants</p>
                    <p>Collective ↘</p>
                    <p>Careers ↘</p>
                </div>
                <div className="footer-links">
                    <h2> LEARN</h2>
                    <p>Blog</p>
                    <p>Podcast</p>
                    <p>Videos ↘</p>
                    <p>Network Stats ↘</p>
                   




                </div>
                <div className="footer-links">
                    <h2> OTHER</h2>
                    <p>Break Solana</p>
                    <p>Disclaimer</p>
                    <p>Press & Brand</p>
                   



                </div>
                
                
            </div>
                <div className="getsol-cube">

                        <div className="face-getsol face-front-getsol">
                            <img src={sologoImg} className="sologo-img" alt="" />
                            <p>Solana.com</p>

                        </div>
                        <div className="face-getsol face-top-getsol"></div>


                </div>

        </div>

    );
}

export default Getsol;