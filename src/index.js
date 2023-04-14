// console.log(data);

// WRITE YOUR CODE BELOW!

// creating a function to render the top list of dogs

const ul = document.querySelector(".dogs-list");
const section = document.querySelector(".main__dog-section");
const addDogBtn = document.querySelector(".dogs-list__button");

function renderDog(dog, atBeginning = false) {
  const li = document.createElement("li");
  li.setAttribute("class", "dogs-list__button");
  li.innerHTML = dog.name;
  if(atBeginning){
    addDogBtn.after(li)
  } else {
    ul.appendChild(li);
  }

  li.addEventListener("click", () => {
    section.innerHTML = " ";
    const h2 = document.createElement("h2");
    h2.innerHTML = dog.name;
    section.appendChild(h2);

    // rendering img
    const img = document.createElement("img");
    img.setAttribute("src", dog.image);
    img.setAttribute("alt", " ");
    section.appendChild(img);

    // rendering dog description div

    const descDiv = document.createElement("div");
    descDiv.setAttribute("class", "main__dog-section__desc");
    section.appendChild(descDiv);

    const h3 = document.createElement("h3");
    h3.innerHTML = "Bio";
    descDiv.appendChild(h3);

    const pEl = document.createElement("p");
    pEl.innerHTML = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
        minima voluptates libero cumque rerum consequatur optio aliquid sint
        eum maxime illo laborum omnis quo ab rem cupiditate nulla
        perspiciatis ipsum!`;
    descDiv.appendChild(pEl);

    const pEl2 = document.createElement("p");
    pEl2.innerHTML = `<em>Is naughty?</em> yes`;
    section.appendChild(pEl2);

    const button = document.createElement("button");
    button.innerHTML = "Good dog!";
    section.appendChild(button);
  });

  return li
}

function renderDogsList() {
  for (let i = 0; i < data.length; i++) {
    const dog = data[i];
    renderDog(dog);
  }

  addDogBtn.addEventListener("click", renderNewDogForm);
}

function renderNewDogForm() {
  section.innerHTML = " ";

  const formH2 = document.createElement("h2");
  formH2.innerText = "Add a new dog";
  section.appendChild(formH2);

  // creating form
  const form = document.createElement("form");
  form.setAttribute("class", "form");
  section.appendChild(form);

  // creating form content
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = `Dog's name`;
  form.appendChild(nameLabel);

  const inputText = document.createElement("input");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("id", "name");
  inputText.setAttribute("name", "name");
  form.appendChild(inputText);

  const imgLabel = document.createElement("label");
  imgLabel.setAttribute("for", "image");
  imgLabel.innerText = `Dog's picture`;
  form.appendChild(imgLabel);

  const urlInput = document.createElement("input");
  urlInput.setAttribute("type", "url");
  urlInput.setAttribute("ig", "image");
  urlInput.setAttribute("name", "image");
  form.appendChild(urlInput);

  const bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");
  bioLabel.innerText = `Dog's bio`;
  form.appendChild(bioLabel);

  const textArea = document.createElement("textarea");
  textArea.setAttribute("rows", "5");
  textArea.setAttribute("id", "bio");
  textArea.setAttribute("name", "bio");
  form.appendChild(textArea);

  const submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("id", "submit");
  submitInput.setAttribute("name", "submit");
  form.appendChild(submitInput);

    //   adding event listener to form
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const dogName = evt.target[0].value;
    const dogImg = evt.target[1].value;
    const dogBio = evt.target[2].value;

    const dog = {
      id: data.length + 1,
      name: dogName,
      bio: dogBio,
      image: dogImg,
      isGoodDog: true,
    };

    console.log(
      `newDogData:${evt.target[0].value}, ${evt.target[1].value}, ${evt.target[2].value}`
    );

    renderDog(dog, true).click()
  });
}

renderDogsList();
