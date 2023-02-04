var array1;
fetch('db1.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            array1 = data;
            loading();
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });


async function loading() {
    document.getElementById('data').innerHTML= '';
    var array = array1.data;
    let inputval=document.getElementById("options").value;
    console.log('loading',inputval);
    if(inputval != null && inputval!=''){
        array=array.filter(x=> x.status == inputval.toLowerCase());
        console.log(array);  
    }

    document.getElementById('mainheading').innerHTML=`<th colspan="3">Showing for ${inputval}</th>`
    
    document.getElementById('heading').innerHTML=`
        <th>Capsule ID</th>
        <th>Number of Missions</th>
        <th>Details</th>`;

    let value =array.map(x=> {
        return `<tr>
        <td>${x.capsule_serial}</td>
        <td>${x.missions.length}</td>
        <td>${x.details}</td>
        </tr>`
    })
    document.getElementById('data').innerHTML = value.toString().replace(/,/g," ")  
}