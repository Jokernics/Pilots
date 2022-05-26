import React from 'react';
import ProfileCardList from '../components/ProfileCardList/UserCardList';

const Users = () => {
  return (
    <>
      <div className="logo-section">
        <div className="slider-wrapper">
          <div className='slider-headline'>
            <h2>Twenty One Pilots</h2>
            <h4>22.02.23 в 21:00</h4>
          </div>
          <div className='slider-buttons_wrapper'>
            <button className='slider-button_left'></button>
            <button className='slider-button_buy'></button>
            <button className='slider-button_right'></button>
          </div>
        </div>
      </div>
      <div className="main-container">
        <main>
          <div className="history">
            <div className="history-top">
              <h2>Купили</h2>
              <h2>932/ 1000</h2>
            </div>
            <div className='users-container'><ProfileCardList /></div>
          </div>
          <div className="about-wrapper">
            <div className='descripton-wrapper'>
              <h2>О площадке</h2>
              <div className="about-description">
                <h3>Современная площадка для проведения концертов и других мероприятий любой сложности.</h3>
                <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus assumenda! Tenetur explicabo in minima velit, sed voluptas expedita sequi odio quos cum repellat? Ratione ad harum blanditiis impedit neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus assumenda! Tenetur explicabo in minima velit, sed voluptas expedita sequi odio quos cum repellat? Ratione ad harum blanditiis impedit neque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, necessitatibus assumenda! Tenetur explicabo in minima velit, sed voluptas expedita sequi odio quos cum repellat? Ratione ad harum blanditiis impedit neque?</p>
              </div>
            </div>
            <form action="">
              <h2>Оставить заявку на проведение концерта</h2>
              <textarea name="" placeholder='Расскажите о вашем предложении '></textarea>
              <button>Отправить</button>
            </form>
          </div>
          <div className='about-group'>
            <h2>О группе</h2>
            <p>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Users;