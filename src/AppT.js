// import DeviceIdentifier from "react-device-identifier";
// import DisplayTextOnDesktop from "./DisplayTextOnDesktop";
// import DisplayTextOnMobile from "./DisplayTextOnMobile";
// import React from "react";

// export default function App() {
//   return (
//     <React.Fragment>
//       <DeviceIdentifier isMobile={true}>
//         <DisplayTextOnMobile />
//       </DeviceIdentifier>
//       <DeviceIdentifier isDesktop={true}>
//         <DisplayTextOnDesktop />
//       </DeviceIdentifier>
//       <DeviceIdentifier isTablet={true}>
//         <h1>Is Tablet</h1>
//       </DeviceIdentifier>
//     </React.Fragment>
//   );
// }

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
export default function App() {
    return (
      <>
      <BrowserView>
    <h1>This is rendered only in browser</h1>
    </BrowserView>
    <MobileView>
      <h1>This is rendered only on mobile</h1>
    </MobileView>
    </>
    )
}