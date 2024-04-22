let data = [];

function fetchDataFromServer() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1/dashboard.php",
        dataType: "json",
        success: function(response) {
            data = JSON.parse(response);
            updateTable();
            updateChart();
        },
        error: function(xhr, status, error) {
            console.error("Lỗi khi lấy dữ liệu từ máy chủ: " + status + " - " + error);
        }
    });
}
fetchDataFromServer();

// if(localStorage.getItem('data')) data = JSON.parse(localStorage.getItem("data"));


var tbody = document.getElementById("tableBody");
var totalPowerConsumption = 0;

function updateTable() {
    tbody.innerHTML = '';
    totalPowerConsumption = 0;

    if(data.length === 0) {
        document.querySelector('.content-main-chart').style.display = 'none';
        document.querySelector('.content-actions').style.display = 'none';
        document.querySelector(".content-main-add").style.width = '100%';
        document.querySelector(".content-main-add").style.margin = '20px 0 0 0';
        return;
    } else {
        document.querySelector(".content-main-add").style.margin = '';
        document.querySelector(".content-main-add").style.width = '';
        document.querySelector('.content-main-chart').style.display = '';
        document.querySelector('.content-actions').style.display = '';
    }

    data.forEach(function(item, index) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.device}</td>
            <td>${item.macAddress}</td>
            <td>${item.ip}</td>
            <td>${item.createdDate}</td>
            <td>${item.powerConsumption}</td>
            <td>
                <a class="btn-edit  btn-action" data-id="${index}"><i class="fa-solid fa-pen-to-square"></i></a>
                <a class="btn-delete  btn-action" data-id="${index}"><i class="fa-solid fa-trash"></i></a>
            </td>
        `;
        tbody.appendChild(row);

        totalPowerConsumption += item.powerConsumption;
    });
    var totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td>${totalPowerConsumption}</td>
    `;
    tbody.appendChild(totalRow);
    document.querySelectorAll('.btn-delete').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            if (confirm('Bạn có muốn xoá')) {
                data.splice(index, 1);
                saveData();
                updateTable();
                updateChart();
            }
        });
    });
    document.querySelectorAll('.btn-edit').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            document.getElementById("formAdd").style.display = "none";
            showEditForm(index);
        });
    });

}


updateTable();

function saveData(){
    const cvdata =  JSON.stringify(data)

    localStorage.setItem(
        "data", cvdata
    )

    const rdata = localStorage.getItem("data")

    data = JSON.parse(rdata)
    console.log(data);
}

var powerConsumptions = [];
var colors = [];

document.querySelectorAll(".styled-table tbody tr").forEach(function(row, index) {
    if (index < data.length) {
        var powerConsumption = parseFloat(row.children[4].textContent);
        powerConsumptions.push(powerConsumption);

        var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        colors.push(randomColor);
    }
});

var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: data.map(item => item.device),
        datasets: [{
            label: 'Power Consumption',
            data: powerConsumptions,
            backgroundColor: colors,
            borderColor: colors.map(color => color.replace('0.2', '1')),
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        plugins: {
            title: {
                display: true,
                text: 'Power Consumption'
            }
        }
    }

});
updateChart();
// update charts with new data and merge data duplicate

function updateChart() {
    var mergeData = {};
    data.forEach(function(item) {
        var deviceName = item.device.toLowerCase();
        if (!mergeData[deviceName]) {
            mergeData[deviceName] = item.powerConsumption;
        } else {
            mergeData[deviceName] += item.powerConsumption;
        }
    });

    var deviceNames = Object.keys(mergeData);
    powerConsumptions = deviceNames.map(function(device) {
        return mergeData[device];
    });

    myPieChart.data.labels = deviceNames;
    myPieChart.data.datasets[0].data = powerConsumptions;
    myPieChart.update();
}



document.getElementById("addDeviceBtn").addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var ip = document.getElementById("ip").value;

    // Validate data
    if (!name.trim()) {
        document.getElementById("nameWarning").classList.remove("none");
        setTimeout(() => {
            document.getElementById("nameWarning").classList.add("none");
        }, 3000);
        return;
    }

    if (!ip.trim()) {
        document.getElementById("ipWarning").classList.remove("none");
        setTimeout(() => {
            document.getElementById("ipWarning").classList.add("none");
        }, 3000);
        return;
    }

    data.push({ device: name, macAddress: "00:00:0A:DS:0A:DS", ip: ip, createdDate: new Date().toISOString().slice(0, 10), powerConsumption: Math.floor(Math.random() * 200) + 1 });
    saveData();
    updateTable();
    updateChart();

    document.getElementById("name").value = "";
    document.getElementById("ip").value = "";
});

// end chart

// advanced





var editingIndex = null;

function showEditForm(index) {
    const editForm = document.querySelector('.content-main-edit form');
    const selectedItem = data[index];
    editForm.querySelector('#name').value = selectedItem.device;
    editForm.querySelector('#mac').value = selectedItem.macAddress;
    editForm.querySelector('#ip').value = selectedItem.ip;
    editForm.querySelector('#powerConsumption').value = selectedItem.powerConsumption;
    document.querySelector('.content-main-edit').style.width = "100%"
    editForm.classList.remove('none');
    editingIndex = index;
}

const editForm = document.querySelector('.content-main-edit form');
editForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (editingIndex !== null) {
        const editedItem = {
            device: editForm.querySelector('#name').value,
            macAddress: editForm.querySelector('#mac').value,
            ip: editForm.querySelector('#ip').value,
            createdDate: "2021-05-31",
            powerConsumption: parseInt(editForm.querySelector('#powerConsumption').value)
        };

        data[editingIndex] = editedItem;
        saveData();
        updateTable();
        updateChart();
        editForm.reset();
        editForm.classList.add('none');
        document.getElementById("formAdd").style.display = null;

        editingIndex = null;
    }
    document.querySelector('.content-main-edit').style.width = null
});


// end advanced


// change input mac address

document.getElementById("mac").addEventListener('keyup', function() {
    this.value =
        (this.value.toUpperCase()
            .replace(/[^\d|A-Z]/g, '')
            .match(/.{1,2}/g) || [])
            .join(":")
});