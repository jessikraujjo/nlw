import express from 'express';
import cors  from 'cors'; 
import path from 'path';
import { errors} from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

/* const users = [
    'Diego',
    'Jéssica',
    'diana'
];

app.get('/users', (request, response) => {
    
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)): users;
    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
     
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
    
}); */

app.listen(3333);