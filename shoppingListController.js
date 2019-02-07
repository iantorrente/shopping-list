$(function() {
  //Handle form submission first
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    console.log("User has submitted an item");
    let inputText = $(event.currentTarget).find("#shopping-list-entry").val();
    
    //Make sure we only create an entry when the form has something in it
    if (inputText != "") {
      //This is really ugly and cumbersome. I wonder if there's a way to 
      //do this more efficiently and sustainably
      $(`<li><span class=shopping-item>${inputText}</span><div class="shopping-list-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`).appendTo(".shopping-list");
    }
  });

  //When a 'check' button is pressed, toggle the shopping-item__checked class
  $("ul").on("click", ".shopping-item-toggle", function() {
    //First find the closest li that the button has, then with that find the span for the item. Toggle that span's class afterwards
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });

  //When 'delete' button is pressed, delete the whole li that the button is a child of
  $("ul").on("click", ".shopping-item-delete", function() {
    //Find the closest li to the button and remove it
    $(this).closest("li").remove();
  })
});