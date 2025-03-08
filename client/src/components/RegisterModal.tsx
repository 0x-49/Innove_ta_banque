import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

interface RegisterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const registerSchema = z.object({
  teamName: z.string().min(3, "Le nom d'équipe doit contenir au moins 3 caractères"),
  email: z.string().email("Email invalide"),
  institution: z.string().min(2, "Institution requise"),
  members: z.string().min(2, "Veuillez lister les membres de l'équipe")
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterModal({ open, onOpenChange }: RegisterModalProps) {
  const { toast } = useToast();
  
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      teamName: "",
      email: "",
      institution: "",
      members: ""
    }
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      // In a real app, this would make an API call
      console.log("Form submitted:", data);
      toast({
        title: "Inscription réussie!",
        description: "Vous recevrez bientôt un email de confirmation."
      });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription."
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscription au Challenge</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d'équipe</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom d'équipe" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="votre@email.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre école/université" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="members"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membres de l'équipe</FormLabel>
                  <FormControl>
                    <Input placeholder="Noms des membres (2-4)" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              S'inscrire
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
