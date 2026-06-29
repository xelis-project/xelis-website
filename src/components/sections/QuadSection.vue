<template>
  <section id="quad">
    <h2>
      Solving the Quadrilemma
      <div>
        XELIS introduces the concept of a quadrilemma or ”quadlemma”, as it will be referred to, adding privacy as a critical fourth pillar.
      </div>
    </h2>
    <svg class="quadlemma" width="481" height="462" viewBox="0 0 481 462" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g class="logo is-animated">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M240.5 462L481 220.134L262.235 0.125998L296.094 82.5503L432.9 220.134L240.5 413.627L48.1 220.134L185.214 80.3017L218.89 0L0 220.134L240.5 462Z" fill="#02FFCF" fill-opacity="0.29"/>
        <path d="M240.5 413.627L218.89 0L185.214 80.3017L240.5 413.627Z" fill="#02FFCF" fill-opacity="0.29"/>
        <path d="M262.235 0.125998L240.5 413.627L296.094 82.5503L262.235 0.125998Z" fill="#02FFCF" fill-opacity="0.29"/>
      </g>
      <g class="block privacy is-animated">
        <rect x="123.066" y="116" width="150" height="150" rx="10" transform="rotate(45 123.066 116)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="90" y="228.476">PRIVACY</tspan></text>
      </g>
      <g class="block security is-animated">
        <rect x="240.066" y="1" width="150" height="150" rx="10" transform="rotate(45 240.066 1)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="200" y="113.476">SECURITY</tspan></text>
      </g>
      <g class="block scalability is-animated">
        <rect x="355.066" y="116" width="150" height="150" rx="10" transform="rotate(45 355.066 116)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="304" y="228.476">SCALABILITY</tspan></text>
      </g>
      <g class="block decentralization is-animated">
        <rect x="240.066" y="230" width="150" height="150" rx="10" transform="rotate(45 240.066 230)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="164" y="343.476">DECENTRALIZATION</tspan></text>
      </g>
    </svg>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#quad {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 5rem;
  padding: clamp(3rem, 5vw, 6rem);
  border: 1px solid var.$border-soft;
  border-radius: 0.8rem;
  background: linear-gradient(150deg, rgba(10, 17, 20, 0.42), rgba(6, 12, 15, 0.72));
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
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

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  svg {
    position: relative;
    z-index: 1;
    padding: 2rem;
    max-width: min(48rem, 100%);
    height: auto;
  }

  h2 {
    position: relative;
    z-index: 1;
    max-width: 80rem;
    margin: 0;

    >div{
      margin-top: 1.4rem;
      font-family: "Jura", sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 1.55;
      color: rgba(245, 247, 251, 0.74);
    }
  }

  .quadlemma {
    animation: sideways 3s infinite alternate ease-in-out;
    transform-origin: center;
    animation-delay: 1s;

    .logo {
      opacity: 0;
      transform: translate3d(0, -500px, 0);

      &.active {
        animation: down .5s forwards ease-out;
      }
    }

    .block {
      opacity: 0;
      transform: scale3d(.5, .5, 1);
      transform-origin: center center;
    }

    .security.active {
      animation: appear .3s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);
      animation-delay: .3s;
    }

    .scalability.active {
      animation: appear .3s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);
      animation-delay: .4s;
    }
    
    .decentralization.active {
      animation: appear .3s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);
      animation-delay: .5s;
    }

    .privacy.active {
      animation: appear .3s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);
      animation-delay: .6s;
    }
  }

  @keyframes down {
    50% {
      transform: translate3d(0, 20px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes appear {
    50% {
      opacity: 1;
      transform: scale3d(1.2, 1.2, 1);
    }
    70% {
      opacity: 1;
      transform: scale3d(.9, .9, 1);
    }
    85% {
      opacity: 1;
      transform: scale3d(1.05, 1.05, 1);
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes sideways {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 4px, 0);
    }
    100% {
      transform: translate3d(0, -4px, 0);
    }
  }
}
</style>
