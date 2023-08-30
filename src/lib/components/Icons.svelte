<script lang="ts">
    import { icons } from "../constants"
</script>

{#each icons as { Icon, text }, i }
    <div class="bg-muted p-3 rounded-full border border-muted-foreground text-muted-foreground w-fit cursor-pointer hover:text-foreground hover:scale-95" title={text}>
        <Icon />
    </div>
{/each}