export function diagnosisTopBottom(data) {
    const diagnosis_top_bottom = document.querySelector(".diagnosis-top-bottom");

    const filtered = data.filter(items => {
        return items.name === "Jessica Taylor";
    });

    // console.log(filtered)
    
    diagnosis_top_bottom.innerHTML = `<div class="p-4 grid-cols-1 bg-[#E0F3FA] rounded-md h-[242px]">
    <img src="assets/respiratory rate.svg" alt="lungs">
    <div class="details mt-4 mb-[17px]">
      <p>Respiratory Rate</p>
      <h1 class="text-3xl font-extrabold">20 bpm</h1>
    </div>
    <p>Normal</p>
  </div>
  <div class="p-4 grid-cols-1 bg-[#FFE6E9] rounded-md h-[242px]">
    <img src="assets/temperature.svg" alt="temp">
    <div class="details mt-4 mb-[17px]">
      <p>Temperature</p>
      <h1 class="text-3xl font-extrabold">98.6°F</h1>
    </div>
    <p>Normal</p>
  </div>
  <div class="p-4 bg-[#FFE6F1] rounded-md h-[242px]">
    <img src="assets/HeartBPM.svg" alt="Heart">
    <div class="details mt-4 mb-[17px]">
      <p>Heart Rate</p>
      <h1 class="text-3xl font-extrabold">7 bpm</h1>
    </div>
    <p>Lower than Average</p>
  </div>`
}