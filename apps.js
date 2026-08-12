let url = "	https://api.adviceslip.com/advice";
let btn = document.querySelector("#newAdviceBtn");
let copybtn = document.querySelector("#copyBtn");
let shareBtn = document.querySelector("#shareBtn");

shareBtn.addEventListener("click",async()=>{
  if (!document.querySelector("#adviceText")) {
        alert("Please get an advice first!");
        return;
    }
  try {
    if(navigator.share) {
      await navigator.share({
        title: "AdviceHub",
        text: `"${document.querySelector("#adviceText")}"`,
      });
    } else {
      await navigator.clipboard.writeText(document.querySelector("#adviceText"));
      alert("Sharing is not supported. Advice copied instead!");
    }
  } catch (error) {
    console.log("Share cancelled or failed:", error);
  }
});

// call Api

btn.addEventListener("click",async()=> {
  let adviceFact = await GetAdvice();

  document.querySelector("#adviceId").innerText = "Advice #"+adviceFact.id;
  document.querySelector("#adviceText").innerText = adviceFact.advice;


// Copy text

 document.querySelector("small").textContent = ""; 
 document.querySelector("small").innerHTML = "Copy";
  copybtn.addEventListener("click",async()=> {
  try {
    // let advice64 = await GetAdvice();
    await navigator.clipboard.writeText(document.querySelector("#adviceText").textContent);
    document.querySelector("small").textContent = "Copied"; 
   
    setTimeout(()=> {
      document.querySelector("small").textContent = "copied";
    },2000);

  } catch (error) {
    console.log(error);
  }
});
});

async function GetAdvice() {
  let res = await axios.get(url);
  return res.data.slip;
}

GetAdvice();


