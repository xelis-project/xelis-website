<template>
    <section id="nodes_container">
        <h2>Nodes</h2>
        <div id="nodes">
            <p>
                Support and secure the network by running your own node. This improves your privacy and the decentralization of the network.
                <br />
                No technical knowlegde is needed, download the software and run it !
            </p>
            <a
                target="_blank"
                href="https://github.com/xelis-project/xelis-blockchain/releases"
                class="button"
            >
                <button  class="big">
                    Download
                </button>
                <CircuitImg />
            </a>
        </div>
    </section>
</template>

<script>
import CircuitImg from "@/components/CircuitImg.vue";

export default {
    name: "NodesSection",
    components: {
        CircuitImg
    },
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#nodes_container {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -300%;
      left: -50%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 100vw;
      height: calc(560.003px / 1920px) * 100vw;
      background: rgba(0, 170, 150, 0.2);
      transform: rotate(-120deg);
      filter: blur(55px);
      border-radius: 50%;
    }

    #nodes {
        display: flex;
        gap: 11rem;
        padding-right: 10rem;
    }

    .button {
        position: relative;
    }

    button {
        padding: 2rem 6rem;
        z-index: 10;
        position: relative;
    }

    .circuit {
        z-index: -1;
        position: absolute;
        top: -100rem;
        left: -45rem;
        // top: -615%;
        // left: 36%;
        opacity: 0.75;
    }
}

@media screen and (max-width: 748px) {
    #nodes_container {
        #nodes {
            padding: 0;
            flex-direction: column;
            gap: 3rem;
            align-items: center;

            p {
                text-align: center;
            }


            .circuit {
                width: 80rem;
                top: -91rem;
                left: -20rem;
            }
        }
    }
}
</style>