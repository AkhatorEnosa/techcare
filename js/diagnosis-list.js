export function getList(data) {
    const diagnosisList = document.querySelector(".diagnosis-list");
    diagnosisList.innerHTML += `<thead class="bg-[#F6F7F8] rounded-3xl">
    <tr class="text-left w-full">
      <th class="pt-[15px] pb-[14px] px-4">Problem/Diagnosis</th>
      <th class="pt-[15px] pb-[14px] px-4">Description</th>
      <th class="pt-[15px] pb-[14px] px-4">Status</th>
    </tr>
    </thead>`;

    const filteredData = data.filter(i => {
        return i.name === 'Jessica Taylor'
    });

   filteredData[0].diagnostic_list.map(i => {
    diagnosisList.innerHTML += `
   
    <tbody>
    <tr class="mt-[10px]">
    <td class="pt-[11px] pb-[10px] px-4">${i.name}</td>
    <td class="pt-[11px] pb-[10px] px-4">${i.description}</td>
    <td class="pt-[11px] pb-[10px] px-4">${i.status}</td>
    </tr>
    </tbody>`
        // console.log(i)
   })
    
}

{/* <thead>
<tr>
  <th>Song</th>
  <th>Artist</th>
  <th>Year</th>
</tr>
</thead>
<tbody>
<tr>
  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
  <td>Malcolm Lockyer</td>
  <td>1961</td>
</tr>
<tr>
  <td>Witchy Woman</td>
  <td>The Eagles</td>
  <td>1972</td>
</tr>
<tr>
  <td>Shining Star</td>
  <td>Earth, Wind, and Fire</td>
  <td>1975</td>
</tr>
</tbody> */}


{/* <div class="flex justify-between bg-[#F6F7F8] p-4 rounded-3xl font-bold">
<h4>Problem/Diagnosis</h4>
<h4>Description</h4>
<h4>Status</h4>
</div>
<div class="flex justify-between p-4">
<p>Problem/Diagnosis</p>
<p>Description</h4>
<p>Status</p>
</div> */}