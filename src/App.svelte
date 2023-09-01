<script lang="ts">
  import { onMount } from "svelte"
  import { photos } from "./lib/stores"
  import { fetchPhotos } from "./lib/utils"
  import { Grid, Navbar, Search, Slide } from "./lib/components"

  onMount(async () => {
    try {
      const data = await fetchPhotos(`https://api.pexels.com/v1/curated?page=${1}&per_page=${20}`)      
      photos.set(data.photos)
    }
    catch (err: any) {
      console.log(err.message)
    }
  })
</script>

<Navbar />
<main class="relative flex flex-col min-h-screen">
  <div class="flex-1">
    <div class="container relative">
      <header class="flex flex-col items-center min-h-[50vh] mx-4 my-12 text-center md:my-20">
        <div class="my-auto">
          <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Terra: A {" "}
            <span class="bg-[url('/images/bg.jpeg')] bg-clip-text text-transparent bg-cover select-none">Visual Journey</span> Around The Globe
          </h1>
          <p class="text-muted-foreground leading-8 text-md max-w-3xl mt-2 mx-auto md:text-lg">
            Immerse yourself in a curated collection of photographs capturing the
            enchanting landscapes and natural wonders of Terra. Discover the
            world's beauty in every click.
          </p>
        </div>

        <Slide />
      </header>

      <section class="grid gap-6">
        <div class="flex justify-between items-center gap-8 flex-wrap mb-8">
          <div class="space-y-2">
            <h2 class="text-2xl font-bold tracking-tight md:text-3xl">Captivating <span class="bg-gradient-to-br from-teal-500 to-transparent bg-clip-text text-transparent">Image Gallery</span></h2>
            <p class="text-md mt-1 text-muted-foreground">Discover a World of Visual Delights with Captivating Photographs</p>
          </div>

          <Search />
        </div>

        <Grid />
      </section>
    </div>
  </div>
</main>

<style>
  :global(*::-webkit-scrollbar) {
    display: none;
  }
</style>