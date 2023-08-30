<script lang="ts">
  import { Navbar, Slide } from "./lib/components"
</script>

<Navbar />
<main class="relative flex flex-col min-h-screen">
  <header class="flex-1">
    <div class="container relative">
      <div class="flex flex-col items-center gap-3 px-4 py-8 text-left md:pt-16">
        <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Terra: A {" "}
          <span class="bg-[url('/images/bg.jpeg')] bg-clip-text text-transparent bg-cover select-none">Visual Journey</span> Around The Globe
        </h1>
        <p class="text-muted-foreground leading-8 text-md max-w-3xl md:text-lg">
          Immerse yourself in a curated collection of photographs capturing the
          enchanting landscapes and natural wonders of Terra. Discover the
          world's beauty in every click
        </p>
      </div>

      <Slide />
    </div>
  </header>
</main>

<style>
  :global(*::-webkit-scrollbar) {
    display: none;
  }
</style>
