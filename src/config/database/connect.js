const mongoose = require('mongoose');
const password = '6MnepTBXzCRhcS20';
const uri = `mongodb+srv://admin_ocean:${password}@cluster0.sk3ubbg.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB ^^');
    } catch (e) {
        console.log('Connect failed');
    }
}

module.exports = { connect };