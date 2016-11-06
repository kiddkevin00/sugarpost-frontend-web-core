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

var TeachersApp = function (_BaseComponent) {
  _inherits(TeachersApp, _BaseComponent);

  function TeachersApp(props) {
    _classCallCheck(this, TeachersApp);

    var _this = _possibleConstructorReturn(this, (TeachersApp.__proto__ || Object.getPrototypeOf(TeachersApp)).call(this, props));

    _this._bind('_onChange');
    _this.state = _getState();
    return _this;
  }

  _createClass(TeachersApp, [{
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
            'Get Here at The English University, our teachers are patient, innovative, and passionate about the success of our students. They come from diverse backgrounds and are dedicated to reach your goals in a fun, engaging, and effective manner. They\'re trained to properly assess your goals and create a customized lesson plan that suits your needs. The lesson plan gives students a clear idea of what they will be learning, what the assignments are, and what the grading policy is. All assignments have learning goals and develop new skills for the student. Below you can view our teachers\' biographies and schedule an  appointment with one today!e number'
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

  return TeachersApp;
}(_BaseComponent3.default);

exports.default = TeachersApp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3RlYWNoZXJzL2NvbXBvbmVudHMvVGVhY2hlcnNBcHAuanMiXSwibmFtZXMiOlsiX2dldFN0YXRlIiwiVGVhY2hlcnNBcHAiLCJwcm9wcyIsIl9iaW5kIiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUxBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTs7OztBQUlBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FBTyxFQUFQO0FBRUQ7O0lBRUtDLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhSixXQUFiO0FBSmlCO0FBS2xCOzs7O3dDQUVtQjtBQUNsQjtBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsT0FERjtBQVNEOzs7Z0NBRVc7QUFDVixXQUFLSyxRQUFMLENBQWNMLFdBQWQ7QUFDRDs7Ozs7O2tCQUlZQyxXIiwiZmlsZSI6IlRlYWNoZXJzQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgbWVtb1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9tZW1vU3RvcmUnO1xuLy9pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbi8vaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gJy4vTWFpblNlY3Rpb24nO1xuLy9pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLypcbiAqIEEgcHJpdmF0ZSBtZXRob2QuIEl0IHNob3VsZCBvbmx5IGJlIHVzZWQgYnkgYHNldFN0YXRlKClgIGFuZCBgZ2V0SW5pdGlhbFN0YXRlKClgIHRvIHN5bmMgd2l0aFxuICogdGhlIGRhdGEgaW4gdGhlIEZsdXgncyBzdG9yZS5cbiAqL1xuZnVuY3Rpb24gX2dldFN0YXRlKCkge1xuICByZXR1cm4ge1xuICB9O1xufVxuXG5jbGFzcyBUZWFjaGVyc0FwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5fYmluZCgnX29uQ2hhbmdlJyk7XG4gICAgdGhpcy5zdGF0ZSA9IF9nZXRTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9tZW1vU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy9tZW1vU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMic+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgSGVyZSBhdCBUaGUgRW5nbGlzaCBVbml2ZXJzaXR5LCBvdXIgdGVhY2hlcnMgYXJlIHBhdGllbnQsIGlubm92YXRpdmUsIGFuZCBwYXNzaW9uYXRlIGFib3V0IHRoZSBzdWNjZXNzIG9mIG91ciBzdHVkZW50cy4gVGhleSBjb21lIGZyb20gZGl2ZXJzZSBiYWNrZ3JvdW5kcyBhbmQgYXJlIGRlZGljYXRlZCB0byByZWFjaCB5b3VyIGdvYWxzIGluIGEgZnVuLCBlbmdhZ2luZywgYW5kIGVmZmVjdGl2ZSBtYW5uZXIuIFRoZXkncmUgdHJhaW5lZCB0byBwcm9wZXJseSBhc3Nlc3MgeW91ciBnb2FscyBhbmQgY3JlYXRlIGEgY3VzdG9taXplZCBsZXNzb24gcGxhbiB0aGF0IHN1aXRzIHlvdXIgbmVlZHMuIFRoZSBsZXNzb24gcGxhbiBnaXZlcyBzdHVkZW50cyBhIGNsZWFyIGlkZWEgb2Ygd2hhdCB0aGV5IHdpbGwgYmUgbGVhcm5pbmcsIHdoYXQgdGhlIGFzc2lnbm1lbnRzIGFyZSwgYW5kIHdoYXQgdGhlIGdyYWRpbmcgcG9saWN5IGlzLiBBbGwgYXNzaWdubWVudHMgaGF2ZSBsZWFybmluZyBnb2FscyBhbmQgZGV2ZWxvcCBuZXcgc2tpbGxzIGZvciB0aGUgc3R1ZGVudC4gQmVsb3cgeW91IGNhbiB2aWV3IG91ciB0ZWFjaGVycycgYmlvZ3JhcGhpZXMgYW5kIHNjaGVkdWxlIGFuICBhcHBvaW50bWVudCB3aXRoIG9uZSB0b2RheSFlIG51bWJlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2hhbmdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoX2dldFN0YXRlKCkpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhY2hlcnNBcHA7XG4iXX0=
//# sourceMappingURL=TeachersApp.js.map
