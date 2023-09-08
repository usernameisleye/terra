<script lang="ts">
  import axios from "axios"
  import { Button } from "."
  import { getRandom } from "../utils"
  import { topics } from "../constants"
  import { Search, Dices } from "lucide-svelte"
  import { createMutation } from "@tanstack/svelte-query"
  import { photos } from "../stores"

  let search: string = ""
  let error: boolean = false

  const genRandom = () => {
    const random = getRandom(topics)
    search = random
  }

  const query = createMutation({
    mutationKey: ["search-photo"],
    mutationFn: async ({ search }: { search: string }) => {
      if (!search.trim()) return

      const { data } = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}`,
        { headers: { Authorization: import.meta.env.VITE_API_KEY } }
      )
      photos.set(data.photos)
      return data
    },
    onError: () => {
      error = true
      search = ""
    },
    onSuccess: () => {
      error = false
      search = ""
    },
  })
</script>

<svelte:document
  on:keypress={(e) => {
    if (e.key === "Enter") {
      $query.mutate({ search })
    }
  }}
/>
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

    {#if error}
      <span class="absolute bottom-14 lg:-bottom-6 text-sm text-red-500 h-fit"
        >Could not get search results</span
      >
    {/if}
  </div>
  <Button
    size="lg"
    title="Search"
    styles="text-md grow"
    loading={$query.isLoading}
    disabled={search.length < 3}
    on:click={() => $query.mutate({ search })}
  >
    Search
  </Button>
  <Button
    variant="secondary"
    size="icon"
    styles="hidden sm:inline-flex"
    title="Random topic🎲"
    on:click={genRandom}
  >
    <Dices />
  </Button>
</div>
