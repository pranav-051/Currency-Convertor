const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}";

const dropdown1 = document.querySelectorAll(".fromTo select");
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".fromParent select");
const toCurr = document.querySelector(".toParent select");
const msg = documrnt.querySelector(".convertionFT");

for (let select of dropdown1){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode; 

        if(select.id === "fromSelect" && currCode === "USD"){
            newOption.selected = "selected"
        } else if(select.id === "toSelect" && currCode === "INR"){
            newOption.selected = "selected"
        }

        select.append(newOption);
    }
    select.addEventListener("change", (event)=>{
        updateFlag(event.target);
    });
} 

updateFlag = (element)=>{
    let currentCode = element.value;
    let countryCode = countryList[currentCode];

    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;    

    console.log(currentCode);
}

btn.addEventListener("click", async (event)=>{
    event.preventDefault();
    let amount = document.querySelector(".inputField input"); 
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 0){
        amtVal = 0;
        amount.value = 1; 
        console.log(amtVal); 
        alert("Amount cannot be Zero or negative...!")
    }

    const URL  = `${BASE_URL}/${fromCurr.value.lowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch (URL); 
    let data = await response.json(); 
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amount * rate;
    
})