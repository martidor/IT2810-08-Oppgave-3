import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../views/login/Login';
import LoginModal from '../components/login/LoginModal';

describe('LoginModal', () => {
  it('Login modal is not rendered if a user is logged in', () => {
    const loginModal = mount(<LoginModal show={false} />);

    expect(loginModal.find(Login).length).toBe(0);
  });
});
