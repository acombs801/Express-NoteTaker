const fs = require('fs');

var readFile = fs.readFile;

var writeFile = fs.writeFile;

class Controller {
    read() {
        return readFile('db/db.json', 'utf8');
    }
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then(function (allnotes) {
            console.log(allnotes);
        });
    }
    postNotes(notemain) {
    var title = notemain.title;
    var text = notemain.text;
    var newNote = {title, text};
        return this.getNotes().then(function (notes) {
            var duplicate = [...notes, newNote];
            this.write(duplicate);
        });
    }

};

module.exports = new Controller();