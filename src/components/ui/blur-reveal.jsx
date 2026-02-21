"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "../../lib/utils"

export function BlurReveal({
  className,
  children,
  delay = 0,
  duration = 1,
}) {
  const spanRef = React.useRef(null)
  const isInView = useInView(spanRef, { once: true })

  return (
    <motion.span
      ref={spanRef}
      className={cn(className)}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={
        isInView
          ? { filter: "blur(0px)", opacity: 1 }
          : { filter: "blur(10px)", opacity: 0 }
      }
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  )
}
