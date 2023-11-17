import {} from "styled-components";
import { Theme } from "./theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare module "*.svg" {
  // eslint-disable-next-line import/order
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}