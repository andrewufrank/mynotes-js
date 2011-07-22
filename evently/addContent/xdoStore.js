function(e, name, pass) {
    $.log("doStore in evently/selectors/form");
    doStore(e, name, pass);
} 

/*
function(e, name, pass) {
    $.log("addcontent - doStore");
//    $mobile.changePage("#initialPage"); // should this be an event trigger?
    var title = $('input[name=title]', this).val(),
        text = $('textarea#addTextField', this).val(),             
        tags = $('input[name=tags]', this).val();  
    var document = {"title": title, "text" : text, "tags" : tags};
    $.log(document);
    $db.saveDoc( document, {
            success: function() {
                $.log("store - success");
                $.mobile.changePage( "#initialPage", "slidedown", true, true );
            },
            error: function() {
                alert( "Cannot save new document." );
            }
    });
//    $.log("store not done? - should not be reached");

}
*/
/*
{
  var elem = $(this);
  $.couch.signup({
    name : name
  }, pass, {
    success : function() {
      elem.trigger("doLogin", [name, pass]);
    }
  });
}
*/
