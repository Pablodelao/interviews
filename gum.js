// Write JavaScript here 

//1. Create a div with a 100px height and 100px width. Give this element a class name of “square”
//2. Give the square element a 2px border that is a black color and solid. 
//3. Using JavaScript, create 6 rows of square divs. The first row will contain 1 square, the 2nd will contain to 2 … the 6th will contain 6 square divs. 
/*
[]
[][]
[][][]
[][][][]
[][][][][]
.....
*/
//4. Center the rows 
//5. Give the squares in the first three rows a cursor property of pointer.
//6. Give the Bottom 3 rows a cursor property of help.
//7. Hide the 3rd row
//8. Have the 3rd and 11th squares click out to (https://gumgum.com/) 

function table(){
    for (let i = 1; i <= 6; i++) {
      let row = document.createElement("div");
      row.className = "row";  
      for (let j = 1; j <= i; j++) {
        let square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
      }  
      document.body.appendChild(row);
    }
      const squares = document.querySelectorAll(".square");
      squares[3].onclick = () => {
        window.open("https://gumgum.com/", "_blank");
      };
      squares[11].onclick = () => {
         window.open("https://gumgum.com/", "_blank");
      }; 
    }
    table();
    
    