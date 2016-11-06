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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import memoStore from '../stores/memoStore';
//import Header from './Header';
//import MainSection from './MainSection';
//import Footer from './Footer';


/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

var ProductsApp = function (_BaseComponent) {
  _inherits(ProductsApp, _BaseComponent);

  function ProductsApp(props) {
    _classCallCheck(this, ProductsApp);

    var _this = _possibleConstructorReturn(this, (ProductsApp.__proto__ || Object.getPrototypeOf(ProductsApp)).call(this, props));

    _this._bind('_onChange');
    _this.state = _getState();
    return _this;
  }

  _createClass(ProductsApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //memoStore.addChangeListener(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //memoStore.removeChangeListener(this._onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            'p',
            null,
            'English Classes (Fulltime Course) In this program you will learn English through a combination of online classes, private lessons, and video courses. This program provides all of the advantages of each product to create the ultimate learning experience. Students choose the program appropriate for their level of learning which include beginner, intermediate, and advanced. Students enrolled in this dynamic and comprehensive program reach their goals quickly and effectively. Private Skype Lessons In this course you will learn English one-on-one with an instructor over Skype. It\'s the most preferred method of learning for our students and is ideal for those seeking the most interactive and communicative experience possible. Instructors ask students about their experiences, goals, problems, and level of English, in order to provide the most effective learning experience. Through a combination of teaching, exercises, and online tools, students will receive a unique learning experience that will allow them to achieve their goals at an accelerated rate. Private Lessons In this course you will learn English one-on-one with an instructor in person. It is ideal for those seeking the most interactive and communicative experience possible. Instructors ask students about their experiences, goals, problems, and level of English, in order to provide the most effective learning experience. Through a combination of teaching, exercises, and online tools, students will receive a unique learning experience that will allow them to achieve their goals at an accelerated rate. Video Course: English for Beginners Ideal for self-study learning, this video series teaches grammar, pronunciation, vocabulary, spelling, speaking, reading, and writing. During each lesson, the instructor will give practice questions, quizzes, and other exercises to involve students with practicing the material. Subtitles are included in this video course to make learning easier. Live Online Classes We offer live online classes for beginner, intermediate, and advanced English students. With this option you get to learn English from anywhere in the world, in a fun and interactive way. We offer classes on a flexible time schedule and if you miss a class, you can access it at a later time and watch it on demand.'
          )
        )
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(_getState());
    }
  }]);

  return ProductsApp;
}(_BaseComponent3.default);

exports.default = ProductsApp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3RzL2NvbXBvbmVudHMvUHJvZHVjdHNBcHAuanMiXSwibmFtZXMiOlsiX2dldFN0YXRlIiwiUHJvZHVjdHNBcHAiLCJwcm9wcyIsIl9iaW5kIiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUxBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTs7OztBQUlBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FBTyxFQUFQO0FBRUQ7O0lBRUtDLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhSixXQUFiO0FBSmlCO0FBS2xCOzs7O3dDQUVtQjtBQUNsQjtBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsT0FERjtBQTJCRDs7O2dDQUVXO0FBQ1YsV0FBS0ssUUFBTCxDQUFjTCxXQUFkO0FBQ0Q7Ozs7OztrQkFJWUMsVyIsImZpbGUiOiJQcm9kdWN0c0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IG1lbW9TdG9yZSBmcm9tICcuLi9zdG9yZXMvbWVtb1N0b3JlJztcbi8vaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG4vL2ltcG9ydCBNYWluU2VjdGlvbiBmcm9tICcuL01haW5TZWN0aW9uJztcbi8vaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qXG4gKiBBIHByaXZhdGUgbWV0aG9kLiBJdCBzaG91bGQgb25seSBiZSB1c2VkIGJ5IGBzZXRTdGF0ZSgpYCBhbmQgYGdldEluaXRpYWxTdGF0ZSgpYCB0byBzeW5jIHdpdGhcbiAqIHRoZSBkYXRhIGluIHRoZSBGbHV4J3Mgc3RvcmUuXG4gKi9cbmZ1bmN0aW9uIF9nZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgfTtcbn1cblxuY2xhc3MgUHJvZHVjdHNBcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2JpbmQoJ19vbkNoYW5nZScpO1xuICAgIHRoaXMuc3RhdGUgPSBfZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vbWVtb1N0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vbWVtb1N0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTInPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRW5nbGlzaCBDbGFzc2VzIChGdWxsdGltZSBDb3Vyc2UpXG5cbiAgICAgICAgICAgIEluIHRoaXMgcHJvZ3JhbSB5b3Ugd2lsbCBsZWFybiBFbmdsaXNoIHRocm91Z2ggYSBjb21iaW5hdGlvbiBvZiBvbmxpbmUgY2xhc3NlcywgcHJpdmF0ZSBsZXNzb25zLCBhbmQgdmlkZW8gY291cnNlcy4gVGhpcyBwcm9ncmFtIHByb3ZpZGVzIGFsbCBvZiB0aGUgYWR2YW50YWdlcyBvZiBlYWNoIHByb2R1Y3QgdG8gY3JlYXRlIHRoZSB1bHRpbWF0ZSBsZWFybmluZyBleHBlcmllbmNlLiBTdHVkZW50cyBjaG9vc2UgdGhlIHByb2dyYW0gYXBwcm9wcmlhdGUgZm9yIHRoZWlyIGxldmVsIG9mIGxlYXJuaW5nIHdoaWNoIGluY2x1ZGUgYmVnaW5uZXIsIGludGVybWVkaWF0ZSwgYW5kIGFkdmFuY2VkLiBTdHVkZW50cyBlbnJvbGxlZCBpbiB0aGlzIGR5bmFtaWMgYW5kIGNvbXByZWhlbnNpdmUgcHJvZ3JhbSByZWFjaCB0aGVpciBnb2FscyBxdWlja2x5IGFuZCBlZmZlY3RpdmVseS5cblxuICAgICAgICAgICAgUHJpdmF0ZSBTa3lwZSBMZXNzb25zXG5cbiAgICAgICAgICAgIEluIHRoaXMgY291cnNlIHlvdSB3aWxsIGxlYXJuIEVuZ2xpc2ggb25lLW9uLW9uZSB3aXRoIGFuIGluc3RydWN0b3Igb3ZlciBTa3lwZS4gSXQncyB0aGUgbW9zdCBwcmVmZXJyZWQgbWV0aG9kIG9mIGxlYXJuaW5nIGZvciBvdXIgc3R1ZGVudHMgYW5kIGlzIGlkZWFsIGZvciB0aG9zZSBzZWVraW5nIHRoZSBtb3N0IGludGVyYWN0aXZlIGFuZCBjb21tdW5pY2F0aXZlIGV4cGVyaWVuY2UgcG9zc2libGUuIEluc3RydWN0b3JzIGFzayBzdHVkZW50cyBhYm91dCB0aGVpciBleHBlcmllbmNlcywgZ29hbHMsIHByb2JsZW1zLCBhbmQgbGV2ZWwgb2YgRW5nbGlzaCwgaW4gb3JkZXIgdG8gcHJvdmlkZSB0aGUgbW9zdCBlZmZlY3RpdmUgbGVhcm5pbmcgZXhwZXJpZW5jZS4gVGhyb3VnaCBhIGNvbWJpbmF0aW9uIG9mIHRlYWNoaW5nLCBleGVyY2lzZXMsIGFuZCBvbmxpbmUgdG9vbHMsIHN0dWRlbnRzIHdpbGwgcmVjZWl2ZSBhIHVuaXF1ZSBsZWFybmluZyBleHBlcmllbmNlIHRoYXQgd2lsbCBhbGxvdyB0aGVtIHRvIGFjaGlldmUgdGhlaXIgZ29hbHMgYXQgYW4gYWNjZWxlcmF0ZWQgcmF0ZS5cblxuICAgICAgICAgICAgUHJpdmF0ZSBMZXNzb25zXG5cbiAgICAgICAgICAgIEluIHRoaXMgY291cnNlIHlvdSB3aWxsIGxlYXJuIEVuZ2xpc2ggb25lLW9uLW9uZSB3aXRoIGFuIGluc3RydWN0b3IgaW4gcGVyc29uLiBJdCBpcyBpZGVhbCBmb3IgdGhvc2Ugc2Vla2luZyB0aGUgbW9zdCBpbnRlcmFjdGl2ZSBhbmQgY29tbXVuaWNhdGl2ZSBleHBlcmllbmNlIHBvc3NpYmxlLiBJbnN0cnVjdG9ycyBhc2sgc3R1ZGVudHMgYWJvdXQgdGhlaXIgZXhwZXJpZW5jZXMsIGdvYWxzLCBwcm9ibGVtcywgYW5kIGxldmVsIG9mIEVuZ2xpc2gsIGluIG9yZGVyIHRvIHByb3ZpZGUgdGhlIG1vc3QgZWZmZWN0aXZlIGxlYXJuaW5nIGV4cGVyaWVuY2UuIFRocm91Z2ggYSBjb21iaW5hdGlvbiBvZiB0ZWFjaGluZywgZXhlcmNpc2VzLCBhbmQgb25saW5lIHRvb2xzLCBzdHVkZW50cyB3aWxsIHJlY2VpdmUgYSB1bmlxdWUgbGVhcm5pbmcgZXhwZXJpZW5jZSB0aGF0IHdpbGwgYWxsb3cgdGhlbSB0byBhY2hpZXZlIHRoZWlyIGdvYWxzIGF0IGFuIGFjY2VsZXJhdGVkIHJhdGUuXG5cbiAgICAgICAgICAgIFZpZGVvIENvdXJzZTogRW5nbGlzaCBmb3IgQmVnaW5uZXJzXG5cbiAgICAgICAgICAgIElkZWFsIGZvciBzZWxmLXN0dWR5IGxlYXJuaW5nLCB0aGlzIHZpZGVvIHNlcmllcyB0ZWFjaGVzIGdyYW1tYXIsIHByb251bmNpYXRpb24sIHZvY2FidWxhcnksIHNwZWxsaW5nLCBzcGVha2luZywgcmVhZGluZywgYW5kIHdyaXRpbmcuIER1cmluZyBlYWNoIGxlc3NvbiwgdGhlIGluc3RydWN0b3Igd2lsbCBnaXZlIHByYWN0aWNlIHF1ZXN0aW9ucywgcXVpenplcywgYW5kIG90aGVyIGV4ZXJjaXNlcyB0byBpbnZvbHZlIHN0dWRlbnRzIHdpdGggcHJhY3RpY2luZyB0aGUgbWF0ZXJpYWwuIFN1YnRpdGxlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyB2aWRlbyBjb3Vyc2UgdG8gbWFrZSBsZWFybmluZyBlYXNpZXIuXG5cbiAgICAgICAgICAgIExpdmUgT25saW5lIENsYXNzZXNcblxuICAgICAgICAgICAgV2Ugb2ZmZXIgbGl2ZSBvbmxpbmUgY2xhc3NlcyBmb3IgYmVnaW5uZXIsIGludGVybWVkaWF0ZSwgYW5kIGFkdmFuY2VkIEVuZ2xpc2ggc3R1ZGVudHMuIFdpdGggdGhpcyBvcHRpb24geW91IGdldCB0byBsZWFybiBFbmdsaXNoIGZyb20gYW55d2hlcmUgaW4gdGhlIHdvcmxkLCBpbiBhIGZ1biBhbmQgaW50ZXJhY3RpdmUgd2F5LiBXZSBvZmZlciBjbGFzc2VzIG9uIGEgZmxleGlibGUgdGltZSBzY2hlZHVsZSBhbmQgaWYgeW91IG1pc3MgYSBjbGFzcywgeW91IGNhbiBhY2Nlc3MgaXQgYXQgYSBsYXRlciB0aW1lIGFuZCB3YXRjaCBpdCBvbiBkZW1hbmQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShfZ2V0U3RhdGUoKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0FwcDtcbiJdfQ==
//# sourceMappingURL=ProductsApp.js.map
