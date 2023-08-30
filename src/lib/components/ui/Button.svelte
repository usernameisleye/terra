<script lang="ts">
    import { Loader2 } from "lucide-svelte"
    import { cn } from "../../utils"

    type Variant = "default" | "ghost" | "outline" | "secondary" | "link"
    type Size = "default" | "sm" | "lg" | "icon"

    export let variant: Variant = "default"
    export let size: Size = "default"

    export let styles: string = ""
    export let loading: boolean = false

    const getVar = () => {
        switch (variant) {
            case "default":
                return "default"
            case "ghost":
                return "ghost"
            case "secondary":
                return "secondary"
            case "link":
                return "link"
            case "outline":
                return "outline"
            default:
                return "default"
        }
    }

    const getSize = () => {
        switch (size) {
            case "default":
                return "default-sz"
            case "sm":
                return "sm"
            case "lg":
                return "lg"
            case "icon":
                return "icon"
            default:
                return "default-sz"
        }
    }
</script>

<!-- svelte-ignore missing-declaration -->
<button
    class={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", 
        styles,
        getVar(),
        getSize()
    )}
    disabled={loading}
    {...$$restProps}
    on:click
>
    {#if loading}
        <Loader2 class="mr-2 h-4 w-4 animate-spin" />
    {/if}
    <slot />
</button>

<style lang="postcss">
    .default {
        @apply bg-primary text-primary-foreground hover:bg-primary/90;
    }
    .ghost {
        @apply hover:bg-accent hover:text-accent-foreground;
    }
    .secondary {
        @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
    }
    .link {
        @apply text-primary underline-offset-4 hover:underline;
    }
    .outline {
        @apply border border-border outline-none bg-background hover:bg-accent hover:text-accent-foreground;
    }

    .default-sz {
        @apply h-10 px-4 py-2;
    }
    .sm {
        @apply h-9 rounded-md px-3;
    }
    .lg {
        @apply h-11 rounded-md px-8;
    }
    .icon {
        @apply h-10 w-10;
    }
</style>