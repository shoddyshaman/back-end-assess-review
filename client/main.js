document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").addEventListener("click", () => {
  axios
    .get("http://localhost:4000/api/fortune/")
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => console.log(err));
});

let itemsArrayLength = 0;

document.getElementById("getItems").addEventListener("click", () => {
  axios
    .get("http://localhost:4000/api/items")
    .then((res) => {
      itemsArrayLength = res.data.length;
      alert(res.data);
    })
    .catch((err) => console.log(err));
});

document.getElementById("addItem").addEventListener("click", () => {
  const newItem = document.getElementById("newItem").value;

  if (!newItem.trim()) {
    alert("cannot add empty value");
    return;
  }

  const body = { newItem };

  axios
    .post("http://localhost:4000/api/items", body)
    .then((res) => {
      itemsArrayLength = res.data.length;
      alert("item added");
      console.log(res.data);
    })
    .catch((err) => console.log(err));
});

document.getElementById("deleteItem").addEventListener("click", () => {
  if (itemsArrayLength <= 0) {
    alert("nothing here to delete");
    return;
  }
  const indexToDelete = prompt(`Choose an index up to ${itemsArrayLength - 1}`);
  console.log(indexToDelete);
  axios.delete(`http://localhost:4000/api/items/${indexToDelete}`)
    .then((res) => {
      itemsArrayLength = res.data.length;
      alert(res.data);
    })
    .catch((err) => console.log(err));
});
