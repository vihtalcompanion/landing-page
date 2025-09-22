'use client';

import { useState } from 'react';
// import { getPersonalizedMessage } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PersonalizedMessageCta() {
  const t = useTranslations('DonateCTA');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const handleFetchMessage = async (engagement: 'low' | 'medium' | 'high', profileName: string) => {
    setLoading(true);
    setSelectedProfile(profileName);
    setMessage('');
    
    // Simulate lastVisited for returning users
    const lastVisited = engagement !== 'low' ? new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString().split('T')[0] : undefined;

    // Server Action desactivada para static export:
    // const newMessage = await getPersonalizedMessage({
    //   engagementLevel: engagement,
    //   donationGoalProgress: 50, // Corresponds to $7,500 / $15,000
    //   lastVisited,
    // });
    // setMessage(newMessage);
    setMessage('Tu contribución puede brindar apoyo vital a personas afectadas por el VIH en Venezuela. Dona hoy y marca la diferencia.');
    setLoading(false);
  };

  // Replace 'YOUR_BUSINESS_ID' with your actual PayPal business ID or email.
  const paypalLink = "https://www.paypal.com/donate/?business=YOUR_BUSINESS_ID&no_recurring=0&item_name=Support+VIHTal+Companion%2C+an+AI-powered+app+for+HIV+support+in+Venezuela.&currency_code=USD";

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">{t('title')}</CardTitle>
        <CardDescription className="text-center">
          {t('description')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant={selectedProfile === 'New' ? 'default' : 'outline'} onClick={() => handleFetchMessage('low', 'New')}>{t('profiles.new')}</Button>
          <Button variant={selectedProfile === 'Returning' ? 'default' : 'outline'} onClick={() => handleFetchMessage('medium', 'Returning')}>{t('profiles.returning')}</Button>
          <Button variant={selectedProfile === 'Engaged' ? 'default' : 'outline'} onClick={() => handleFetchMessage('high', 'Engaged')}>{t('profiles.engaged')}</Button>
        </div>
        
        {(loading || message) && (
          <div className="p-6 bg-accent/20 rounded-lg shadow-inner min-h-[120px] flex items-center justify-center transition-all duration-300">
            {loading ? (
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            ) : (
              <p className="text-center text-lg font-medium italic">"{message}"</p>
            )}
          </div>
        )}

        <div className="text-center pt-4">
            <Button size="lg" asChild className="shadow-lg animate-pulse">
                <a href={paypalLink} target="_blank" rel="noopener noreferrer">
                    {t('button')}
                </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">{t('redirect')}</p>
        </div>
      </CardContent>
    </Card>
  );
}
