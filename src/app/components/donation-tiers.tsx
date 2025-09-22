import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

const CheckCircle = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default async function DonationTiers() {
  const t = await getTranslations('Funding.tiers');
  const tiers = [
    {
      name: t('supporter.name'),
      price: "$25",
      perks: [t('supporter.perks.0')],
    },
    {
      name: t('advocate.name'),
      price: "$50",
      perks: [t('advocate.perks.0'), t('advocate.perks.1')],
    },
    {
      name: t('champion.name'),
      price: "$100",
      perks: [t('champion.perks.0'), t('champion.perks.1'), t('champion.perks.2')],
    },
    {
      name: t('founder.name'),
      price: "$250+",
      perks: [t('founder.perks.0'), t('founder.perks.1')],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {tiers.map((tier) => (
        <Card key={tier.name} className="flex flex-col">
          <CardHeader>
            <CardTitle>{tier.name}</CardTitle>
            <CardDescription className="text-3xl font-bold text-primary pt-2">{tier.price}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
              {tier.perks.map((perk, index) => (
                <li key={`${tier.name}-perk-${index}`} className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
