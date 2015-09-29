/**
 * MicroEvent - to make any js object an event emitter (server or browser)
 *
 * - Pure javascript - server compatible, browser compatible.
 * - Don't rely on the DOM.
 * - Super simple. You get it immediately; no mystery, no magic.
 *
*/

MicroEvent = class MicroEvent {
    listen(event, func) {
        this._events = this._events || {};
        this._events[event] = this._events[event] || [];
        this._events[event].push(func);
    }

    listenOnce(event, listener) {
        listenOnceCallback = () => {
            this.removeEventListener(event, listenOnceCallback);
            listener.apply(this, arguments);
        }

        this.listen(event, listenOnceCallback);
    }

    removeEventListener(event, func) {
        this._events = this._events || {};
        if (event in this._events === false) return;
        var i = this._events[event].indexOf(func);
        if (i > -1) this._events[event].splice(i, 1);
    }

    trigger(event /* , args... */) {
        this._events = this._events || {};
        if (event in this._events === false) return;
        let args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < this._events[event].length; i++) {
            this._events[event][i].apply(this, args);
        }
    }
}

// For es6
// export default MicroEvent;
