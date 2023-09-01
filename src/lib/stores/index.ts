import { writable } from "svelte/store"
import type { PhotoType } from "../types"

export const photos = writable<PhotoType[]>([])