import './App.css'

function App() {
  let foodItems = ["Dal","Roti","Sabji","Rice", "Mix Vegetable"]

  return (
    <>
      <h1>Healthy Food Items</h1>
      <ul className='list-group'>
        {foodItems.map(item => <li key={item} className='list-group-item'>{item}</li>)};
      </ul>
    </>
  )
}

export default App
