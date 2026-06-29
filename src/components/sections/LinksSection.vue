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
    padding: clamp(3rem, 5vw, 5rem);
    border: 1px solid var.$border-soft;
    border-radius: 0.8rem;
    background: linear-gradient(150deg, rgba(10, 17, 20, 0.48), rgba(6, 12, 15, 0.76));
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);

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
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 0.6rem;
            padding: 0.85rem 1.2rem;
            background: rgba(255, 255, 255, 0.025);
            white-space: nowrap;

            &:hover {
                border: 1px solid #02FFCF;
                background: rgba(2, 255, 207, 0.06);
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
