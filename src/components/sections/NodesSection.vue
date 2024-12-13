<template>
    <section id="nodes">
        <h2>Nodes</h2>
        <div id="nodes_container">
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
                <button class="big">
                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071L7.2929 11.7071C6.90238 11.3166 6.90238 10.6834 7.2929 10.2929C7.68342 9.90237 8.31659 9.90237 8.70711 10.2929L11 12.5858V4C11 3.44772 11.4477 3 12 3ZM4.00001 14C4.55229 14 5.00001 14.4477 5.00001 15C5.00001 15.9772 5.00485 16.3198 5.05765 16.5853C5.29437 17.7753 6.22466 18.7056 7.41474 18.9424C7.68018 18.9952 8.02276 19 9.00001 19H15C15.9772 19 16.3198 18.9952 16.5853 18.9424C17.7753 18.7056 18.7056 17.7753 18.9424 16.5853C18.9952 16.3198 19 15.9772 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15C21 15.0392 21 15.0777 21 15.1157C21.0002 15.9334 21.0004 16.4906 20.9039 16.9755C20.5094 18.9589 18.9589 20.5094 16.9755 20.9039C16.4907 21.0004 15.9334 21.0002 15.1158 21C15.0778 21 15.0392 21 15 21H9.00001C8.96084 21 8.92225 21 8.88423 21C8.06664 21.0002 7.50935 21.0004 7.02456 20.9039C5.0411 20.5094 3.49061 18.9589 3.09608 16.9755C2.99965 16.4906 2.99978 15.9334 2.99999 15.1158C3 15.0777 3.00001 15.0392 3.00001 15C3.00001 14.4477 3.44772 14 4.00001 14Z" />
                    </svg>
                    <span>Download</span>
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


#nodes {
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

    #nodes_container {
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
        opacity: 0.5;
    }
}

@media screen and (max-width: 748px) {
    #nodes {
        #nodes_container {
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