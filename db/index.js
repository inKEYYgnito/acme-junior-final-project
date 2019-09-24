const connection = require('./connection')
const Student = require('./Student')
const School = require('./School')

const modelCreator = (list, Model) => {
    return Promise.all( list.map(el => Model.create(el)) )
}

const connect = async () => {
    School.hasMany(Student)
    Student.belongsTo(School)

    await connection.sync({ force: true })

    const schoolsMeta = [
        { name: 'Baruch Chollege', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/assets//09_09_2004_bar_vertical_01233.jpg' },
        { name: 'Brooklyn College', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/2015/01/09_20_2006_brc_quad_06.jpg' },
        { name: 'College of Staten Island', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/2015/01/12_14_2012_csi_bldgs_33.jpg' },
        { name: 'Hunter College', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/assets//09_10_2004_htc_huntercampus_33.jpg' },
        { name: 'John Jay College of Criminal Justice', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/fpcm/building-for-the-21st-century/completed/marketing_jaywalk2.jpg' },
        { name: 'Lehman College', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/assets//2004_lhc_lehmancampus_56.jpg' },
        { name: 'Medgar Evers College', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/assets//mec_00927.jpg' },
        { name: 'NYC College of Technology', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/page-assets/about/colleges-schools/citytech_building.jpg' },
        { name: 'Queens College', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/2015/01/09_14_2004_qcc_campus_05.jpg' },
        { name: 'York College', imageURL: 'https://www2.cuny.edu/wp-content/uploads/sites/4/2015/01/10_05_2004_yrk_environs_85.jpg' },
    ]

    const schools = (await modelCreator(schoolsMeta, School)).map(el => el.dataValues)

    const studentsMeta = [
        { firstName: 'Key', lastName: 'Caye', email: 'key.caye@gmail.com', gpa: '3.6', schoolId: schools[0].id},
        { firstName: 'Katsu', lastName: 'Don', email: 'katsu.don@gmail.com', gpa: '3.0', schoolId: schools[1].id},
        { firstName: 'Justin', lastName: 'Li', email: 'justin.li@gmail.com', gpa: '2.5', schoolId: schools[3].id},
        { firstName: 'Charm', lastName: 'Caye', email: 'charm.caye@gmail.com', gpa: '3.8', schoolId: schools[5].id},
        { firstName: 'Kim', lastName: 'Chi', email: 'kim.chi@gmail.com', gpa: '2.3', schoolId: schools[4].id},
        { firstName: 'Tina', lastName: 'Gung', email: 'tina.grg@gmail.com', gpa: '2.4', schoolId: schools[6].id},
        { firstName: 'Eric', lastName: 'Li', email: 'eric.li@gmail.com', gpa: '2.9', schoolId: schools[8].id},
        { firstName: 'Dummy', lastName: 'Deighta', email: 'dum.my@yahoo.com', gpa: '2.4', schoolId: schools[9].id},
        { firstName: 'Golden', lastName: 'Doodle', email: 'dude.el@yahoo.com', gpa: '3.4', schoolId: schools[6].id},
        { firstName: 'Yani', lastName: 'Saus', email: 'yani.saus@gmail.com', gpa: '3.5', schoolId: schools[8].id},
    ]

    const students = (await modelCreator(studentsMeta, Student)).map(el => el.dataValues)
}

module.exports = {
    connect,
    models: {
        School,
        Student
    }
}