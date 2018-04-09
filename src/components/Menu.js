import React, {Component} from 'react';
import '../index.scss';

import search from '../../public/images/ic-search.png';
import alarm from '../../public/images/ic-alarm.png';

class component extends Component {
  constructor(props) {
    super(props);
    this.closePopover = this.closePopover.bind(this);
    this.openPopover = this.openPopover.bind(this);
  }


  closePopover() {
    let popover = document.querySelector('.menu-list-popover');
    popover.classList.remove('menu-list-popover_active');
  }

  openPopover() {
    let popover = document.querySelector('.menu-list-popover');
    popover.classList.add('menu-list-popover_active');
  };


  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillMount() {
    document.addEventListener('click', this.closePopover);
  }


  render() {
    return (
      <div className='menu'>
        <ul className='menu-list'>
          <li className='menu-list__item'>
            <span className='menu-list__link location-select' onClick={this.openPopover}>Houston</span>
            <div className="menu-list-popover">
              <ul className='popover-list'>
                <li className='popover-list__item'>1</li>
                <li className='popover-list__item'>2</li>
                <li className='popover-list__item'>3</li>
                <li className='popover-list__item'>4</li>
                <li className='popover-list__item'>5</li>
              </ul>
            </div>
          </li>
          <li className='menu-list__item'>
            <span className='menu-list__link'>Categories</span>
          </li>
          <li className='menu-list__item menu-list__item_active'>
            <span className='menu-list__link'>Explore</span>
          </li>
        </ul>
        <div className='menu-search'>
          <img className='menu-search__search-icon' src={search} alt='search' width='16' height='16'/>
          <img src={alarm} alt='search' width='18' height='18'/>
        </div>
      </div>
    );
  }
}

export default component;