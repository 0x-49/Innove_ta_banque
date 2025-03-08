import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

interface RegisterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const themes = [
  { id: "eco-bank", label: "Banque éco-responsable pour les jeunes" },
  { id: "ambassadors", label: "Programme d'ambassadeurs BPCE" },
  { id: "communication", label: "Visibilité BPCE L'Observatoire" },
  { id: "sustainable-housing", label: "Habitat durable de demain" }
] as const;

const registerSchema = z.object({
  teamName: z.string().min(3, "Le nom d'équipe doit contenir au moins 3 caractères"),
  email: z.string().email("Email invalide"),
  institution: z.string().min(2, "Institution requise"),
  members: z.string().min(2, "Veuillez lister les membres de l'équipe (2-4 membres)"),
  theme: z.string().min(1, "Veuillez sélectionner une thématique")
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
      members: "",
      theme: ""
    }
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      // In a real app, this would make an API call
      console.log("Form submitted:", data);
      toast({
        title: "Inscription réussie! 🎉",
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
          <DialogTitle>Inscription au Challenge Innove ta banque</DialogTitle>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email du responsable d'équipe</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="votre@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
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
                  <FormMessage />
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
                    <Input placeholder="Noms des membres (2-4 membres)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thématique choisie</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre thématique" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {themes.map((theme) => (
                        <SelectItem key={theme.id} value={theme.id}>
                          {theme.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
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