'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Slide = {
  image: string
  title: string
  subtitle: string
  status: string
  button: string
}

type SliderProps = {
  slides: Slide[]
}

export default function Slider({ slides }: SliderProps) {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0])

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => {
      const newIndex =
        (prev + newDirection + slides.length) % slides.length
      return [newIndex, newDirection]
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 10,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
      zIndex: 0,
    }),
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.div
          key={current}
          className="absolute top-0 left-0 w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center z-20 text-white px-[20%]">
            <div className="max-w-xl flex flex-col items-start">
              <h2 className="text-4xl font-bold">{slides[current].title}</h2>
              <p className="mt-2 text-lg">{slides[current].subtitle}</p>
              <span className="mt-3 inline-block bg-white/20 px-4 py-1 rounded-md text-sm">
                {slides[current].status}
              </span>
              <button className="mt-6 px-6 py-2 bg-white text-black hover:cursor-pointer hover:text-white border rounded-full hover:bg-transparent transition">
                {slides[current].button}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-2 rounded-full hover:bg-black/60 hover:cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-2 rounded-full hover:bg-black/60  hover:cursor-pointer"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  )
}
