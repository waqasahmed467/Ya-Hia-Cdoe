import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion, scale } from "framer-motion";
import { DashboardContext } from '../Context/DashboardContext';
const AnimatedCardEdit = () => {
    const { AnimatedShow } = useContext(DashboardContext)
    const [Preview, setPreview] = useState()



    const array = [0, 1, 2, 3, 4, 5, 6]
    const [Scale, setScale] = useState(0)
    const [x, setx] = useState(0)
    const [ClickCount, setClickCount] = useState(0)
    const [RightDisable, setRightDisable] = useState(false)
    const [LeftDisable, setLeftDisable] = useState(true)
    const [ActivePrivew, setActivePrivew] = useState()


    const handleImgPrivew = (e, i) => {







    }



    const scrollRef = useRef(null)

    useEffect(() => {

        if (scrollRef.current) {


            scrollRef.current.scrollTo({
                behavior: 'smooth',
                left: x
            })
        }

    }, [x])


    const handelRight = () => {
        setLeftDisable(false)
        if (ClickCount == 10) {
            setRightDisable(true)
        }

        setScale((prv) => prv + 1)
        setx((prevX) => {
            // har click per +10 zyada scroll
            const newScroll = prevX + (250 + ClickCount * 10);
            setClickCount((prev) => prev + 1); // click count badhao
            return newScroll;
        });
        setClickCount((prv) => prv + 1)
    }
    const handelLeft = () => {
        setRightDisable(false)
        if (ClickCount == 2) {
            setLeftDisable(true)
        }
        setScale((prv) => prv - 1)
        setx((prevX) => {
            // har click per +10 zyada scroll
            const newScroll = prevX - (250 + ClickCount * 7);
            setClickCount((prev) => prev - 1); // click count badhao
            return newScroll;
        });
        setClickCount((prv) => prv - 1)
    }

    return (
        <div className='flex  overflow-hidden justify-center items-center w-full h-screen  '>

            <div className='h-[95vh]  w-[900px] relative  overflow-hidden   '>
                <motion.div
                    id='ScrollDiv'
                    ref={scrollRef}

                    animate={{
                    }}

                    className=' scrollAto w-full px-[300px] overflow-x-auto flex   h-full'>
                    {
                        array.map((item, i) => (

                            <motion.div

                                key={i}
                                animate={{
                                    scale: i == Scale ? 1.02 : 0.8,
                                    filter: i === Scale ? 'grayscale(0%) brightness(100%) blur(0px)' : 'grayscale(50%) brightness(40%) blur(5px)'

                                }}
                                transition={{
                                    ease: "anticipate"
                                }}
                                style={{
                                    position: `${i == Scale && 'relative'}`,
                                    backgroundImage: `url(/shoppingApp/.jpeg)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}

                                className='overflow-hidden flex justify-center items-center w-[300px] rounded-3xl shrink-0 h-full bg-black'>
                                {
                                    AnimatedShow[i]?.imageName || Preview && ActivePrivew == i ? (
                                        <img
                                            className='w-full h-full rounded-2xl object-cover'
                                            src={
                                                Preview
                                                    ? Preview
                                                    : `/shoppingApp/${AnimatedShow[i].imageName}.jpeg`
                                            }
                                            alt=""
                                        />
                                    ) : (
                                        <div className='relative flex w-40'>
                                            <button className='hover:cursor-pointer bg-gradient-to-b from-amber-700 to-amber-900 rounded-md ml-5 px-3 py-2'>
                                                Upload Image
                                            </button>
                                            <input
                                                onChange={(e) => {
                                                    setActivePrivew(i)
                                                    console.log(ActivePrivew);
                                                    const file = e.target.files[0]
                                                    if (file) {
                                                        const ImgeURl = URL.createObjectURL(file)
                                                        setPreview(ImgeURl)

                                                    }
                                                }}
                                                className='hover:cursor-pointer opacity-0 absolute top-0 left-0'
                                                type="file"
                                            />
                                        </div>
                                    )
                                }
                                {
                                    AnimatedShow.length > 0 && AnimatedShow[i].imageName ? null : <button
                                        onClick={() => setPreview("")}
                                        type="button"
                                        className="absolute top-4 right-4 p-1 px-2 rounded-sm bg-red-500/75 hover:bg-red-500 transition-all"
                                    >
                                        <i className="ri-delete-bin-6-line text-white text-lg"></i>
                                    </button>
                                }

                            </motion.div>
                        ))
                    }
                </motion.div>
                <button onClick={handelLeft} disabled={LeftDisable}
                    className={`p-4 rounded-r-4xl font-bold   bg-gray-400/50 text-4xl absolute top-[50%] -translate-y-[50%] hover:${LeftDisable ? 'scale-[1]' : 'scale-[1.2]'} hover:cursor-${LeftDisable ? 'not-allowed' : 'pointer'} hover:bg-gray-400 left-0`}><i class="ri-arrow-left-wide-fill"></i></button>
                <button onClick={handelRight} disabled={RightDisable}

                    className={`p-4 bg-gray-400/50 text-4xl font-bold rounded-l-4xl absolute top-[50%] -translate-y-[50%] hover:${RightDisable ? 'scale-[1]' : 'scale-[1.2]'} hover:cursor-${RightDisable ? 'not-allowed' : 'pointer'} hover:bg-gray-400 right-0`}><i class="ri-arrow-right-wide-fill"></i></button>

            </div>




        </div>
    )
}

export default AnimatedCardEdit