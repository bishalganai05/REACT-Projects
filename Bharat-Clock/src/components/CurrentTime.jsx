let currentDate = new Date();
let currentTime = new Date();
function CurrentTime(){
  return (
    <p>This is the current time : {currentDate.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</p>
  );
}

export default CurrentTime;