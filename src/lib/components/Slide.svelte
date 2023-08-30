<script>
  import { Icons } from "."
</script>

<div class="slide relative overflow-hidden flex gap-4 max-h-28 max-w-4xl m-auto">
    {#each Array.from({ length: 2 }) as _, i}
        <div class="flex gap-4 w-[calc(7rem*15)] animate-scroll">
            <Icons />
        </div>
    {/each}
</div>

<style lang="postcss">
    .slide::after,
    .slide::before {
        @apply absolute top-0 content-[''] h-full w-32 from-background to-transparent z-10;
    }
    .slide::before {
        @apply left-0 bg-gradient-to-r;
    }
    .slide::after {
        @apply right-0 bg-gradient-to-l;
    }
</style>