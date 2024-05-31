<template>
    <section id="roadmap">
        <h2>Roadmap</h2>
        <div id="timeline">
            <div
                :class="{fade: !preRendered,}"
                class="done is-animated"
            >
                <div class="top">
                    <div>2021</div>
                    <div>Beginning of the project</div>
                </div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom"></div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="done is-animated"
            >
                <div class="top"></div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom">
                    <div>Q2 2023</div>
                    <div>BlockDAG</div>
                </div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="done is-animated"
            >
                <div class="top">
                    <div>Q3 2023</div>
                    <div>XSWD</div>
                </div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom"></div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="done is-animated"
            >
                <div class="top"></div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom">
                    <div>Q4 2023</div>
                    <div>Client Protocol</div>
                </div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="done is-animated"
            >
                <div class="top">
                    <div>Q1 2024</div>
                    <div>Homomorphic Encryption integration</div>
                </div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom"></div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="done is-animated"
            >
                <div class="top"></div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom">
                    <div>April 20, 2024</div>
                    <div>Mainnet launch</div>
                </div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="is-animated"
            >
                <div class="top">
                    <div>WIP</div>
                    <div>New POW Algorithm</div>
                </div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom"></div>
            </div>
            <div
                :class="{fade: !preRendered,}"
                class="is-animated"
            >
                <div class="top"></div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom">
                    <div>WIP</div>
                    <div>Smart Contracts</div>
                </div>
            </div>
            <!-- <div class="bg bgbr"></div> -->
        </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#roadmap {
    h2 {
        text-align: center;
    }

    #timeline {
        font-size: 1.8rem;
        display: flex;

        >div {
            display: flex;
            flex-direction: column;
            flex: 1;

            >div {
                text-align: center;
            }

            .top {
                height: 6rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
            }

            .bottom {
                height: 10rem;
            }

            .top> :first-child,
            .bottom> :first-child {
                color: var.$ascent-color;
            }

            .circle {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 3rem;
                margin: 1rem 0;

                >div {
                    position: relative;
                    width: 20px;
                    height: 20px;
                    background: #001915;
                    border: 2px solid var.$dark-ascent-color;
                    border-radius: 50%;
                }

                &:before,
                &:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    z-index: -1;
                    width: 50%;
                    height: 2px;
                    background: var.$dark-ascent-color;
                    transform: translateY(-50%);
                }

                &:before {
                    left: 0;
                }

                &:after {
                    right: 0;
                }
            }

            &.done {

                .circle:before,
                .circle:after {
                    background: var.$ascent-color;
                }

                .circle>div {
                    background: #004C3E;
                    border: 2px solid var.$ascent-color;
                }
            }
        }
    }
}
@media screen and (max-width: 1830px) {
    #roadmap #timeline {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 748px) {
    #roadmap #timeline {
        position: relative;
        flex-direction: column;

        >div {
            flex-direction: row;
            align-items: center;
        }

        div.top,
        div.bottom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
        }

        div .circle {
            margin: 0 2rem;
            height: 10rem;

            &:before,
            &:after {
                left: 50%;
                z-index: -1;
                width: 2px;
                height: 50%;
                background: #00342A;
                transform: translateX(-50%);
            }

            &:before {
                top: 0;
            }

            &:after {
                bottom: 25%;
            }
        }

        .bgbr {
            right: -25%;
            bottom: -25%;
            width: 100%;
            height: 100%;

            background: rgba(0, 170, 150, 0.2);
            transform: rotate(45deg);
            filter: blur(100px);
        }
    }
}</style>