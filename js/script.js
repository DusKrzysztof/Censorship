(function() {

        function BadText (field, words) {

            this.field = field;
            this.words = words.split(/, */);
            this.regex = new RegExp("(" + this.words.join("|") +")", "igm");

            this.assignEvents();
        
        };

    
        BadText.prototype.assignEvents = function() {

            this.field.addEventListener("keyup", this.filterMessage.bind(this), false);

        };

         BadText.prototype.filterMessage = function(e){

           this.field.value = this.field.value.replace(this.regex, function(match){

               return this.censorWord(match);

         }.bind(this));


         };


  BadText.prototype.censorWord = function(word){

            var censored = "#";
            return censored;
        };


        var tk = new BadText(
            document.querySelector("[name='your-message']"),
            "kurwa, chuj, spierdalaj, kutas, dziwka, dupa"
        );      

        

})();