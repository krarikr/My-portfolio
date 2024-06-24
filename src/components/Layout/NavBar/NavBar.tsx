import './NavBar.css'

function NavBar() {

    return (
      <div className='navBar-container'>
       
            <div className="logo-nav">
              Krarit
            </div>
        
            <ul className="ul-nav">
                <li className='li-nav'><a href="#Banner" className='a-nav'>About</a></li>
                <li className='li-nav'><a href="#Skill" className='a-nav'>Skill</a></li>
                <li className='li-nav'><a href="#Project" className='a-nav'>Project</a></li>
                <li className='li-nav'><a href="#Contact" className='a-nav'>Contact</a></li>
            </ul>
        
      </div>
    )
  }
  
  export default NavBar