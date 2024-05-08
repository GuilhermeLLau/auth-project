import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: '* Campo Obrigatório',
  }),
  password: z.string().min(1, {
    message: '* Senha Inválida',
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: '* Campo Obrigatório',
  }),
  password: z.string().min(6, {
    message: '* Minímo de 6 Caracteres',
  }),
  name: z.string().min(1, {
    message: '* Campo Obrigatório',
  }),
});
