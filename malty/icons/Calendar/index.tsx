import * as React from 'react';

function Calendar() {
  return (
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17 1a1 1 0 01.993.883L18 2v1h2a3 3 0 012.995 2.824L23 6v13a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h2V2a1 1 0 011.993-.117L8 2v1h8V2a1 1 0 011-1zm4 9H3v9a1 1 0 00.883.993L4 20h16a1 1 0 001-1zM9 16a1 1 0 010 2H7a1 1 0 010-2zm8 0a1 1 0 010 2h-2a1 1 0 010-2zm-8-4a1 1 0 010 2H7a1 1 0 010-2zm8 0a1 1 0 010 2h-2a1 1 0 010-2zM6 5H4a1 1 0 00-1 1v2h18V6a1 1 0 00-.883-.993L20 5h-2v1a1 1 0 01-1.993.117L16 6V5H8v1a1 1 0 01-1.993.117L6 6z" />
    </g>
  );
}

export default Calendar;
