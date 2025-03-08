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
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Innove ta Banque</span>
            <div className="hidden md:flex space-x-6">
              <a href="#themes" className="text-white/70 hover:text-white">Thèmes</a>
              <a href="#prizes" className="text-white/70 hover:text-white">Prix</a>
              <a href="#about" className="text-white/70 hover:text-white">À propos</a>
            </div>
          </div>
          <Button 
            variant="outline"
            className="bg-primary/10 border-primary/20 hover:bg-primary/20"
            onClick={() => setIsRegisterOpen(true)}
          >
            Participer Maintenant
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-[#0A0F1C] to-[#131B2E]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container px-4 md:px-6 relative">
          <motion.div 
            className="text-center space-y-8"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Innove ta banque – Edition 5 🚀
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Imaginez la banque de demain. Construisez-la aujourd'hui.
            </p>
            <CountdownTimer targetDate="2025-03-17" />
            <Button 
              size="lg" 
              className="mt-8 text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              onClick={() => setIsRegisterOpen(true)}
            >
              Participez Maintenant ! ✨
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="py-20 bg-[#131B2E]" id="dates">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Dates Clés à Retenir 🗓️</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Phase d'idéation",
                date: "17 mars 2025",
                description: "Soumettez votre idée initiale"
              },
              {
                icon: Book,
                title: "Phase de mentorat",
                date: "7 avril - 5 mai 2025",
                description: "Conseils d'experts pour les finalistes"
              },
              {
                icon: Trophy,
                title: "Grande Finale (Paris)",
                date: "13 mai 2025",
                description: "Présentation devant les dirigeants BPCE"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.date}</p>
                <p className="text-sm text-white/50 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-[#0A0F1C]" id="prizes">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Généreux Prix - Votre Innovation Récompensée 🎁</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-4">
            {[
              { place: "1ère Place", amount: "1 500 €", emoji: "🥇" },
              { place: "2ème Place", amount: "1 100 €", emoji: "🥈" },
              { place: "3ème Place", amount: "800 €", emoji: "🥉" },
              { place: "4ème Place", amount: "600 €", emoji: "🏅" },
              { place: "Prix Spécial BAC +2/+3", amount: "400 €", emoji: "🌟" }
            ].map((prize, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl mb-2 block">{prize.emoji}</span>
                <h3 className="font-semibold mb-2">{prize.place}</h3>
                <p className="text-primary text-xl font-bold">{prize.amount}</p>
                <p className="text-sm text-white/50 mt-2">de chèques cadeaux</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/50 mt-8">
            Les prix sont partagés entre les membres de l'équipe
          </p>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-[#131B2E]" id="themes">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt(e) à Innover ? 💡</h2>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setIsRegisterOpen(true)}
            className="text-lg px-8 bg-white text-primary hover:bg-white/90"
          >
            Participez Maintenant ! ✨
          </Button>
        </div>
      </section>

      <RegisterModal open={isRegisterOpen} onOpenChange={setIsRegisterOpen} />
    </div>
  );
}