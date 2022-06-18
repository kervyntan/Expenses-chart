// fetch the data from the local json file
// calculate the total amount from the json, then sum it up
// take each amount, make it a percentage of the total
// make that percentage the height of each day
const fetchDailyExpenditure = async () => {

    // fetch("../../data.json")
    // .then(response => response.json())
    // .then(data => catchData(data))
    
    // fetch the data, then parses the JSON into JS object
    let res = await(fetch("../../data.json").then(
        response => response.json()
    ))

    const listOfDays = document.querySelectorAll('.bar-chart-list-item')
    const listOfBarAmount = document.querySelectorAll('.bar-amount')
    // console.log(listOfDays)

    const targetParaElement = 2;
    for (let i = 0; i < listOfDays.length; i++) {
        // ensure that each list item in the bar chart represents the specific day
        listOfDays[i].children[targetParaElement].innerText = res[i].day;
        // listOfDays[i].children[0].style.height = res[i].amount + "px";

        // documentElement -> css inside :root
        // setting each individual animation property
        listOfBarAmount[i].innerText = '$' + res[i].amount;
        document.documentElement.style.setProperty('--animation-end-width-' + res[i].day, res[i].amount + "px");

        listOfDays[i].addEventListener('mouseover', () => {
            const barAmount = listOfBarAmount[i];
            barAmount.classList.add("show");
            barAmount.classList.remove("disappear");
        })

        listOfDays[i].addEventListener('mouseleave', () => {
            const barAmount = listOfBarAmount[i];
            barAmount.classList.add("disappear");
            barAmount.classList.remove("show");
        })
    }
}


fetchDailyExpenditure();