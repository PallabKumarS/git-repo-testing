// sort by view
const sortByView = (id) => {
  const btnSort = document.getElementById("btnSort");
  btnSort.addEventListener("click", async () => {
    showNoContent(false);
    const dataObj = await getCategoryInfo(id);
    const data = dataObj.data;
    const viewsSorted = allViewsSorted(data);
    const categorySorted = allCategorySorted(data, viewsSorted);
    showTabContent(categorySorted);
  });
};

// sorting views
const allViewsSorted = (data) => {
  const views = [];
  data.forEach((category) => {
    let element = category?.others.views;
    let number = parseFloat(element);
    views.push(number);
  });
  const descending = views.sort((a, b) => b - a);
  const uniqueDescending = deleteSameNumber(descending);
  return uniqueDescending;
};

// comparing with views
const allCategorySorted = (data, views) => {
  const newData = [];
  for (let i = 0; i < views.length; i++) {
    data.forEach((category) => {
      const element = category?.others?.views;
      const number = parseFloat(element);
      if (views[i] === number) {
        newData.splice(i, 0, category);
      }
    });
  }
  console.log(newData);
  return newData;
};

// deleting same number
const deleteSameNumber = (arr) => {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};
