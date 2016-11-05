'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _memoActionCreator = require('../actions/memoActionCreator');

var _memoActionCreator2 = _interopRequireDefault(_memoActionCreator);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_BaseComponent) {
  _inherits(ListItem, _BaseComponent);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this._bind('_onToggleComplete', '_onDeleteClick', '_onDoubleClick', '_onSave');
    _this.state = { isEditing: false };
    return _this;
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var input = null;
      var todo = this.props.todo;

      if (this.state.isEditing) {
        input = _react2.default.createElement(_TextInput2.default, {
          onSave: this._onSave,
          value: todo.text
        });
      }

      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)({
            'text-danger': !todo.isComplete,
            'text-success': todo.isComplete,
            'text-warning': this.state.isEditing
          }) },
        _react2.default.createElement('input', {
          onChange: this._onToggleComplete,
          checked: todo.isComplete,
          type: 'checkbox'
        }),
        '\xA0\xA0',
        _react2.default.createElement(
          'label',
          { onDoubleClick: this._onDoubleClick },
          todo.text
        ),
        '\xA0\xA0',
        _react2.default.createElement(
          'button',
          { onClick: this._onDeleteClick, type: 'button' },
          'delete'
        ),
        '\xA0\xA0\xA0',
        input
      );
    }
  }, {
    key: '_onToggleComplete',
    value: function _onToggleComplete() {
      _memoActionCreator2.default.toggleComplete(this.props.todo);
    }
  }, {
    key: '_onDeleteClick',
    value: function _onDeleteClick() {
      _memoActionCreator2.default.destroy(this.props.todo.id);
    }
  }, {
    key: '_onDoubleClick',
    value: function _onDoubleClick() {
      this.setState({ isEditing: true });
    }
  }, {
    key: '_onSave',
    value: function _onSave(text) {
      _memoActionCreator2.default.updateText(this.props.todo.id, text);

      this.setState({ isEditing: false });
    }
  }]);

  return ListItem;
}(_BaseComponent3.default);

ListItem.propTypes = {
  todo: _react2.default.PropTypes.object.isRequired
};

exports.default = ListItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwiX2JpbmQiLCJzdGF0ZSIsImlzRWRpdGluZyIsImlucHV0IiwidG9kbyIsIl9vblNhdmUiLCJ0ZXh0IiwiaXNDb21wbGV0ZSIsIl9vblRvZ2dsZUNvbXBsZXRlIiwiX29uRG91YmxlQ2xpY2siLCJfb25EZWxldGVDbGljayIsInRvZ2dsZUNvbXBsZXRlIiwiZGVzdHJveSIsImlkIiwic2V0U3RhdGUiLCJ1cGRhdGVUZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxDQUFXLG1CQUFYLEVBQWdDLGdCQUFoQyxFQUFrRCxnQkFBbEQsRUFBb0UsU0FBcEU7QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBRUMsV0FBVyxLQUFiLEVBQWI7QUFKaUI7QUFLbEI7Ozs7NkJBRVE7QUFDUCxVQUFJQyxRQUFRLElBQVo7QUFDQSxVQUFNQyxPQUFPLEtBQUtMLEtBQUwsQ0FBV0ssSUFBeEI7O0FBRUEsVUFBSSxLQUFLSCxLQUFMLENBQVdDLFNBQWYsRUFBMEI7QUFDeEJDLGdCQUNFO0FBQ0Usa0JBQVMsS0FBS0UsT0FEaEI7QUFFRSxpQkFBUUQsS0FBS0U7QUFGZixVQURGO0FBTUQ7O0FBRUQsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFZLDBCQUFXO0FBQ3ZCLDJCQUFlLENBQUNGLEtBQUtHLFVBREU7QUFFdkIsNEJBQWdCSCxLQUFLRyxVQUZFO0FBR3ZCLDRCQUFnQixLQUFLTixLQUFMLENBQVdDO0FBSEosV0FBWCxDQUFoQjtBQUtFO0FBQ0Usb0JBQVcsS0FBS00saUJBRGxCO0FBRUUsbUJBQVVKLEtBQUtHLFVBRmpCO0FBR0UsZ0JBQUs7QUFIUCxVQUxGO0FBQUE7QUFXRTtBQUFBO0FBQUEsWUFBTyxlQUFnQixLQUFLRSxjQUE1QjtBQUNJTCxlQUFLRTtBQURULFNBWEY7QUFBQTtBQWVFO0FBQUE7QUFBQSxZQUFRLFNBQVUsS0FBS0ksY0FBdkIsRUFBd0MsTUFBSyxRQUE3QztBQUFBO0FBQUEsU0FmRjtBQUFBO0FBaUJJUDtBQWpCSixPQURGO0FBcUJEOzs7d0NBRW1CO0FBQ2xCLGtDQUFrQlEsY0FBbEIsQ0FBaUMsS0FBS1osS0FBTCxDQUFXSyxJQUE1QztBQUNEOzs7cUNBRWdCO0FBQ2Ysa0NBQWtCUSxPQUFsQixDQUEwQixLQUFLYixLQUFMLENBQVdLLElBQVgsQ0FBZ0JTLEVBQTFDO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLQyxRQUFMLENBQWMsRUFBRVosV0FBVyxJQUFiLEVBQWQ7QUFDRDs7OzRCQUVPSSxJLEVBQU07QUFDWixrQ0FBa0JTLFVBQWxCLENBQTZCLEtBQUtoQixLQUFMLENBQVdLLElBQVgsQ0FBZ0JTLEVBQTdDLEVBQWlEUCxJQUFqRDs7QUFFQSxXQUFLUSxRQUFMLENBQWMsRUFBRVosV0FBVyxLQUFiLEVBQWQ7QUFDRDs7Ozs7O0FBR0hKLFNBQVNrQixTQUFULEdBQXFCO0FBQ25CWixRQUFNLGdCQUFNYSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEVixDQUFyQjs7a0JBSWVyQixRIiwiZmlsZSI6Ikxpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbW9BY3Rpb25DcmVhdG9yIGZyb20gJy4uL2FjdGlvbnMvbWVtb0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2JpbmQoJ19vblRvZ2dsZUNvbXBsZXRlJywgJ19vbkRlbGV0ZUNsaWNrJywgJ19vbkRvdWJsZUNsaWNrJywgJ19vblNhdmUnKTtcbiAgICB0aGlzLnN0YXRlID0geyBpc0VkaXRpbmc6IGZhbHNlIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0aW5nKSB7XG4gICAgICBpbnB1dCA9IChcbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uU2F2ZT17IHRoaXMuX29uU2F2ZSB9XG4gICAgICAgICAgdmFsdWU9eyB0b2RvLnRleHQgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICd0ZXh0LWRhbmdlcic6ICF0b2RvLmlzQ29tcGxldGUsXG4gICAgICAgICAgJ3RleHQtc3VjY2Vzcyc6IHRvZG8uaXNDb21wbGV0ZSxcbiAgICAgICAgICAndGV4dC13YXJuaW5nJzogdGhpcy5zdGF0ZS5pc0VkaXRpbmdcbiAgICAgICAgfSkgfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLl9vblRvZ2dsZUNvbXBsZXRlIH1cbiAgICAgICAgICBjaGVja2VkPXsgdG9kby5pc0NvbXBsZXRlIH1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAvPlxuICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgPGxhYmVsIG9uRG91YmxlQ2xpY2s9eyB0aGlzLl9vbkRvdWJsZUNsaWNrIH0+XG4gICAgICAgICAgeyB0b2RvLnRleHQgfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5fb25EZWxldGVDbGljayB9IHR5cGU9XCJidXR0b25cIj5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgIHsgaW5wdXQgfVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgX29uVG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgbWVtb0FjdGlvbkNyZWF0b3IudG9nZ2xlQ29tcGxldGUodGhpcy5wcm9wcy50b2RvKTtcbiAgfVxuXG4gIF9vbkRlbGV0ZUNsaWNrKCkge1xuICAgIG1lbW9BY3Rpb25DcmVhdG9yLmRlc3Ryb3kodGhpcy5wcm9wcy50b2RvLmlkKTtcbiAgfVxuXG4gIF9vbkRvdWJsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IHRydWUgfSk7XG4gIH1cblxuICBfb25TYXZlKHRleHQpIHtcbiAgICBtZW1vQWN0aW9uQ3JlYXRvci51cGRhdGVUZXh0KHRoaXMucHJvcHMudG9kby5pZCwgdGV4dCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZSB9KTtcbiAgfVxuXG59XG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIHRvZG86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iXX0=
//# sourceMappingURL=ListItem.js.map
