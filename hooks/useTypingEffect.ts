"use client"


import { useState, useEffect } from "react"

export function useTypingEffect(fullText: string, speed = 150) {
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, speed)

    return () => clearInterval(typingInterval)
  }, [fullText, speed])

  return { typedText, isTyping }
}
