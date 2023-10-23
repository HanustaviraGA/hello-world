import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
    public async index({view}: HttpContextContract) {
        // return 'Hello world'
        const data = {
            message: 'Ini di main',
            someValue: 'This is a value to be displayed on the page',
        };
        view.share(data);
        return view.render('main')
    }

    public async database({view}: HttpContextContract) {
        // return 'Hello world'
        const post = await Post.find(1)
        const data = {
            message: 'Ini di post db',
            someValue: post?.title,
        };
        view.share(data);
        return view.render('database')
    }

    public async post({request, view}: HttpContextContract) {
        // return 'Hello world'
        const title = request.param('title');
        const data = {
            message: 'Ini di post',
            someValue: title,
        };
        view.share(data);
        return view.render('post')
    }
}
