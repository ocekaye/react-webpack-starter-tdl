import React from 'react';
import AddTodo from '../../components/Todo/AddTodoLoad';
import VisibleTodoList from '../../components/Todo/VisibleTodoListLoad';
import Footer from '../../components/Todo/FooterLoad';

export default class Redux extends React.PureComponent {
  render() {
    return (
        <div className="container" style={{marginTop: 30}}>
          <AddTodo />
          <VisibleTodoList />
          <Footer/>
        </div>
    );
  }
}