export function populateChart(data) {
    const ctx = document.getElementById('myChart');
    const details = document.querySelector('.details');
    let date = [];
    let shuffledDate = [];
    let diastolicValue = [];
    let systolicValue = [];
    let monthRange = ['October', 'November', 'December', 'January', 'February', 'March'];
    let newArray = [];

    let getHigh;

    const filteredData = data.filter(i => {
        return i.name === 'Jessica Taylor'
    });
    
    filteredData[0].diagnosis_history.map(e => {
        date.push(`${(e.month).substring(0, 3)}, ${e.year}`);
        // console.log(date.splice(6).sort())
        shuffledDate = date.slice(0,6).reverse();
        return shuffledDate;
    });

    filteredData[0].diagnosis_history.map(e => {
        diastolicValue.push(e.blood_pressure.diastolic.value);
        diastolicValue.filter(item => {
            return item > 50
        });
    })

    filteredData[0].diagnosis_history.map(e => {
        if(monthRange.includes(e.month)) {
            newArray.push(e.month)
        }
        // console.log(newArray)
        // console.log(newArray)
        systolicValue.push(e.blood_pressure.systolic.value);
        systolicValue.filter(item => {
            return item > 50
        });
    })

    getHigh = filteredData[0].diagnosis_history.filter(e => {
       return e.blood_pressure.systolic.value === 179
    })
        // console.log(getHigh);
        // console.log(Math.max(...systolicValue))
    // console.log(filteredData[0].diagnosis_history)
    // console.log(filteredData[0].diagnosis_history)

    new Chart(ctx, {
        data: {
            datasets: [{
                type: 'line',
                data: diastolicValue,
                borderWidth: 2,
                borderColor: 'rgba(126, 108, 171, 1)',
                pointBackgroundColor: 'rgba(140, 111, 230, 1)',
                pointBorderColor: 'rgba(250, 250, 250, 1)',
                pointBorderWidth: 1,
                cubicInterpolationMode: 'monotone',
            }, {
                type: 'line',
                data: systolicValue,
                borderWidth: 2,
                borderColor: 'rgba(194, 110, 180, 1)',
                pointBackgroundColor: 'rgba(230, 111, 210, 1)',
                pointBorderColor: 'rgba(250, 250, 250, 1)',
                pointBorderWidth: 1,
                cubicInterpolationMode: 'monotone',
            }],

            labels: shuffledDate
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 60,
                    suggestedMax: 100
                }
            }, 
            plugins: {
                legend: {
                    display: false
                }
            },
            layout:{
                // padding: 20
            }
        }
    });

    details.innerHTML += `<div class="flex flex-col gap-2">
    <h3 class="font-bold flex gap-[4px] items-center"><span class="w-[14px] h-[14px] p-2 rounded-full bg-[#E66FD2]"></span>Systolic</h3>
    <h1 class="font-bold text-2xl">160</h1>
    <p class="flex gap-2"><img src="assets/ArrowUp.svg" alt="arrow-up">Higher than Average</p>
  </div>
  <hr>
  <div class="flex flex-col gap-2">
    <h3 class="font-bold flex gap-[4px] items-center"><span class="w-[14px] h-[14px] p-2 rounded-full bg-[#8C6FE6]"></span>Diastolic</h3>
    <h1 class="font-bold text-2xl">78</h1>
    <p class="flex gap-2"><img src="assets/ArrowDown.svg" alt="arrow-up">Lower than Average</p>
  </div>`
}