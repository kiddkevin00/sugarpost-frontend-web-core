'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enterKeyCode = 13;

// A React component class for generic text input.

var TextInput = function (_BaseComponent) {
  _inherits(TextInput, _BaseComponent);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _this._bind('_onSave', '_onChange', '_onKeyDown');
    _this.state = props;
    return _this;
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        onBlur: this._onSave,
        onChange: this._onChange,
        onKeyDown: this._onKeyDown,
        className: this.props.className,
        id: this.props.id,
        placeholder: this.props.placeholder,
        value: this.state.value,
        autoFocus: true,
        type: 'text'
      });
    }
  }, {
    key: '_onSave',
    value: function _onSave() {
      this.props.onSave(this.state.value);

      this.setState({ value: '' });
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      if (event.keyCode === enterKeyCode) {
        this._onSave();
      }
    }
  }]);

  return TextInput;
}(_BaseComponent3.default);

TextInput.popTypes = {
  onSave: _react2.default.PropTypes.func.isRequired,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string
};

exports.default = TextInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vY29tcG9uZW50cy9UZXh0SW5wdXQuanMiXSwibmFtZXMiOlsiZW50ZXJLZXlDb2RlIiwiVGV4dElucHV0IiwicHJvcHMiLCJfYmluZCIsInN0YXRlIiwiX29uU2F2ZSIsIl9vbkNoYW5nZSIsIl9vbktleURvd24iLCJjbGFzc05hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvblNhdmUiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0Iiwia2V5Q29kZSIsInBvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxFQUFyQjs7QUFFQTs7SUFDTUMsUzs7O0FBRUoscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxDQUFXLFNBQVgsRUFBc0IsV0FBdEIsRUFBbUMsWUFBbkM7QUFDQSxVQUFLQyxLQUFMLEdBQWFGLEtBQWI7QUFKaUI7QUFLbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQ0UsZ0JBQVMsS0FBS0csT0FEaEI7QUFFRSxrQkFBVyxLQUFLQyxTQUZsQjtBQUdFLG1CQUFZLEtBQUtDLFVBSG5CO0FBSUUsbUJBQVksS0FBS0wsS0FBTCxDQUFXTSxTQUp6QjtBQUtFLFlBQUssS0FBS04sS0FBTCxDQUFXTyxFQUxsQjtBQU1FLHFCQUFjLEtBQUtQLEtBQUwsQ0FBV1EsV0FOM0I7QUFPRSxlQUFRLEtBQUtOLEtBQUwsQ0FBV08sS0FQckI7QUFRRSxtQkFBWSxJQVJkO0FBU0UsY0FBSztBQVRQLFFBREY7QUFhRDs7OzhCQUVTO0FBQ1IsV0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLEtBQUtSLEtBQUwsQ0FBV08sS0FBN0I7O0FBRUEsV0FBS0UsUUFBTCxDQUFjLEVBQUVGLE9BQU8sRUFBVCxFQUFkO0FBQ0Q7Ozs4QkFFU0csSyxFQUFPO0FBQ2YsV0FBS0QsUUFBTCxDQUFjLEVBQUVGLE9BQU9HLE1BQU1DLE1BQU4sQ0FBYUosS0FBdEIsRUFBZDtBQUNEOzs7K0JBRVVHLEssRUFBTztBQUNoQixVQUFJQSxNQUFNRSxPQUFOLEtBQWtCaEIsWUFBdEIsRUFBb0M7QUFDbEMsYUFBS0ssT0FBTDtBQUNEO0FBQ0Y7Ozs7OztBQUdISixVQUFVZ0IsUUFBVixHQUFxQjtBQUNuQkwsVUFBUSxnQkFBTU0sU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUJDLFVBRFY7QUFFbkJaLGFBQVcsZ0JBQU1VLFNBQU4sQ0FBZ0JHLE1BRlI7QUFHbkJaLE1BQUksZ0JBQU1TLFNBQU4sQ0FBZ0JHLE1BSEQ7QUFJbkJYLGVBQWEsZ0JBQU1RLFNBQU4sQ0FBZ0JHLE1BSlY7QUFLbkJWLFNBQU8sZ0JBQU1PLFNBQU4sQ0FBZ0JHO0FBTEosQ0FBckI7O2tCQVFlcEIsUyIsImZpbGUiOiJUZXh0SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGVudGVyS2V5Q29kZSA9IDEzO1xuXG4vLyBBIFJlYWN0IGNvbXBvbmVudCBjbGFzcyBmb3IgZ2VuZXJpYyB0ZXh0IGlucHV0LlxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLl9iaW5kKCdfb25TYXZlJywgJ19vbkNoYW5nZScsICdfb25LZXlEb3duJyk7XG4gICAgdGhpcy5zdGF0ZSA9IHByb3BzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgb25CbHVyPXsgdGhpcy5fb25TYXZlIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLl9vbkNoYW5nZSB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMuX29uS2V5RG93biB9XG4gICAgICAgIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH1cbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgcGxhY2Vob2xkZXI9eyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIH1cbiAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLnZhbHVlIH1cbiAgICAgICAgYXV0b0ZvY3VzPXsgdHJ1ZSB9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIF9vblNhdmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vblNhdmUodGhpcy5zdGF0ZS52YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0pO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBfb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGVudGVyS2V5Q29kZSkge1xuICAgICAgdGhpcy5fb25TYXZlKCk7XG4gICAgfVxuICB9XG5cbn1cblRleHRJbnB1dC5wb3BUeXBlcyA9IHtcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcbiJdfQ==
//# sourceMappingURL=TextInput.js.map
