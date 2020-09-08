export interface IDrawerProps {
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  navigation: INav[];
  open: boolean;
}

export interface INav {
  href: string;
  icon: JSX.Element;
  name: string;
}
