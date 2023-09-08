<script lang="ts">
    import { Button, Logo, ThemeMenu } from "."
    import { Github, Twitter } from "lucide-svelte"

    const buttons = [
        {
            href: "https://github.com/usernameisleye/terra",
            Icon: Github,
            title: "Github"
        },
        {
            href: "https://twitter.com/usernameisleye",
            Icon: Twitter,
            title: "Twitter"
        },
    ]
</script>

<nav class="fixed top-0 inset-x-0 z-20 p-3 border-b border-border bg-background/60 backdrop-blur">
    <div class="container flex items-center justify-between gap-2">
        <Logo />

        <div class="flex gap-2">
            {#each buttons as { href, Icon, title }, i}
                <a {href} target="_blank" rel="noreferrer noopener">
                    <Button variant="outline" size="icon" {title} styles="text-muted-foreground">
                        <Icon />
                    </Button>
                </a>
            {/each}

            <ThemeMenu />
        </div>
    </div>
</nav>