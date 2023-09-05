<script lang="ts">
  import { Button, Dialog } from "."
  import type { PhotoType } from "../types"
  import { cn, downloadPhoto, sharePhoto } from "../utils"
  import { UserCircle2, Share2, ArrowDownFromLine } from "lucide-svelte"

  export let photo: PhotoType
  let open: boolean = false
  let displayImage: boolean = false

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

<article
  class="relative bg-mute rounded-md overflow-hidden mb-4 animate-enter bg-cover bg-center"
  style="background-image: url({src.small});"
>
  <button 
    class={cn("group invisible w-full h-full cursor-pointer transition-all duration-200", { "visible" : displayImage })}
    on:click={() => (open = true)}
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
        <div class="inline-flex items-center gap-3">
          <div class="h-10 w-10 bg-background text-muted-foreground hover:bg-accent grid place-items-center rounded-full border border-border outline-none">
            <UserCircle2 />
          </div>
          <a
            href={photographer_url}
            target="_blank"
            class="capitalize underline underline-offset-2"
          >
            {photographer}
          </a>
        </div>

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
  </button>
  <Dialog {open} />
</article>