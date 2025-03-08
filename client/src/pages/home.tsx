import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Calendar, Trophy, Users, Book } from "lucide-react";
import { useState } from "react";
import ThemeCard from "@/components/ThemeCard";
import CountdownTimer from "@/components/CountdownTimer";
import RegisterModal from "@/components/RegisterModal";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to 
        primary/5 overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center space-y-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Innove ta banque – Edition 5
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Imagine la banque de demain ! Rejoins le challenge pour réinventer le secteur bancaire.
            </p>
            <CountdownTimer targetDate="2025-03-17" />
            <Button 
              size="lg" 
              className="mt-8"
              onClick={() => setIsRegisterOpen(true)}
            >
              Inscris-toi Maintenant
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dates Clés</h3>
              <p>6 janvier – 17 mars 2025</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Trophy className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Prix</h3>
              <p>Jusqu'à 1 500€ à gagner</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Équipes</h3>
              <p>2 à 4 membres</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Book className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Mentorat</h3>
              <p>Accompagnement expert</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choisissez Votre Thématique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ThemeCard 
              title="La Banque de Demain"
              description="Proposez des solutions écoresponsables et innovantes pour conquérir les jeunes clients."
              icon="bank"
            />
            <ThemeCard 
              title="Le Recrutement"
              description="Réinventez le programme ambassadeur du Groupe BPCE pour attirer les jeunes talents."
              icon="users"
            />
            <ThemeCard 
              title="La Communication"
              description="Boostez la visibilité de BPCE L'Observatoire et valorisez l'expertise du groupe."
              icon="megaphone"
            />
            <ThemeCard 
              title="Responsabilité Sociétale"
              description="Réinventez l'habitat durable de demain avec des initiatives de rénovation énergétique."
              icon="leaf"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt(e) à Réinventer la Banque de Demain ?</h2>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setIsRegisterOpen(true)}
          >
            Je M'inscris Maintenant
          </Button>
        </div>
      </section>

      <RegisterModal open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
    </div>
  );
}
