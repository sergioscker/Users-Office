import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/users', async (_, res) => {
  const getUsers = await prisma.user.findMany();

  res.status(200).json(getUsers);
});

app.post('/users', async (req, res) => {
  const createUser = await prisma.user.create({
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });

  res.status(201).json(createUser);
});

app.put('/users/:id', async (req, res) => {
  const updateUser = await prisma.user.update({
    where: {
      id: req.params.id,
    },

    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });

  res.status(200).json(updateUser);
});

app.delete('/users/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },

    select: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });

  res.status(200).json({ message: 'User deleted sucessfully!' });
});

app.listen(port, () => {
  console.log(` 🛜  Server started on ${port}`);
});

/*
sergioliveira
jetxJx5aJYV1g39T*/
