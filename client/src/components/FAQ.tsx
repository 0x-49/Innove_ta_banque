import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {/* Eligibility & Universities */}
      <AccordionItem value="eligibility-1">
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

      <AccordionItem value="eligibility-2">
        <AccordionTrigger>Quelles sont les écoles participantes ?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Grandes Écoles de Commerce :</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>HEC Paris, ESSEC, ESCP</li>
                <li>emlyon business school</li>
                <li>EDHEC Business School</li>
                <li>SKEMA Business School</li>
                <li>Audencia, NEOMA, KEDGE</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Écoles d'Ingénieurs :</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>École Polytechnique</li>
                <li>CentraleSupélec</li>
                <li>Mines ParisTech</li>
                <li>INSA (Lyon, Toulouse, Rennes)</li>
                <li>Télécom Paris</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Universités Publiques :</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sorbonne Université</li>
                <li>Université Paris-Saclay</li>
                <li>Université Paris Cité</li>
                <li>Université de Montpellier</li>
                <li>Université Grenoble Alpes</li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Team Formation */}
      <AccordionItem value="team-1">
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

      <AccordionItem value="team-2">
        <AccordionTrigger>Peut-on mixer les écoles dans une équipe ?</AccordionTrigger>
        <AccordionContent>
          Oui, c'est même encouragé ! Vous pouvez former des équipes avec :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Des étudiants de différentes écoles</li>
            <li>Des profils variés (commerce, ingénieur, design)</li>
            <li>Des niveaux d'études différents (BUT, License, Master)</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            La diversité des profils est un atout pour proposer des solutions innovantes.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Project Requirements */}
      <AccordionItem value="project-1">
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

      <AccordionItem value="project-2">
        <AccordionTrigger>Quels sont les critères d'évaluation ?</AccordionTrigger>
        <AccordionContent>
          Les projets seront évalués selon :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Innovation et originalité (30%)</li>
            <li>Faisabilité technique et économique (25%)</li>
            <li>Impact potentiel (25%)</li>
            <li>Qualité de la présentation (20%)</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            Une attention particulière sera portée aux solutions durables et inclusives.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Mentorship */}
      <AccordionItem value="mentorship-1">
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

      <AccordionItem value="mentorship-2">
        <AccordionTrigger>Qui sont les mentors ?</AccordionTrigger>
        <AccordionContent>
          <p>Les mentors sont des professionnels du Groupe BPCE :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Experts en innovation bancaire</li>
            <li>Responsables produits et services</li>
            <li>Directeurs de transformation digitale</li>
            <li>Spécialistes en développement durable</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            Chaque équipe sera accompagnée par des mentors adaptés à leur thématique.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Prizes & Benefits */}
      <AccordionItem value="prizes-1">
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

      <AccordionItem value="prizes-2">
        <AccordionTrigger>Quels sont les autres avantages ?</AccordionTrigger>
        <AccordionContent>
          Au-delà des prix en chèques cadeaux :
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Opportunités de stages et d'alternance chez BPCE</li>
            <li>Networking avec les dirigeants du groupe</li>
            <li>Visibilité médiatique pour les projets gagnants</li>
            <li>Certificat de participation valorisant</li>
            <li>Possibilité de développer votre projet avec BPCE</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Important Dates */}
      <AccordionItem value="dates-1">
        <AccordionTrigger>Quelles sont les dates importantes ?</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>17 mars 2025</strong> : Date limite de soumission des projets</li>
            <li><strong>7 avril - 5 mai 2025</strong> : Phase de mentorat pour les équipes sélectionnées</li>
            <li><strong>13 mai 2025</strong> : Grande finale à Paris</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* General Questions */}
      <AccordionItem value="general-1">
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

      <AccordionItem value="general-2">
        <AccordionTrigger>Que deviennent les projets après le challenge ?</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Les meilleurs projets pourront être développés avec BPCE</li>
            <li>Possibilité d'intégrer l'incubateur du Groupe</li>
            <li>Accompagnement pour la mise en œuvre</li>
            <li>Propriété intellectuelle reste aux équipes</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            BPCE s'engage à accompagner les projets les plus prometteurs dans leur développement.
          </p>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  );
}