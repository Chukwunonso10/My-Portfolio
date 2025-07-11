"use client"

import { useState, useEffect } from "react"
import { Code, Database, Server, Globe } from "lucide-react"

const AnimatedIntro = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const steps = [
    { letter: "M", icon: Database, color: "text-green-500", name: "MongoDB" },
    { letter: "E", icon: Server, color: "text-yellow-500", name: "Express.js" },
    { letter: "R", icon: Globe, color: "text-blue-500", name: "React" },
    { letter: "N", icon: Code, color: "text-green-600", name: "Node.js" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
      } else if (!isComplete) {
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(() => {
            onComplete()
          }, 1000)
        }, 1500)
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [currentStep, isComplete, onComplete, steps.length])

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center z-50 animate-pulse">
        <div className="text-center transform scale-150 opacity-0 transition-all duration-1000">
          <div className="text-6xl font-bold text-white mb-4">MERN </div>
          <div className="text-xl text-gray-300">Full Stack Developer</div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center z-50 overflow-hidden w-screen h-screen">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-green-400 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main MERN display */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Letter */}
              <div
                className={`text-8xl font-bold mb-4 transition-all duration-700 ${
                  index < currentStep
                    ? `${step.color} transform scale-100 opacity-100`
                    : "text-gray-600 transform scale-75 opacity-30"
                }`}
              >
                {step.letter}
              </div>

              {/* Icon */}
              <div
                className={`flex justify-center mb-2 transition-all duration-500 delay-300 ${
                  index < currentStep ? "transform scale-100 opacity-100" : "transform scale-0 opacity-0"
                }`}
              >
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>

              {/* Technology name */}
              <div
                className={`text-sm font-medium transition-all duration-500 delay-500 ${
                  index < currentStep
                    ? `${step.color} transform translate-y-0 opacity-100`
                    : "text-gray-500 transform translate-y-4 opacity-0"
                }`}
              >
                {step.name}
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index < currentStep ? "bg-white animate-pulse" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>

        {/* Loading text */}
        <div
          className={`text-white text-xl font-medium transition-all duration-500 ${
            currentStep === steps.length ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
        >
          Welcome to my portfolio
        </div>

        {/* Animated dots */}
        <div
          className={`flex justify-center space-x-1 mt-4 transition-all duration-500 ${
            currentStep === steps.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedIntro
