const devlopment = {
    name: "devlopment",

    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: '2870.rahul@gmail.com',
            pass: 'isnytfcymvjabomg'
        }
    },

    google_client_id: "384536873576-0ab564skteu6kqvmaeaem5madi2mpa4e.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8003/users/auth/google/callback",


}

const production = {
    name: "production"
}



module.exports = devlopment
