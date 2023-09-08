<script lang="ts">
  import axios from "axios"
  import { Photo, Button } from "."
  import { Loader2 } from "lucide-svelte"
  import { createInfiniteQuery } from "@tanstack/svelte-query"

  const SCROLL_LIMIT = 10
  const query = createInfiniteQuery({
    queryKey: ["infinite-photos"],
    queryFn: async ({ pageParam = 1 }) => {
      const url = `https://api.pexels.com/v1/curated?page=${pageParam}&per_page=${SCROLL_LIMIT}`
      const { data } = await axios.get(url, {
        headers: { Authorization: import.meta.env.VITE_API_KEY },
      })
      return data
    },
    //@ts-ignore
    getNextPageParam: (_, pages) => {
      return pages.length + 2 // Or 1
    },
  })

  const { error }: { error: any } = $query
</script>

{#if $query.isLoading}
  <Loader2 class="animate-spin mx-auto my-4" />
{/if}
{#if $query.error}
  <span>Error: {error.message}</span>
{/if}
{#if $query.isSuccess}
  <div class="relative w-full">
    <div class="flex flex-col items-center">
      <div class="columns-1 sm:columns-2 lg:columns-3 w-full">
        {#each $query.data.pages as { photos }}
          {#each photos as photo (photo.id)}
            <Photo {photo} />
          {/each}
          {:else}
            <h2 class="my-4 mx-auto text-3xl">Sorry, there are no photos available</h2>
        {/each}
      </div>
    </div>
  </div>

  <div class="w-fit mx-auto my-4">
    <Button
      variant="secondary"
      on:click={() => $query.fetchNextPage()}
      disabled={$query.isFetchingNextPage}
      loading={$query.isFetchingNextPage}
    >
      Load more photos
    </Button>
  </div>
{/if}