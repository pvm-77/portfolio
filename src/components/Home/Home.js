
import React from "react";
import Particle from '../../components/Particle';
import mainImage from "../../Assets/img.jpg";
import pro from "../../Assets/pro.jpg";
import hand from "../../Assets/hand.gif";
import proj from "../../Assets/proj.gif";
import Typewriter from "typewriter-effect";
import typewriterConfig from "../../configAndContents/typewriter-config";
const Home = () => {
    return (
        <div>
            <div className="container-fluid mt-3">
                <div className="row mx-auto">
                    <div className="col-md-4">
                        <h1 style={{ color: 'black', fontFamily: '"Parisienne", cursive' }}>
                            Hi EveryBody
                            <span>
                                {/* &#128075; */}
                                <img style={{ opacity: '1' }} src={hand} width="40" height={40} alt='' />
                            </span>
                        </h1>

                        <h1 style={{ color: 'white', fontFamily: '"Parisienne", cursive' }}>
                            I am{" "}
                            <strong style={{ color: '#244535', fontFamily: '"Parisienne", cursive' }}>
                                Sarfaraz Here
                            </strong>
                        </h1>
                        <div style={{ fontSize: '40px', fontFamily: '"Parisienne", cursive' }}>
                            <Typewriter options={typewriterConfig} />
                        </div>

                    </div>
                    <div className="col-md-8 mt-4 mt-md-0 d-flex justify-content-center align-items-center">
                        <img
                            style={{ border: 'none', opacity: '', zIndex: '1', maxWidth: '100%' }}
                            src={proj}
                            alt="mainImage"
                        />
                    </div>
                </div>
            </div>

            










        </div>
    );
};

export default Home;
