function navbar(){
    let status = document.getElementsByClassName("dropdowncont")[0].style.display;
    console.log(status);

    if(status == "none" || status == "")
        {
            document.getElementsByClassName("dropdowncont")[0].style.display = "block";
        }
    else
        {
            document.getElementsByClassName("dropdowncont")[0].style.display = "none";
        }
}