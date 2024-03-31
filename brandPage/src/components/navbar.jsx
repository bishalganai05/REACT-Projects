function Navbar(){
  return(
    <div>
      <nav className="container">
        <div className='logo'>
          <img src='.\public\images\brand_logo.png' alt='brand_logo'></img>
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT US</li>
          <li href="#">LOCATION</li>
        </ul>
        <button type="button" class="btn btn-danger">Login</button>
      </nav>
    </div>
  )
}

export default Navbar;