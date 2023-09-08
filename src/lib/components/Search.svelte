<script lang="ts">
  import { Button } from "."
  import { getRandom } from "../utils"
  import { topics } from "../constants"
  import { Search, Dices } from "lucide-svelte"

  let search: string = ""
  const searchPhoto = () => {
    if (!search.trim()) return
  }

  const genRandom = () => {
    const random = getRandom(topics)
    search = random
  }
</script>

<div class="flex items-center gap-3 flex-wrap lg:w-1/2">
  <div class="relative grow-[2]">
    <Search
      class="absolute text-sm left-2.5 w-4 inset-y-0 my-auto text-muted-foreground"
    />
    <input
      type="text"
      bind:value={search}
      spellcheck="true"
      placeholder="Search for any image topic (e.g Plane)"
      class="flex flex-1 h-12 w-full rounded-md border border-input bg-transparent px-8 text-sm ring-offset-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
  <Button
    size="lg"
    styles="text-md grow"
    title="Search"
    on:click={searchPhoto}
    disabled={search.length === 0}>
    Search
  </Button>
  <Button
    variant="secondary"
    size="icon"
    styles="hidden sm:inline-flex"
    title="Random topic🎲"
    on:click={genRandom}>
    <Dices />
  </Button>
</div>