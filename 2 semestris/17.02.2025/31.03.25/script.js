    function byfuckion()
    {
        let h1_Obj = document.getElementById("helo");
        let user_name = document.getElementById("input_name");
        let user_surname = document.getElementById("input_surname");
        let user_age = document.getElementById("input_age");

        h1_Obj.innerText = "Helo, " + user_name.value + "!";
        console.log(user_name.value);
        console.log(user_surname);
        console.log(user_age);

        if(!user_name.value.match (/[A-z]/)) || user_name.value == ""
        {
            alert(error: name is not correct!);
        }


        if(user_age.value == "" || user_age.value <= 0 || !user_age.value.match(/[0-9]/))
        {
            alert("Error: age is not correct!");
            return;
        }    



        let table = document.grtElementById("myTable")
        let row = table.insertrow();
        let cell = table.insertCell();
        let cell1 = table.insertCell();
        let cell2 = table.imsertcell();
        let cell3 = table.insertCell();
        cell1.innerHTML = user_name.value;
        cell2.innerHTML = user_surname.value;
        cell3.innerHTMl = user_age.value;
        
    
    }
