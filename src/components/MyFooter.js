import React from 'react';
import {Footer} from 'flowbite-react'

function MyFooter() {
  return (
<Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Novel-DB™"
    year={2022}
  />
  <Footer.LinkGroup>
    <Footer.Link href="#">
      About
    </Footer.Link>
    <Footer.Link href="#">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="#">
      Licensing
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
  );
}

export default MyFooter;