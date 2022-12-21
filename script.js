const select = document.querySelector("select");
const tbody = document.querySelector("tbody");
let loading = false;

const getData = async () => {
  const response = await fetch("./mahasiswa.json");
  const data = await response.json();
  return data;
};

const renderDetail = (prodi) => {
  if (prodi === "all") {
    getData().then((data) => {
      tbody.innerHTML = "";
      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${item.nama}</td>
                    <td>${item.nim}</td>
                    <td>${item.prodi}</td>
                    `;
        tbody.appendChild(tr);
      });
    });
    return;
  }

  getData().then((data) => {
    const filteredData = data.filter((item) => item.prodi === prodi);
    tbody.innerHTML = "";
    filteredData.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.nama}</td>
        <td>${item.nim}</td>
        <td>${item.prodi}</td>
        `;
      tbody.appendChild(tr);
    });
  });
};

select.addEventListener("change", (e) => {
  renderDetail(e.target.value);
});

renderDetail("all");
