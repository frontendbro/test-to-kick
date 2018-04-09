import React, {Component} from 'react';
import logo from '../../public/images/logo.png';
import user from '../../public/images/ic-user.png';
import '../index.scss';

import Menu from './Menu';

class component extends Component {
  handleEvent = () => {
    console.log('dsdf');
  };

  render() {
    return (
      <div className='header'>
        <div className='header__logo'>
          <img src={logo} alt='logo' width='121' height='31'/>
        </div>
        <Menu/>
        <div className='event-create'>
          <p className='event-create__button' onClick={this.handleEvent}>Create event</p>
        </div>
        <div className='user-info'>
          <span className='score'>0.0027 KCY</span>
          <img className='user-info__avatar' src={user} alt='user' width='42' height='42'/>
        </div>
      </div>
    );
  }
}

export default component;
