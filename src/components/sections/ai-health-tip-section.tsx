"use client";

import { useFormStatus } from "react-dom";
import { getHealthTipAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, LoaderCircle } from "lucide-react";
import { useEffect, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const initialState = {
  message: null,
  tip: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin mr-2" /> : null}
      Gerar Dica
    </Button>
  );
}

export default function AiHealthTipSection() {
  const [state, formAction] = useActionState(getHealthTipAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Success' && !state.errors) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-tip" className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <form action={formAction}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl md:text-3xl text-center">Sua Dica de Saúde Diária</CardTitle>
              <CardDescription className="text-center">
                Descreva suas preferências (ex: "quero ganhar massa", "sou vegano", "preciso de mais energia") e nossa IA criará uma dica para você.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-2">
                <Textarea
                  id="preferences"
                  name="preferences"
                  placeholder="Ex: Sou vegetariano e busco lanches rápidos e saudáveis para o trabalho..."
                  rows={4}
                  required
                />
                {state.errors?.preferences && (
                  <p className="text-sm text-destructive">{state.errors.preferences[0]}</p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <SubmitButton />
            </CardFooter>
          </form>

          {state.tip && (
            <div className="p-6 pt-0">
               <Alert className="bg-primary/10 border-primary/20">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertTitle className="font-headline text-primary">Sua Dica Personalizada</AlertTitle>
                <AlertDescription>
                  {state.tip}
                </AlertDescription>
              </Alert>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
