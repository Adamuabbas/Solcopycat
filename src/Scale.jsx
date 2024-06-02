import "../src/Scale.css"
import ScaleImg from"../src/img/ONE.png"
import FourImg from '../src/img/FOUR.png'
import ThreeImg from '../src/img/THREE.png'
function Scale() {
    return (
        <div className="scale-content">
            <div className="scale-div">
                <h1>Scale</h1>
                <h2>for global adoption</h2>
                <p>Integrate once and never worry about scaling again. Solana ensures composability <br /> between ecosystem projects by maintaining
                     a single global state as the network <br /> scales. Never deal with fragmented Layer 2 systems or sharded chains.
                </p>
            </div>
            <img className="scale-img" src={ScaleImg} alt="" />

            <div className="two-img-div">
                <span>
                    <h1 className="two-img-con">
                    Low cost,forever
                    </h1>
                    <p className="two-img-con">Solana's scalability ensures transactions remain less than <br /> $0.01 for both developers and users.</p>
                    <img className="two-img" src={ThreeImg} alt="" />

                </span>
                <span>
                    <h1 className="two-img-con">Fast, forever</h1>
                    <p className="two-img-con">Solana is all about speed, with 400 millisecond block times. And as <br /> hardware gets faster, so does the network.</p>
                    <img className="two-img" src={FourImg} alt="" />
                </span>
            </div>

        </div>
      );
}

export default Scale;