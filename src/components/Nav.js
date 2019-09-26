import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ROUTER_PATH } from '../commons/constants'

const Nav = ({ schoolsCount, studentsCount }) => {
    return (
        <header>
            <Link id="app-name" to={ROUTER_PATH.HOME}>CUNY Schools</Link>
            <nav>
                <NavLink to={ROUTER_PATH.STUDENTS} exact>Students ({ studentsCount })</NavLink>
                <NavLink to={ROUTER_PATH.SCHOOLS} exact>Schools ({ schoolsCount })</NavLink>
                <NavLink to={`${ROUTER_PATH.SCHOOLS}/${0}`} exact>Most Popular: Name (#)</NavLink>
                <NavLink to={`${ROUTER_PATH.SCHOOLS}/${1}`} exact>Top School: Name (#)</NavLink>
            </nav>
        </header>
    )
}

const mapStateToProps = ({ schools, students }) => {
    const schoolsWithStudents = schools.map(school => ({...school, students: students.filter(s => s.schoolId === school.id)}))
    let mostPopularSchool = {}
    let topSchool = {}

    // schoolsWithStudents.forEach(school => {

    // })

    return {
        schoolsCount: schools.length,
        studentsCount: students.length,
        mostPopularSchool,
        topSchool
    }
}

export default connect(mapStateToProps)(Nav)
