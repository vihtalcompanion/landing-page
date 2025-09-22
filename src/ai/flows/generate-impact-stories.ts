// This file is machine-generated - edit at your own risk!

// 'use server';

/**
 * @fileOverview Generates realistic-sounding user testimonials using AI.
 *
 * - generateImpactStory - A function that generates a single impact story.
 * - GenerateImpactStoryInput - The input type for the generateImpactStory function.
 * - GenerateImpactStoryOutput - The return type for the generateImpactStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImpactStoryInputSchema = z.object({
  topic: z.string().describe('The topic or focus of the impact story.'),
  style: z.string().optional().default('Empathetic and hopeful').describe('The writing style of the testimonial.'),
});
export type GenerateImpactStoryInput = z.infer<typeof GenerateImpactStoryInputSchema>;

const GenerateImpactStoryOutputSchema = z.object({
  story: z.string().describe('The generated impact story/testimonial.'),
});
export type GenerateImpactStoryOutput = z.infer<typeof GenerateImpactStoryOutputSchema>;

export async function generateImpactStory(input: GenerateImpactStoryInput): Promise<GenerateImpactStoryOutput> {
  return generateImpactStoryFlow(input);
}

const generateImpactStoryPrompt = ai.definePrompt({
  name: 'generateImpactStoryPrompt',
  input: {schema: GenerateImpactStoryInputSchema},
  output: {schema: GenerateImpactStoryOutputSchema},
  prompt: `You are tasked with generating a realistic-sounding user testimonial for a crowdfunding campaign.

The testimonial should focus on the following topic: {{{topic}}}

The writing style should be: {{{style}}}

Please generate a single, concise testimonial that highlights the positive impact of the project.
`,
});

const generateImpactStoryFlow = ai.defineFlow(
  {
    name: 'generateImpactStoryFlow',
    inputSchema: GenerateImpactStoryInputSchema,
    outputSchema: GenerateImpactStoryOutputSchema,
  },
  async input => {
    const {output} = await generateImpactStoryPrompt(input);
    return output!;
  }
);
