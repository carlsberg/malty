import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Book = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <path
      d="M20 1a1 1 0 01.117 1.993L20 3H7a2.016 2.016 0 00-.367.034l.065-.011a1.99 1.99 0 00-.15.028l.085-.017c-.04.007-.08.016-.119.025l.033-.008c-.05.012-.1.026-.149.041l.116-.033c-.045.012-.09.024-.133.039l.017-.006c-.044.014-.088.03-.13.047l.113-.041a1.985 1.985 0 00-.157.058l.043-.017c-.048.019-.095.04-.142.062l.099-.045a1.99 1.99 0 00-.123.057l.024-.012c-.041.02-.082.042-.122.065l.098-.053c-.048.024-.095.05-.141.078l.043-.025a2 2 0 00-.119.074l.076-.049a2.003 2.003 0 00-.125.083l.049-.034c-.04.027-.078.055-.116.084l.067-.05a2.009 2.009 0 00-.113.088l.046-.038a2.01 2.01 0 00-.11.094l.064-.056c-.036.03-.071.06-.105.093l.04-.037a2.012 2.012 0 00-.107.105l.067-.068a2.012 2.012 0 00-.096.1l.029-.032a2.012 2.012 0 00-.091.103l.062-.072a2.01 2.01 0 00-.101.12l.039-.048c-.031.036-.06.075-.088.114l.049-.066a2.006 2.006 0 00-.082.113l.033-.047a2.003 2.003 0 00-.076.115l.043-.068a2 2 0 00-.077.125l.034-.057A1.991 1.991 0 005 5a2 2 0 001.85 1.995L7 7h13a1 1 0 01.993.883L21 8v13a2 2 0 01-1.85 1.995L19 23H5a2 2 0 01-1.995-1.85L3 21V5a4 4 0 013.8-3.995L7 1zM5 8.465V21h14V9H7a3.982 3.982 0 01-2-.535zM16 17a1 1 0 01.117 1.993L16 19H8a1 1 0 01-.117-1.993L8 17zm0-3.98a1 1 0 01.117 1.993L16 15.02H8a1 1 0 01-.117-1.993L8 13.02zm2-9.04a1 1 0 01.117 1.993L18 5.98H7a1 1 0 01-.117-1.993L7 3.98z"
      fillRule="evenodd"
    />
  );

export default Book;
