'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _memoActionCreator = require('../actions/memoActionCreator');

var _memoActionCreator2 = _interopRequireDefault(_memoActionCreator);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_BaseComponent) {
  _inherits(Footer, _BaseComponent);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var totalAmount = Object.keys(this.props.allTodos).length;
      var clearAllCompletedButton = null;

      if (totalAmount > 0) {
        var completeAmount = 0;

        for (var id in this.props.allTodos) {
          if (this.props.allTodos[id].isComplete) {
            completeAmount += 1;
          }
        }
        if (completeAmount > 0) {
          clearAllCompletedButton = _react2.default.createElement(
            'button',
            { onClick: this._onDestroyCompletedClick },
            'clear ',
            completeAmount,
            ' completed ',
            completeAmount > 1 ? 'items' : 'item'
          );
        }
      }

      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            null,
            'Total:\xA0\xA0',
            _react2.default.createElement(
              'strong',
              null,
              totalAmount
            ),
            totalAmount > 0 ? ' items' : ' item'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          clearAllCompletedButton
        ),
        _react2.default.createElement(
          'p',
          null,
          'Some other info..'
        )
      );
    }
  }, {
    key: '_onDestroyCompletedClick',
    value: function _onDestroyCompletedClick() {
      _memoActionCreator2.default.destroyCompleted();
    }
  }]);

  return Footer;
}(_BaseComponent3.default);

Footer.propTypes = {
  allTodos: _react2.default.PropTypes.object.isRequired
};

exports.default = Footer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwicHJvcHMiLCJ0b3RhbEFtb3VudCIsIk9iamVjdCIsImtleXMiLCJhbGxUb2RvcyIsImxlbmd0aCIsImNsZWFyQWxsQ29tcGxldGVkQnV0dG9uIiwiY29tcGxldGVBbW91bnQiLCJpZCIsImlzQ29tcGxldGUiLCJfb25EZXN0cm95Q29tcGxldGVkQ2xpY2siLCJkZXN0cm95Q29tcGxldGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsY0FBY0MsT0FBT0MsSUFBUCxDQUFZLEtBQUtILEtBQUwsQ0FBV0ksUUFBdkIsRUFBaUNDLE1BQXJEO0FBQ0EsVUFBSUMsMEJBQTBCLElBQTlCOztBQUVBLFVBQUlMLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsWUFBSU0saUJBQWlCLENBQXJCOztBQUVBLGFBQUssSUFBSUMsRUFBVCxJQUFlLEtBQUtSLEtBQUwsQ0FBV0ksUUFBMUIsRUFBb0M7QUFDbEMsY0FBSSxLQUFLSixLQUFMLENBQVdJLFFBQVgsQ0FBb0JJLEVBQXBCLEVBQXdCQyxVQUE1QixFQUF3QztBQUN0Q0YsOEJBQWtCLENBQWxCO0FBQ0Q7QUFDRjtBQUNELFlBQUlBLGlCQUFpQixDQUFyQixFQUF3QjtBQUN0QkQsb0NBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBVSxLQUFLSSx3QkFBdkI7QUFBQTtBQUNVSCwwQkFEVjtBQUFBO0FBQ3VDQSw2QkFBaUIsQ0FBakIsR0FBcUIsT0FBckIsR0FBK0I7QUFEdEUsV0FERjtBQUtEO0FBQ0Y7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQTtBQUFVTjtBQUFWLGFBRkY7QUFHSUEsMEJBQWMsQ0FBZCxHQUFrQixRQUFsQixHQUE2QjtBQUhqQyxXQURGO0FBTUUsbURBTkY7QUFPRSxtREFQRjtBQVFJSztBQVJKLFNBREY7QUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsT0FERjtBQWVEOzs7K0NBRTBCO0FBQ3pCLGtDQUFrQkssZ0JBQWxCO0FBQ0Q7Ozs7OztBQUdIWixPQUFPYSxTQUFQLEdBQW1CO0FBQ2pCUixZQUFVLGdCQUFNUyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEaEIsQ0FBbkI7O2tCQUllaEIsTSIsImZpbGUiOiJGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb0FjdGlvbkNyZWF0b3IgZnJvbSAnLi4vYWN0aW9ucy9tZW1vQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvdGFsQW1vdW50ID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5hbGxUb2RvcykubGVuZ3RoO1xuICAgIGxldCBjbGVhckFsbENvbXBsZXRlZEJ1dHRvbiA9IG51bGw7XG5cbiAgICBpZiAodG90YWxBbW91bnQgPiAwKSB7XG4gICAgICBsZXQgY29tcGxldGVBbW91bnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLnByb3BzLmFsbFRvZG9zKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFsbFRvZG9zW2lkXS5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgY29tcGxldGVBbW91bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbXBsZXRlQW1vdW50ID4gMCkge1xuICAgICAgICBjbGVhckFsbENvbXBsZXRlZEJ1dHRvbiA9IChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyB0aGlzLl9vbkRlc3Ryb3lDb21wbGV0ZWRDbGljayB9PlxuICAgICAgICAgICAgY2xlYXIgeyBjb21wbGV0ZUFtb3VudCB9IGNvbXBsZXRlZCB7IGNvbXBsZXRlQW1vdW50ID4gMSA/ICdpdGVtcycgOiAnaXRlbScgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFRvdGFsOiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPHN0cm9uZz57IHRvdGFsQW1vdW50IH08L3N0cm9uZz5cbiAgICAgICAgICAgIHsgdG90YWxBbW91bnQgPiAwID8gJyBpdGVtcycgOiAnIGl0ZW0nIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgeyBjbGVhckFsbENvbXBsZXRlZEJ1dHRvbiB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+U29tZSBvdGhlciBpbmZvLi48L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuICB9XG5cbiAgX29uRGVzdHJveUNvbXBsZXRlZENsaWNrKCkge1xuICAgIG1lbW9BY3Rpb25DcmVhdG9yLmRlc3Ryb3lDb21wbGV0ZWQoKTtcbiAgfVxuXG59XG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBhbGxUb2RvczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0=
//# sourceMappingURL=Footer.js.map
