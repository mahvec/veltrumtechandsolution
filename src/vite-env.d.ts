/// <reference types="vite/client" />

import { ReactComponentElement } from "react";

declare module "*.svg" {
  export const constent: ReactComponentElement;
}

declare module "*.css" {}
