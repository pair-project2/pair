function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   
   if (predicate(element, index)) {
     
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }




function makeSneaker(name,price,brand,images){
  return {
   name:name,
   price:price,
   brand:brand,
   images:images
  }}

function MakeSneakersShop(){
  return{
    list:[],
    add:add,
    sortByincPrice:sortByincPrice,
    sortBydecPrice:sortBydecPrice,
    brandFilter:brandFilter,
    nameFilter:nameFilter
    }
}
var add=function(sneaker){
    var item=makeSneaker(sneaker)
  this.list.push(sneaker)
    }
var sortByincPrice=function(){
   this.list.sort(function(a,b){
    return a.price-b.price
  })    
}
var sortBydecPrice=function(){
    this.list.sort(function(a,b){
     return b.price-a.price
   })    
 }
var brandFilter = function (brand) {
    return this.list.filter(function (sneaker) {
        return sneaker.brand.toLowerCase() === brand.toLowerCase();
    })
  }

var nameFilter = function (name) {
    return this.list.filter(function (sneaker) {
        return sneaker.name.toLowerCase() === name.toLowerCase();
    })
}

    function display(item){
    $('#product').append(`
    <div class="oneProduct">
    <div class="productDeteils">
    <img src=${item.images[0]} id="img">
    <div class="productAbout">
    <h3>${item.name}</h3>
    <p><p>Price: ${item.price}</p></p>
    <p><p>Brand:${item.brand}</p></p>
   <button class="buy">Add to Cart</button>
    </div>
    </div>
    </div>`)
    }  

 var sneaker1=makeSneaker("Low Travis Scott Reverse Mocha",269,"Air jordan",["https://www.stickystore.tn/wp-content/uploads/2023/02/Design-sans-titre-15-300x225.png","https://www.stickystore.tn/wp-content/uploads/2023/02/ipad_travis-scott-x-air-jordan-1-low-og-reverse-mocha-2-600x543.jpeg"])
 var sneaker2=makeSneaker("Air force 1 white",249,"Nike",["https://www.stickystore.tn/wp-content/uploads/2022/09/Design-sans-titre-30-300x225.png"])
 var sneaker3=makeSneaker("Yeezy boust V2 350",199,"Adidas",["https://www.stickystore.tn/wp-content/uploads/2023/07/Copie-de-Copie-de-photo-site-4-300x225.png"])
 var sneaker4=makeSneaker("Stan smith",219,"Adidas",["https://www.stickystore.tn/wp-content/uploads/2022/10/stan-smith-forever-primegreen-white-561991_2000x-removebg-preview-300x225.png"])
 var sneaker5=makeSneaker("550 white green",249,"New balance",["https://www.stickystore.tn/wp-content/uploads/2022/10/Sans-titre-80-300x225.png"])
 var sneaker6=makeSneaker("A Bathing Ape",299,"Bape",["https://www.stickystore.tn/wp-content/uploads/2023/10/Design-sans-titre-25-300x225.png"])
 var sneaker7=makeSneaker("Blazer Mid 77 vintage",249,"Nike",["https://www.stickystore.tn/wp-content/uploads/2022/09/Copie-de-Copie-de-photo-site-1-300x225.png"])
 var sneaker8=makeSneaker("1 High Hyper Royal",259,"Air jordan",["https://www.stickystore.tn/wp-content/uploads/2022/10/Sans-titre-85-300x225.png"])
 var sneaker9=makeSneaker("530 White Grey Navy",249,"New balance",["https://www.stickystore.tn/wp-content/uploads/2023/02/New-Balance-530-White-Silver-Navy-1_2000x-300x225.png"])
 var sneaker10=makeSneaker("A Bathing Ape Sta Low Orange",279,"Bape",["https://www.stickystore.tn/wp-content/uploads/2023/09/Design-sans-titre-11-300x225.png"])
 var sneaker11=makeSneaker("Air Force 1 Low SP Ambush Game Royal",279,"Nike",["https://www.stickystore.tn/wp-content/uploads/2023/10/Design-sans-titre-30-300x225.png"])
 var sneaker12=makeSneaker("Superstar triple black",229,"Adidas",["https://www.stickystore.tn/wp-content/uploads/2023/08/Design-sans-titre-18-300x225.png"])
 var sneaker13=makeSneaker("A Bathing Ape  SK8 Sta White Green",299,"Bape",["https://www.stickystore.tn/wp-content/uploads/2023/10/Design-sans-titre-23-300x225.png"])
 var sneaker14=makeSneaker("Stone lsland x New Balance RC Elite V2 White Red",239,"New balance",["https://www.stickystore.tn/wp-content/uploads/2023/08/Design-sans-titre-21-300x225.png"])
 var sneaker15=makeSneaker("4 Black Cat",239,"Air jordan",["https://www.stickystore.tn/wp-content/uploads/2022/11/Design-sans-titre-2-300x225.png"])


 
var sneakersList=MakeSneakersShop()
    sneakersList.add(sneaker1)
    sneakersList.add(sneaker2)
    sneakersList.add(sneaker3)
    sneakersList.add(sneaker4)
    sneakersList.add(sneaker5)
    sneakersList.add(sneaker6)
    sneakersList.add(sneaker7)
    sneakersList.add(sneaker8)
    sneakersList.add(sneaker9)
    sneakersList.add(sneaker10)
    sneakersList.add(sneaker11)
    sneakersList.add(sneaker12)
    sneakersList.add(sneaker13)
    sneakersList.add(sneaker14)
    sneakersList.add(sneaker15)

    each(sneakersList.list,function(e,i){
      display(e)
    }) 

    $(document).ready(function() {
        $(".nike").on("click", function() {
            var selectedBrand = "Nike";
            var filteredProducts = sneakersList.brandFilter(selectedBrand);
            displayFilteredProducts(filteredProducts)
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
        for (var i = 0; i < filteredProducts.length; i++) {
            display(filteredProducts[i]);
        }
    }
})

    $(document).ready(function() {
        $(".adidas").on("click", function() {
            var selectedBrand = "Adidas";
            var filteredProducts = sneakersList.brandFilter(selectedBrand);
            displayFilteredProducts(filteredProducts)
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
            for (var i = 0; i < filteredProducts.length; i++) {
                display(filteredProducts[i]);
            }
        }
    })
    

    $(document).ready(function() {
        $(".jordan").on("click", function() {
            var selectedBrand = "Air jordan"
            var filteredProducts = sneakersList.brandFilter(selectedBrand);
            displayFilteredProducts(filteredProducts)
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
            for (var i = 0; i < filteredProducts.length; i++) {
                display(filteredProducts[i]);
            }
        }
    })
    
    $(document).ready(function() {
        $(".newbalance").on("click", function() {
            var selectedBrand = "New balance"
            var filteredProducts = sneakersList.brandFilter(selectedBrand);
            displayFilteredProducts(filteredProducts);
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
            for (var i = 0; i < filteredProducts.length; i++) {
                display(filteredProducts[i]);
            }
        }
    })
    
    

    $(document).ready(function() {
        $(".bape").on("click", function() {
            var selectedBrand = "Bape"
            var filteredProducts = sneakersList.brandFilter(selectedBrand);
            displayFilteredProducts(filteredProducts);
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
            for (var i = 0; i < filteredProducts.length; i++) {
                display(filteredProducts[i]);
            }
        }
    })

    $(".search").on("click", function() {
        var searchKeyword = $(".inputSearch").val().toLowerCase();
        if (searchKeyword) {
            var filteredProducts = sneakersList.nameFilter(searchKeyword);
            displayFilteredProducts(filteredProducts);
        }
        
    });

    function displayFilteredProducts(filteredProducts) {
        $('#product').empty()
        if (filteredProducts.length === 0) {
            $('#product').append('<p class ="noProduct">No products found.</p>')}
        for (var i = 0; i < filteredProducts.length; i++) {
            display(filteredProducts[i]);
        }
    }


    $(document).ready(function() {
        $(".incSort").on("click", function() {
            var sortedByincPriceProducts = sneakersList.sortByincPrice();
            displayFilteredProducts(sneakersList.list);
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
            for (var i = 0; i < filteredProducts.length; i++) {
                display(filteredProducts[i]);
            }
        }
    })   
    
    

    $(document).ready(function() {
        $(".decSort").on("click", function() {
            var sortedByincPriceProducts = sneakersList.sortBydecPrice();
            displayFilteredProducts(sneakersList.list);
        })
        function displayFilteredProducts(filteredProducts) {
            $('#product').empty(); 
            for (var i = 0; i < filteredProducts.length; i++) {
                display(filteredProducts[i]);
            }
        }
    }) 
     

    
    function changeimg (item){
        var counter=0
        function getnext(){
          counter++
          counter=counter%item.length
          return item[counter]
        }
        return getnext
      }
      var change1=changeimg(sneaker1.images);
      $('#img').on('click',function(){
        var getnextindex=change1()
        this.src=getnextindex
      })  
   
      function display(item) {
        $('#product').append(`
          <div class="oneProduct">
            <div class="productDetails">
              <img src=${item.images[0]} id="img">
              <div class="productAbout">
                <h3>${item.name}</h3>
                <p><p>Price: $<span class="productPrice">${item.price}</span></p></p>
                <p><p>Brand: ${item.brand}</p></p>
                <button class="buy">Add to Cart</button>
              </div>
            </div>
          </div>`);
      
        // Attach a click event handler to the "Add to Cart" button
        $('.buy').on('click', function() {
          addToCart(this);
        });
      }

      let totalPrice = 0;

function addToCart(button) {
  const $product = $(button).closest('.oneProduct');
  const productPrice = parseFloat($product.find('.productPrice').text());
  totalPrice += productPrice;
  updateTotalPrice();
}

function updateTotalPrice() {
  $('#totalPrice').text(`Total Price: $${totalPrice.toFixed(2)}`);
}
// ... Your existing code ...

// Create a function to handle the "Buy Now" button click
$('#buyNow').on('click', function() {
    buyNow();
  });
  
  // Function to handle "Buy Now" button click
  function buyNow() {
    if (totalPrice > 0) {
      // Implement your "Buy Now" functionality here
      alert('Buying now! Total Price: $' + totalPrice.toFixed(2));
    } else {
      alert('Your cart is empty. Add some products before buying.');
    }
  }
  
  // ... Rest of your code ...
  
       