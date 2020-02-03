/*Gertrude Vanessa Ngono Essono
ngonoessono_a07b.js
INFO2124
Thoendel
01/30/2020*/

/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer", "soda", "cheese", "chocolate");        

standardInput.on('data', function (text){
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    //this block takes input from user and  match with option//
    switch(text){
    case "Q"||"q":
            clearScreen();
            console.log("bye")
            process.exit(); 
    break;   
    case "V"||"v": 
            clearScreen();
            displayList(groceryItems);
            getPrompt;
    break;
    default: 
        clearScreen();
        checkItem(text, badFoods);
    break;
    //the blockadd new items to the grocery list//
    if(checkItem == false){
                formatItem(text);
                groceryItems.push(formatItem(text));
                console.log(`Item added to list!\n\n
                list contains ${groceryItems} items
                your grocery list contains ${groceryItems} items
                Please enter a grocery item.
                Enter Q to quit
                =======================`)
            }else{
                `Error: that item is not safe for your allergies. 
                It has not been added to your list.\n
                Your grocery list contains ${groceryItems} items
                Please enter a grocery item.
                Enter Q to quit
                ===========================`
            }
    

    }
    
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
function buildFoodsList(badFoods,...args){
    for (i=0; i< args.length; i++){
        badFoods.push(args[i]);
        args++;
    }
} 

function getPrompt(groceryItems){
    
        return `Your grocery list contains ${groceryItems} items. 
Please enter a grocery item. Please 
Enter Q to quit.
Enter V to view list
=======================`;

function displayList(groceryItems){
    for(let i=0; i<groceryItems; i++){
        groceryItems += groceryItems[i];
    }
    return `Grocery list
            (${groceryItems} items)
            =======================`
}
}
//Step 3
function checkItem(groceryItems, badFoods){
    groceryItems = ["rice"];
    for(let i=0;i< badFoods.length; i++){
        if( badFoods == groceryItems[i]){
            return true
        }else{
            return false
        }
    }
    

}

function formatItem(groceryItems ){


    groceryItems= groceryItems.replace('_', '').replace('-', '');
    groceryItems= grocery.chartAt(0).toUppercase()+ groceryItems;
    
}


/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}
