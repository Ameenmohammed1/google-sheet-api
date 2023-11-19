const addDataApi =
  "";


const getDataApi =
  "";


  // ADD Data
const form = document.forms["contact-form"];
const submitBtn = document.getElementById("submitButton");
form.addEventListener("submit", (e) => {
  submitBtn.value = "Please Wait...";
  e.preventDefault();
  fetch(addDataApi, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
      submitBtn.value = "Submit";
    })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

// get data

const responseDataParent = document.querySelector(".responseData");

function getData() {
  fetch(getDataApi)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      data.forEach((obj) => {
        let div = document.createElement("div");
        div.classList.add("response");

        responseDataParent.appendChild(div);

        let p = document.createElement("p");
        p.textContent = `Name : ${obj.Name}  Phone No : ${obj.Number}  Email : ${obj.Email}`;
        div.appendChild(p);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

getData();
