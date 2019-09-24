const app = require('./app')
const db = require('./db')

const PORT = process.env.PORT || 4200

db.connect().then(() => app.listen(PORT, () => console.log(`Serving app on port ${ PORT }`)))
