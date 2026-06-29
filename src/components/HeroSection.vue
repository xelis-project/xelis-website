<template>
    <div
        id="hero"
        ref="hero"
        @pointermove="moveHeroVisual"
        @pointerleave="resetHeroVisual"
    >
        <div class="hero-shell">
            <div class="hero-copy">
                <p class="eyebrow"><span></span>Privacy-first Layer 1 / Rust BlockDAG</p>
                <h1>XELIS</h1>
                <p id="resume" class="hero-statement">
                    The world's first BlockDAG with <span>Privacy</span>, <span>Speed</span>, <span>Scalability</span>, and <span>Smart Contracts</span>.
                </p>

                <h4>
                    A confidential Layer 1 network built in Rust for parallel settlement, programmable assets, and open participation.
                </h4>

                <div class="hero-actions">
                    <a class="button" href="https://github.com/xelis-project/xelis-blockchain" target="_blank" rel="noopener">
                        <button class="big">
                            <GithubLogo/>
                            <span>GitHub</span>
                        </button>
                    </a>
                    <a class="button secondary" href="https://whitepaper.xelis.io" target="_blank" rel="noopener">
                        <button class="big">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13 2.5V9H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 17H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 13H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 9H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Whitepaper</span>
                        </button>
                    </a>
                </div>

                <div class="hero-tags">
                    <span>Homomorphic Encryption</span>
                    <span>Smart Contracts</span>
                    <span>CPU / GPU Friendly</span>
                </div>
            </div>

            <div class="hero-visual" aria-hidden="true">
                <div class="visual-shell">
                    <div class="orbit orbit-one"><span></span></div>
                    <div class="orbit orbit-two"><span></span></div>
                    <div class="orbit orbit-three"><span></span></div>
                    <XelisLogo />
                    <div class="visual-node node-privacy">
                        <strong>Privacy</strong>
                    </div>
                    <div class="visual-node node-speed">
                        <strong>Speed</strong>
                    </div>
                    <div class="visual-node node-scale">
                        <strong>Scalability</strong>
                    </div>
                    <div class="visual-node node-contracts">
                        <strong>Smart Contracts</strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-highlights">
            <div class="highlight-card">
                <p class="label">Block Time</p>
                <p class="value">5s</p>
                <p class="hint">Fast settlement with parallel block flow.</p>
            </div>
            <div class="highlight-card">
                <p class="label">Maximum Supply</p>
                <p class="value">18.4M</p>
                <p class="hint">Predictable emission tuned for longevity.</p>
            </div>
            <div class="highlight-card">
                <p class="label">Execution</p>
                <p class="value">XVM</p>
                <p class="hint">Smart contracts for confidential apps.</p>
            </div>
        </div>
    </div>
</template>

<script>
import GithubLogo from '@/components/GithubLogo.vue';
import XelisLogo from '@/components/XelisLogo.vue';

export default {
    name: "HeroSection",
    components: { GithubLogo, XelisLogo },
    data() {
        return {
            parallaxFrame: null,
            pendingParallax: null,
        };
    },
    beforeUnmount() {
        if (this.parallaxFrame) {
            cancelAnimationFrame(this.parallaxFrame);
        }
    },
    methods: {
        moveHeroVisual(event) {
            if (event.pointerType === 'touch') {
                return;
            }

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.resetHeroVisual();
                return;
            }

            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

            this.pendingParallax = {
                x: Math.max(-1, Math.min(1, x)),
                y: Math.max(-1, Math.min(1, y)),
            };

            if (!this.parallaxFrame) {
                this.parallaxFrame = requestAnimationFrame(() => this.applyHeroParallax());
            }
        },
        applyHeroParallax() {
            const hero = this.$refs.hero;
            const position = this.pendingParallax || { x: 0, y: 0 };

            if (hero) {
                hero.style.setProperty('--hero-x-near', `${position.x * -22}px`);
                hero.style.setProperty('--hero-y-near', `${position.y * -18}px`);
                hero.style.setProperty('--hero-x-mid', `${position.x * -14}px`);
                hero.style.setProperty('--hero-y-mid', `${position.y * -12}px`);
                hero.style.setProperty('--hero-x-soft', `${position.x * -8}px`);
                hero.style.setProperty('--hero-y-soft', `${position.y * -7}px`);
                hero.style.setProperty('--hero-x-far', `${position.x * 10}px`);
                hero.style.setProperty('--hero-y-far', `${position.y * 8}px`);
                hero.style.setProperty('--hero-tilt-x', `${position.y * 3}deg`);
                hero.style.setProperty('--hero-tilt-y', `${position.x * -4}deg`);
            }

            this.parallaxFrame = null;
        },
        resetHeroVisual() {
            this.pendingParallax = { x: 0, y: 0 };

            if (this.parallaxFrame) {
                cancelAnimationFrame(this.parallaxFrame);
                this.parallaxFrame = null;
            }

            this.applyHeroParallax();
        },
    },
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#hero {
    --hero-x-near: 0px;
    --hero-y-near: 0px;
    --hero-x-mid: 0px;
    --hero-y-mid: 0px;
    --hero-x-soft: 0px;
    --hero-y-soft: 0px;
    --hero-x-far: 0px;
    --hero-y-far: 0px;
    --hero-tilt-x: 0deg;
    --hero-tilt-y: 0deg;

    position: relative;
    min-height: calc(100svh - 16rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding: 4rem 0 7rem;

    .hero-shell {
        display: grid;
        grid-template-columns: minmax(0, 1.08fr) minmax(36rem, 0.92fr);
        gap: clamp(4rem, 7vw, 10rem);
        align-items: center;
        position: relative;
        background: transparent;
        border: 0;
        box-shadow: none;
    }

    .hero-copy {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        max-width: 86rem;
    }

    .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.4rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var.$muted;

        span {
            width: 3.2rem;
            height: 1px;
            background: linear-gradient(90deg, var.$ascent-color, rgba(245, 217, 95, 0.8));
            box-shadow: 0 0 16px rgba(2, 255, 207, 0.55);
        }
    }

    h1 {
        margin: 0;
        font-family: "Helios Bold";
        font-size: clamp(8rem, 11vw, 17rem);
        line-height: 0.82;
        letter-spacing: 0;
        color: var.$white;
        text-shadow: 0 0 44px rgba(2, 255, 207, 0.24);
    }

    #resume {
        max-width: 78rem;
        font-size: clamp(3rem, 3.9vw, 6.4rem);
        line-height: 1.12;
        font-family: "Helios Bold";
        letter-spacing: 0;

        span {
            font-family: "Helios Bold";
            color: var.$ascent-color;
            text-shadow: 0 0 28px rgba(2, 255, 207, 0.4);
        }
    }

    h4 {
        max-width: 62rem;
        margin: 0;
        font-size: 2.2rem;
        font-weight: 500;
        opacity: .84;
        line-height: 1.55;
        color: var.$muted;
    }

    .hero-actions {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        flex-wrap: wrap;
        margin-top: 0.8rem;
    }

    .button.secondary {
        button {
            color: var.$white;
            background: rgba(255, 255, 255, 0.045);
            border-color: rgba(255, 255, 255, 0.18);
            box-shadow: none;
            backdrop-filter: blur(10px);
        }

        svg {
            color: var.$ascent-color;
        }

        &:hover {
            button {
                border-color: var.$border-strong;
                background: rgba(2, 255, 207, 0.08);
            }
        }
    }

    .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 0.4rem;

        span {
            border: 1px solid rgba(255, 255, 255, 0.11);
            background: rgba(255, 255, 255, 0.035);
            color: var.$white;
            padding: 0.75rem 1.1rem;
            border-radius: 0.6rem;
            font-size: 1.2rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }

    .hero-visual {
        position: relative;
        min-height: 54rem;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 90rem;

        &:before {
            content: "";
            position: absolute;
            inset: 9% 0 4% 10%;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 0.8rem;
            transform: translate3d(var(--hero-x-far), var(--hero-y-far), 0) skewY(-4deg);
            transition: transform 260ms ease-out;
            will-change: transform;
            background:
                linear-gradient(130deg, rgba(245, 217, 95, 0.08), transparent 28%),
                linear-gradient(180deg, rgba(2, 255, 207, 0.09), rgba(6, 12, 15, 0.18));
            box-shadow: inset 0 0 80px rgba(2, 255, 207, 0.06);
        }
    }

    .visual-shell {
        position: relative;
        width: min(48rem, 100%);
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        transform: rotateX(var(--hero-tilt-x)) rotateY(var(--hero-tilt-y));
        transform-style: preserve-3d;
        transition: transform 220ms ease-out;
        will-change: transform;
    }

    .visual-shell .logo {
        width: 42%;
        height: 42%;
        color: rgba(2, 255, 207, 0.76);
        filter: drop-shadow(0 0 32px rgba(2, 255, 207, 0.35));
        transform: translate3d(var(--hero-x-mid), var(--hero-y-mid), 4rem);
        transition: transform 220ms ease-out;
        will-change: transform;
    }

    .orbit {
        position: absolute;
        border: 0;
        border-radius: 50%;
        transform: translate3d(var(--hero-x-far), var(--hero-y-far), -2rem) rotate(-18deg) scaleY(0.64);
        transform-style: preserve-3d;
        transition: transform 260ms ease-out;
        will-change: transform;

        span {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            animation: saturn-ring-spin 9s linear infinite;
            transform-origin: center;
            will-change: transform;

            &:before {
                content: "";
                position: absolute;
                border-radius: inherit;
                pointer-events: none;
            }

            &:before {
                inset: 0;
                padding: 1px;
                background: conic-gradient(
                    from 40deg,
                    rgba(2, 255, 207, 0.04),
                    rgba(2, 255, 207, 0.16) 16%,
                    rgba(127, 255, 231, 0.92) 27%,
                    rgba(245, 217, 95, 0.72) 31%,
                    rgba(2, 255, 207, 0.18) 42%,
                    rgba(2, 255, 207, 0.03) 58%,
                    rgba(2, 255, 207, 0.28) 74%,
                    rgba(245, 217, 95, 0.5) 79%,
                    rgba(2, 255, 207, 0.04)
                );
                -webkit-mask:
                    linear-gradient(#000 0 0) content-box,
                    linear-gradient(#000 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                filter: drop-shadow(0 0 10px rgba(2, 255, 207, 0.45));
            }
        }
    }

    .orbit-one {
        width: 82%;
        height: 82%;
    }

    .orbit-two {
        width: 58%;
        height: 58%;
        transform: translate3d(var(--hero-x-soft), var(--hero-y-soft), 1rem) rotate(24deg) scaleY(0.68);

        span {
            animation-duration: 14s;
            animation-direction: reverse;
            opacity: 0.72;

            &:before {
                padding: 1px;
                background: conic-gradient(
                    from 160deg,
                    rgba(245, 217, 95, 0.02),
                    rgba(245, 217, 95, 0.45) 18%,
                    rgba(2, 255, 207, 0.72) 26%,
                    rgba(2, 255, 207, 0.1) 42%,
                    rgba(245, 217, 95, 0.04) 62%,
                    rgba(127, 255, 231, 0.42) 78%,
                    rgba(245, 217, 95, 0.02)
                );
            }
        }
    }

    .orbit-three {
        width: 70%;
        height: 70%;
        transform: translate3d(var(--hero-x-far), var(--hero-y-far), 0) rotate(68deg) scaleY(0.58);

        span {
            animation-duration: 11s;
            opacity: 0.54;

            &:before {
                background: conic-gradient(
                    from 260deg,
                    rgba(2, 255, 207, 0.02),
                    rgba(127, 255, 231, 0.46) 18%,
                    rgba(2, 255, 207, 0.08) 34%,
                    rgba(245, 217, 95, 0.34) 50%,
                    rgba(2, 255, 207, 0.08) 66%,
                    rgba(127, 255, 231, 0.3) 82%,
                    rgba(2, 255, 207, 0.02)
                );
            }
        }
    }

    @keyframes saturn-ring-spin {
        100% {
            transform: rotate(360deg);
        }
    }

    .visual-node {
        position: absolute;
        min-width: 11.5rem;
        padding: 1rem 1.2rem;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 0.8rem;
        background: rgba(6, 12, 15, 0.72);
        backdrop-filter: blur(14px);
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.34);
    }

    .visual-node {
        --node-x: var(--hero-x-near);
        --node-y: var(--hero-y-near);
        --node-scale: 1;

        display: flex;
        align-items: center;
        justify-content: center;
        color: var.$white;
        font-size: 1.35rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transform: translate3d(var(--node-x), var(--node-y), 3rem) scale(var(--node-scale));
        transition: transform 220ms ease-out;
        will-change: transform;
    }

    .node-privacy {
        --node-x: var(--hero-x-near);
        --node-y: var(--hero-y-soft);

        top: 18%;
        left: 2%;
    }

    .node-speed {
        --node-x: var(--hero-x-soft);
        --node-y: var(--hero-y-near);

        top: 10%;
        right: 5%;
    }

    .node-scale {
        --node-x: var(--hero-x-near);
        --node-y: var(--hero-y-near);

        right: 2%;
        bottom: 20%;
    }

    .node-contracts {
        --node-x: var(--hero-x-mid);
        --node-y: var(--hero-y-mid);

        left: 4%;
        bottom: 10%;
    }

    .hero-highlights {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .highlight-card {
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
        padding: 1.8rem 2rem;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        column-gap: 1.5rem;
        align-items: baseline;

        .label {
            grid-column: 1 / -1;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var.$muted;
            font-size: 1.2rem;
            margin: 0;
        }

        .value {
            font-family: "Helios Bold";
            font-size: 3.4rem;
            margin: 0;
            color: var.$ascent-color;
        }

        .hint {
            color: rgba(245, 247, 251, 0.7);
            font-size: 1.35rem;
            line-height: 1.4;
            margin: 0;
        }
    }

    @media screen and (max-width: 1280px) {
        .hero-shell {
            grid-template-columns: 1fr;
        }

        .hero-copy {
            max-width: none;
        }

        .hero-visual {
            min-height: 42rem;
        }

        .visual-shell {
            width: min(42rem, 100%);
        }
    }

    @media screen and (max-width: 900px) {
        min-height: auto;
        padding-top: 3rem;

        .hero-highlights {
            grid-template-columns: 1fr;
            gap: 1.6rem;
        }

        .highlight-card {
            grid-template-columns: 10rem minmax(0, 1fr);
            column-gap: 1.2rem;

            .label {
                grid-column: 1 / -1;
            }
        }
    }

    @media screen and (max-width: 748px) {
        gap: 2rem;
        padding: 2rem 0 4rem;

        h1 {
            font-size: clamp(6.4rem, 24vw, 9rem);
        }

        .eyebrow {
            font-size: 1.1rem;
            line-height: 1.5;
        }

        #resume {
            font-size: clamp(3rem, 11vw, 4.6rem);
        }

        h4 {
            font-size: 1.9rem;
        }

        .hero-actions {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
        }

        .hero-actions .button,
        .hero-actions button {
            width: 100%;
            justify-content: center;
        }

        .hero-visual {
            min-height: 34rem;
        }

        .visual-shell {
            width: min(34rem, 100%);
        }

        .visual-node {
            min-width: auto;
            padding: 0.8rem 1rem;
            font-size: 1.05rem;
        }
    }

    @media screen and (max-width: 480px) {
        .hero-visual {
            min-height: 28rem;
        }

        .visual-shell {
            width: min(28rem, 100%);
        }

        .visual-node {
            --node-scale: 0.9;
        }

        .node-privacy {
            left: -5%;
        }

        .node-speed,
        .node-scale {
            right: -5%;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .hero-visual:before,
        .visual-shell,
        .visual-shell .logo,
        .orbit,
        .orbit span,
        .visual-node {
            transition: none;
        }

        .orbit span {
            animation: none;
        }
    }
}
</style>
