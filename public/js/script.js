let inputValue = document.querySelector("#input-value");
let outputValue = document.querySelector("#output-box");
let shortButton = document.querySelector("#short-button");
let notice = document.querySelector("#notice");
let outputDiv = document.querySelector(".output");
let coppied = document.querySelector("#coppied");

async function postValue() {
  try {
    let tryingPOST = await fetch("/createurl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: inputValue.value }),
    });

    let res = await tryingPOST.json();

    if (res.url) {
      return res.url;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

shortButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputValue.value) {
    return alert("enter url");
  }
  postValue().then((res) => {
    if (res) {
      outputValue.value = "bitly/" + res;
      outputDiv.style.opacity = "1";
    } else {
      inputValue.value = "";
      notice.style.display = "block";
      setTimeout(() => {
        notice.style.display = "none";
      }, 2000);
    }
  });
});
coppied.addEventListener("click", () => {
  outputValue.select();
  outputValue.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(outputValue.value)
    .then(() => {
      window.getSelection().removeAllRanges();
      coppied.innerHTML = "COPPIED";
      setTimeout(() => {
        coppied.innerHTML = `<img src="images/clipboard.svg" class="clipboard" />`;
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
