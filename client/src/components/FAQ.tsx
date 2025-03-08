import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Qui peut participer ?</AccordionTrigger>
        <AccordionContent>
          Le challenge est ouvert aux étudiants des écoles et universités en France, notamment :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Les Grandes Écoles de Commerce (HEC, ESSEC, ESCP, emlyon, EDHEC, etc.)</li>
            <li>Les Écoles d'Ingénieurs (Polytechnique, CentraleSupélec, Mines ParisTech, etc.)</li>
            <li>Les Universités Publiques (Sorbonne, Paris-Saclay, PSL, etc.)</li>
            <li>Les Écoles Spécialisées en Design et Architecture</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            Les équipes peuvent être composées d'étudiants de différentes écoles.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Comment former une équipe ?</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Constituez une équipe de 2 à 4 membres</li>
            <li>Privilégiez des profils complémentaires (business, tech, design, etc.)</li>
            <li>Tous les membres doivent être étudiants dans un établissement d'enseignement supérieur français</li>
            <li>Désignez un responsable d'équipe qui sera le point de contact principal</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Quel est le format de présentation ?</AccordionTrigger>
        <AccordionContent>
          Votre projet doit être présenté en 10 slides maximum, incluant :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>La problématique identifiée</li>
            <li>Votre solution innovante</li>
            <li>Les bénéfices pour les utilisateurs</li>
            <li>Le plan de mise en œuvre</li>
            <li>L'impact attendu et les métriques de succès</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Comment se déroule la finale ?</AccordionTrigger>
        <AccordionContent>
          La finale aura lieu le 13 mai 2025 à Paris (13ème arrondissement). Au programme :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Pitch de 10 minutes devant le jury</li>
            <li>Session de questions-réponses avec les experts</li>
            <li>Networking avec les dirigeants du Groupe BPCE</li>
            <li>Cérémonie de remise des prix</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Comment fonctionne le programme de mentorat ?</AccordionTrigger>
        <AccordionContent>
          Les équipes sélectionnées bénéficieront :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>D'un accès à des mentors expérimentés du groupe BPCE</li>
            <li>De sessions personnalisées pour affiner leur projet</li>
            <li>De points d'étape hebdomadaires</li>
            <li>D'un feedback constant pour améliorer leur solution</li>
            <li>D'ateliers thématiques sur l'innovation bancaire</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Comment sont attribués les prix ?</AccordionTrigger>
        <AccordionContent>
          Les prix sous forme de chèques cadeaux sont répartis comme suit :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>1ère place : 1 500€</li>
            <li>2ème place : 1 100€</li>
            <li>3ème place : 800€</li>
            <li>4ème place : 600€</li>
            <li>Prix spécial BAC +2/+3 : 400€</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            Les montants sont partagés entre les membres de l'équipe gagnante.
            Des opportunités de stage et d'alternance seront également proposées aux meilleures équipes.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Quelles sont les dates importantes ?</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>17 mars 2025</strong> : Date limite de soumission des projets</li>
            <li><strong>7 avril - 5 mai 2025</strong> : Phase de mentorat pour les équipes sélectionnées</li>
            <li><strong>13 mai 2025</strong> : Grande finale à Paris</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}