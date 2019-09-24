import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ROUTER_PATH } from '../commons/constants'

const Nav = () => {
  return (
    <div>
      <Link id="app-name" to={ ROUTER_PATH.HOME }>CUNY Schools</Link>
      <nav>
        <NavLink to={ `${ROUTER_PATH.STUDENTS}/create` }>Enroll a Student</NavLink>
        <NavLink to={ ROUTER_PATH.STUDENTS } exact>Students (#)</NavLink>
        <NavLink to={ ROUTER_PATH.SCHOOLS } exact>Schools (#)</NavLink>
        <NavLink to={ `${ROUTER_PATH.SCHOOLS}/${0}` } exact>Most Popular: Name (#)</NavLink>
        <NavLink to={ `${ROUTER_PATH.SCHOOLS}/${1}` } exact>Top Popular: Name (#)</NavLink>
      </nav>
    </div>
  )
}

const mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps)(Nav)
