function resizeDropdown(selectElement){  //resizeDroupDown ko call kia

        const selectText = selectElement.options[selectElement.selectedIndex].text // select function ke option select kiye 

        const measurer = document.getElementById('textMeasurer') // text meaurer ko call kiya
        measurer.textContent = selectText // measurer ke andr jo text h uske select text ke pass le gya
 
        const textWidth = measurer.offsetWidth
        selectElement.style.width = (textWidth + 15)+ 'px'
      }

      window.onload = function(){
        resizeDropdown(document.getElementById("dropdown"))
      }

    // background change krne ke liye 

    const myImages = ['PD26_PC_Static_Live-Now-1_pse_2x._CB758493649_.jpg','3000x1200_Veh._CB758794057_.jpg','PC_Hero_Live-phase_ASINs_3000x1200_2._CB758501644_.jpg'];

      let currentImage = 0;
      
      const newBackground = (document.getElementById("background"))

      function changeBackground(){

        myImages[currentImage]  // yha se background change hoga
        
        newBackground.style.backgroundImage = `url(${myImages[currentImage]})` // background ko change krne ke liye or jb url lgate h js me backstick (``) lgate h 
      }

      const nextButton = document.querySelector(".next")

      nextButton.addEventListener("click", function(){
        currentImage++;

      if (currentImage >= myImages.length) {
        currentImage = 0
      }
      changeBackground()
      })

      changeBackground();
      
      const preButton = document.querySelector(".pre")

      preButton.addEventListener("click", function(){
        currentImage++;

        if (currentImage >= myImages.length){
            currentImage = 0
        }
        changeBackground()
      })

   let allBtn = document.getElementById("allBtn");
let sideBar = document.getElementById("sideBar");
let overlay = document.getElementById("overlay");

allBtn.addEventListener("click", function () {
    sideBar.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", function () {
    sideBar.classList.remove("show");
    overlay.classList.remove("show");
});

// yha se card ready ho rha h 

let heroCard = document.getElementById('first')
let heroCardDiv = document.querySelectorAll('#first div')

const myCardImg = ['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSA66JS5JTbOMdytdvjTThMS_oXj86raCMuL9OfI6faCQx8oPVwDENkRyVGl2BxzjRWxibYJNTrB3ie-yVm5VEbm9npHHHlrSsBEf2yJvi1KdiycuS4tic4Og','https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQfiI_pflg3UVfcb0LIdreTUFlyRzvPB3y6ZueViQ-OQ-vOdSX-D_jwHL4aV5U5gQxInaWHBEF2QphMa-fB2LPRlsfUBpwmktUt4V_Aqu9NOdBFcw9ubemQz90','https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQ_hrKkGGx3oJXnvpVQKgSKBrwu-RRAVcAC7K8jUpyq76hPXkEXApNXTHbU3GB_1cIXfpWlRS8s1uzvXKZyt2hbxg_bjKn','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8yKmNz5Ro0PnJEYmBth1bHlDsU1p8kRLM2laDMo2Z__6EBRBsNSVhOerv5CSxciTau-t4yT5io9R1kQYPCJGxF8kwoAcLI5LPYunAyRSCVMaH9SqUgEdb-sKMGlP34pV1v8ic-Q&usqp=CAc']

heroCardDiv.forEach((div, index)=>{
 let newImg = document.createElement('img')
 div.appendChild(newImg)
 newImg.src = myCardImg[index]
})

const myCardName = ['boAt Headphone','Luxury Shoes','Rolex Watch','samsung Laptop']

heroCardDiv.forEach((div, index)=>{
  const newName = document.createElement('span')
  div.appendChild(newName)
  newName.innerText = myCardName[index]
})


let secondHeroCard = document.getElementById('second')
let secondHeroCardDiv = document.querySelectorAll('#second div')

const secondCardImg = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdOxbiAwy_gGE_DVIn6H8SGRtfALIlVlfgI-WBftgIg&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTxrATtmu0FbomLpyJzWKR-QRWUfyQBUTVCUskOkkbw&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wpIQzg_0Koim7qPox_jM3QioP_Yuh8uBJOwhgMRDaA&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8rCJ2Z2MVuALCyqHBa7fcsVayGUUIhsg9TpP15Q8eA&s=10']

secondHeroCardDiv.forEach((div, index)=>{
   let newImg = document.createElement('img')
 div.appendChild(newImg)
 newImg.src = secondCardImg[index]
})

const secondCardName = ['Z900','Ninja H2R','Honda Goldwings','Hayabhusa']

secondHeroCardDiv.forEach((div, index)=>{
  const newName = document.createElement('span')
  div.appendChild(newName)
  newName.innerText = secondCardName[index]
})

const threeCardImg = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSGUI7_UkWTZqhZnXGoX_rsYNtsznzzTjJQSGMHYBOw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqhY8bYswmABA4K33UrAqgj5ueFuw5_mr6mPl5yXyPA&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4TSm5bAOWiaqzCwioWtvhbFXNVfpui4xnKKYKyzGUQ&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzVV-_h-_BmGmcfJp2HKaN2mdzcwADyXa0y3kYwVzLg&s'];

const threeCardName = ['realme airpods', 'moniter', 'Ipad', 'Speaker']

function cardData(cardId, imgArray, nameArray){
   const card = document.getElementById(cardId)
   const cardDiv = card.querySelectorAll('div')

   cardDiv.forEach((div, index)=>{
   let newImg = document.createElement('img')
 div.appendChild(newImg)
 newImg.src = imgArray[index]

 const newName = document.createElement('span')
  div.appendChild(newName)
  newName.innerText = nameArray[index]
})
}
 cardData("three", threeCardImg, threeCardName);



 const fourCardImg = ['https://m.media-amazon.com/images/I/615ylYZ1N8L._SR210,210_.png','https://m.media-amazon.com/images/I/615uaHjEB4L._SR210,210_.png','https://m.media-amazon.com/images/I/61NBJ5F2yFL._SR210,210_.png','https://m.media-amazon.com/images/I/61luDRb+ftL._SR210,210_.png']

 const fourCardName = ['surf excel','wheatfloor','tea & coffee','Huggies']

 cardData("four", fourCardImg, fourCardName );



 const secondfirstCard = ['https://cdn.shopify.com/s/files/1/0587/0531/3990/files/81h6BivA05L._SX522_480x480.jpg?v=1771590206','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcsmFuCyAVKpiNrWD8j68iPqh0ZK_Y6U20yJyNng35Q&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgMxN8Q810pkBFkKIT1VSIrvEZMngmLwckoGlVn5WSw&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTitjfPRjZnEK-xD0fsxYl522oP38V8QL1DhAOT9a4mg&s=10']

 const secondfirstCardName = ['FOGG','Smoky Perfume','SKKIN perfume','Upsilon perfume']

 cardData("second-first", secondfirstCard, secondfirstCardName)



 const secondSecondCard = ['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuiyoEkpLjErw7aRGRhHOeU0YSFIguDSLNIlr7tN2-QAmL9i5rdbG63kYGD_kdWmH0Ip85kicw9s0KkA7lczpWWSvB0IEhicfwx8k95qwFoj17qkvtVgoP','https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQX4nl-TCU-E1-5ndlHvRvDU9BzMDdIkxjhWoj-HVgru3o5rVzM2s64DSewuh4vMhPfeWW5EdeNTU92LmORjqqYu1Pw7QMPqVy4czjJxRhz086VLPUDr8an','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzhssXH86MujW5uazzrt-dhsBfb3fYf6GJErrjSO-U3PVOsyxQmVuhL5Vok6bgNFtzl3IMwFGuIfe7_6ct1JEM7BxIRIhCB5vkRiJxcj39kZabRtXMSFS5','https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRx3TR5-k65WuubKCNRQy4hb7b9-f49poQYfgbmr4Swl73ttxkTGreBr7TzJ2fkwvKGwcONuoPKprmoe0bFM05e42TtQnRJwBOY4Or1iqQBEPiBtxfoPPKKzo']
 const secondSecondCardName = ['Fire TV stick','Fire TV Cube','Mobile holder','Echo Show 8']

 cardData("second-second", secondSecondCard, secondSecondCardName)

 const secondThreeCard = ['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6f42VbI16x4pJmAc9HLViTy1vaLBCaZYtJeiN6SQ_GDskw-twhOk4wYF_KwGVXLGWvij4zD7zI8Z-NGmtTETRd7Z84ICgnFcaq95_A6QCRanDAEAVvStXDQ','https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwPYMSlmYQrZY2lH7yzeIRPkxxwZ3wX4OzjuPzZz2AINaV1iR924f--mh-jR5EOmRll4CcBB2gMptTG2vEbe083yXbM5Qyup-jYM-o1wJi','https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTecsdSG-rp9nLQ6u-PmByM264-iCZuHq6xggBdeTGrEZDYFxurl-tyed5ybbDCzWphO1XyaxTmGPo6__mTD-W8WWkb14BV4u0t0kNRIG0','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGKRaK2J4UblIoUi_y1dn-eElik9Y2qqjTxZaReZhNg&s']
const secondThreeCardName = ['Urbano Shirt','Noble Monk Shirt','cb-collbook','shirt']

cardData("second-three", secondThreeCard, secondThreeCardName)


const secondFourCard = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4_8rbYQMXn3AE8LW9ZitERHkMeZZn-6NiCcE2cLG1A&s=10','https://m.media-amazon.com/images/I/41K+zLZZq0L._SS100_.jpg','https://images-eu.ssl-images-amazon.com/images/I/71kYV2+b46L._AC_UL165_SR165,165_.jpg','https://m.media-amazon.com/images/I/61+tsqpSVEL._SR210,210_.jpg']
const secondFourCardName = ['Waterproof Tap','Mixer','IPhone cover','cutter']
 cardData("second-four", secondFourCard, secondFourCardName)


 const threeFirstCard = ['https://m.media-amazon.com/images/I/71+yr8Os6gL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/61kryPah-vL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/71AHZUc7CFL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/61WLHUnn+pL._AC_UL320_.jpg'];
 const threeFirstCardName = ['GetSetNova Digital 10Kg','IONIX Jewellery Scale','Digital Weighing Scale','SKADIOO Weighing scale']
 cardData("three-first", threeFirstCard, threeFirstCardName)


 const threeSecondCard = ['https://m.media-amazon.com/images/I/61iuawzW+pS._AC_UL320_.jpg','https://m.media-amazon.com/images/I/712xj5r4zsL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/414m0pfjBeL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/51ett9J1dKL._AC_UL320_.jpg']
const threeSecondCardName = ['Flameless Electric Lighter','Wazdorf Stainless','Vegetable Peeler','Jet Flame']
cardData("three-second", threeSecondCard, threeSecondCardName)



const threeThreeCard = ['https://images-eu.ssl-images-amazon.com/images/I/61xA6zfMbtL._AC_UL165_SR165,165_.jpg','https://images-eu.ssl-images-amazon.com/images/I/51u3mEE3xML._AC_UL165_SR165,165_.jpg','https://m.media-amazon.com/images/I/71+7pNrmqcL._AC_SX322_CB1169409_QL70_.jpg','https://images-eu.ssl-images-amazon.com/images/I/51sGHe7wPcL._AC_UL165_SR165,165_.jpg']
const threeThreeCardName = ['IONIX sealing','Konvio Neer','Clear Thinking','USHA Air VX']
cardData("three-three",threeThreeCard, threeThreeCardName)


const threeFourCard = ['https://m.media-amazon.com/images/I/71m5WF4zmSL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/51XUKku0iwL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/514tvC2TIjL._AC_UL320_.jpg','https://m.media-amazon.com/images/I/51dLChWrgIL._AC_UY218_.jpg']
const threeFourCardName = ['Stalers', 'Copier Paper', 'Note Counting Machine', 'Folding table'] 
cardData("three-four", threeFourCard, threeFourCardName)


const fourFirstCard = ['https://m.media-amazon.com/images/I/51kbo6Fw1eL._SR210,210_.png','https://m.media-amazon.com/images/I/61odOnc2bSL._SR210,210_.png','https://m.media-amazon.com/images/I/61rOw0TrRVL._SR210,210_.png','https://m.media-amazon.com/images/I/61CnSnumXIL._SR210,210_.png']
const fourFirstCardName = ['Kindle paperwhite','Echo Show','Echo Spot','Echo Show 5']
cardData("four-first", fourFirstCard, fourFirstCardName)


const fourSecondCard = ['https://m.media-amazon.com/images/I/41TsGf9oo4L._SR220,230_.jpg','https://m.media-amazon.com/images/I/51eLfxWC9fL._SR220,230_.jpg','https://m.media-amazon.com/images/I/41AqIyeLDUL._SR220,230_.jpg','https://m.media-amazon.com/images/I/51jJb3Jd6QL._SR220,230_.jpg']
const fourSecondCardName = ['pens','Art & crafts','Gifting items','Notebook']
cardData("four-second", fourSecondCard, fourSecondCardName)


const fourThreeCard = ['https://m.media-amazon.com/images/I/41HgIPr9ajL._SR210,210_.jpg','https://m.media-amazon.com/images/I/61EBKizVHuL._SR210,210_.jpg','https://m.media-amazon.com/images/I/51gffg1LS1S._AC_AIweblab1374086,T2_FMavif_SF217.5,237_QL54_.jpg?aicid=homepage-faceout','https://m.media-amazon.com/images/I/616ed12iXtL._SR210,210_.jpg']
const fourThreeCardName = ['Electric ride','Ladder','Table','Wall Watch']
cardData("four-three", fourThreeCard, fourThreeCardName)


const fourFourCard = ['https://m.media-amazon.com/images/I/41AIPrjWKqL._SR210,210_.jpg','https://m.media-amazon.com/images/I/5177xYcjqLL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41lIFAx2cGL._SR210,210_.jpg','https://m.media-amazon.com/images/I/71PEtT1ulCL._SR210,210_.jpg',]
const fourFourCardName = ['Footwear','Wallets','Jewellery','Sneakers']
cardData("four-four", fourFourCard, fourFourCardName)


const fiveFirstCard = ['https://m.media-amazon.com/images/I/41KSbF96XPL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41oD-fxtWBL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41xPvl4HEpL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41V7tiC9JoL._SR210,210_.jpg']
const fiveFirstCardName = ['Dinner Set','Kitchen appliances','Jewellery','Gift Cards']
cardData("five-first", fiveFirstCard, fiveFirstCardName);


const fiveSecondCard = ['https://m.media-amazon.com/images/I/41chMK8l9AL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41-66iNbIWL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41evGxm+QSL._SR210,210_.jpg','https://m.media-amazon.com/images/I/41eMX8IJIHL._SR210,210_.jpg'];
const fiveSecondCardName = ['Xiaomi QLED TV','Lumio 9 4K','Samsung QLED','Xiaomi 4K']
cardData("five-second", fiveSecondCard, fiveSecondCardName)


const fiveThreeCard = ['https://m.media-amazon.com/images/I/61JH3MatphL._SR210,210_.png','https://m.media-amazon.com/images/I/614vmf5cyaL._SR210,210_.png','https://m.media-amazon.com/images/I/61gu4eZ0itL._SR210,210_.png','https://m.media-amazon.com/images/I/61OqxbjMgSL._SR210,210_.png']
const fiveThreeCardName = ['Logitech','HP','Asus','Dell']
cardData("five-three", fiveThreeCard, fiveThreeCardName);


const fiveFourCard = ['https://m.media-amazon.com/images/I/31ticIuRfXL._SR210,210_.jpg','https://m.media-amazon.com/images/I/31xP8ij-7iL._SR210,210_.jpg','https://m.media-amazon.com/images/I/51DlW7hkKRL._SR210,210_.jpg','https://m.media-amazon.com/images/I/61OzqLBiq2L._SR210,210_.jpg']
const fiveFourCardName = ['Truly wireless','Ear headphone','Candle','Mirrorless Camra'];
cardData("five-four", fiveFourCard, fiveFourCardName)

 // location ka kaam start ho rha h yha se   ========== >

let locationBtn = document.getElementById('location');
let userName = document.getElementById('user')

locationBtn.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
.then(Response => Response.json())
.then(data => {console.log(data)
  let userLocation = document.getElementById('userloct');
userLocation.innerText = data.address.city + " " + data.address.postcode
})
  })
})

userName.innerText = "Deliver to Vansh"

// language ka part start ====== >

let english = document.querySelector(".En");
let hindi = document.querySelector(".Hi");
let telgue = document.querySelector(".Te");
let marathi = document.querySelector(".Ma");
let urdu = document.querySelector(".Ur");

hindi.addEventListener('click', ()=>{
   function findText(node){
  node.childNodes.forEach((child)=>{
    if(child.nodeType === 3){
      allText.push(child.textContent.trim())
     
    }
    else{
      findText(child)
    }
  })
}
const allText = []
 const originalText = []
findText(document.body)     // language ko abhi yhi hold kr rhe h tode time baad contune krenge
console.log(allText)
console.log(originalText)
})


// search functionality is start here

const searchBar = document.getElementById('search')

const searchBarArray = [threeCardName,fourCardName,secondfirstCardName,myCardName,secondCardName,secondSecondCardName,secondThreeCardName,secondFourCardName,threeFirstCardName,threeSecondCardName,threeThreeCardName,threeFourCardName]

const mainSearchBar = searchBarArray.flat()

searchBar.addEventListener('input', ()=>{
   let allCards = document.querySelectorAll('.Product-card')
   console.log(allCards.length);
 let currentValue = searchBar.value;
 const newValue = mainSearchBar.filter((product) => {
    return product.includes(currentValue)
    console.log(newValue)
})
 
 if(newValue.length > 0){
  allCards.forEach((card)=>{
    let newAllName = card.querySelector('span')
    let allProduct = newAllName.textContent
    if(newValue.includes(allProduct)){
      card.style.display = ""
    }else{
      card.style.display = "none"
    } 
  })
    }else if(newValue.length === 0 ){
      // alert("item is not found")
    }
})


////// =====>>>>   add to cart krne ke liye  ======>>>>>

let AllCart = []

let cartStore = localStorage.getItem("AllCart")

if(cartStore){
    AllCart = JSON.parse(cartStore)
}
let cartButton = document.querySelector('.cart')
let allCards = document.querySelectorAll('.Product-card')
allCards.forEach((card)=>{
  card.addEventListener('click', ()=>{
        let newAllName = card.querySelector('span')
    let allProduct = newAllName.textContent
    const productDetails = document.getElementById('details-box');
    productDetails.style.display = "block"
    productDetails.innerHTML = ""
    let allImg = card.querySelector('img');
    let imgSrc = allImg.src;
    console.log(imgSrc)
    let imgNew = document.createElement('img')
    imgNew.src = imgSrc;
    productDetails.appendChild(imgNew)
    let CardName = document.createElement('h2')
    CardName.textContent = allProduct
    productDetails.appendChild(CardName)

    let closeButton = document.createElement('button')
    closeButton.classList.add('closeBtn')
    productDetails.appendChild(closeButton)
    closeButton.textContent = "X"
    closeButton.addEventListener('click', ()=>{
      productDetails.style.display = "none"
      productDetails.style.color = "black"
    })

    const addToCard = document.createElement('button');
    addToCard.classList.add('addcart')
    productDetails.appendChild(addToCard);
    addToCard.textContent = "Add to Cart";
    addToCard.addEventListener('click',()=>{
      const product = {
        name: allProduct,
         image: imgSrc
      }
      AllCart.push(product)

      let newCart = JSON.stringify(AllCart)              // array ko string me cgange krna
      localStorage.setItem("AllCart", newCart)           // local store me save krte time first me key or second me value dalte h 
      

    })
  })
})
    let cartBox = document.querySelector('.cart-box')
    cartButton.addEventListener('click', ()=>{
      cartBox.style.visibility = 'visible'
      cartBox.innerHTML = ""
      
      AllCart.forEach((product)=>{
      
       let mainDiv = document.createElement('div')
       mainDiv.classList.add('main-cart')
       cartBox.appendChild(mainDiv)

        let newDiv = document.createElement('div')
        newDiv.classList.add('cart-containor')
        let cartImg = document.createElement('img')
        let cartName = document.createElement('span')
        cartImg.src = product.image
        cartName.textContent = product.name
        newDiv.appendChild(cartImg);
        newDiv.appendChild(cartName)
        mainDiv.appendChild(newDiv)

         let numberDiv = document.createElement('div')
         numberDiv.classList.add('number-div')
         mainDiv.appendChild(numberDiv)

          let discrees = document.createElement('button');
      let  increes = document.createElement('button')
      let number = document.createElement('span')
      number.classList.add('number')
      number.textContent = ('1')
      numberDiv.appendChild(number)
      increes.classList.add('cart-increes')
      discrees.classList.add('cart-discrees')
      discrees.textContent = ('-')
      increes.textContent = ('+')
      numberDiv.appendChild(increes);
      numberDiv.appendChild(discrees);

      increes.addEventListener('click',()=>{
      let newNumber = Number(number.textContent) ///                     string ko number me change kiya 
       newNumber =   newNumber + 1
       number.textContent = newNumber
      })
      discrees.addEventListener('click',()=>{
      let newNumber = Number(number.textContent) ///                     string ko number me change kiya 
       if(newNumber > 1){
        newNumber = newNumber - 1
       }
       number.textContent = newNumber
      })
      let lastBtn = document.createElement('button')
      lastBtn.classList.add('last-btn')
      lastBtn.textContent = ('X')
      numberDiv.appendChild(lastBtn)

      lastBtn.addEventListener('click', ()=>{

        AllCart = AllCart.filter((item)=>{
    return item.name !== product.name
})

        let newCart = JSON.stringify(AllCart)
    localStorage.setItem("AllCart", newCart)
    
       mainDiv.remove()
      })
      })
      
      let closeBtn = document.createElement('button');
        closeBtn.classList.add('cart-close')
        closeBtn.textContent = ('X')
        cartBox.appendChild(closeBtn)
        closeBtn.addEventListener('click', ()=>{
          cartBox.style.visibility = 'hidden'
        })
    })