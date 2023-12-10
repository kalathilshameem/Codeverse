// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let submitbutton = document.getElementbyId("submit-button");
let contactpage = document.getelementbyId("contact-page");
submitbutton.addeventlistener("click", function() {
  let thankyoumessage = document.createelement("P");
  thankyoumessage.textcontext = "thank you for your message";
  thankyoumessage.style.fontsize = "24px";
  contactpage.innnerHTML = '';
  contactpage.appendchild(thankyoumessage);
});
