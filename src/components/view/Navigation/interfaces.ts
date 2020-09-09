import { FunctionComponent } from "react";

export interface IDrawerProps {
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  navigation: INav[];
  open: boolean;
}

export interface INav {
  component: FunctionComponent<any>;
  href: string;
  icon: JSX.Element;
  name: string;
  path: string;
}