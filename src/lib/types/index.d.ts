export type Src = {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}

export type PhotoType = {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: Src
  liked: boolean
  alt: string
}

export type ExtendedPhoto = {
  next_page: string
  page: number
  per_page: number
  photos: PhotoType[]
  total_results: number
}