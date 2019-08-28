'use strict'

const User = use('App/Models/User')

class AuthController {
    async register ({request, response, view}){
        const user = await User.create({
            username : request.input('username'),
            email : request.input('email'),
            password : request.input('password')
        })
        return response.json(user)
    }

    async login ({request, response, view, auth}) {
        const {email, password} = request.all()
        const token = await auth.attempt(email, password)

        return response.json({
            email : email,
            token
        })
    }
}

module.exports = AuthController
