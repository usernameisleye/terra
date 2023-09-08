<script lang="ts">
    import { UserCircle2 } from "lucide-svelte"

    export let photographer: string
    export let photographer_url: string
</script>

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