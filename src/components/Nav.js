import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ROUTER_PATH } from '../commons/constants'

const Nav = ({ schoolsCount, studentsCount, mostPopularSchool, topSchool }) => {
    return (
        <header>
            <Link id="app-name" to={ROUTER_PATH.HOME}>CUNY Schools</Link>
            <nav>
                <NavLink to={ROUTER_PATH.STUDENTS} exact>Students ({ studentsCount })</NavLink>
                <NavLink to={ROUTER_PATH.SCHOOLS} exact>Schools ({ schoolsCount })</NavLink>
                { mostPopularSchool.school && <NavLink to={`${ROUTER_PATH.SCHOOLS}/${ mostPopularSchool.school.id }`} exact>Most Popular: { mostPopularSchool.school.name } ({ mostPopularSchool.count })</NavLink> }
                { topSchool.school && <NavLink to={`${ROUTER_PATH.SCHOOLS}/${ topSchool.school.id }`} exact>Top School: { topSchool.school.name } ({ topSchool.count })</NavLink> }
            </nav>
        </header>
    )
}

const mapStateToProps = ({ schools, students }) => {
    const schoolsWithStudents = schools.map(school => ({...school, students: students.filter(s => s.schoolId === school.id)}))
    let mostPopularSchool = {school: undefined, count: 0}
    let topSchool = {school: undefined, count: 0, gpa: 0}

    schoolsWithStudents.forEach(school => {
        const currStudents = students.filter(s => s.schoolId === school.id)
        if (currStudents.length > mostPopularSchool.count) {
            mostPopularSchool.school = school
            mostPopularSchool.count = currStudents.length
        }
        const currGPATotal = currStudents.reduce((acc, curr) => parseInt(acc) + parseInt(curr.gpa), 0)
        if (currGPATotal > topSchool.gpa) {
            topSchool.school = school
            topSchool.count = currStudents.length
            topSchool.gpa = currGPATotal
        }
    })

    return {
        schoolsCount: schools.length,
        studentsCount: students.length,
        mostPopularSchool,
        topSchool
    }
}

export default connect(mapStateToProps)(Nav)
