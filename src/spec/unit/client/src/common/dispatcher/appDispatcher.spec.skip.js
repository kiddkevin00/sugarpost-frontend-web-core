/* eslint-disable */

jest.autoMockOff();

var appDispatcher = require('../../../../../../lib/client/src/common/dispatcher/appDispatcher');

describe('App dispatcher', function() {

  it('sends actions to subscribers', function() {
    var listener = jest.genMockFunction();

    appDispatcher.register(listener);

    var payload = {};

    appDispatcher.dispatch(payload);

    expect(listener.mock.calls.length).toBe(1);
    expect(listener.mock.calls[0][0]).toBe(payload);
  });

  it('waits with chained dependencies properly', function() {
    var payload = {};

    var listener1Done = false;
    var listener1 = function(pl) {
      appDispatcher.waitFor([index2, index4]);
      // Second, third, and fourth listeners should have now been called
      expect(listener2Done).toBe(true);
      expect(listener3Done).toBe(true);
      expect(listener4Done).toBe(true);
      listener1Done = true;
    };
    var index1 = appDispatcher.register(listener1);

    var listener2Done = false;
    var listener2 = function(pl) {
      appDispatcher.waitFor([index3]);
      expect(listener3Done).toBe(true);
      listener2Done = true;
    };
    var index2 = appDispatcher.register(listener2);

    var listener3Done = false;
    var listener3 = function(pl) {
      listener3Done = true;
    };
    var index3 = appDispatcher.register(listener3);

    var listener4Done = false;
    var listener4 = function(pl) {
      appDispatcher.waitFor([index3]);
      expect(listener3Done).toBe(true);
      listener4Done = true;
    };
    var index4 = appDispatcher.register(listener4);

    runs(function() {
      appDispatcher.dispatch(payload);
    });

    waitsFor(function() {
      return listener1Done;
    }, "Not all subscribers were properly called", 500);

    runs(function() {
      expect(listener1Done).toBe(true);
      expect(listener2Done).toBe(true);
      expect(listener3Done).toBe(true);
    });
  });
});
