import { Navbar } from 'flowbite-react';

function TopNav() {
  return (
    <Navbar>
      <Navbar.Brand href="/">Novel-DB</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link href="/about">About</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;