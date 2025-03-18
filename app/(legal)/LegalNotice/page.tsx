import ActionButton from "@/src/ui/CtaButton";
import { ArrowLeft, ExternalLink, FileText, Mail, Phone } from "lucide-react";
import Head from "next/head";
import React from "react";

const LegalNotice: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Mentions Légales - Dr Gilles Mariambourg</title>
        <meta
          name="description"
          content="Mentions légales du cabinet du Dr Gilles Mariambourg"
        />
      </Head>

      <div className="mb-8">
        <ActionButton href="/" icon={ArrowLeft} variant="light" size="sm">
          Retour à l&apos;accueil
        </ActionButton>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-4">
        Mentions Légales
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Informations Légales
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="mb-2">
              <strong>Responsable de la publication</strong> : Dr Gilles
              Mariambourg
            </p>
            <p className="mb-2">
              <strong>Profession</strong> : Chirurgien orthopédique
            </p>
            <p className="mb-2">
              <strong>Numéro RPPS</strong> : [Numéro RPPS]
            </p>
            <p className="mb-2">
              <strong>Adresse du cabinet</strong> : [Adresse du cabinet]
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <ActionButton
                href="tel:[Numéro de contact]"
                icon={Phone}
                variant="light"
                external
              >
                Nous appeler
              </ActionButton>
              <ActionButton
                href="mailto:[Adresse e-mail]"
                icon={Mail}
                variant="dark"
                external
              >
                Nous écrire
              </ActionButton>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Hébergement du Site
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="mb-4">
              Le site est hébergé par : [Nom de l&apos;hébergeur]
              <br />
              [Adresse de l&apos;hébergeur]
              <br />
              [Contact de l&apos;hébergeur]
            </p>
            <ActionButton
              href="[Site de l'hébergeur]"
              icon={ExternalLink}
              variant="light"
              external
              size="sm"
            >
              Site de l&apos;hébergeur
            </ActionButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Propriété Intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images,
            vidéos, graphismes, logos) est protégé par le droit d&apos;auteur et
            la propriété intellectuelle. Toute reproduction, représentation,
            modification ou diffusion sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Responsabilité
          </h2>
          <p>
            Les informations fournies sur ce site ont une vocation exclusivement
            informative et ne remplacent en aucun cas une consultation médicale.
            Le Dr Gilles Mariambourg ne saurait être tenu responsable des
            conséquences d&apos;une utilisation inappropriée des informations
            contenues sur ce site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Données Personnelles et Confidentialité
          </h2>
          <p className="mb-4">
            Le site peut collecter des données personnelles via des formulaires
            de contact. Ces données sont exclusivement destinées à la
            communication entre le Dr Gilles Mariambourg et les
            patients/intéressés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ActionButton
              href="/politique-confidentialite"
              icon={FileText}
              variant="dark"
            >
              Consulter notre politique de confidentialité
            </ActionButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Cookies
          </h2>
          <p>
            Le site utilise des cookies pour améliorer l&apos;expérience
            utilisateur. Vous pouvez gérer vos préférences en matière de cookies
            via les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Respect de la Déontologie Médicale
          </h2>
          <p className="mb-4">
            Le Dr Gilles Mariambourg s&apos;engage à respecter le Code de
            Déontologie Médicale.
          </p>
          <ActionButton
            href="https://www.conseil-national.medecin.fr"
            icon={ExternalLink}
            variant="light"
            external
          >
            Conseil National de l&apos;Ordre des Médecins
          </ActionButton>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Contact
          </h2>
          <p className="mb-4">
            Pour toute question relative aux mentions légales ou à
            l&apos;utilisation du site, vous pouvez nous contacter :
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ActionButton
              href="tel:[Numéro de contact]"
              icon={Phone}
              variant="dark"
              external
            >
              Par téléphone
            </ActionButton>
            <ActionButton
              href="mailto:[Adresse e-mail]"
              icon={Mail}
              variant="light"
              external
            >
              Par email
            </ActionButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;
