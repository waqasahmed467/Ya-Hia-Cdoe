import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
const AnimatedProduct = () => {
    const [rotate, setRotate] = useState(0);
    const [rotateArray, setrotateArray] = useState([0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330])
    const [scale, setscale] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setscale((prev) =>  prev == 9 ? prev + 2 :  prev + 1);
            setRotate((prev) => prev + 30);
            scale == 12 ? setscale(0) : null

        }, 3000);

        return () => clearInterval(interval);

    }, [rotate]);
    return (
        <motion.div
            animate={{
                rotate: -rotate,
            }}

            transition={{
                duration: 1.3,
                ease: 'anticipate',

            }}


            className='w-[1200px] mt-[70px] mx-auto rounded-full h-[1200px] relative '>

            <div className='h-[80%] w-[80%] bg-black rounded-full absolute -z-10 left-[10%] top-[50%] -translate-x-[0%] scale-110 blur-2xl -translate-y-[50%]'>
            </div>
            <div className='h-[60%] w-[60%] bg-black rounded-full absolute z-10 left-[20%] top-[50%] -translate-x-[0%] scale-110 blur-2xl -translate-y-[50%]'>

            </div>
            {rotateArray.map((item, i) => (
                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0,
                        y: 20

                    }}

                    animate={{
                        scale: scale == i ? 1.1 : 1,
                        opacity: scale == i ? 1 : 0.8,
                        filter : scale == i ? 'grayscale(0%)' : 'grayscale(100%)',

                        y: 0,
                    }}

                    transition={{
                        ease: 'backOut',
                        delay: i * 0.2
                    }}
                    key={i}
                    className="h-[50%] w-[20%] bg-white overflow-hidden absolute top-0 left-[50%] rounded-t-full -translate-x-1/2 origin-bottom"
                    style={{ rotate: `${item}deg` }} // ✅ dynamic rotation

                >
                    <img id={i} src={`/${i + 1}.jpeg`} className='object-cover w-full' alt="" />


                </motion.div>
            ))}




        </motion.div>
    )
}

export default AnimatedProduct