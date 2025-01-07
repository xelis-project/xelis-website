<template>
  <div>
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="bg">
        <div class="bgtr"></div>
        <div class="bgt"></div>
      </div>
    </header>
    <main> 
      <h1>Confidentiality Policy</h1>
      <p>At <strong>XELIS</strong>, we respect your privacy. We do not collect, store, or share any personal information. Our apps are designed with your privacy in mind, and we are committed to keeping your information confidential.</p>
      <h2>We do not collect anything</h2>
      <ul>
        <li>We do not collect personal details such as your name, email address, or phone number.</li>
        <li>We do not track your physical location using GPS or any other tracking methods.</li>
        <li>We use local storage / cookies for client side preferences, but we do not collect or use them to track your activity.</li>
        <li>We do not use third-party analytics or data collection tools to monitor your usage or behavior.</li>
        <li>We do not access or store any data from your device, including contacts, photos, or messages.</li>
        <li>We do not share any information with third parties, as we simply do not collect any.</li>
        <li>We do not use any advertising networks or display ads that would require personal information to be tracked.</li>
      </ul>
      <p>And so on...</p>
      <h2>Security</h2>
      <p>Since we do not collect any user data, there is no personal data to protect. However, we ensure that our apps are secure and free from any malware or harmful software.</p>
      <h2>Changes to this Policy</h2>
      <p>We may update this confidentiality policy occasionally. Any changes will be posted here, and the updated policy will be effective as of the date it is published.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about our confidentiality policy, feel free to contact us.</p>
    </main>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';

import meta from '@/meta';

export default {
  name: 'ConfidentialityView',
  components: { NavigationMenu },
  mounted() {
    document.title =  meta['/confidentiality'].title;
  },
  inject: ['isSafari']
}
</script>

<style>
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  main {
    padding-bottom: 20rem;
  }
</style>