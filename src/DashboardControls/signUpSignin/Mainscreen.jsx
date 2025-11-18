import React, { useState, useRef, useEffect } from 'react'
import Login from './Login'
import Register from './Register'
import { motion } from 'motion/react'
import { ToastContainer } from 'react-toastify'

const Mainscreen = () => {
  const [CheckShow, setCheckShow] = useState(340)
  const [Opacity, setOpacity] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const showLogin = () => {
    setOpacity(false)
    setCheckShow(340)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setOpacity(true)
    }, 400)
  }

  const showSignUp = () => {
    setOpacity(false)
    setCheckShow(0)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setOpacity(true)
    },  400)
  }

  return (
    <>
      <div className='h-screen w-full flex justify-center items-center overflow-hidden '>
        <ToastContainer progress={1} position='top-right' />
        <div className='border-b-3 w-[343px] relative shadow-[0px_0px_8px_black] rounded-2xl overflow-hidden'>
          <div className='flex absolute -right-84 top-0 w-full border-b-2 bg-black/50 gap-5 p-5'>
            <motion.button
              onClick={showLogin}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`py-2 w-[45%] rounded-md text-md font-semibold transition-all hover:cursor-pointer duration-300 focus:outline-none
                ${CheckShow === 340
                  ? 'bg-gradient-to-b from-yellow-400  to-yellow-800 shadow-lg'
                  : 'bg-transparent border border-yellow-300 text-yellow-400 hover:bg-yellow-400/10'}`}
              aria-pressed={CheckShow === 340}
            >
              Login
            </motion.button>

            <motion.button
              onClick={showSignUp}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`py-2 w-[45%] rounded-md text-md font-semibold transition-all duration-300 hover:cursor-pointer focus:outline-none
                ${CheckShow === 0
                  ? 'bg-gradient-to-b from-yellow-400  to-yellow-800 shadow-lg'
                  : 'bg-transparent border border-yellow-300 text-yellow-400 hover:bg-yellow-400/10 '}`}
              aria-pressed={CheckShow === 0}
            >
              SignUp
            </motion.button>
          </div>

          <motion.div
            animate={{
              x: CheckShow,
              opacity: Opacity ? 1 : 0
            }}
            transition={{
              ease: 'circIn',
            }}
            className='flex mt-20'
          >
            <Login setCheckShow={setCheckShow} />
            <Register setCheckShow={setCheckShow} />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Mainscreen