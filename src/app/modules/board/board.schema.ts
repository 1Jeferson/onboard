import { z } from 'zod';

export const createBoardSchema = z.object({
  name: z.string().nonempty('Informe um nome.'),
});
