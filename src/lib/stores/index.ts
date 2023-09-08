import { readable, writable } from "svelte/store"
import type { PhotoType } from "../types"

export const photos = writable<PhotoType[]>()

export const modal = writable<boolean>(true)

export let intersection = readable(false, (set) => {
  const target = document.querySelector("")

  if (!target) return

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    set(entry.isIntersecting)
  })

  observer.observe(target)

  // Cleanup when component unmounts
  return () => {
    observer.unobserve(target)
    observer.disconnect()
  }
})