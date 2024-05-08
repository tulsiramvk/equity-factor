import React from 'react'
import './YoutubeVideo.css'

const YoutubeVideo = () => {
    return (
        <> <div id="clients"></div>
            <div className="fact_wrapper space">
                <div className="width_80 m-auto text-left">

                    <div className="title2">
                        TRADERS WORD
                    </div>
                    <p className="c_content mb-5">
                        Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.
                    </p>

                    <div className='myrow justify_space_between'>
                        <div className="vidBlock">
                            <iframe width="100%" height="400"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className="vidBlock">
                            <iframe width="100%" height="400"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default YoutubeVideo