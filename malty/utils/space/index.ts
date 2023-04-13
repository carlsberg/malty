export interface SpaceProps {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mx?: string;
  my?: string;
}

export const space = <T extends SpaceProps>({ m = '', mx, my, mt, mr, mb, ml }: T) => `
  margin: ${m};
  margin-top: ${mt ?? my ?? ''};
  margin-bottom: ${mb ?? my ?? ''};
  margin-right: ${mr ?? mx ?? ''};
  margin-left: ${ml ?? mx ?? ''};
`;
