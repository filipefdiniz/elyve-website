
'use server';

import { generateDailyHealthTip } from '@/ai/flows/generate-daily-health-tip';
import { z } from 'zod';

const schema = z.object({
  preferences: z.string().min(10, 'Por favor, descreva suas preferências com pelo menos 10 caracteres.'),
});

type State = {
  message?: string | null;
  tip?: string | null;
  errors?: {
    preferences?: string[];
  };
};

export async function getHealthTipAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    preferences: formData.get('preferences'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos inválidos.',
    };
  }

  try {
    const result = await generateDailyHealthTip({
      userPreferences: validatedFields.data.preferences,
    });
    return { message: 'Success', tip: result.tip };
  } catch (error) {
    console.error(error);
    return { message: 'Ocorreu um erro ao gerar a dica de saúde. Por favor, tente novamente mais tarde.' };
  }
}
