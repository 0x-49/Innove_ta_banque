import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Book, CheckCircle2 } from "lucide-react";
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

      {/* Key Dates Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Dates Clés à Retenir 🗓️</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phase d'idéation</h3>
              <p>Date limite: 17 mars 2025</p>
              <p className="text-sm text-muted-foreground mt-2">Soumettez votre idée initiale</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Book className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phase de mentorat</h3>
              <p>7 avril - 5 mai 2025</p>
              <p className="text-sm text-muted-foreground mt-2">Conseils d'experts pour les finalistes</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Trophy className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Grande Finale</h3>
              <p>13 mai 2025 à Paris</p>
              <p className="text-sm text-muted-foreground mt-2">Présentation devant les dirigeants BPCE</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Généreux Prix - Votre Innovation Récompensée 🎁</h2>
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
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🌟</span>
                  <span>Prix Spécial BAC +2/+3: 400€ de chèques cadeaux</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Les prix sont attribués sous forme de chèques cadeaux et sont partagés entre les membres de l'équipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Organisé par le leader bancaire BPCE 🏦</h2>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Innovez avec le 2ème groupe bancaire de France !</h3>
            <p className="text-muted-foreground">
              Le défi "Innove ta Banque" est présenté par Groupe BPCE, un acteur majeur du secteur bancaire français, regroupant Banque Populaire et Caisse d'Épargne. Avec plus de 35 millions de clients, BPCE façonne l'avenir de la finance.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-gray-50">
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

      {/* How to Participate Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Comment Participer - Des Étapes Simples pour Commencer 🚀</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <motion.div 
                className="flex items-start gap-4 p-4 rounded-lg bg-primary/5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="rounded-full p-2 bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Formez une Équipe (2-4 Membres)</h3>
                  <p className="text-muted-foreground">Collaborez avec d'autres étudiants !</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-4 rounded-lg bg-primary/5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="rounded-full p-2 bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Choisissez Votre Thème</h3>
                  <p className="text-muted-foreground">Sélectionnez le domaine qui vous inspire le plus.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-4 rounded-lg bg-primary/5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="rounded-full p-2 bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Développez Votre Idée en 10 Slides</h3>
                  <p className="text-muted-foreground">Utilisez le modèle fourni et libérez votre créativité.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-4 rounded-lg bg-primary/5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="rounded-full p-2 bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Soumettez avant le 17 mars</h3>
                  <p className="text-muted-foreground">Ne manquez pas la date limite !</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt(e) à Innover ? 💡</h2>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setIsRegisterOpen(true)}
            className="text-lg px-8"
          >
            Participez Maintenant ! ✨
          </Button>
        </div>
      </section>

      <RegisterModal open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
    </div>
  );
}