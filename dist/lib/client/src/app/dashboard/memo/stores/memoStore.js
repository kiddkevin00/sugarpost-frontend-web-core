'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = require('../../../../common/dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _memoConstants = require('../constants/memoConstants');

var _memoConstants2 = _interopRequireDefault(_memoConstants);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var changeEvent = Symbol('change');
var storeContext = Symbol('memoStoreContext');

// A Flux's store.

var MemoStore = function (_EventEmitter) {
  _inherits(MemoStore, _EventEmitter);

  function MemoStore() {
    _classCallCheck(this, MemoStore);

    // All internal store data.
    var _this = _possibleConstructorReturn(this, (MemoStore.__proto__ || Object.getPrototypeOf(MemoStore)).call(this));

    _this[storeContext] = {
      todos: {}
    };
    return _this;
  }

  _createClass(MemoStore, [{
    key: 'getAll',
    value: function getAll() {
      return this[storeContext].todos;
    }
  }, {
    key: 'areAllComplete',
    value: function areAllComplete() {
      for (var id in this[storeContext].todos) {
        if (!this[storeContext].todos[id].isComplete) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      this.emit(changeEvent);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(changeEvent, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(changeEvent, callback);
    }
  }, {
    key: '_create',
    value: function _create(text) {
      var id = +new Date() + Math.floor(Math.random() * 999999).toString(36);

      this[storeContext].todos[id] = {
        id: id, text: text,
        isComplete: false
      };
    }
  }, {
    key: '_update',
    value: function _update(id, updates) {
      this[storeContext].todos[id] = Object.assign({}, this[storeContext].todos[id], updates);
    }
  }, {
    key: '_updateAll',
    value: function _updateAll(updates) {
      for (var id in this[storeContext].todos) {
        this._update(id, updates);
      }
    }
  }, {
    key: '_destroy',
    value: function _destroy(id) {
      delete this[storeContext].todos[id];
    }
  }, {
    key: '_destroyCompleted',
    value: function _destroyCompleted() {
      for (var id in this[storeContext].todos) {
        if (this[storeContext].todos[id].isComplete) {
          this._destroy(id);
        }
      }
    }
  }]);

  return MemoStore;
}(_events2.default);

var memoStore = new MemoStore();

// The dispatcher registration for the current store component.
_AppDispatcher2.default.register(function (action) {
  console.log('Action in `memoStore`: ' + JSON.stringify(action, null, 2));

  var actionType = action.actionType;
  var id = action.id || 0;
  var isComplete = action.isComplete || false;
  var text = action.text && action.text.trim() || '';

  switch (actionType) {
    case _memoConstants2.default.TODO_CREATE:
      if (text) {
        memoStore._create(text);

        memoStore.emitChange();
      }
      break;
    case _memoConstants2.default.TODO_TOGGLE_COMPLETE:
      memoStore._update(id, { isComplete: !isComplete });

      memoStore.emitChange();
      break;
    case _memoConstants2.default.TODO_TOGGLE_COMPLETE_ALL:
      if (memoStore.areAllComplete()) {
        memoStore._updateAll({ isComplete: false });
      } else {
        memoStore._updateAll({ isComplete: true });
      }

      memoStore.emitChange();
      break;
    case _memoConstants2.default.TODO_DESTROY:
      memoStore._destroy(id);

      memoStore.emitChange();
      break;
    case _memoConstants2.default.TODO_DESTROY_COMPLETED:
      memoStore._destroyCompleted();

      memoStore.emitChange();
      break;
    case _memoConstants2.default.TODO_UPDATE_TEXT:
      if (text) {
        memoStore._update(id, { text: text });

        memoStore.emitChange();
      }
      break;
    default:
      return;
  }
});

exports.default = memoStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vc3RvcmVzL21lbW9TdG9yZS5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VFdmVudCIsIlN5bWJvbCIsInN0b3JlQ29udGV4dCIsIk1lbW9TdG9yZSIsInRvZG9zIiwiaWQiLCJpc0NvbXBsZXRlIiwiZW1pdCIsImNhbGxiYWNrIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInRleHQiLCJEYXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJ1cGRhdGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiX3VwZGF0ZSIsIl9kZXN0cm95IiwibWVtb1N0b3JlIiwicmVnaXN0ZXIiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImFjdGlvblR5cGUiLCJ0cmltIiwiVE9ET19DUkVBVEUiLCJfY3JlYXRlIiwiZW1pdENoYW5nZSIsIlRPRE9fVE9HR0xFX0NPTVBMRVRFIiwiVE9ET19UT0dHTEVfQ09NUExFVEVfQUxMIiwiYXJlQWxsQ29tcGxldGUiLCJfdXBkYXRlQWxsIiwiVE9ET19ERVNUUk9ZIiwiVE9ET19ERVNUUk9ZX0NPTVBMRVRFRCIsIl9kZXN0cm95Q29tcGxldGVkIiwiVE9ET19VUERBVEVfVEVYVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWNDLE9BQU8sUUFBUCxDQUFwQjtBQUNBLElBQU1DLGVBQWVELE9BQU8sa0JBQVAsQ0FBckI7O0FBRUE7O0lBQ01FLFM7OztBQUVKLHVCQUFjO0FBQUE7O0FBR1o7QUFIWTs7QUFJWixVQUFLRCxZQUFMLElBQXFCO0FBQ25CRSxhQUFPO0FBRFksS0FBckI7QUFKWTtBQU9iOzs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLRixZQUFMLEVBQW1CRSxLQUExQjtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FB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ZCxFQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMZ0Isa0JBQVVlLFVBQVYsQ0FBcUIsRUFBRS9CLFlBQVksSUFBZCxFQUFyQjtBQUNEOztBQUVEZ0IsZ0JBQVVXLFVBQVY7QUFDQTtBQUNGLFNBQUssd0JBQWNLLFlBQW5CO0FBQ0VoQixnQkFBVUQsUUFBVixDQUFtQmhCLEVBQW5COztBQUVBaUIsZ0JBQVVXLFVBQVY7QUFDQTtBQUNGLFNBQUssd0JBQWNNLHNCQUFuQjtBQUNFakIsZ0JBQVVrQixpQkFBVjs7QUFFQWxCLGdCQUFVVyxVQUFWO0FBQ0E7QUFDRixTQUFLLHdCQUFjUSxnQkFBbkI7QUFDRSxVQUFJOUIsSUFBSixFQUFVO0FBQ1JXLGtCQUFVRixPQUFWLENBQWtCZixFQUFsQixFQUFzQixFQUFFTSxVQUFGLEVBQXRCOztBQUVBVyxrQkFBVVcsVUFBVjtBQUNEO0FBQ0Q7QUFDRjtBQUNFO0FBeENKO0FBMENELENBbEREOztrQkFvRGVYLFMiLCJmaWxlIjoibWVtb1N0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Rpc3BhdGNoZXIvQXBwRGlzcGF0Y2hlcic7XG5pbXBvcnQgbWVtb0NvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMvbWVtb0NvbnN0YW50cyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5cbmNvbnN0IGNoYW5nZUV2ZW50ID0gU3ltYm9sKCdjaGFuZ2UnKTtcbmNvbnN0IHN0b3JlQ29udGV4dCA9IFN5bWJvbCgnbWVtb1N0b3JlQ29udGV4dCcpO1xuXG4vLyBBIEZsdXgncyBzdG9yZS5cbmNsYXNzIE1lbW9TdG9yZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEFsbCBpbnRlcm5hbCBzdG9yZSBkYXRhLlxuICAgIHRoaXNbc3RvcmVDb250ZXh0XSA9IHtcbiAgICAgIHRvZG9zOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzW3N0b3JlQ29udGV4dF0udG9kb3M7XG4gIH1cblxuICBhcmVBbGxDb21wbGV0ZSgpIHtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzW3N0b3JlQ29udGV4dF0udG9kb3MpIHtcbiAgICAgIGlmICghdGhpc1tzdG9yZUNvbnRleHRdLnRvZG9zW2lkXS5pc0NvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbWl0Q2hhbmdlKCkge1xuICAgIHRoaXMuZW1pdChjaGFuZ2VFdmVudCk7XG4gIH1cblxuICBhZGRDaGFuZ2VMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHRoaXMub24oY2hhbmdlRXZlbnQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihjaGFuZ2VFdmVudCwgY2FsbGJhY2spO1xuICB9XG5cbiAgX2NyZWF0ZSh0ZXh0KSB7XG4gICAgY29uc3QgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpLnRvU3RyaW5nKDM2KSk7XG5cbiAgICB0aGlzW3N0b3JlQ29udGV4dF0udG9kb3NbaWRdID0ge1xuICAgICAgaWQsIHRleHQsXG4gICAgICBpc0NvbXBsZXRlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBfdXBkYXRlKGlkLCB1cGRhdGVzKSB7XG4gICAgdGhpc1tzdG9yZUNvbnRleHRdLnRvZG9zW2lkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXNbc3RvcmVDb250ZXh0XS50b2Rvc1tpZF0sIHVwZGF0ZXMpO1xuICB9XG5cbiAgX3VwZGF0ZUFsbCh1cGRhdGVzKSB7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpc1tzdG9yZUNvbnRleHRdLnRvZG9zKSB7XG4gICAgICB0aGlzLl91cGRhdGUoaWQsIHVwZGF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIF9kZXN0cm95KGlkKSB7XG4gICAgZGVsZXRlIHRoaXNbc3RvcmVDb250ZXh0XS50b2Rvc1tpZF07XG4gIH1cblxuICBfZGVzdHJveUNvbXBsZXRlZCgpIHtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzW3N0b3JlQ29udGV4dF0udG9kb3MpIHtcbiAgICAgIGlmICh0aGlzW3N0b3JlQ29udGV4dF0udG9kb3NbaWRdLmlzQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveShpZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuY29uc3QgbWVtb1N0b3JlID0gbmV3IE1lbW9TdG9yZSgpO1xuXG4vLyBUaGUgZGlzcGF0Y2hlciByZWdpc3RyYXRpb24gZm9yIHRoZSBjdXJyZW50IHN0b3JlIGNvbXBvbmVudC5cbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoKGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhgQWN0aW9uIGluIFxcYG1lbW9TdG9yZVxcYDogJHtKU09OLnN0cmluZ2lmeShhY3Rpb24sIG51bGwsIDIpfWApO1xuXG4gIGNvbnN0IGFjdGlvblR5cGUgPSBhY3Rpb24uYWN0aW9uVHlwZTtcbiAgY29uc3QgaWQgPSBhY3Rpb24uaWQgfHwgMDtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGFjdGlvbi5pc0NvbXBsZXRlIHx8IGZhbHNlO1xuICBjb25zdCB0ZXh0ID0gYWN0aW9uLnRleHQgJiYgYWN0aW9uLnRleHQudHJpbSgpIHx8ICcnO1xuXG4gIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xuICAgIGNhc2UgbWVtb0NvbnN0YW50cy5UT0RPX0NSRUFURTpcbiAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIG1lbW9TdG9yZS5fY3JlYXRlKHRleHQpO1xuXG4gICAgICAgIG1lbW9TdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIG1lbW9Db25zdGFudHMuVE9ET19UT0dHTEVfQ09NUExFVEU6XG4gICAgICBtZW1vU3RvcmUuX3VwZGF0ZShpZCwgeyBpc0NvbXBsZXRlOiAhaXNDb21wbGV0ZSB9KTtcblxuICAgICAgbWVtb1N0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbWVtb0NvbnN0YW50cy5UT0RPX1RPR0dMRV9DT01QTEVURV9BTEw6XG4gICAgICBpZiAobWVtb1N0b3JlLmFyZUFsbENvbXBsZXRlKCkpIHtcbiAgICAgICAgbWVtb1N0b3JlLl91cGRhdGVBbGwoeyBpc0NvbXBsZXRlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW9TdG9yZS5fdXBkYXRlQWxsKHsgaXNDb21wbGV0ZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgbWVtb1N0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbWVtb0NvbnN0YW50cy5UT0RPX0RFU1RST1k6XG4gICAgICBtZW1vU3RvcmUuX2Rlc3Ryb3koaWQpO1xuXG4gICAgICBtZW1vU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBtZW1vQ29uc3RhbnRzLlRPRE9fREVTVFJPWV9DT01QTEVURUQ6XG4gICAgICBtZW1vU3RvcmUuX2Rlc3Ryb3lDb21wbGV0ZWQoKTtcblxuICAgICAgbWVtb1N0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbWVtb0NvbnN0YW50cy5UT0RPX1VQREFURV9URVhUOlxuICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgbWVtb1N0b3JlLl91cGRhdGUoaWQsIHsgdGV4dCB9KTtcblxuICAgICAgICBtZW1vU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9TdG9yZTtcbiJdfQ==
//# sourceMappingURL=memostore.js.map
