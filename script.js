document.getElementById("google").addEventListener("click", function(){

// let url = "https://www.google.com/search?q=ramdev baba";
  // let win = window.open(url, "", "width=690, height=690, scrollbars=yes, resizable=yes, toolbar=yes, location=yes");
  window.location = "https://www.google.com";
  // win.focus();// calls win
})

 createBookmark=()=> {

   
    var name = document.getElementById('name').value;// store nami in name keep it variable only
    var address = document.getElementById('address').value;
// store 

   
    if (name && address) {//will only work if both are present

      
      let bookmarkButton = document.createElement('a');

      //i used easy way out creating anchor tag and button tag inside it. you can do it hard way but this works for me.
      
      bookmarkButton.href = address;
      bookmarkButton.innerHTML = `<button>`+name+`</button>`;
 
      bookmarkButton.style.display = 'block';
      bookmarkButton.style.marginTop = '10px';
      
      document.body.appendChild(bookmarkButton);
// Adds/appends the created anchor element "a" inside variable (bookmarkButton) to the end of <body> of the HTML document you can use other methods from my previous rapels to change the positions. 
      
   } 
    
    else {
      alert('Please enter both name and address.');
    }
  }
