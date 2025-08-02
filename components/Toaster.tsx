"use client"
import React from 'react'
import {Toaster} from "sonner"
import { useIsMobile } from "@/hooks/use-mobile";

const ToastContainer = () => {
  const isMobile = useIsMobile()
  return (
    <div>
    <Toaster richColors position={isMobile ? "bottom-center" : "top-right"} />
    </div>
  )
}

export default ToastContainer