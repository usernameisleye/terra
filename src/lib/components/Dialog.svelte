<script lang="ts">
  export let open: boolean

  console.log(open)
</script>

<div class="fixed inset-0 place-items-center z-20 {open ? "grid" : "hidden"}">
  <div class="fixed inset-0 bg-background/70" />
  <div class="relative h-24 w-24 rounded-md z-50 bg-white/30">

    <button on:click={() => (open = false)}>Close</button>
  </div>
</div>
<!-- class={cn("fixed inset-0 hidden place-items-center z-20", { "grid": open })} -->