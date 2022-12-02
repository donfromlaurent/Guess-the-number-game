    var msg1 = document.getElementById("msg1");
    var msg2 = document.getElementById("msg2");
    var msg3 = document.getElementById("msg3");
    var main = document.querySelector("#main");
    var btn = document.getElementById("btn");
    var btn2 = document.getElementById("btn2");
    var secretNumber = Math.floor(Math.random() *21);
    var lives = 5;
    var numbers = [];
    var scores = 0;

    function play(){
        var myNumber = document.getElementById("guessedNumber").value;
        if(myNumber < 1 || myNumber > 20){
            alert("Please enter a number between 1 and 20.")
        }else{
            numbers.push(myNumber);
            scores +=1;
            if(myNumber < secretNumber){
                if(lives > 1){
                    msg1.textContent = "Your guess is too low!";
                    msg2.textContent = "You guessed it in " + scores + " guesses."
                    msg3.textContent = "Guessed numbers are: " + numbers;
                    lives --;
                }else{
                    msg1.textContent = "You lost!"
                    msg2.textContent = "Please try again";
                    main.style.background = "red";
                    document.body.style.color = "red";
                    btn.style.display = "none";
                    btn2.style.display = "block";
                }
            }else if(myNumber > secretNumber){
                if(lives > 1){
                    msg1.textContent = "Your guess is too high!";
                    msg2.textContent = "You guessed it in " + scores + " guesses."
                    msg3.textContent = "Guessed numbers are: " + numbers;
                    lives --;
                }else{
                    msg1.textContent = "You lost!"
                    msg2.textContent = "Please try again";
                    main.style.background = "red";
                    document.body.style.color = "red";
                }
            }else if(myNumber == secretNumber){
                myNumber.textContent = "";
                main.style.background = "green";
                document.body.style.color = "green";
                msg1.textContent = "You won!"
            }
        }
    }
    function restart(){
        myNumber.value = "";
        document.getElementById("main").style.background = "black";
        document.body.style.color = "black";
    }