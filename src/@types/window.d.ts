import { IHistory } from "../helpers/common";

declare global {
  interface Window {
    dataLayer: {
      push: (data: any) => void;
    };
  }
}