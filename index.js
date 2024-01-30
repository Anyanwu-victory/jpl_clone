const paraGraph =  [
  {
    id: 0,
    name: "Looking for life beyond Earth",
  },
  {
  id: 1,
  name: "Exploring our Solar System",
  },
  {
    id: 2,
    name: " Studying our planet home from air and space",
  },
  {
    id: 3, 
    name: "Creating robots to go where humans can't ",
  },
  {
    id: 4,
    name: "Developing technology to improve life on Earth",
  },
  {
    id:5,
    name: "Exploring the universe and searching for new worlds.",
  }
];

let currentIndex = 0;
console.log(paraGraph)

let AnimateText = document.getElementById("animate-text");
// Function to change the name every 3 seconds
function changeName() {
  AnimateText.innerHTML = `<p>${paraGraph[currentIndex].name}</p>`;
  currentIndex = (currentIndex + 1) % paraGraph.length;
}

// Initial call to set the initial name
changeName();

// Set interval to change the name every 3 seconds
setInterval(changeName, 5000);