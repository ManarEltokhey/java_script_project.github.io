function getProducts()
{
    var counter=0
    var category =localStorage.getItem("pro.category")


    var xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200)
        {
           var data=JSON.parse(this.responseText)
        //    console.log("ttttttttttttt")
        //    debugger;

           var productContainer=document.getElementById("productContainer")

           for (var pro of data) {
            counter++
            if(pro.category===category){
        var divPro=document.createElement("div");
         divPro.classList.add("product","textCenter")

         


        var imgPro= document.createElement("img")
        imgPro.setAttribute("src",pro.image)
        imgPro.setAttribute("class","p-img")
        // imgPro.onclick atla3 l fo2 ll sora ; id bta3ha proImg
        // imgPro.setAttribute("href","#proImg")

        divPro.appendChild(imgPro)

        var namePro=document.createElement("h5")
        var txtNamePro=document.createTextNode(pro.title)
        namePro.appendChild(txtNamePro)
        divPro.appendChild(namePro)

        var ratePro=document.createElement('div')
        ratePro.setAttribute("class","star")
         var getrate=document.createTextNode(pro.rating.rate);
        // console.log(typeof(pro.rating.rate));
        for(var i=0;i<=pro.rating.rate;i++){
            var iconStar =document.createElement("i")
            iconStar.classList.add("fa-solid","fa-star")
            ratePro.appendChild(iconStar)

        }
        // ratePro.appendChild(getrate);
        divPro.appendChild(ratePro);
        divPro.onclick=(function (val){
            return function (){
                 console.log(val)
                localStorage.setItem("Pro",val)
                getProduct()
            }

        })(counter)

        var pricePro=document.createElement("h4")
        var txtPricePro=document.createTextNode(" $ "+ pro.price)
        pricePro.appendChild(txtPricePro)
        divPro.appendChild(pricePro)

        var btn=document.createElement("input")
         btn.setAttribute("type","button")
         btn.setAttribute("value","Buy Now")
         btn.classList.add("buyBtn")
         btn.onclick=function(){
         localStorage.setItem("Pro"+pro.id,pro.id)
         }
        divPro.appendChild(btn)


        productContainer.appendChild(divPro)
            }
        }
    }







    }

    xhttp.open("GET","https://fakestoreapi.com/products",true)
    xhttp.send();

}
getProducts();

function getProduct()
{

    var xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200)
        {
            //hana 3awez a2olo l product l id=x hat l sora bta3to azai b2a???

           var data=JSON.parse(this.responseText)
           var imgPro= document.getElementById("proImg")
           imgPro.setAttribute("src",data.image)

           var categoryName= document.getElementById("catName")
           categoryName.innerHTML=data.category

           var getrate= document.getElementById("proRate")
           var getRate=data.rating.rate;
           
        //    console.log(typeof(data.rating.rate));
           for(var i=0;i<=getRate;i++){
               let iconStar =document.createElement("i")
               iconStar.classList.add("fa-solid","fa-star")
               getrate.appendChild(iconStar)

           }
           getrate.appendChild(null)
        
        //    ratePro.appendChild(getrate);
        //    divPro.appendChild(getRate);


           var proName= document.getElementById("proName")
           proName.innerHTML= data.title

           var proPrice= document.getElementById("proPrice")
           proPrice.innerHTML=  "$ "+ data.price

           var proDescription= document.getElementById("proDescription")
           proDescription.innerHTML=data.description

    }
}
    var id=localStorage.getItem("Pro")
    xhttp.open("GET","https://fakestoreapi.com/products/"+id,true)
    xhttp.send();

}

// var spanPro=document.createElement("span")
// spanPro.setAttribute("class","ProID")
// spanPro.setAttribute("width","100")
// spanPro.setAttribute("height","100")
// console.log(spanPro)


// var img= document.createElement("img")
// img.setAttribute("src",pro.image)
// img.setAttribute("class","p-img")
// spanPro.appendChild(img)

// var namePro=document.createElement("h3")
// var txtPro=document.createTextNode(pro.title)
// namePro.classList.add("p-Name")
// namePro.appendChild(txtPro)
// spanPro.appendChild(namePro)

// var btn=document.createElement("input")
// btn.setAttribute("type","button")
// btn.setAttribute("value","Buy Now")
// btn.onclick=function(){
// localStorage.setItem("Pro"+pro.id,pro.id)
// }
// spanPro.appendChild(btn)


// div.appendChild(spanPro)


// // document.getElementById("Products").innerHTML+="<h1> ID : "+pro.id+"</h1> <br> <h2> Title : "+pro.title+"</h2> <br>"
// // document.getElementById("Products").innerHTML+="<img src="+pro.image+" width='100' height='100' > <hr>"
// }
// console.log(div)
//}