<template>
  <section id="quad">
    <h2>
      Solving the Quadlemma
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
      <g class="privacy is-animated">
        <rect x="123.066" y="116" width="150" height="150" rx="10" transform="rotate(45 123.066 116)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="90" y="228.476">PRIVACY</tspan></text>
      </g>
      <g class="security is-animated">
        <rect x="240.066" y="1" width="150" height="150" rx="10" transform="rotate(45 240.066 1)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="200" y="113.476">SECURITY</tspan></text>
      </g>
      <g class="scalability is-animated">
        <rect x="355.066" y="116" width="150" height="150" rx="10" transform="rotate(45 355.066 116)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="304" y="228.476">SCALABILITY</tspan></text>
      </g>
      <g class="decentralization is-animated">
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
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  svg {
    padding: 5rem;
  }

  h2 {
    max-width: 50rem;

    >div{
      margin-top: 1rem;
      font-weight: lighter;
      font-size: 2rem;
      opacity: .7;
    }
  }

  .quadlemma {
    animation: sideways 3s infinite alternate ease-in-out;
    transform-origin: center center;
    animation-delay: 2s;

    .logo.active {
      animation: down .5s forwards ease-out;
      opacity: 0;
      transform: translate3d(0, -500px, 0);
    }

    .security.active {
      opacity: 0;
      animation: appear .2s forwards ease-in-out;
      animation-delay: .5s;
      transform: scale3d(.5, .5, 1);
      transform-origin: center center;
    }

    .scalability.active {
      opacity: 0;
      animation: appear .2s forwards ease-in-out;
      animation-delay: .7s;
      transform: scale3d(.5, .5, 1);
      transform-origin: center center;
    }
    
    .decentralization.active {
      opacity: 0;
      animation: appear .2s forwards ease-in-out;
      animation-delay: .9s;
      transform: scale3d(.5, .5, 1);
      transform-origin: center center;
    }

    .privacy.active {
      opacity: 0;
      animation: appear .2s forwards ease-in-out;
      animation-delay: 1.1s;
      transform: scale3d(.5, .5, 1);
      transform-origin: center center;
    }
  }

  @keyframes down {
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes appear {
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes sideways {
    0% {
      transform: translate3d(0px, 0, 0) rotate3d(1, 1, 1, 0deg);
    }
    50% {
      transform: translate3d(5px, 0, 0) rotate3d(1, 1, 1, 5deg);
    }
    100% {
      transform: translate3d(-5px, 0, 0) rotate3d(1, 1, 1, -5deg);
    }
  }
}
</style>