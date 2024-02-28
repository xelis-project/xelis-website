<template>
    <div id="hero">
        <p>
            A new era of cryptocurrency is here.
        </p>
        <p id="resume">
            <span>XELIS</span> is an innovative cryptocurrency built from scratch to preserve privacy and developed in Rust for guaranteed memory security.
        </p>
        <div class="hero-button">
            <h4>
                BlockDAG + Homomorphic Encryption +  Smart Contracts - join the technological revolution.
            </h4>
            <a
                class="button"
                href="https://github.com/xelis-project/xelis-blockchain"
                target="_blank"
            >
                <button class="big">
                    <GithubLogo/>
                    <span>
                        GitHub
                    </span>
                </button>
            </a>
        </div>
    </div>
</template>

<script>
import GithubLogo from '@/components/GithubLogo.vue';

export default {
    name: "HeroSection",
    components: { GithubLogo }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#hero {
    p {
        font-size: 1.5rem;
        font-weight: 600;
    }
    #resume {
        margin-top: 3.9rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.8);
        padding-bottom: 3.4rem;
        padding-right: 15%;
        font-size: 3.5rem;
        font-family: "Helios Bold";
        span {
            font-family: "Helios Bold";
            color: var.$ascent-color;
        }
    }
    .hero-button {
        margin-top: 3.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

@media screen and (max-width: 748px) {
    .header-content {
        margin-top: -4rem;
        #hero {
            #resume {
                font-size: 2.5rem;
                padding-right: 0;
            }
            .hero-button {
                flex-direction: column;
                gap: 2rem;
            }
        }
    }

}
</style>