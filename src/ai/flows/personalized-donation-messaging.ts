// 'use server';

/**
 * @fileOverview Personalized donation messaging flow using Genkit.
 *
 * - generatePersonalizedMessage - A function that generates a personalized donation message.
 * - PersonalizedMessageInput - The input type for the generatePersonalizedMessage function.
 * - PersonalizedMessageOutput - The return type for the generatePersonalizedMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedMessageInputSchema = z.object({
  engagementLevel: z
    .string()
    .describe(
      'The engagement level of the visitor (e.g., low, medium, high).'
    ),
  donationGoalProgress: z
    .number()
    .describe(
      'The percentage of the donation goal that has been reached (0-100).'
    ),
  lastVisited: z
    .string()
    .optional()
    .describe(
      'The date when the user last visited the page, if available.  Example: 2024-01-01'
    ),
});
export type PersonalizedMessageInput = z.infer<typeof PersonalizedMessageInputSchema>;

const PersonalizedMessageOutputSchema = z.object({
  message: z.string().describe('The personalized donation message.'),
});
export type PersonalizedMessageOutput = z.infer<typeof PersonalizedMessageOutputSchema>;

export async function generatePersonalizedMessage(
  input: PersonalizedMessageInput
): Promise<PersonalizedMessageOutput> {
  return personalizedMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedMessagePrompt',
  input: {schema: PersonalizedMessageInputSchema},
  output: {schema: PersonalizedMessageOutputSchema},
  prompt: `You are a fundraising expert crafting personalized messages to encourage donations.

  Based on the visitor's engagement level, the current donation goal progress, and their last visit date, generate a compelling message to encourage them to donate to VIHTal Companion.

  Engagement Level: {{{engagementLevel}}}
  Donation Goal Progress: {{{donationGoalProgress}}}%
  Last Visited: {{#if lastVisited}}{{{lastVisited}}}{{else}}Never{{/if}}

  Craft a message that is concise, empathetic, and highlights the impact of their donation. Focus on how their contribution can help improve health outcomes and reduce stigma surrounding HIV in Venezuela.

  Here are a few example messages:

  * "Your contribution can provide vital AI-powered guidance and support for people affected by HIV in Venezuela. Donate today and make a difference!"
  * "Even a small donation can help us reach our goal and empower individuals with access to accurate information and supportive communities."
  * "Join us in creating a safe and accessible platform for HIV prevention and treatment. Your support can save lives."

  Return ONLY the message, nothing else.
  `,
});

const personalizedMessageFlow = ai.defineFlow(
  {
    name: 'personalizedMessageFlow',
    inputSchema: PersonalizedMessageInputSchema,
    outputSchema: PersonalizedMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
