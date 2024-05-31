export function getProfile(data) {
    const profile =  document.querySelector(".profile");

    const filterData = data.filter(i => {
        return i.name === 'Jessica Taylor'
    });

    // console.log(filterData)

        profile.innerHTML += `<div class="profile-holder flex flex-col justify-center items-center">
        <img src="${filterData[0].profile_picture}" alt="profile-pic"class="w-[200px] h-[200px] mb-6">
        <h2 class="text-2xl font-extrabold">${filterData[0].name}</h2>
      </div>
      <div class="details flex flex-col mt-8 gap-6">
        <div class="dob flex gap-4">
          <img src="assets/BirthIcon.svg" alt="dob">
          <div>
            <p>Date of Birth</p>
            <p class="font-bold">${filterData[0].date_of_birth}</p>
          </div>
        </div>
        <div class="gender flex gap-4">
          <img src="assets/FemaleIcon.svg" alt="gender">
          <div>
            <p>Gender</p>
            <p class="font-bold">${filterData[0].gender}</p>
          </div>
        </div>
        <div class="contact-info flex gap-4">
          <img src="assets/PhoneIcon.svg" alt="contact-info">
          <div>
            <p>Contact Information</p>
            <p class="font-bold">${filterData[0].phone_number}</p>
          </div>
        </div>
        <div class="emergency flex gap-4">
          <img src="assets/PhoneIcon.svg" alt="emergency">
          <div>
            <p>Emergency Contacts</p>
            <p class="font-bold">${filterData[0].emergency_contact}</p>
          </div>
        </div>
        <div class="insurance flex gap-4">
          <img src="assets/InsuranceIcon.svg" alt="insurance">
          <div>
            <p>Insurance Provider</p>
            <p class="font-bold">${filterData[0].insurance_type}</p>
          </div>
        </div>
      </div> 
      <div class="flex justify-center mt-10">
        <button class="bg-[#01F0D0] hover:bg-[#51d09b] hover:text-white duration-200 px-10 py-3 w-56 rounded-full border-none outline-none font-bold">Show All Information</button>
      </div>`
}
