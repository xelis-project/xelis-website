<template>
    <section id="timeline">
        <h2>Timeline</h2>
        <div id="timeline-container" class="scroll-bar is-animated" :class="{'fade-childs': !preRendered,}">
            <div v-for="(task, index) in tasks" v-bind:key="index" class="is-animated" :class="{ 'done': task.status === 'Completed'}">
                <div class="top">
                    <template v-if="index % 2 === 0">
                        <div>{{ task.year }} {{ task.quarter }}</div>
                        <div>{{ task.name }}</div>
                    </template>
                </div>
                <div class="circle">
                    <div></div>
                </div>
                <div class="bottom">
                    <template v-if="index % 2 === 1">
                        <div>{{ task.year }} {{ task.quarter }}</div>
                        <div>{{ task.name }}</div>
                    </template>
                </div>
            </div>
        </div>
        <router-link :to="{name: 'roadmap'}" v-if="showRoadmapLink">
            <svg fill="currentColor" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 491.5 491.5">
                <path d="M348.1,245.7c-67.8,0-122.9,55.1-122.9,122.9s55.1,122.9,122.9,122.9S471,436.4,471,368.6S415.9,245.7,348.1,245.7z
                    M403.5,362.6l-41,41c-4,4-9.2,6-14.5,6c-5.2,0-10.5-2-14.5-6L313,383.1c-8-8-8-21,0-29s21-8,29,0l6,6l26.5-26.5c8-8,21-8,29,0
                    C411.5,341.7,411.5,354.6,403.5,362.6z"/>
                <path d="M385.3,41h-57.7v-9.8c0-17.2-14-31.2-31.2-31.2H154c-17.2,0-31.2,14-31.2,31.2v9.7H65.2c-24.7,0-44.7,20.1-44.7,44.7
                    v361.1c0,24.7,20.1,44.7,44.7,44.7h174.9c-34.2-29.9-55.8-73.8-55.8-122.8h-81.9c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5
                    h81.9c1.8,0,3.4,0.6,5.1,1c3.8-14.9,9.5-29,17-42h-83.6c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5h102.4
                    c4.1,0,7.7,1.5,10.9,3.6c29.3-27.5,68.6-44.6,112-44.6c29.9,0,57.8,8.2,81.9,22.2V85.7C430,61,409.9,41,385.3,41z M163.8,184.3
                    h-41c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h41c11.3,0,20.5,9.2,20.5,20.5C184.3,175.1,175.1,184.3,163.8,184.3z
                    M163.8,81.9v-41h122.9v41H163.8z M327.6,184.3h-81.9c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h81.9
                    c11.3,0,20.5,9.2,20.5,20.5C348.1,175.1,338.9,184.3,327.6,184.3z"/>
            </svg>
            Check the roadmap
        </router-link>
    </section>
</template>

<script>
import tasks from './tasks_section/tasks';

export default {
    props: ['showRoadmapLink'],
    data() {
        return {
            tasks
        }
    }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#timeline {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        border: thin solid rgb(255 255 255 / 70%);
        padding: .8rem 1rem;
        white-space: nowrap;
        display: inline-flex;
        gap: 1rem;
        align-items: center;

        &:hover {
            border: thin solid #02FFCF;
        }

        &:hover svg {
            color: thin solid #02FFCF;
        }
    }

    h2 {
        text-align: center;
    }

    #timeline-container {
        font-size: 1.8rem;
        display: flex;
        padding-top: 2rem;
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 2rem;
        
        >div {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-width: 15rem;

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
    #timeline #timeline-container {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 748px) {
    #timeline #timeline-container {
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