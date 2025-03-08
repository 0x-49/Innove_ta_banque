import { motion } from "framer-motion";
import { Building, Users, Megaphone, Leaf } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ThemeCardProps {
  title: string;
  description: string;
  icon: "bank" | "users" | "megaphone" | "leaf";
  category: string;
}

const iconMap = {
  bank: Building,
  users: Users,
  megaphone: Megaphone,
  leaf: Leaf
};

const categoryColors = {
  "Innovation": "bg-blue-500/10 text-blue-500",
  "RSE": "bg-green-500/10 text-green-500",
  "Communication": "bg-purple-500/10 text-purple-500",
  "Finance": "bg-amber-500/10 text-amber-500"
};

export default function ThemeCard({ title, description, icon, category }: ThemeCardProps) {
  const Icon = iconMap[icon];
  const categoryColor = categoryColors[category as keyof typeof categoryColors];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColor}`}>
                {category}
              </span>
              <h3 className="text-xl font-semibold mt-2">{title}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}