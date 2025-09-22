'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function SubscriptionForm() {
  const t = useTranslations('Subscription');
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwd-fLWMn2cdbrc0VXChzYl5dibHd7DlggM8BPwEKJuTjbMJFLbStBp3SAjz_2pNH3N/exec';
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('locale', locale);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: t('successTitle'),
          description: t('successDescription'),
        });
        form.reset();
      } else {
        throw new Error('Failed to subscribe.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        variant: "destructive",
        title: t('errorTitle'),
        description: t('errorDescription'),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder={t('placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : t('button')}
        </Button>
      </form>
    </Form>
  );
}
