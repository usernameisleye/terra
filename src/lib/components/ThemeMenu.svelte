<script lang="ts">
    import { onMount } from "svelte"
    import {
        Menu,
        MenuItem,
        MenuItems,
        MenuButton,
        Transition
    } from "@rgossiaux/svelte-headlessui"
    import { Sun, Moon, Monitor } from "lucide-svelte"

    let theme: string
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

    const setTheme = (theme: string) => document.documentElement.setAttribute("class", theme)

    const checkTheme = () => {
        if(systemTheme) {
            theme = "dark"
        }
        else {
            theme = "light"
        }
        return theme
    }

    const defaultTheme = () => {
        const check = checkTheme()
        setTheme(check)
    }

    onMount(() => {
        defaultTheme()
    })

    const light = () => {
        theme = "light"
        setTheme("light")
    }
    const dark = () => {
        theme = "dark"
        setTheme("dark")
    }
    const system = () => {
        defaultTheme()
        theme = "system"
    }

    const themes = [
        {
            Icon: Sun,
            text: "Light",
            click: light
        },
        {
            Icon: Moon,
            text: "Dark",
            click: dark
        },
        {
            Icon: Monitor,
            text: "System",
            click: system
        }
    ]
</script>

<Menu class="relative">
    <MenuButton class="bg-transparent hover:bg-accent text-accent-foreground p-1.5 inline-flex items-center justify-center gap-2 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900">
        {#if theme === "light"}
            <Sun /> <span>Light</span>
        {:else if theme === "dark"}
            <Moon /> <span>Dark</span>
        {:else}
            <Monitor /> <span>System</span>
        {/if}
    </MenuButton>
    <Transition
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
    >
        <MenuItems class="absolute right-0 z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 mt-2 text-popover-foreground shadow-md animate-in">
            {#each themes as { Icon, text, click }, i}
                <MenuItem let:active on:click={click}>
                    <div class:active class="flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-zinc-100">
                        <Icon size={18} />
                        <span>{text}</span>
                    </div>
                </MenuItem>
            {/each}
        </MenuItems>
    </Transition>
</Menu>

<style lang="postcss">
    .active {
        @apply bg-accent text-accent-foreground cursor-pointer;
    }
</style>