import React from 'react'
import Setting from './components/Setting'
import { Provider } from 'react-redux';
import store from '../../redux/store'
import ChangePasswordModal from './components/ChangePasswordModal';
import ChangeEmailModal from './components/ChangeEmailModal';
export default function index() {
  return (
    <Provider store={store}>
      <Setting/>
      <ChangePasswordModal/>
      <ChangeEmailModal/>
    </Provider>
  )
}
