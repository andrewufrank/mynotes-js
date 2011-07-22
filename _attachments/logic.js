$db = $.couch.db("mynotes");

$.couch.app(function (app) {
    $("#initialContent").evently("initialContent", app);
    $("#addContent").evently("addContent", app);  
    $("#showListContent").evently("showListContent", app);
    $("#selectNoteContent").evently("selectNoteContent", app);
    
//    $("#selectNoteContent").evently("selectNoteContent", app);
            // first is html label, second is evently folder  

//    ("#selectNotePage").live('pagebeforeshow',function(event, ui){
          alert('pagebeforeshow bind : selectnote page to show');
            });            
});  // end .couch.app

function doStore(document) {
    $.log("logic.js - doStore");
//    $mobile.changePage("#initialPage"); // should this be an event trigger?
/*    var title = $('input[name=title]', this).val(),
        text = $('textarea#addTextField', this).val(),             
        tags = $('input[name=tags]', this).val(),  
        document = {"type" : "note", "title": title, "text" : text, "tags" : tags};
*/
    $.log(document);
    $db.saveDoc(document, {
            success: function () {
                $.log("store - success");
                $.mobile.changePage("#initialPage", "slidedown", true, true);
            },
            error: function () {
                alert("Cannot save new document.");
            }
        });
}

function doShowNotes(tag) {
    $.log("logic.js -- doShowNotes with tag");
    $.log(tag);
    $$(this).tagselected = tag;
    $.mobile.changePage("#selectNotePage", "slidedown", true, true);
    $.log($$(this).tagselected);    
}
function doShowNote(e, name, pass) {
    $.log("logic.js - doShowNote");
}
    
//    $("#addPage").evently("addPage", app);  
//    $.evently.connect("#addContent", "#note", ["doStore"]);

/*
    $("#addSubmitButton").bind( "click", function( event ) {
                // bind if it is static, else live
        event.preventDefault();
        var document = {};  // should use mustache
        document.title = $("input#addTitleField").val();
        document.text = $("textarea#addTextField").val();
        document.tags = $("input#addTagsField").val();
        //document.creation_date = ( new Date() ).getTime();
        $.log($db);
        $db.saveDoc( document, {
            success: function() {
                $.mobile.changePage( "#initialPage", "slidedown", true, true );
            },
            error: function() {
                alert( "Cannot save new document." );
             }
        });
 //       return false;
    });  // end .live

    $("#addPage").bind( "pagehide", function() {            // the page id
                    //to make sure the next add does not start with the last input
        $("input#addTitleField").val( "" );
        $("textarea#addTextField").val( "" );
        $("input#addTagsField").val( "" );
    });
*/

