import React from 'react'
import gym from '../image/gym.jpg'

function Home() {
    return (
        <>
            <div className="container ">
                <div className="container-fluid bg-dark shadow-lg">
                    <div className="z-n1 position-relative">
                        <img src={gym} style={{ width: '100%', height: '80vh' }} />
                    </div>
                    <div className="bg-warning fw-bold font-monospace d-block z-0 position-absolute top-0 start-50 text-center translate-middle-x p-2 px-5">
                        WEEKLY NEWSLETTER
                    </div>
                    <div className="text-light z-1 d-block fs-1 text-center position-absolute top-50 start-50 translate-middle-x">
                        <b>Build Your Body <br /> & Keep Healthy</b>
                        <p className="text-light text-center d-block">
                            being fit is not a dream! it's all starts when you step out from your comfort zone.
                        </p>
                    </div>
                    <div className="bg-warning z-2 d-block fw-bold position-absolute bottom-0 start-50 translate-middle-x">
                        SEE MORE
                    </div>
                    <div className="font-monospace text-light text-center">
                        HERE'S THE PACKAGE
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
