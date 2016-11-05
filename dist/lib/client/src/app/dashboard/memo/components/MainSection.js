'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _memoActionCreator = require('../actions/memoActionCreator');

var _memoActionCreator2 = _interopRequireDefault(_memoActionCreator);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainSection = function (_BaseComponent) {
  _inherits(MainSection, _BaseComponent);

  function MainSection(props) {
    _classCallCheck(this, MainSection);

    var _this = _possibleConstructorReturn(this, (MainSection.__proto__ || Object.getPrototypeOf(MainSection)).call(this, props));

    _this._bind('_onToggleCompleteAll');
    return _this;
  }

  _createClass(MainSection, [{
    key: 'render',
    value: function render() {
      var allTodos = this.props.allTodos;

      if (Object.keys(allTodos).length === 0) {
        return null;
      }

      var todoList = [];

      for (var id in allTodos) {
        todoList.push(_react2.default.createElement(_ListItem2.default, {

          todo: allTodos[id]
        }));
      }

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement('input', {
          checked: this.props.areAllComplete,
          onChange: this._onToggleCompleteAll,
          id: 'toggle-all',
          type: 'checkbox'
        }),
        '\xA0',
        _react2.default.createElement(
          'label',
          { htmlFor: 'toggle-all' },
          'Toggle All'
        ),
        _react2.default.createElement(
          'ul',
          null,
          todoList
        )
      );
    }
  }, {
    key: '_onToggleCompleteAll',
    value: function _onToggleCompleteAll() {
      _memoActionCreator2.default.toggleCompleteAll();
    }
  }]);

  return MainSection;
}(_BaseComponent3.default);

MainSection.propTypes = {
  allTodos: _react2.default.PropTypes.object.isRequired,
  areAllComplete: _react2.default.PropTypes.bool.isRequired
};

exports.default = MainSection;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vY29tcG9uZW50cy9NYWluU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJNYWluU2VjdGlvbiIsInByb3BzIiwiX2JpbmQiLCJhbGxUb2RvcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b2RvTGlzdCIsImlkIiwicHVzaCIsImFyZUFsbENvbXBsZXRlIiwiX29uVG9nZ2xlQ29tcGxldGVBbGwiLCJ0b2dnbGVDb21wbGV0ZUFsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxDQUFXLHNCQUFYO0FBSGlCO0FBSWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsV0FBVyxLQUFLRixLQUFMLENBQVdFLFFBQTVCOztBQUVBLFVBQUlDLE9BQU9DLElBQVAsQ0FBWUYsUUFBWixFQUFzQkcsTUFBdEIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDdEMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsV0FBVyxFQUFqQjs7QUFFQSxXQUFLLElBQUlDLEVBQVQsSUFBZUwsUUFBZixFQUF5QjtBQUN2QkksaUJBQVNFLElBQVQsQ0FDRTs7QUFFRSxnQkFBT04sU0FBU0ssRUFBVDtBQUZULFVBREY7QUFNRDs7QUFFRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsbUJBQVUsS0FBS1AsS0FBTCxDQUFXUyxjQUR2QjtBQUVFLG9CQUFXLEtBQUtDLG9CQUZsQjtBQUdFLGNBQUcsWUFITDtBQUlFLGdCQUFLO0FBSlAsVUFERjtBQUFBO0FBUUU7QUFBQTtBQUFBLFlBQU8sU0FBUSxZQUFmO0FBQUE7QUFBQSxTQVJGO0FBU0U7QUFBQTtBQUFBO0FBQU1KO0FBQU47QUFURixPQURGO0FBYUQ7OzsyQ0FFc0I7QUFDckIsa0NBQWtCSyxpQkFBbEI7QUFDRDs7Ozs7O0FBR0haLFlBQVlhLFNBQVosR0FBd0I7QUFDdEJWLFlBQVUsZ0JBQU1XLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURYO0FBRXRCTixrQkFBZ0IsZ0JBQU1JLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRDtBQUZmLENBQXhCOztrQkFLZWhCLFciLCJmaWxlIjoiTWFpblNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb0FjdGlvbkNyZWF0b3IgZnJvbSAnLi4vYWN0aW9ucy9tZW1vQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi9MaXN0SXRlbSc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE1haW5TZWN0aW9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLl9iaW5kKCdfb25Ub2dnbGVDb21wbGV0ZUFsbCcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFsbFRvZG9zID0gdGhpcy5wcm9wcy5hbGxUb2RvcztcblxuICAgIGlmIChPYmplY3Qua2V5cyhhbGxUb2RvcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaWQgaW4gYWxsVG9kb3MpIHtcbiAgICAgIHRvZG9MaXN0LnB1c2goXG4gICAgICAgIDxMaXN0SXRlbVxuXG4gICAgICAgICAgdG9kbz17IGFsbFRvZG9zW2lkXSB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2hlY2tlZD17IHRoaXMucHJvcHMuYXJlQWxsQ29tcGxldGUgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5fb25Ub2dnbGVDb21wbGV0ZUFsbCB9XG4gICAgICAgICAgaWQ9XCJ0b2dnbGUtYWxsXCJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAvPlxuICAgICAgICAmbmJzcDtcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtYWxsXCI+VG9nZ2xlIEFsbDwvbGFiZWw+XG4gICAgICAgIDx1bD57IHRvZG9MaXN0IH08L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cblxuICBfb25Ub2dnbGVDb21wbGV0ZUFsbCgpIHtcbiAgICBtZW1vQWN0aW9uQ3JlYXRvci50b2dnbGVDb21wbGV0ZUFsbCgpO1xuICB9XG5cbn1cbk1haW5TZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgYWxsVG9kb3M6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgYXJlQWxsQ29tcGxldGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TZWN0aW9uO1xuIl19
//# sourceMappingURL=MainSection.js.map
