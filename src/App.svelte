<script lang="ts">
  import { Grid, Navbar, Search, Slide } from "./lib/components"
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query"

  const client = new QueryClient()
</script>

<QueryClientProvider {client}>
<Navbar />
<main class="relative flex flex-col min-h-screen">
  <div class="flex-1">
    <div class="container relative">
      <header class="flex flex-col items-center min-h-[50vh] mx-4 my-12 text-center md:my-20">
        <div class="my-auto z-10">
          <h1 class="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
            Terra: A {" "}
            <span class="bg-[url('/images/bg.jpeg')] bg-clip-text text-transparent bg-cover select-none">Visual Journey</span> Around The Globe
          </h1>
          <p class="text-muted-foreground leading-8 text-md max-w-3xl mt-3 mx-auto md:text-lg">
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
</QueryClientProvider>

<style lang="postcss">
  :global(*::-webkit-scrollbar) {
    @apply hidden;
  }
</style>