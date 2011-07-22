function() {
    $.log("addContent - _init - submit.js");
//    alert("clicked on a");
    var title = $('input[name=title]', this).val(),
        text = $('textarea#addTextField', this).val(),             
        tags = $('input[name=tags]', this).val();  
    var document = {"type" : "note", "title": title, "text" : text, "tags" : tags};
    $.log(document);
    doStore(document);
}
