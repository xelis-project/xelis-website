<template>
  <section id="quad">
    <h2>
      Solving the Quadlemma
      <div>
        XELIS introduces the concept of a quadrilemma or ”quadlemma”, as it will be referred to, adding privacy as a critical fourth pillar.
      </div>
    </h2>
    <svg width="481" height="462" viewBox="0 0 481 462" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_2)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M240.5 462L481 220.134L262.235 0.125998L296.094 82.5503L432.9 220.134L240.5 413.627L48.1 220.134L185.214 80.3017L218.89 0L0 220.134L240.5 462Z" fill="#02FFCF" fill-opacity="0.29"/>
        <path d="M240.5 413.627L218.89 0L185.214 80.3017L240.5 413.627Z" fill="#02FFCF" fill-opacity="0.29"/>
        <path d="M262.235 0.125998L240.5 413.627L296.094 82.5503L262.235 0.125998Z" fill="#02FFCF" fill-opacity="0.29"/>
        <rect x="240.066" y="1" width="150" height="150" rx="10" transform="rotate(45 240.066 1)" fill="#02FFCF"/>
        <rect x="355.066" y="116" width="150" height="150" rx="10" transform="rotate(45 355.066 116)" fill="#02FFCF"/>
        <rect x="240.066" y="230" width="150" height="150" rx="10" transform="rotate(45 240.066 230)" fill="#02FFCF"/>
        <rect x="123.066" y="116" width="150" height="150" rx="10" transform="rotate(45 123.066 116)" fill="#02FFCF"/>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="90" y="228.476">PRIVACY</tspan></text>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="200" y="113.476">SECURITY</tspan></text>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="304" y="228.476">SCALABILITY</tspan></text>
        <text fill="#094237" style="white-space: pre" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="164" y="343.476">DECENTRALIZATION</tspan></text>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="481" height="462" fill="white"/>
        </clipPath>
      </defs>
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
  gap: 5rem;

  h2 {
    max-width: 50rem;

    >div{
      margin-top: 1rem;
      font-weight: lighter;
      font-size: 2rem;
      opacity: .7;
    }
  }
}
</style>