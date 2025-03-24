import { z } from 'zod';

export const createBoardSchema = z.object({
  name: z.string().nonempty('Informe um nome.'),
});

export const updateBoardSchema = z.object({
  name: z.string().nonempty('Informe um nome para ser editado.'),
});
