import { Sidebar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import LogoIcon from "../images/logo.png";
import SearchBar from './SearchBar'

function SideNav() {
  return (
      <div className="w-fit">
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo
            img={LogoIcon}
            imgAlt="Novel-DB logo"
          >
            <Link to="/">Novel-DB</Link>
          </Sidebar.Logo>
          <SearchBar />
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <Link to="/">Home</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link to="/Blog">Blog</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link to="/Random">Random</Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link to="/Search">Search</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
  );
}

export default SideNav;
