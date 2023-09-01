<script lang="ts">
  import { Photo as PhotoComponent } from "."
  import { photos } from "../stores"
  import { Loader2 } from "lucide-svelte"
</script>

<div class="relative w-full">
    <div class="flex flex-col items-center">
        <div class="columns-2 lg:columns-3 w-full">
            {#each $photos as photo (photo.id)}
              <PhotoComponent {photo} />
            {:else}
              <div class="absolute pt-2 pb-8 text-muted-foreground w-full">
                <Loader2 size={50} class="animate-spin mx-auto" />
              </div>
            {/each}
        </div>
    </div>
</div>