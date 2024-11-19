<template>
    <div id="hero">
        <p id="resume">
            XELIS is the world's first BlockDAG with <span>Privacy</span>, <span>Speed</span>, <span>Scalability</span> and <span>Smart Contracts</span>.
        </p>
        <div class="hero-button">
            <h4>
                Layer 1 + Rust + BlockDAG + Homomorphic Encryption + Smart Contracts - created by the people, for the people.
            </h4>
            <div class="hero-button-links">
                <a class="button" href="https://github.com/xelis-project/xelis-blockchain" target="_blank">
                    <button class="big">
                        <GithubLogo/>
                        <span>GitHub</span>
                    </button>
                </a>
                <a class="button" href="https://whitepaper.xelis.io" target="_blank">
                    <button class="big">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13 2.5V9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 17H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 13H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 9H9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Whitepaper</span>
                    </button>
                </a>
            </div>
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
        padding-right: 15%;
        font-size: 6rem;
        line-height: 8rem;
        font-family: "Helios Bold";
        span {
            font-family: "Helios Bold";
            color: var.$ascent-color;
        }
    }
    h4 {
        font-size: 2.5rem;
        opacity: .6;
    }
    .hero-button {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        align-items: center;
    }
    .hero-button-links {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
}

@media screen and (max-width: 1200px) {
    #hero {
        #resume {
            padding-right: 0;
            font-size: 5rem;
            line-height: 6rem;
        }
        .hero-button {
            flex-direction: column;
            gap: 2rem;
        }
    }
}

@media screen and (max-width: 748px) {
    #hero {
        #resume {
            font-size: 4rem;
            padding-right: 0;
            line-height: 5rem;
        }
        
        h4 {
            font-size: 2rem;
        }

        .hero-button-links {
            flex-direction: column;
            width: 100%;
            align-items: start;
        }
    }
}
</style>