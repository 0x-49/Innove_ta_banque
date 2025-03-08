import { motion } from "framer-motion";
import { Building, Users, Megaphone, Leaf } from "lucide-react";

interface ThemeCardProps {
  title: string;
  description: string;
  icon: "bank" | "users" | "megaphone" | "leaf";
}

const iconMap = {
  bank: Building,
  users: Users,
  megaphone: Megaphone,
  leaf: Leaf
};

const iconColors = {
  bank: "text-yellow-400",
  users: "text-blue-400",
  megaphone: "text-red-400",
  leaf: "text-green-400"
};

export default function ThemeCard({ title, description, icon }: ThemeCardProps) {
  const Icon = iconMap[icon];
  const colorClass = iconColors[icon];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-2 rounded-full bg-white/5 ${colorClass}`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}