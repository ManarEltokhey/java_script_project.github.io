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
               var iconStar =document.createElement("i")
               iconStar.classList.add("fa-solid","fa-star")
               getrate.appendChild(iconStar)

           }
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
getProduct();
