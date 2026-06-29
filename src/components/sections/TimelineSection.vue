<template>
    <section id="timeline">
        <div class="timeline-header">
            <p class="section-kicker">Roadmap</p>
            <h2>Timeline</h2>
            <p class="section-subtitle">
                Major protocol and application milestones, revealed as the roadmap enters the viewport.
            </p>
        </div>
        <div id="timeline-container">
            <div
                v-for="(task, index) in tasks"
                v-bind:key="index"
                ref="timelineItems"
                class="timeline-item"
                :class="{
                    'done': task.status === 'Completed',
                    'active': preRendered || visibleTasks[index]
                }"
                :data-index="index"
                :style="{ '--timeline-delay': getAnimationDelay(index) }"
            >
                <div class="timeline-marker">
                    <div></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">
                        {{ task.year }}<span v-if="task.quarter"> / {{ task.quarter }}</span>
                    </div>
                    <div class="timeline-title">{{ task.name }}</div>
                    <p class="timeline-description">{{ task.description }}</p>
                    <div class="timeline-meta">
                        <span class="timeline-status" :class="getStatusClass(task.status)">{{ task.status }}</span>
                        <span>{{ task.tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import tasks from './tasks_section/tasks';

export default {
    data() {
        return {
            tasks,
            visibleTasks: [],
            timelineObserver: null,
        };
    },
    mounted() {
        this.visibleTasks = this.tasks.map(() => Boolean(this.preRendered));

        if (!this.preRendered) {
            this.$nextTick(this.observeTimelineItems);
        }
    },
    beforeUnmount() {
        if (this.timelineObserver) {
            this.timelineObserver.disconnect();
        }
    },
    methods: {
        observeTimelineItems() {
            const items = this.$refs.timelineItems || [];
            const timelineItems = Array.isArray(items) ? items : [items];

            if (!('IntersectionObserver' in window)) {
                this.visibleTasks = this.tasks.map(() => true);
                return;
            }

            this.timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    this.visibleTasks[index] = entry.isIntersecting;
                });
            }, {
                rootMargin: '-12% 0px -18% 0px',
                threshold: 0.18,
            });

            timelineItems.forEach((item) => this.timelineObserver.observe(item));
        },
        getStatusClass(status) {
            return status.toLowerCase().split(' ').join('-');
        },
        getAnimationDelay(index) {
            return `${Math.min(index, 5) * 45}ms`;
        },
    },
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
    padding: clamp(3rem, 5vw, 6rem) 2rem;
    border: 1px solid var.$border-soft;
    border-radius: 0.8rem;
    background: linear-gradient(150deg, rgba(10, 17, 20, 0.48), rgba(6, 12, 15, 0.78));
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background:
            linear-gradient(90deg, rgba(2, 255, 207, 0.4), transparent 35%, rgba(245, 217, 95, 0.14) 100%) top left / 100% 1px no-repeat,
            linear-gradient(180deg, rgba(2, 255, 207, 0.045), transparent 42%);
        pointer-events: none;
    }

    .timeline-header {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        text-align: center;
        margin-bottom: 3rem;

        h2 {
            margin: 0;
        }
    }

    #timeline-container {
        z-index: 1;
        font-size: 1.8rem;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 108rem;
        padding: 2rem 0;
        margin-bottom: 2rem;

        &:before {
            content: "";
            position: absolute;
            top: 2rem;
            bottom: 2rem;
            left: 50%;
            width: 3px;
            background: linear-gradient(180deg, rgba(2, 255, 207, 0), var.$dark-ascent-color 8%, var.$dark-ascent-color 92%, rgba(2, 255, 207, 0));
            transform: translateX(-50%);
        }

        .timeline-item {
            position: relative;
            display: grid;
            grid-template-columns: minmax(0, 1fr) 4.8rem minmax(0, 1fr);
            gap: 2rem;
            min-height: 12rem;
            padding-bottom: 2.5rem;
            opacity: 0;
            pointer-events: none;
            transform: translateY(4rem);
            transition:
                opacity 850ms ease var(--timeline-delay),
                transform 850ms cubic-bezier(0.22, 1, 0.36, 1) var(--timeline-delay);
        }

        .timeline-item.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
        }

        .timeline-marker {
            position: relative;
            z-index: 1;
            display: flex;
            grid-column: 2;
            grid-row: 1;
            justify-content: center;
            align-items: flex-start;
            padding-top: 1.2rem;

            >div {
                width: 2.4rem;
                height: 2.4rem;
                background: #001915;
                border: 2px solid var.$dark-ascent-color;
                border-radius: 50%;
                box-shadow: 0 0 0 0 rgba(2, 255, 207, 0);
                transition: all 500ms ease;
            }
        }

        .timeline-content {
            grid-column: 3;
            padding: 1.8rem 2rem;
            background: rgba(6, 12, 15, 0.56);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 0.8rem;
            backdrop-filter: blur(10px);
            transform: scale(0.98);
            transition:
                border-color 300ms ease,
                box-shadow 300ms ease,
                transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-item.active .timeline-content {
            transform: scale(1);
        }

        .timeline-item:nth-child(odd) {
            .timeline-content {
                grid-column: 1;
                text-align: right;
            }

            .timeline-meta {
                justify-content: flex-end;
            }
        }

        .timeline-date {
            color: var.$ascent-color;
            font-weight: bold;
            font-size: 1.3rem;
            text-transform: uppercase;
        }

        .timeline-title {
            margin-top: 0.5rem;
            font-size: 2rem;
            font-weight: 700;
        }

        .timeline-description {
            margin-top: 0.8rem;
            color: rgba(245, 247, 251, 0.78);
            font-size: 1.5rem;
            line-height: 1.45;
        }

        .timeline-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-top: 1.4rem;
            font-size: 1.2rem;
            font-weight: 700;
            text-transform: uppercase;

            span {
                padding: 0.45rem 0.8rem;
                border: 1px solid rgba(255, 255, 255, 0.12);
                border-radius: 0.6rem;
                color: rgba(245, 247, 251, 0.8);
                background: rgba(255, 255, 255, 0.05);
            }
        }

        .timeline-status.completed {
            color: #001a15;
            background: var.$ascent-color;
            border-color: var.$ascent-color;
        }

        .timeline-status.in-progress {
            color: #211b00;
            background: #f5d95f;
            border-color: #f5d95f;
        }

        .timeline-item.done {
            .timeline-marker>div {
                background: #004C3E;
                border-color: var.$ascent-color;
                box-shadow: 0 0 14px rgba(2, 255, 207, 0.5);
            }

            .timeline-content {
                border-color: rgba(2, 255, 207, 0.35);
                box-shadow: 0 12px 36px rgba(2, 255, 207, 0.08);
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
        &:before {
            left: 1.5rem;
            transform: none;
        }

        .timeline-item {
            grid-template-columns: 3rem minmax(0, 1fr);
            gap: 1.4rem;
            min-height: auto;
            padding-bottom: 2rem;
        }

        .timeline-marker {
            grid-column: 1;
            justify-content: flex-start;
        }

        .timeline-content,
        .timeline-item:nth-child(odd) .timeline-content {
            grid-column: 2;
            text-align: left;
        }

        .timeline-meta,
        .timeline-item:nth-child(odd) .timeline-meta {
            justify-content: flex-start;
        }

        .timeline-content {
            padding: 1.5rem;
        }

        .timeline-title {
            font-size: 1.8rem;
        }
    }
}

@media (prefers-reduced-motion: reduce) {
    #timeline #timeline-container {
        .timeline-item,
        .timeline-content,
        .timeline-marker>div {
            transition: none;
        }
    }
}

@media screen and (max-width: 480px) {
    #timeline {
        padding-right: 0;
        padding-left: 0;

        #timeline-container {
            .timeline-description {
                font-size: 1.4rem;
            }
        }
    }
}</style>
