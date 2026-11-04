library = []

function addBook(){
    let title = prompt("What is the name of the book you want to add? ").trim()
    let author = prompt("Who is the author of the book? ").trim()
    const book = {
        title: title,
        author: author,
        isRead:false
    }
    library.push(book) 
}

function listBooks(){
    for (let book of library){
        console.log(`Title: ${book.title}, Author: ${book.author}, isRead: ${book.isRead} `)
    }

}

function markAsRead(title){
    for(let book of library){
        if (book.title.toLowerCase() == title.toLowerCase()){
            book.isRead = true;
            return true;
        }
    }
}

function removeBook(title){
    for (let [index, book] of Object.entries(library)){ //really weird that javascript doesn't have an easier way to iterate through both keys and values
        if (book.title.toLowerCase() == title.toLowerCase()){
            library.splice(index, 1); //first argument is index, second argument is amount to delete
            return true;
        }
    }
}

function unread(){
    let list = []
    for (let book of library){
        if (book.isRead == false){
            list.push(book);
        }
    }
    return list;
}


function loop(){
    let title;
    let run;
    while(true){
        const choice = prompt(`Select 1.Add Book 2.List Books 3.Mark Book as Read 4.Remove book from library 5.List unread books 6.Exit`)

        switch(choice){
            case "1":
                addBook();
                break;
            case "2":
                listBooks();
                break;
            case "3":
                title = prompt(`Enter the name of the book to mark as read: `).trim();
                run = markAsRead(title);
                if (run == true){
                    console.log(`succesfully marked ${title} as read`);
                }
                else{
                    console.log("invalid name");
                }
                break
            case "4":
                title = prompt("Enter the name of the book you want to remove: ");
                run = removeBook(title);
                if (run = true){
                    console.log(`Succesfully removed ${title} from library`)
                }
                else{
                    console.log("invalid name");
                }
                break;
            
            case "5":
                run = unread()
                if (run){
                    for (let book of run){
                        console.log(`Title: ${book.title} Author: ${book.author}`);
                    }
                }
                else{
                    console.log("You have read all available books!")
                }
                break;

                
            case "6":
                return;

            default:
                "invalid choice"
                break;
        }
    }

}

loop();