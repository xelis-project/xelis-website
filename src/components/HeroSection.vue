<template>
    <div id="hero">
        <div class="hero-shell">
            <div class="hero-copy">
                <p class="eyebrow">Privacy-first Layer 1 · Rust BlockDAG</p>
                <p id="resume">
                    The world's first BlockDAG with <span>Privacy</span>, <span>Speed</span>, <span>Scalability</span> and <span>Smart Contracts</span>.
                </p>

                <div class="hero-tags">
                    <span>Homomorphic Encryption</span>
                    <span>Smart Contracts</span>
                    <span>CPU / GPU Friendly</span>
                </div>

                <h4>
                    Layer 1 + Rust + BlockDAG + Homomorphic Encryption + Smart Contracts — created by the people, for the people.
                </h4>
                <div class="hero-button">
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

            <div class="hero-highlights">
                <div class="highlight-card">
                    <p class="label">Block Time</p>
                    <p class="value">5s</p>
                    <p class="hint">Fast settlement without sacrificing decentralization.</p>
                </div>
                <div class="highlight-card">
                    <p class="label">Maximum Supply</p>
                    <p class="value">18.4M</p>
                    <p class="hint">Predictable emission tuned for longevity.</p>
                </div>
                <div class="highlight-card">
                    <p class="label">Network Edge</p>
                    <p class="value">BlockDAG</p>
                    <p class="hint">Parallel blocks for throughput and security.</p>
                </div>
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
    position: relative;

    .hero-shell {
        display: grid;
        grid-template-columns: 3fr 1.5fr;
        gap: 4rem;
        align-items: stretch;
        padding: 5rem;
        border: 1px solid var.$border-soft;
        border-radius: 2.4rem;
        background: linear-gradient(145deg, rgba(10, 17, 20, 0.8), rgba(6, 12, 15, 0.6));
        box-shadow: var.$glow, 0 25px 60px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 20% 20%, rgba(2, 255, 207, 0.16), transparent 35%),
                        radial-gradient(circle at 90% 0%, rgba(0, 52, 42, 0.22), transparent 40%);
            z-index: -1;
        }
    }

    .hero-copy {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
    }

    .eyebrow {
        font-size: 1.4rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var.$muted;
    }

    p {
        font-size: 1.5rem;
        font-weight: 600;
    }
    #resume {
        padding-right: 10%;
        font-size: 5.8rem;
        line-height: 7.4rem;
        font-family: "Helios Bold";
        letter-spacing: -0.02em;
        span {
            font-family: "Helios Bold";
            color: var.$ascent-color;
            text-shadow: 0 0 28px rgba(2, 255, 207, 0.4);
        }
    }

    .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        span {
            border: 1px solid var.$border-soft;
            background: rgba(255, 255, 255, 0.03);
            color: var.$white;
            padding: 0.8rem 1.4rem;
            border-radius: 999px;
            font-size: 1.2rem;
            letter-spacing: 0.05em;
        }
    }

    h4 {
        font-size: 2.2rem;
        opacity: .78;
        line-height: 3.4rem;
        color: var.$muted;
    }

    .hero-button {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 1rem;
    }
    .hero-button-links {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        flex-wrap: wrap;
    }

    .hero-highlights {
        display: grid;
        gap: 1.2rem;
    }

    .highlight-card {
        border: 1px solid var.$border-strong;
        background: linear-gradient(180deg, rgba(2, 255, 207, 0.06), rgba(6, 12, 15, 0.85));
        border-radius: 1.6rem;
        padding: 2rem;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 20px 50px rgba(0, 0, 0, 0.45);
        display: grid;
        gap: 0.6rem;

        .label {
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var.$muted;
            font-size: 1.2rem;
            margin: 0;
        }

        .value {
            font-family: "Helios Bold";
            font-size: 3.6rem;
            margin: 0;
            color: var.$ascent-color;
        }

        .hint {
            color: rgba(245, 247, 251, 0.7);
            font-size: 1.4rem;
            margin: 0;
        }
    }

    @media screen and (max-width: 1200px) {
        .hero-shell {
            grid-template-columns: 1fr;
            padding: 4rem;
        }

        #resume {
            padding-right: 0;
            font-size: 5rem;
            line-height: 6rem;
        }
    }

    @media screen and (max-width: 748px) {
        .hero-shell {
            padding: 3rem;
        }

        #resume {
            font-size: 4rem;
            padding-right: 0;
            line-height: 5rem;
        }
        
        h4 {
            font-size: 1.9rem;
        }

        .hero-button-links {
            flex-direction: column;
            width: 100%;
            align-items: start;
        }
    }
}
</style>