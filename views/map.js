function(doc) { //missing check for doc.type=="note"
    var words = doc.tags.split(" ");
    for (var i = 0; i < (words.length); i++) {
        var value = words[i].toUpperCase();
        emit(value, 1); 
    }
}
