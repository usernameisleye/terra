<script lang="ts">  
  import { Button, Photographer } from "."
  import type { PhotoType } from "../types"
  import { downloadPhoto, sharePhoto } from "../utils"
  import { X, BadgeCheck, BadgeInfo, Share2 } from "lucide-svelte"

  export let photo: PhotoType
  export let open: boolean = false
  const { src, alt, photographer, photographer_url } = photo
  
  const infos = [
    {
      Icon: BadgeCheck,
      text: "Free to use"
    },
    {
      Icon: BadgeInfo,
      text: alt || "Free stock photo of random image"
    },
  ]

  const share = (src: string, alt: string) => {
    return sharePhoto(src, alt)
  }

  const download = (src: string, alt: string) => {
    return downloadPhoto(src, alt)
  }
</script>

<div class="fixed inset-0 place-items-center z-20 {open ? "grid" : "hidden"}">
  <div class="fixed inset-0 bg-black opacity-80" />

  <div class="relative h-[calc(100%-2rem)] w-5/6 rounded-md z-50 bg-popover text-popover-foreground overflow-y-scroll">
    <header class="bg-popover flex justify-between sticky top-0 z-10 p-4">
      <Photographer {photographer} {photographer_url} />

      <div class="inline-flex items-center gap-4">
        <Button on:click={() => download(src.original, alt)}>Download for free</Button>
        <Button size="icon" variant="secondary" on:click={() => {open = !open}}>
          <X />
        </Button>
      </div>
    </header>

    <div class="py-4 px-8">
      <div class="relative mx-auto my-4 w-2/5">
        <img
          {alt}
          src={src.original}
          class="h-full w-full object-cover"
        />
      </div>

      <div class="flex justify-between mt-6">
        <div class="flex gap-4 text-muted-foreground select-none">
          {#each infos as { Icon, text }, i}
            <div class="flex items-center gap-2">
              <Icon />
              <p>{text}</p>
            </div>
          {/each}
        </div>

        <div>
          <Button variant="outline" on:click={() => share(src.original, alt)}>
            <Share2 />
            <span class="ml-2">Share</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>