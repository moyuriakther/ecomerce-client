import '../header/header.css';
import logo from '../../assets/images/logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import SelectDropdown from '../selectDropdown/SelectDropdown';


export default function Header() {
  return (
  <>
    <header>
      <div className='container-fluid'>
          <div className="row">
            <div className="col-sm-2">
              <img src={logo}alt="logo" />
            </div>
            {/* search bar */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDropdown cursor position-relative">
                  All Categories
                  <SelectDropdown />
                </div>
                <div className="search">
                  <input type="text" placeholder='Search for Items...'/>
                  <SearchIcon className='searchIcon cursor'/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </header>
  </>
  )
}
