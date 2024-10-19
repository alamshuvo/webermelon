const data = [
  {
    img: "../img/original-023504fb27e33a5d0711d76e9c68da4b (1).png",
    "text-a": "website",
    "text-b": "wordpress",
    "text": "Web Application Development",
  },
  {
    img: "../img/original-7924781d9d924ae72f512d9481642817 (1).png",
    "text-a": "website",
    "text-b": "wordpress",
    "text": "Web Application Development",
  },
  {
    img: "../img/original-7924781d9d924ae72f512d9481642817.png",

    "text-a": "website",
    "text-b": "wordpress",
    "text": "Web Application Development",
  },
  {
    img: "../img/original-023504fb27e33a5d0711d76e9c68da4b.png   ",
    "text-a": "website",
    "text-b": "wordpress",
    "text": "Web Application Development",
  },
];

const targetDiv = document.getElementsByClassName("case-design")[0];

data.map((item) => {
    const div = document.createElement("div");
    div.className = "case-item"; 

    // Create an image element
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.text;

    // Create a parent div for the p tags
    const textContainer = document.createElement("div");
    textContainer.className = "text-container"; 

    // Create text elements (p tags) and append them to the textContainer
    const textA = document.createElement("p");
    textA.textContent = item['text-a'];
    textA.className="ptag"
    textContainer.appendChild(textA);

    const textB = document.createElement("p");
    textB.textContent = item['text-b'];
    textB.className="ptag"
    textContainer.appendChild(textB);

    const mainText = document.createElement("h3");
    mainText.textContent = item.text;

    // Append elements to the main div
    div.appendChild(img);
    div.appendChild(textContainer); // Append the parent container for the p tags
    div.appendChild(mainText);

    // Append the div to the target container
    targetDiv.appendChild(div);
});
