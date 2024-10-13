onload = function () {
    const apiUrl = 'https://api.mcstatus.io/v2/status/java/mc.totskiycraft.pp.ua';
    var statusObj = document.getElementById('status')
    var statusObjText = document.getElementById('status-text')

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data['online']) {
            statusObjText.innerText = 'Online';
            statusObj.style.color = "#c1ffb1";
        } else {
            statusObjText.innerText = 'Offline';
            statusObj.style.color = "#ff9f9f";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
