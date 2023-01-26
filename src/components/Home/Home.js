import React, { useRef, useState } from 'react';
import { BsFillPlayCircleFill, BsArrowRight } from 'react-icons/bs';
import { GoSmiley } from 'react-icons/go';
import Swal from 'sweetalert2';
import { VideoProgress } from 'react-video-progress'






const Home = () => {


    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);
    const [forthPage, setForthPage] = useState(false);
    const [displayCampaignButton, setDisplayCampaignButton] = useState(true);
    const [displayContentCampaignButton, setDisplayContentCampaignButton] = useState(false);
    const [displaySignUpFreeWebinarButton, setDisplaySignUpFreeWebinarButton] = useState(true);
    const [displayContentFacebookWebinar, setDisplayContentFacebookWebinar] = useState(false);
    const [displayCampaignButton1, setDisplayCampaignButton1] = useState(true);
    const [displayContentCampaignButton1, setDisplayContentCampaignButton1] = useState(false);


    const handleCampaignStructureButton = () => {
        setFirstPage(false);
        setSecondPage(true);
        setThirdPage(false);
        setForthPage(false);
    }

    const handleLearnFacebookBasicButton = () => {
        setFirstPage(false);
        setSecondPage(false);
        setThirdPage(true);
        setForthPage(false);
    }

    const handleDownloadCampaignButton = () => {
        setDisplayContentCampaignButton(true);
        setDisplayCampaignButton(false)
    }

    const handleDownloadCampaignButton1 = () => {
        setDisplayContentCampaignButton1(true);
        setDisplayCampaignButton1(false)
    }

    const handleThirdChoiceButton = () => {
        setFirstPage(false);
        setSecondPage(false);
        setThirdPage(false);
        setForthPage(true);
    }

    const handleFreeFacebookWebinar = () => {
        setDisplaySignUpFreeWebinarButton(false);
        setDisplayContentFacebookWebinar(true);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        Swal.fire(
            `${name}`,
            'Your response has been submitted',
            'success'
        )
        event.target.reset();
    }

    return (
        <div className='absolute'>
            {
                firstPage &&
                <div className='flex justify-around items-center gap-x-16  lg:flex-row flex-col'>
                    <div className='lg:-ml-0'>
                        {/*                         
                        <video controls autoPlay className='bg-black  lg:h-[753px] lg:w-[800px] h-max w-screen' width="720">
                            <source src='/Videos/video1.mp4' />
                        </video> */}

                        <VideoProgress
                            className='bg-black  lg:h-[753px] lg:w-[800px] h-max w-screen'
                            pathColor="blue"
                            progressStart="TopLeft"
                            type="OneLine"
                            pathWidth="6px"
                            pathBorderRadius="2px"
                            src='/Videos/Portrait/video1.mp4'
                            controls
                            autoPlay
                        />


                        {/* <BsFillPlayCircleFill  className='text-4xl md:text-[80px] text-white rounded-full text-center mx-auto font-semibold   lg:-mt-[430px] md:-mt-[370px] -mt-[190px] -z-1'></BsFillPlayCircleFill> */}
                    </div>

                    <div className='lg:mt-0  lg:ml-[150px] ml-0 md:-mt-[310px] -mt-[170px] relative'>

                        <div className='lg:-mt-[120px] md:-mt-[100px] -mt-[10px]'>

                            <button onClick={handleCampaignStructureButton} className='lg:bg-gray-300 md:bg-gray-900 md:border-0 md:text-white lg:text-black rounded-full md:py-3 py-1 md:text-lg text-sm font-semibold px-8 md:mb-4 mb-2 block w-full hover:border-purple-600 lg:border-2 bg-gray-900 border-0 text-white'><span className='px-[10px] py-1 rounded-full text-white bg-purple-700 mr-3 -ml-8 mt-0 '>A</span>Campaign Structure</button>

                            <button onClick={handleLearnFacebookBasicButton} className='lg:bg-gray-300 md:bg-gray-900 md:border-0 md:text-white lg:text-black rounded-full md:py-3 py-1 md:text-lg text-sm font-semibold px-8 md:mb-4 mb-2 block w-full hover:border-purple-600 lg:border-2 bg-gray-900 border-0 text-white'><span className='px-[10px] py-1 rounded-full text-white bg-purple-700 mr-3 -ml-3'>B</span>Learn Facebook Basics</button>

                            <button onClick={handleThirdChoiceButton} className='lg:bg-gray-300 md:bg-gray-900 md:border-0 md:text-white lg:text-black rounded-full md:py-3 py-1 md:text-lg text-sm font-semibold px-8 md:mb-4 mb-2 block w-full hover:border-purple-600 lg:border-2 bg-gray-900 border-0 text-white'><span className='px-[10px] py-1 rounded-full text-white bg-purple-700 mr-3 -ml-[85px]'>C</span>3rd Choice</button>

                            <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[990px] lg:mt-[140px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                    <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                    <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                        <GoSmiley className='text-3xl'></GoSmiley>
                                        <p className='text-lg font-bold'>videoask</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:-ml-[980px] lg:-mt-[440px] md:-ml-[205px] md:-mt-[720px] -ml-[45px] -mt-[390px]   w-[200px]'>
                            <h1 className=' lg:text-4xl md:text-3xl text-lg font-bold text-white'>Welcome</h1>
                        </div>

                    </div>
                </div>
            }


            {/* // After Clinking  Campaign Structure Button This div will be shown */}
            {
                secondPage &&
                <>
                    <>
                        <div className='flex justify-around items-center gap-x-12 lg:flex-row flex-col'>
                            <div className='left-auto'>

                                {/* <video controls autoPlay className='bg-black lg:h-[753px] lg:w-[800px] h-max w-screen' width="720">
                                    <source src='/Videos/video2.mp4' />
                                </video> */}
                                <VideoProgress
                                    className='bg-black  lg:h-[753px] lg:w-[800px] h-max w-screen'
                                    pathColor="blue"
                                    progressStart="TopLeft"
                                    type="OneLine"
                                    pathWidth="6px"
                                    pathBorderRadius="2px"
                                    src='/Videos/Portrait/video2.mp4'
                                    width="720"
                                    controls
                                    autoPlay
                                />
                            </div>

                            {
                                displayCampaignButton &&
                                <>
                                    <div className='lg:mt-0  lg:ml-[150px] ml-0 md:-mt-[270px] -mt-[150px] relative'>
                                        <button onClick={handleDownloadCampaignButton} className='bg-violet-700 hover:bg-purple-700  text-white rounded-2xl  md:py-2 py-1 md:text-lg text-sm font-semibold md:px-16 px-6  mt-4 mb-2  transition ease-out hover:ease-in delay-350 hover:scale-105 duration-300'>Download "Campaign Structure <br></br>Guide"</button>
                                    </div>

                                    {/* <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[1190px] lg:mt-[520px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                        <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                            <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                            <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                                <GoSmiley className='text-3xl'></GoSmiley>
                                                <p className='text-lg font-bold'>videoask</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </>
                            }

                            <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[1190px] lg:mt-[520px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                    <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                    <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                        <GoSmiley className='text-3xl'></GoSmiley>
                                        <p className='text-lg font-bold'>videoask</p>
                                    </div>
                                </div>
                            </div>

                            {
                                displayContentCampaignButton &&
                                <div className='lg:w-1/2 lg:mt-0 mt-8 lg:mx-0 md:mx-6 mx-4'>
                                    <h1 className='text-xl mb-8 font-semibold'>Before you go, please leave your contact details so we can get <br /> back to you...</h1>
                                    <form onSubmit={handleFormSubmit}>
                                        <input type="text" name="name" placeholder="* Your Name" className="input w-full mb-4 border-0 border-b-2 border-gray-300 py-3 text-lg " required />
                                        <input type="email" name="email" placeholder="* Your Email" className="input w-full border-0 border-b-2 border-gray-300 py-3 text-lg" required />

                                        <div className='flex gap-x-2 mt-8 mr-8'>
                                            <input type="checkbox" className="checkbox border-2 border-black" />
                                            <p className='text-gray-500 text-justify'>* [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</p>
                                        </div>

                                        <button type='submit' className='bg-violet-700 hover:bg-purple-700  text-white rounded-2xl  md:py-4 py-2 md:text-lg text-sm font-semibold md:px-64 px-28  mb-8  transition ease-out hover:ease-in delay-350 hover:scale-105 duration-300 md:mt-24 mt-16'>
                                            <div className='flex gap-x-1 items-center'>
                                                <p>Send Your Answer</p>
                                                <BsArrowRight className='text-2xl'></BsArrowRight>
                                            </div>
                                        </button>
                                    </form>

                                </div>
                            }
                        </div>




                    </>


                </>
            }



            {/* After Clicking The Learn Facebook Basic Button */}
            {
                thirdPage &&
                <>
                    <>
                        <div className='flex justify-around items-center gap-x-12 lg:flex-row flex-col'>
                            <div className='left-auto'>

                                {/* <video controls autoPlay className='bg-black lg:h-[753px] lg:w-[800px] h-max w-screen' width="720">
                                    <source src='/Videos/video3.mp4' />
                                </video> */}
                                <VideoProgress
                                    className='bg-black  lg:h-[753px] lg:w-[800px] h-max w-screen'
                                    pathColor="blue"
                                    progressStart="TopLeft"
                                    type="OneLine"
                                    pathWidth="6px"
                                    pathBorderRadius="2px"
                                    src='/Videos/Portrait/video3.mp4'
                                    width="720"
                                    controls
                                    autoPlay
                                />
                            </div>

                            {
                                displaySignUpFreeWebinarButton &&
                                <>
                                    <div onClick={handleFreeFacebookWebinar} className='lg:mt-0  lg:ml-[150px] ml-0 md:-mt-[270px] -mt-[150px] relative'>
                                        <button className='bg-violet-700 hover:bg-purple-700  text-white rounded-2xl  md:py-5 py-1 md:text-lg text-sm font-semibold md:px-16 px-6  mt-4 mb-2  transition ease-out hover:ease-in delay-350 hover:scale-105 duration-300'>Sign up for free webinar</button>
                                    </div>

                                    {/* <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[1160px] lg:mt-[520px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                        <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                            <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                            <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                                <GoSmiley className='text-3xl'></GoSmiley>
                                                <p className='text-lg font-bold'>videoask</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </>
                            }

                            <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[1160px] lg:mt-[520px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                    <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                    <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                        <GoSmiley className='text-3xl'></GoSmiley>
                                        <p className='text-lg font-bold'>videoask</p>
                                    </div>
                                </div>
                            </div>

                            {
                                displayContentFacebookWebinar &&
                                <div className='lg:w-1/2 lg:mt-0 mt-8 lg:mx-0 md:mx-6 mx-4'>
                                    <h1 className='text-xl mb-8 font-semibold'>Before you go, please leave your contact details so we can get <br /> back to you...</h1>
                                    <form onSubmit={handleFormSubmit}>
                                        <input type="text" name="name" placeholder="* Your Name" className="input w-full mb-4 border-0 border-b-2 border-gray-300 py-3 text-lg " required />
                                        <input type="email" name="email" placeholder="* Your Email" className="input w-full border-0 border-b-2 border-gray-300 py-3 text-lg" required />

                                        <div className='flex gap-x-2 mt-8 mr-8'>
                                            <input type="checkbox" className="checkbox border-2 border-black" />
                                            <p className='text-gray-500 text-justify'>* [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</p>
                                        </div>

                                        <button type='submit' className='bg-violet-700 hover:bg-purple-700  text-white rounded-2xl  md:py-4 py-2 md:text-lg text-sm font-semibold md:px-64 px-28  mb-8  transition ease-out hover:ease-in delay-350 hover:scale-105 duration-300 md:mt-24 mt-16'>
                                            <div className='flex gap-x-2 items-center'>
                                                <p>Send Your Answer</p>
                                                <BsArrowRight className='text-2xl'></BsArrowRight>
                                            </div>
                                        </button>
                                    </form>

                                </div>
                            }

                        </div>

                    </>


                </>
            }


            {/* After Clicking The Third Choice Button */}
            {
                forthPage &&
                <>
                    <>
                        <div className='flex justify-around items-center gap-x-12 lg:flex-row flex-col'>
                            <div className='left-auto'>
                                {/* <video controls autoPlay className='bg-black lg:h-[753px] lg:w-[800px] h-max w-screen' width="720">
                                    <source src='/Videos/video2.mp4' />
                                </video> */}

                                <VideoProgress
                                    className='bg-black  lg:h-[753px] lg:w-[800px] h-max w-screen'
                                    pathColor="blue"
                                    progressStart="TopLeft"
                                    type="OneLine"
                                    pathWidth="6px"
                                    pathBorderRadius="2px"
                                    src='/Videos/Portrait/video2.mp4'
                                    width="720"
                                    controls
                                    autoPlay
                                />
                            </div>

                            {
                                displayCampaignButton1 &&
                                <>
                                    <div className='lg:mt-0  lg:ml-[150px] ml-0 md:-mt-[270px] -mt-[150px] relative'>
                                        <button onClick={handleDownloadCampaignButton1} className='bg-violet-700 hover:bg-purple-700  text-white rounded-2xl  md:py-2 py-1 md:text-lg text-sm font-semibold md:px-16 px-6  mt-4 mb-2  transition ease-out hover:ease-in delay-350 hover:scale-105 duration-300'>Download "Campaign Structure <br></br>Guide"</button>
                                    </div>

                                    {/* <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[1160px] lg:mt-[520px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                        <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                            <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                            <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                                <GoSmiley className='text-3xl'></GoSmiley>
                                                <p className='text-lg font-bold'>videoask</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </>
                            }


                            <div className='bg-violet-700 hover:bg-purple-600 px-2 py-1 rounded-md text-white lg:w-[130px] w-[720px] lg:-ml-[1160px] lg:mt-[520px] md:-ml-[220px] md:mt-[55px] hidden md:block absolute text-center'>
                                <div className='lg:block md:flex md:justify-center md:items-center md:py-0 md:gap-x-2'>
                                    <p className='text-sm font-semibold mb-1 lg:text-start text-center'>Powered by:</p>
                                    <div className='flex items-center gap-x-1 lg:justify-start justify-center'>
                                        <GoSmiley className='text-3xl'></GoSmiley>
                                        <p className='text-lg font-bold'>videoask</p>
                                    </div>
                                </div>
                            </div>




                            {
                                displayContentCampaignButton1 &&
                                <div className='lg:w-1/2 lg:mt-0 mt-8 lg:mx-0 md:mx-6 mx-4'>
                                    <h1 className='text-xl mb-8 font-semibold'>Before you go, please leave your contact details so we can get <br /> back to you...</h1>
                                    <form onSubmit={handleFormSubmit}>
                                        <input type="text" name="name" placeholder="* Your Name" className="input w-full mb-4 border-0 border-b-2 border-gray-300 py-3 text-lg " required />
                                        <input type="email" name="email" placeholder="* Your Email" className="input w-full border-0 border-b-2 border-gray-300 py-3 text-lg" required />

                                        <div className='flex gap-x-2 mt-8 mr-8'>
                                            <input type="checkbox" className="checkbox border-2 border-black" />
                                            <p className='text-gray-500 text-justify'>* [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</p>
                                        </div>

                                        <button type='submit' className='bg-violet-700 hover:bg-purple-700  text-white rounded-2xl  md:py-4 py-2 md:text-lg text-sm font-semibold md:px-64 px-28  mb-8  transition ease-out hover:ease-in delay-350 hover:scale-105 duration-300 md:mt-24 mt-16'>
                                            <div className='flex gap-x-2 items-center'>
                                                <p>Send Your Answer</p>
                                                <BsArrowRight className='text-2xl'></BsArrowRight>
                                            </div>
                                        </button>
                                    </form>

                                </div>
                            }
                        </div>




                    </>


                </>
            }


        </div>
    );
};

export default Home;