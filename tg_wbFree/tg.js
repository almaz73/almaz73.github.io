  export function useTelegram() {
      const WebApp = window.Telegram.WebApp
      return { WebApp, user: WebApp.initDataUnsafe?.user }
  }