
export const useWebSocket = (url, params?) => {
  let websocket = null
  let inceptData = null

  // 创建WebSocket
  function createWebSocket() {
    websocket = new WebSocket(url)
    // 打开
    websocket.onopen = () => {
      websocketSend(params)
    }
    // 接收
    websocket.onmessage = (event) => {
      inceptData = JSON.parse(event.data)
    }
    // 关闭
    websocket.onclose = () => {
      console.warn('websocket已断开...正在尝试重连')
      websocket?.close()
      createWebSocket()
    }
    // 错误
    websocket.onerror = () => {
      console.warn('WebSocket连接出错')
      websocket?.close()
      createWebSocket()
    }
  }

  // websocket 发送
  function websocketSend(params) {
    if (websocket.readyState === WebSocket.OPEN) {
      websocket.send(params)
    }
  }

  return { inceptData, createWebSocket }
}
