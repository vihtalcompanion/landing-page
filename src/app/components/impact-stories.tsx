// import { generateImpactStory } from "@/ai/flows/generate-impact-stories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

// Helper function to generate a story and handle potential errors
// Server Action desactivada para static export
function getStory(topic: string, fallback: string) {
  return Promise.resolve({ story: fallback });
}

export default async function ImpactStories() {
  const t = await getTranslations('Impact');
  const fallbackStory = t('storyFallback');

  const topics = [
    { title: t('storyTopics.access'), topic: "accessing accurate information about HIV" },
    { title: t('storyTopics.community'), topic: "reducing stigma around HIV in the community" },
    { title: t('storyTopics.health'), topic: "the importance of medication adherence for HIV treatment" },
  ];

  const storyPromises = topics.map(item => getStory(item.topic, fallbackStory));
  
  const results = await Promise.allSettled(storyPromises);

  const stories = results.map((result, index) => {
    if (result.status === 'fulfilled' && result.value.story) {
      return result.value.story;
    }
    console.error(`Failed to generate story for topic "${topics[index].topic}":`, result.reason);
    return fallbackStory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stories.map((story, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader className="flex-row items-center gap-4">
             <div className="bg-accent/50 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-primary" />
             </div>
             <CardTitle>{topics[index].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground italic">"{story}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
