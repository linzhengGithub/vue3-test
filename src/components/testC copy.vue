<template>
  <iframe :src="url" id="iframe" />
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: 'http://47.114.112.243:9534/#/login',
    };
  },
  methods: {
    autoLogin(username, password) {
      const iframe = document.getElementById('iframe')
      // iframe.onload = (e) => {
      //   axios.post('http://47.114.112.243:9534/ship-supervision/sys/user/login', {
      //     username,
      //     password
      //   }).then(res => {
      //     const { data } = res
      //     const token = data.data.accessToken
      //     console.log(token)
      //     iframe.contentWindow.postMessage(
      //       {
      //         token,
      //         redirectPath: '/locationControl/largeScreen'
      //       },    
      //       this.url
      //     )
      //   })
      // }
      iframe.onload = (e) => {
        axios.post('http://47.114.112.243:9534/ship-supervision/sys/user/login', {
          username,
          password
        }).then(res => {
          const { data } = res
          const token = data.data.accessToken
          console.log(token)
          iframe.contentWindow.postMessage(
            {
              username,
              password,
              token,
              url,
              redirectPath: '/locationControl/largeScreen'
            },    
            this.url
          )
        })
      }
    }
  },
  mounted() {
    // this.autoLogin('alc','yq666666')
    this.autoLogin('dtqszyy','dtq_szyy')
  }
}

</script>

<style lang="scss">
#iframe {
  width: 100vw;
  height: 100vh;
}

</style>
