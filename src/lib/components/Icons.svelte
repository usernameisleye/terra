<script lang="ts">
    import { icons } from "../constants"
</script>

{#each icons as { Icon, text }, i }
    <div class="bg-muted h-14 w-14 grid place-items-center rounded-full border border-muted-foreground text-muted-foreground hover:text-foreground hover:scale-95">
        <Icon />
    </div>
{/each}