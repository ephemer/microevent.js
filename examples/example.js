// import microevent.js 
var MicroEvent = require('../microevent.js')

/**
 * Ticker is a class periodically sending out dummy tick events
*/
class Ticker extends MicroEvent {
    constructor (interval) {
        setInterval(() => {
            this.trigger('tick', new Date());
        }), 1000);
    }
};

// create a ticker
var ticker = new Ticker();
// bind the 'tick' event
ticker.bind('tick', function(date) {
    // display to check
    console.log('notified date', date);
});
