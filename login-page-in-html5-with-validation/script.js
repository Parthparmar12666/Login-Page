function display()
{
    let username = document.getElementById("username-field").value;
    let Password = document.getElementById("password-field").value;

    if(username=='')
    {
        alert("please enter user name.");
    }
    else if(Password=='')
    {
        alert("Enter valid password");
    }
    else if(pwd.length < 6 || pwd.length > 6)
    {
        alert("Password min and max length is 6.");
    }
    else
    { 
    ("alert('Thank You for Login ");
    }

}