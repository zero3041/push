function displayData(data, currentPage, rowsPerPage) {
    var tbody = document.getElementById("tableBody-log");
    tbody.innerHTML = "";

    var startIndex = (currentPage - 1) * rowsPerPage;
    var endIndex = Math.min(startIndex + rowsPerPage, data.length);

    for (var i = startIndex; i < endIndex; i++) {
        var row = data[i];
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.deviceId}</td>
            <td>${row.name}</td>
            <td>${row.action}</td>
            <td>${row.date}</td>
        `;
        tbody.appendChild(tr);
    }
    var totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td>Total</td>
        <td></td>
        <td></td>
        <td>${data.length}</td>
    `;
    tbody.appendChild(totalRow);
}

function displayPagination(numPages,datas) {
    var pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (var i = 1; i <= numPages; i++) {
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", `page${i}`);
        input.setAttribute("name", "pagination");
        input.addEventListener("click", function() {
            currentPage = parseInt(this.id.replace("page", ""));
            displayData(datas, currentPage, rowsPerPage);
        });
        li.appendChild(input);

        var label = document.createElement("label");
        label.setAttribute("for", `page${i}`);
        label.textContent = i;
        li.appendChild(label);

        pagination.appendChild(li);
    }
}

var data = [];
var rowsPerPage = 10;
var currentPage = 1;

function init() {
    data = [
        { deviceId: 1, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 2, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 3, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 4, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 5, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 6, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 7, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 8, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 9, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 10, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 11, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 12, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 13, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 14, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 15, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 16, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 17, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 18, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 19, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 20, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 21, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 22, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 23, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 24, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 25, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 26, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 27, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 28, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 29, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 30, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 31, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 32, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 33, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 34, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 35, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 36, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 37, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 38, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 39, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 40, name: "TV", action: "Sleep", date: "2021-05-31" },
        { deviceId: 41, name: "Fan", action: "Turn on", date: "2021-05-31" },
        { deviceId: 42, name: "Selling Fan", action: "Turn on", date: "2021-05-31" },
    ];



    var totalRows = data.length;
    var numPages = Math.ceil(totalRows / rowsPerPage);
    displayData(data, currentPage, rowsPerPage);
    displayPagination(numPages,data);

}

function search() {
    var searchText = document.getElementById("searchInput").value.toLowerCase();
    var filteredData = data.filter(function(item) {
        return item.name.toLowerCase().includes(searchText);
    });
    currentPage = 1
    displayData(filteredData, currentPage, rowsPerPage);
    var totalRows = filteredData.length;
    var numPages = Math.ceil(totalRows / rowsPerPage);
    displayPagination(numPages,filteredData);
}

document.getElementById("searchBtn").addEventListener("click", search);


init();