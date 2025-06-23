'use server';
/**
 * @fileOverview Generates a personalized daily health tip using AI.
 *
 * - generateDailyHealthTip - A function that generates a daily health tip.
 * - GenerateDailyHealthTipInput - The input type for the generateDailyHealthTip function.
 * - GenerateDailyHealthTipOutput - The return type for the generateDailyHealthTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDailyHealthTipInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('The user preferences for health and nutrition.'),
});
export type GenerateDailyHealthTipInput = z.infer<typeof GenerateDailyHealthTipInputSchema>;

const GenerateDailyHealthTipOutputSchema = z.object({
  tip: z.string().describe('A personalized daily health tip.'),
});
export type GenerateDailyHealthTipOutput = z.infer<typeof GenerateDailyHealthTipOutputSchema>;

export async function generateDailyHealthTip(
  input: GenerateDailyHealthTipInput
): Promise<GenerateDailyHealthTipOutput> {
  return generateDailyHealthTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDailyHealthTipPrompt',
  input: {schema: GenerateDailyHealthTipInputSchema},
  output: {schema: GenerateDailyHealthTipOutputSchema},
  prompt: `You are a personal health and nutrition advisor. Based on the
  user's preferences, generate one short and actionable daily health tip.

  User Preferences: {{{userPreferences}}}
  `,
});

const generateDailyHealthTipFlow = ai.defineFlow(
  {
    name: 'generateDailyHealthTipFlow',
    inputSchema: GenerateDailyHealthTipInputSchema,
    outputSchema: GenerateDailyHealthTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
