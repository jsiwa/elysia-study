import { Elysia } from 'elysia'

const app = new Elysia()

// Route

app.get('/', () => '🦊').listen(3000)

app.get('/ping', () => 'pong')

app.route('M-SEARCH', ['m-search'], () => 'From M Search')

app.get('/id/:id', ( { params: { id } } ) => id)
app.get('/user/*', ( { params } ) => params)


// Handler


app.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
