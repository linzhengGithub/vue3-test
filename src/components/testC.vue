<template>
  <iframe :src="url" id="my_iframe" />
</template>

<script>
export default {
  data() {
    return {
      url: 'http://47.114.112.243:9534/#/login',
    };
  },
  methods: {
    autoLogin(username, password) {
      const iframe = document.getElementById('my_iframe')
      iframe.onload = function() {
        iframe.contentWindow.postMessage(
          { username, password }, '*'
        )
      }
    }
  },
  mounted() {
    this.autoLogin('dtqszyy','dtq_szyy')
  }
}

</script>

<style lang="scss">
#my_iframe {
  width: 100vw;
  height: 100vh;
}

</style>
