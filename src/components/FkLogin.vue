<template>
  <div>
    <iframe src="http://47.114.112.243:9534/#/login" id="yf_autologin" />
    <div class="loading">加载内容中...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 自动登录
    autoLogin(yf_username, yf_password) {
      let login_url =
        "http://47.114.112.243:9534/ship-supervision/sys/user/login";
      let iframe_url = "http://47.114.112.243:9534/#/login";
      let yf_iframe = document.getElementById("yf_autologin");
      yf_iframe.onload = (e) => {
        let yf_data = "username=" + yf_username + "&password=" + yf_password;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", login_url, false);
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            let rsp = JSON.parse(xhr.responseText);
            let session_key = rsp.data.session_key;
            console.log(session_key);
            yf_iframe.contentWindow.postMessage(
              {
                send: session_key,
              },
              iframe_url
            );
            this.showIframe();
          }
        };
        xhr.send(yf_data);
      };
    },
    // 是否展示iframe
    showIframe() {
      let yf_iframe = document.getElementById("yf_autologin");
      yf_iframe.style.display = "block";
    },
  },
  mounted() {
    var yf_username = "dtqszyy";
    var yf_password = "dtq_szyy";
    this.autoLogin(yf_username, yf_password);
  },
};
</script>
<style lang="less" scoped>
#yf_autologin {
  width: 100vw;
  height: 100vh;
}
.loading {
  width: 100vw;
  height: 100vh;
  text-align: center;
}
</style>
