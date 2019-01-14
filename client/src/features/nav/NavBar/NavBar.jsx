import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Container } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import { openModal } from '../../modals/modalActions'
import { logout } from '../../auth/authActions'

const actions = {
  openModal,
  logout
}

const mapState = (state) => ({
  auth: state.auth
})

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  }

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }


  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/')
  };

  render() {
    const { auth } = this.props
    const authenticated = auth.authenticated
    return (
      <Menu fixed="top">
        <Container>

          {authenticated &&
            <Menu.Item as={Link} to='/people' name="Osallistujat" />}

          <Menu.Item as={Link} to='/activities' name="Havainnot" />

          {authenticated &&
            <Menu.Item
              as={Link}
              to='/createActivity'
              floated="right"
              basic
              color=''
              content="Uusi havainto"
            />
          }

          {authenticated ? (
            <SignedInMenu
              currentUser={auth.currentUser}
              signOut={this.handleSignOut} />
          ) : (
              <SignedOutMenu signIn={this.handleSignIn}
                register={this.handleRegister} />)}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(connect(mapState, actions)(NavBar))



