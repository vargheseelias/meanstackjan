class Bank {
    static getAccountDetails() {
       var accountDetails = {
            1000: { accno: 1000, name: "userone", balence: "5000", password: "user1" },
            1001: { accno: 1001, name: "usertwo", balence: "3000", password: "user2" },
            1002: { accno: 1002, name: "userthree", balence: "3000", password: "user3" },
            1002: { accno: 1003, name: "userfour", balence: "3000", password: "user4" },
            1002: { accno: 1004, name: "userfive", balence: "3000", password: "user5" }

        }
        return accountDetails
    }
    static login() {
         
        let accno = document.querySelector("#acno").value;
        let pswrd = document.querySelector("#pwd").value;   
        alert(accno+pswrd)
        let data = Bank.getAccountDetails()
        alert(data);
        if (accno in data) {
            // alert('hello')
            if (pswrd == data[accno]["password"]) {
                alert('matching')
                // console.log("a");
                window.location.href="userhome.html";
            }
            else {
                alert('not matching')
            }
        }
        else {
            alert('no user found')
        }

    }
}
