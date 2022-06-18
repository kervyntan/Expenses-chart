// fetch the data from the local json file
// calculate the total amount from the json, then sum it up
// take each amount, make it a percentage of the total
// make that percentage the height of each day
const fetchDailyExpenditure = async () => {

    // fetch("../../data.json")
    // .then(response => response.json())
    // .then(data => catchData(data))
    let res = await(fetch("../../data.json").then(
        response => response.json()
    ))

    // console.log(res)
    const listOfDays = document.querySelectorAll('.bar-chart-list-item')
    console.log(listOfDays)
    for (let i = 0; i < listOfDays.length; i++) {
        listOfDays[i].children[1].innerText = res[i].day;
        // listOfDays[i].children[0].style.height = res[i].amount + "px";
        document.documentElement.style.setProperty('--animation-end-width-' + res[i].day, res[i].amount + "px");
    }
}

fetchDailyExpenditure();