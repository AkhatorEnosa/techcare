export function getLabResults(data) {
    const labResults = document.querySelector(".lab-results");

    const filtered = data.filter(item => {
        return item.name === "Jessica Taylor";
    });

    filtered[0].lab_results.map(i => {
       labResults.innerHTML += `<li class="flex justify-between px-4 py-[11px] hover:bg-[#F6F7F8]">
       ${i}
       <img src="assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="download">
     </li>`
    })
}