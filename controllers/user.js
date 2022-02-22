import user from '../models/user.js'

export const getAllUsers = async(req, res) => {
    const users =  await user.findAll()
    return res.json(users)
}

export const getUser = async(req, res) => {
    const {id} = req.params
    const User =  await user.findOne({where: {id: id }})
    return res.json(User)
}

export const createUser = async(req, res) => {
    const body = req.body
    const User =  await user.create(body)
    return res.json(User)
}

export const updateUser = async(req, res) => {
    const {id} = req.params
    const body = req.body
    const User = await user.update(body, {where: {id: id}})
    return res.json(User)
}

export const deleteUser = async(req, res) => {
    const {id} = req.params
    await user.destroy({where:{id:id}})
    return res.json({message: "User has been deleted!"})
}