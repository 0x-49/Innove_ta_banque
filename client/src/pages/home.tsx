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
      <section className="relative h-screen md:h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center space-y-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
              Innove ta banque – Edition 5 🚀
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Imaginez la banque de demain. Construisez-la aujourd'hui.
            </p>
            <CountdownTimer targetDate="2025-03-17" />
            <Button 
              size="lg" 
              className="mt-8 text-lg px-8 py-6"
              onClick={() => setIsRegisterOpen(true)}
            >
              Participez Maintenant ! ✨
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
              <h3 className="text-lg font-semibold mb-2">Date Limite</h3>
              <p>17 mars 2025</p>
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

      {/* Prizes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Récompenses 🎁</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Jusqu'à 1 500€ de Chèques Cadeaux à Gagner !</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🥇</span>
                  <span>1ère Place: 1 500€ de chèques cadeaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🥈</span>
                  <span>2ème Place: 1 100€ de chèques cadeaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🥉</span>
                  <span>3ème Place: 800€ de chèques cadeaux</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🏅</span>
                  <span>4ème Place: 600€ de chèques cadeaux</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Les prix sont attribués sous forme de chèques cadeaux et sont partagés entre les membres de l'équipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Quatre Thèmes Passionnants 💖</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ThemeCard 
              title="Banque éco-responsable pour les jeunes"
              description="Concevez des solutions bancaires durables pour attirer les jeunes clients soucieux de l'environnement. Mettez l'accent sur la transparence, les services numériques écologiques et les produits éthiques."
              icon="bank"
            />
            <ThemeCard 
              title="Programme d'ambassadeurs BPCE"
              description="Développez un programme d'ambassadeurs innovant pour engager et recruter la prochaine génération de talents pour le Groupe BPCE."
              icon="users"
            />
            <ThemeCard 
              title="Visibilité BPCE L'Observatoire"
              description="Créez une stratégie de communication pour accroître la portée et l'impact des études économiques et des analyses d'experts de BPCE."
              icon="megaphone"
            />
            <ThemeCard 
              title="Habitat durable de demain"
              description="Développez des initiatives pour que BPCE encourage les rénovations écologiques des bâtiments et promeuve des solutions de logement durables."
              icon="leaf"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt(e) à Innover ? 💡</h2>
          <div className="space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setIsRegisterOpen(true)}
              className="text-lg px-8"
            >
              Participez Maintenant ! ✨
            </Button>
          </div>
        </div>
      </section>

      <RegisterModal open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
    </div>
  );
}