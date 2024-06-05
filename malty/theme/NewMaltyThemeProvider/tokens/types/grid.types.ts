export type GridTokens = {
  xs: GridTypes;
  s: GridTypes;
  m: GridTypes;
  l: GridTypes;
  xl: {
    fluid: Omit<GridProps, 'maxWidth'>;
    fixed: Omit<GridProps, 'maxWidth'>;
  };
};

type GridProps = {
  maxWidth: string;
  minWidth: string;
  columns: string;
  gutter: string;
  margin: string;
};

type GridTypes = {
  fixed: GridProps;
  fluid: GridProps;
};
