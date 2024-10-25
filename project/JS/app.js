var projectData = {
        logoUrl : "images/A_logo-removebg-preview.png",
        about_info : "E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet.",
        contact_address: "Patil Niwas, Mulund-East, Mumbai-400081.",
        contact_mail: "asmitpatil2001@gmail.com",
        contact_phone: " +91 8454838345 / +91 9022028450"
};

var loadHeader = (data) => {
    var a5tag = $("<a/>").attr("href", "login.html");
    $(".header").append(a5tag);
    var imgTag1 = $("<img/>").attr("src", projectData.logoUrl).attr("alt", "logo").attr("href", "login.html");
    a5tag.append(imgTag1);
    console.log(imgTag1);
    var ulTag = $("<ul/>").addClass("nav");
    $(".header").append(ulTag);
    var li1tag =$("<li/>");
    var li2tag =$("<li/>");
    var li3tag =$("<li/>");
    var li4tag =$("<li/>");
    ulTag.append(li1tag);
    ulTag.append(li2tag);
    ulTag.append(li3tag);
    ulTag.append(li4tag);
    var a1tag = $("<a/>").text("Login").attr("href", "login.html");
    li1tag.append(a1tag);
    var a2tag = $("<a/>").text("Sign In");
    li2tag.append(a2tag);
    var a3tag = $("<a/>").text("About Us").attr("href", "about.html");
    li3tag.append(a3tag);
    var a4tag = $("<a/>").text("Contact us").attr("href", "contact.html");
    li4tag.append(a4tag);
    console.log(ulTag);
}

var loadFooter = (data) => {
    var div1tag = $("<div/>").addClass("ft_about");
    $(".footer").append(div1tag);
    var div2tag = $("<div/>").addClass("ft_prdt");
    $(".footer").append(div2tag);
    var div3tag = $("<div/>").addClass("ft_contact");
    $(".footer").append(div3tag);
    var div4tag = $("<div/>").addClass("ft_follow");
    $(".footer").append(div4tag);
    var br1tag = $("<br/>");
    $(".footer").append(br1tag);
    var div5tag = $("<div/>").addClass("ft_copyright").text("@ Copyright 2024 by Asmit Patil");
    $(".footer").append(div5tag);

    var imgTag1 = $("<img/>").attr("src", projectData.logoUrl).attr("alt", "logo").attr("href", "login.html");
    div1tag.append(imgTag1);
    var p1tag = $("<p/>").text("E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet.");
    div1tag.append(p1tag);

    var ul1tag = $("<ul/>");
    div2tag.append(ul1tag);
    var li1tag = $("<li/>").addClass("ft_title").text("Products");
    ul1tag.append(li1tag);
    var li2tag = $("<li/>").text("Mobiles");
    ul1tag.append(li2tag);
    var li3tag = $("<li/>").text("Laptops");
    ul1tag.append(li3tag);
    var li4tag = $("<li/>").text("Cameras");
    ul1tag.append(li4tag);
    var li5tag = $("<li/>").text("Books");
    ul1tag.append(li5tag);

    var ul2tag = $("<ul/>");
    div3tag.append(ul2tag);
    var li6tag = $("<li/>").addClass("ft_title").text("Contact");
    ul2tag.append(li6tag);
    var li7tag = $("<li/>").text("Patil Niwas, Mulund-East, Mumbai-400081.");
    ul2tag.append(li7tag);
    var li8tag = $("<li/>").text("asmitpatil2001@gmail.com");
    ul2tag.append(li8tag);
    var li9tag = $("<li/>").text("+91 8454838345 / +91 9022028450");
    ul2tag.append(li9tag);

    var ul3tag = $("<ul/>");
    div4tag.append(ul3tag);
    var li10tag = $("<li/>").addClass("ft_title").text("Follow");
    ul3tag.append(li10tag);
    var li11tag = $("<li/>");
    ul3tag.append(li11tag);
}
var loadSignInPageContainer = (data) => {
    var div3tag = $("<div/>").addClass("sign-in");
    $(".loginContainer").append(div3tag);
    var imgTag1 = $("<img/>").attr("src", projectData.logoUrl).attr("alt", "logo").attr("href", "login.html");
    div3tag.append(imgTag1);
    var div4tag = $("<div/>").addClass("sign-in_click1").text("Login");
    var div5tag = $("<div/>").addClass("sign-in_click2").text("Sign In");
    div3tag.append(div4tag);
    div3tag.append(div5tag);
}

var loadLoginPageContainer = (data) => {

    var div6tag = $("<div/>").addClass("login");
    $(".loginContainer").append(div6tag);
    
}
var loadLoginPage = (data) => {
    var ul1tag = $("<ul/>").addClass("login-page");
    $(".login").append(ul1tag);

    var li1tag = $("<li/>").text("Username");
    ul1tag.append(li1tag);
    var input1tag = $("<input/>").attr("type", "text").attr("id", "lg-usrname");
    li1tag.append(input1tag);

    var li2tag = $("<li/>").text("Password");
    ul1tag.append(li2tag);
    var input2tag = $("<input/>").attr("type", "password").attr("id", "lg-passWd").attr("name", "password").attr("maxlength", "8");
    li2tag.append(input2tag);

    var li3tag = $("<li/>");
    ul1tag.append(li3tag);
    var input3tag = $("<input/>").attr("type", "button").attr("id", "lg-btn").attr("value", "Login");
    li3tag.append(input3tag);

    var li4tag = $("<li/>");
    ul1tag.append(li4tag);
    var p2tag = $("<p/>").text("Forgot Password?");
    li4tag.append(p2tag);

}

var loadSignInPage = (data) => {
    var ul2tag = $("<ul/>").addClass("sign-in-page");
    $(".login").append(ul2tag);

    var li1tag = $("<li/>").text("Username");
    ul2tag.append(li1tag);
    var input1tag = $("<input/>").attr("type", "text").attr("id", "sg-usrname");
    li1tag.append(input1tag);

    var li2tag = $("<li/>").text("Name");
    ul2tag.append(li2tag);
    var input2tag = $("<input/>").attr("type", "text").attr("id", "sg-name");
    li2tag.append(input2tag);

    var li3tag = $("<li/>").text("Email Address");
    ul2tag.append(li3tag);
    var input3tag = $("<input/>").attr("type", "text").attr("id", "sg-mail");
    li3tag.append(input3tag);

    var li4tag = $("<li/>").text("Password");
    ul2tag.append(li4tag);
    var input4tag = $("<input/>").attr("type", "password").attr("id", "sg-passWd1").attr("name", "password").attr("maxlength", "8");
    li4tag.append(input4tag);

    var li5tag = $("<li/>").text("Confirm Password");
    ul2tag.append(li5tag);
    var input5tag = $("<input/>").attr("type", "password").attr("id", "sg-passWd2").attr("name", "confirmPassword").attr("maxlength", "8");
    li5tag.append(input5tag);

    var li6tag = $("<li/>");
    ul2tag.append(li6tag);
    var input6tag = $("<input/>").attr("type", "button").attr("id", "sg-btn").attr("value", "Sign In");
    li6tag.append(input6tag);
}

var loadForgetPassword = (data) =>{
    var ul3tag = $("<ul/>").addClass("Fg_password");
    $(".login").append(ul3tag);

    var li1tag = $("<li/>").text("Email Address");
    ul3tag.append(li1tag);
    var input1tag = $("<input/>").attr("type", "text").attr("id", "fg-mail");
    li1tag.append(input1tag);

    var li2tag = $("<li/>");
    ul3tag.append(li2tag);
    var input2tag = $("<input/>").attr("type", "button").attr("id", "fg-btn").attr("value", "Done");
    li2tag.append(input2tag);

}
// showLoginPageContainer = () =>{
//     document.querySelector("login-page").style.display = "block";

//     if (sign){
//     document.querySelector("sign-in-page").style.display = "block";

//     document.querySelector("Fg_password").style.display = "block";
// }

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    loadSignInPageContainer();
    loadLoginPageContainer();
    loadLoginPage();
    loadSignInPage();
    loadForgetPassword();
});