function MainBody() {
  return (
    <main className="mainBody container">
      <div className="mainBody-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="mainBody-buttons">
          <button id="btn1">Shop Now</button>
          <button id="btn2">Category</button>
        </div>
        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src=".\public\images\amazon.png" alt="amazon" />
            <img src=".\public\images\flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="mainBody-image">
      <img src=".\public\images\shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  )
}

export default MainBody;