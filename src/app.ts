import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';

const app = express();

function getPort(): number {
  return process.env.NODE_ENV === 'debug' ? 9229 : 3000;
}

const PORT = getPort();

sequelize
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error('Unable to connect to the database:', err));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
