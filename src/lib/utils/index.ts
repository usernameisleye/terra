import axios from "axios"
import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export const getRandom = (array: string[]) => {
  const random = Math.floor(Math.random()*array.length)
  return array[random]
}

export const fetchPhotos = async (url: string) => {
  const { data } = await axios.get(url, { headers: { Authorization: import.meta.env.VITE_API_KEY } })
  return data
}

const useBlob = (blob: Blob, alt: string) => {
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = alt
  link.click()

  return URL.revokeObjectURL(url)
}

export const downloadPhoto = (src: string, alt: string) => {
  fetch(src)
  .then(res => res.blob())
  .then(blob => {
    useBlob(blob, alt)
  })
  .catch(error => {
    console.error(error.message)
  })
}

export const sharePhoto = (src: string, alt: string) => {
  const data = {
      title: alt,
      text: alt,
      url: src,
  }

  navigator
  .share(data)
  .catch(error => {
    console.error(error.message)
  })
}