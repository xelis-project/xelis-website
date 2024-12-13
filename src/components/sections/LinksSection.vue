<template>
    <section id="links">
        <div class="left">
            <h2>Links</h2>
        </div>
        <div class="content">
            <div class="links">
                <a href="https://explorer.xelis.io/" target="_blank">Block Explorer</a>
                <a href="https://status.xelis.io/" target="_blank">Nodes Status</a>
                <a href="https://stats.xelis.io/" target="_blank">Network Statistics</a>
                <a href="https://docs.xelis.io/" target="_blank">Documentation</a>
                <a href="https://explorer.xelis.io/dag" target="_blank">DAG Viewer</a>
                <a href="https://github.com/xelis-project" target="_blank">Project Repository</a>
                <a href="https://docs.xelis.io/links/pools" target="_blank">Mining Pools</a>
                <a href="https://docs.xelis.io/links/seed_nodes" target="_blank">Seed Nodes</a>
                <a href="https://docs.xelis.io/developers-sdk" target="_blank">SDKs</a>
                <a href="https://docs.xelis.io/getting-started/bootstrap" target="_blank">Bootstrap</a>
                <a href="https://paperwallet.xelis.io/" target="_blank">Paper Wallet</a>
            </div>
            <!--<div class="title">/ Community</div>
            <div class="links">
                <a href="https://xeliscommunity.org/" target="_blank">Articles by Cyber</a>
            </div>-->
        </div>
    </section>
</template>

<script>

export default {
    name: "LinksSection",
    components: {

    }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#links {
    position: relative;
    z-index: 1;

    .content {
        display: flex;
        flex-direction: column;
    }

    .title {
        margin: 3rem 0;
        font-size: 2rem;
    }

    .links {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;

        a {
            border: thin solid rgb(255 255 255 / 70%);
            padding: .5rem 1rem;
            white-space: nowrap;

            &:hover {
                border: thin solid #02FFCF;
            }
        }
    }
}

@media screen and (max-width: 748px) {
    #links {
        .title {
            text-align: center;
        }

        .links {
            justify-content: center;
            gap: 1rem;
        }
    }
}
</style>