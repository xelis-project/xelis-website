<template>
    <section id="mining">
        <div class="left">
            <h2>Miner<br/>Section</h2>
        </div>
        <div class="right">
            <p>
                Miner software is used to generate new blocks on the XELIS network and secure it using the
                Proof-of-Work (PoW) consensus.
            </p>
            <p>
                Each block found and accepted by the network gives a reward
                (called "Coinbase") to the miner address in exchange of its work.
            </p>
            <a
                class="button"
                href="https://github.com/xelis-project/xelis-blockchain"
                target="_blank"
            >
                <button class="big">
                    <GithubLogo/>
                    <span>GitHub</span>
                </button>
            </a>
        </div>
    </section>
</template>

<script>
import GithubLogo from '@/components/GithubLogo.vue';

export default {
    name: "MinersSection",
    components: {
        GithubLogo,
    }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#mining {
    display: flex;
    gap: clamp(3rem, 7vw, 11rem);
    position: relative;
    z-index: 1;
    padding: clamp(3rem, 5vw, 5rem);
    border: 1px solid var.$border-soft;
    border-radius: 0.8rem;
    background: linear-gradient(150deg, rgba(10, 17, 20, 0.48), rgba(6, 12, 15, 0.76));
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);

    > div {
        flex: 1;
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            color: rgba(245, 247, 251, 0.78);
            line-height: 1.6;
        }
    }

    .circuit {
        z-index: -1;
        position: absolute;
        top: -75vh;
        left: -30vh;
        width: 100%;
    }
    .button {
        margin-top: 2rem;
    }
}

@media screen and (max-width: 1100px) {
    #mining {
        h2 {
            margin: 0;
        }
        flex-direction: column;
        gap: 2rem;

        .button {
            margin-top: 2rem;
        }

        .circuit {
            top: -50vh;
            left: -10vh;
        }
    }
}

@media screen and (max-width: 748px) {
    #mining {
        .button {
            display: flex;
            justify-content: center;
        }

        .circuit {
            top: unset;
            bottom: -380%;
            left: -30vh;
            width: 100rem;
        }
    }
}
</style>
