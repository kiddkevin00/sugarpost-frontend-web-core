'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _memoStore = require('../stores/memoStore');

var _memoStore2 = _interopRequireDefault(_memoStore);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = require('./MainSection');

var _MainSection2 = _interopRequireDefault(_MainSection);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux's store.
 */
function _getState() {
  return {
    allTodos: _memoStore2.default.getAll(),
    areAllComplete: _memoStore2.default.areAllComplete()
  };
}

var MemoApp = function (_BaseComponent) {
  _inherits(MemoApp, _BaseComponent);

  function MemoApp(props) {
    _classCallCheck(this, MemoApp);

    var _this = _possibleConstructorReturn(this, (MemoApp.__proto__ || Object.getPrototypeOf(MemoApp)).call(this, props));

    _this._bind('_onChange');
    _this.state = _getState();
    return _this;
  }

  _createClass(MemoApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _memoStore2.default.addChangeListener(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _memoStore2.default.removeChangeListener(this._onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-offset-4 col-lg-8' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_MainSection2.default, {
            allTodos: this.state.allTodos,
            areAllComplete: this.state.areAllComplete
          }),
          _react2.default.createElement(_Footer2.default, { allTodos: this.state.allTodos })
        )
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(_getState());
    }
  }]);

  return MemoApp;
}(_BaseComponent3.default);

exports.default = MemoApp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vY29tcG9uZW50cy9NZW1vQXBwLmpzIl0sIm5hbWVzIjpbIl9nZXRTdGF0ZSIsImFsbFRvZG9zIiwiZ2V0QWxsIiwiYXJlQWxsQ29tcGxldGUiLCJNZW1vQXBwIiwicHJvcHMiLCJfYmluZCIsInN0YXRlIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJfb25DaGFuZ2UiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFJQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLFNBQU87QUFDTEMsY0FBVSxvQkFBVUMsTUFBVixFQURMO0FBRUxDLG9CQUFnQixvQkFBVUEsY0FBVjtBQUZYLEdBQVA7QUFJRDs7SUFFS0MsTzs7O0FBRUosbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxDQUFXLFdBQVg7QUFDQSxVQUFLQyxLQUFMLEdBQWFQLFdBQWI7QUFKaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCLDBCQUFVUSxpQkFBVixDQUE0QixLQUFLQyxTQUFqQztBQUNEOzs7MkNBRXNCO0FBQ3JCLDBCQUFVQyxvQkFBVixDQUErQixLQUFLRCxTQUFwQztBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsMEJBQWY7QUFDRSwrREFERjtBQUVFLG1EQUZGO0FBR0U7QUFDRSxzQkFBVyxLQUFLRixLQUFMLENBQVdOLFFBRHhCO0FBRUUsNEJBQWlCLEtBQUtNLEtBQUwsQ0FBV0o7QUFGOUIsWUFIRjtBQU9FLDREQUFRLFVBQVcsS0FBS0ksS0FBTCxDQUFXTixRQUE5QjtBQVBGO0FBREYsT0FERjtBQWFEOzs7Z0NBRVc7QUFDVixXQUFLVSxRQUFMLENBQWNYLFdBQWQ7QUFDRDs7Ozs7O2tCQUlZSSxPIiwiZmlsZSI6Ik1lbW9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9tZW1vU3RvcmUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSAnLi9NYWluU2VjdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLypcbiAqIEEgcHJpdmF0ZSBtZXRob2QuIEl0IHNob3VsZCBvbmx5IGJlIHVzZWQgYnkgYHNldFN0YXRlKClgIGFuZCBgZ2V0SW5pdGlhbFN0YXRlKClgIHRvIHN5bmMgd2l0aFxuICogdGhlIGRhdGEgaW4gdGhlIEZsdXgncyBzdG9yZS5cbiAqL1xuZnVuY3Rpb24gX2dldFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGFsbFRvZG9zOiBtZW1vU3RvcmUuZ2V0QWxsKCksXG4gICAgYXJlQWxsQ29tcGxldGU6IG1lbW9TdG9yZS5hcmVBbGxDb21wbGV0ZSgpXG4gIH07XG59XG5cbmNsYXNzIE1lbW9BcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2JpbmQoJ19vbkNoYW5nZScpO1xuICAgIHRoaXMuc3RhdGUgPSBfZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIG1lbW9TdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBtZW1vU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1vZmZzZXQtNCBjb2wtbGctOFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8TWFpblNlY3Rpb25cbiAgICAgICAgICAgIGFsbFRvZG9zPXsgdGhpcy5zdGF0ZS5hbGxUb2RvcyB9XG4gICAgICAgICAgICBhcmVBbGxDb21wbGV0ZT17IHRoaXMuc3RhdGUuYXJlQWxsQ29tcGxldGUgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvb3RlciBhbGxUb2Rvcz17IHRoaXMuc3RhdGUuYWxsVG9kb3MgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShfZ2V0U3RhdGUoKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1vQXBwO1xuIl19
//# sourceMappingURL=MemoApp.js.map
