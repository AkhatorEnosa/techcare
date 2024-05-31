export function patientData(data) {

	const patients = document.querySelector('.patients-div');

    data.map(items => {
		const divWrapper = document.createElement('div');
        const itemDiv = document.createElement('div');
		const itemDiv2 = document.createElement('div');
		// const itemDiv3 = document.createElement('div');

		const itemImage1 = document.createElement('img');
		const itemHeading = document.createElement('h2');
		const itemImage2 = document.createElement('img');
		const itemP = document.createElement('p');

		divWrapper.append(itemDiv);
		divWrapper.append(itemImage1);

		itemDiv.append(itemImage2);
		itemDiv.append(itemDiv2);

		itemDiv2.append(itemHeading);
		itemDiv2.append(itemP);
		
		if(items.name ===  "Jessica Taylor") {
			divWrapper.className = "flex justify-between items-center w-full px-5 py-4 bg-[#D8FCF7]"
		} else {
			divWrapper.className = "flex justify-between items-center w-full px-5 py-4 hover:bg-[#D8FCF7]"
		}
		itemDiv.className = "flex gap-3 justify-center items-center"
		itemDiv2.className = "flex flex-col gap-2"
		itemHeading.className = "text-[14px] font-bold"
		itemImage2.className = "w-[48px] h-[48px]";

		itemImage1.src = "assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
		itemImage2.src = items.profile_picture;
		itemP.textContent = items.gender + ", " + items.age
		itemHeading.innerText = items.name;
		

        // item.textContent = items.name;
        patients.appendChild(divWrapper);

        // console.log(patients.innerHTML)
	});
}