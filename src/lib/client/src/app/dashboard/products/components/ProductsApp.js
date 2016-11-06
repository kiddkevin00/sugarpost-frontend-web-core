//import memoStore from '../stores/memoStore';
//import Header from './Header';
//import MainSection from './MainSection';
//import Footer from './Footer';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux's store.
 */
function _getState() {
  return {
  };
}

class ProductsApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    //memoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    //memoStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <p>
            English Classes (Fulltime Course)

            In this program you will learn English through a combination of online classes, private lessons, and video courses. This program provides all of the advantages of each product to create the ultimate learning experience. Students choose the program appropriate for their level of learning which include beginner, intermediate, and advanced. Students enrolled in this dynamic and comprehensive program reach their goals quickly and effectively.

            Private Skype Lessons

            In this course you will learn English one-on-one with an instructor over Skype. It's the most preferred method of learning for our students and is ideal for those seeking the most interactive and communicative experience possible. Instructors ask students about their experiences, goals, problems, and level of English, in order to provide the most effective learning experience. Through a combination of teaching, exercises, and online tools, students will receive a unique learning experience that will allow them to achieve their goals at an accelerated rate.

            Private Lessons

            In this course you will learn English one-on-one with an instructor in person. It is ideal for those seeking the most interactive and communicative experience possible. Instructors ask students about their experiences, goals, problems, and level of English, in order to provide the most effective learning experience. Through a combination of teaching, exercises, and online tools, students will receive a unique learning experience that will allow them to achieve their goals at an accelerated rate.

            Video Course: English for Beginners

            Ideal for self-study learning, this video series teaches grammar, pronunciation, vocabulary, spelling, speaking, reading, and writing. During each lesson, the instructor will give practice questions, quizzes, and other exercises to involve students with practicing the material. Subtitles are included in this video course to make learning easier.

            Live Online Classes

            We offer live online classes for beginner, intermediate, and advanced English students. With this option you get to learn English from anywhere in the world, in a fun and interactive way. We offer classes on a flexible time schedule and if you miss a class, you can access it at a later time and watch it on demand.
          </p>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}

export default ProductsApp;
