/**
 * Created by lee on 12/18/16.
 */

var c = {
    name: 'abc',
    log: function(){
        this.name = 'update abc';
        console.log(this);

        var setname = function (newname) {
            this.name = newname;
        }

        setname('update again');
        console.log("----"+this);

    }
}

//var name =123;
console.log(c.name);
c.log();
console.log(c.name);
console.log(name);