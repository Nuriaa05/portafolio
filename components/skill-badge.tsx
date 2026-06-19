"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  image: string
}

export function SkillBadge({ name, image }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col items-center gap-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-zinc-900/60 border border-zinc-700/50 overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={`${name} logo`}
              className="w-12 h-12 object-contain"
            />
          </div>

          <div className="text-center font-medium text-lg">{name}</div>
        </div>
      </div>
    </motion.div>
  )
}
