<script lang="ts">
  import type { PhotoType } from "../types"
  import { Button, Dialog, Photographer } from "."
  import { cn, downloadPhoto, sharePhoto } from "../utils"
  import { Share2, ArrowDownFromLine } from "lucide-svelte"

  export let photo: PhotoType
  let displayImage: boolean = false
  let open: boolean = false

  const share = (src: string, alt: string) => {
    return sharePhoto(src, alt)
  }

  const download = (src: string, alt: string) => {
    return downloadPhoto(src, alt)
  }

  const buttons = [
    {
      Icon: Share2,
      title: "Share",
      click: share,
    },
    {
      Icon: ArrowDownFromLine,
      title: "Download",
      click: download,
    },
  ]

  const { src, alt, photographer, photographer_url } = photo

  const done = () => {
    displayImage = true
  }
</script>

<button
  class="relative bg-muted rounded-md overflow-hidden mb-4 bg-cover bg-center"
  on:click={() => {
    open = !open
  }}
>
  <div
    class={cn(
      "group invisible w-full h-full cursor-pointer transition-all duration-200",
      { visible: displayImage }
    )}
  >
    <img
      src={src.original}
      {alt}
      on:load={done}
      loading="lazy"
      class="h-full w-full overflow-clip object-cover group-hover:scale-110 duration-200"
    />

    <div class="absolute -bottom-full w-full transition-all duration-300 group-hover:bottom-0">
      <div class="flex justify-between p-2 bg-gradient-to-t from-background to-transparent">
        <Photographer {photographer} {photographer_url} />

        <div class="inline-flex items-center gap-3">
          {#each buttons as { Icon, title, click }, i}
            <Button
              variant="outline"
              size="icon"
              {title}
              styles="text-muted-foreground rounded-full"
              on:click={() => click(src.original, alt)}
            >
              <Icon size={20} />
            </Button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</button>
{#if displayImage}
  <Dialog {photo} {open} />
{/if}
