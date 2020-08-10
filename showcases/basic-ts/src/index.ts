import { STSdk } from "@staytuned/sdk/dist/types/models/sdk-object";

declare global {
  interface Window {
    staytunedReady: () => void;
    staytunedSDK: STSdk;
  }
}

window.staytunedReady = () => {
  window.staytunedSDK.init(
    {
      appId: '', // YOUR APPID
      authToken: '', // YOUR AUTHTOKEN
      opts: {
        debug: true, // Enable redux dev tools and some extra logs
      },
    },
    async () => {
    }
  );
}
