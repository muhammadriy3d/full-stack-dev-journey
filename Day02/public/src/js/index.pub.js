const base = document.querySelector('.hero-content');
const logo = document.createElement("img");
const uname = document.createElement('h3');
const desc = document.createElement('p');
const gitName = document.querySelector('.git-name')
const logname = document.createElement('span')

logo.alt = "Logo"
logo.style.borderRadius = "50%";
logo.setAttribute('class', 'hero-image')
uname.setAttribute("class", "hero-title")
desc.setAttribute('class', "hero-description")
logname.setAttribute('class', 'name')

let dataset, logoUrl = "";

const setDataset = new Promise((res, rej) => {
  setTimeout(() => {
    fetch('https://api.github.com/users/yourgithubname')
      .then((res) => res.json())
      .then((data) => res(data))
      .catch((err) => alert(err.message))
  }, 300)
});

const setElements = (response) => {
  // logo
  logo.src = logoUrl;
  base.appendChild(logo)

  // name
  uname.append(response.name)
  base.appendChild(uname)

  // description
  desc.append(response.bio)
  base.appendChild(desc)

  // username
  logname.append("@" + response.login)
  gitName.appendChild(logname)
}

setDataset
  .then(res => {
    try {
      logoUrl = res.avatar_url;
      setElements(res)
    } catch (err) {
      alert(err)
    }
  })
