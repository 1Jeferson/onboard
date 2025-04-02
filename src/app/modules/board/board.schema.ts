import { z } from 'zod';

export const createBoardSchema = z.object({
  name: z.string().nonempty('Informe um nome.'),
});

export const updateBoardSchema = z.object({
  name: z.string().nonempty('Informe um nome para ser editado.'),
});

export const createCardSchema = z.object({
  name: z.string().nonempty('Informe um nome.'),
});

export type CreateCardSchema = z.infer<typeof createCardSchema>;
