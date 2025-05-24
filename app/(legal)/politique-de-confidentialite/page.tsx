"use client";
import { contact, doctor } from "@/src/data/siteData";
import CtaButton from "@/src/ui/CtaButton";
import { ArrowLeft, ExternalLink, Phone } from "lucide-react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Politique de Confidentialité - {doctor.fullName}</title>
        <meta
          name="description"
          content={`Politique de confidentialité du cabinet du ${doctor.fullName}`}
        />
      </Head>

      <div className="mb-8">
        <CtaButton href="/" icon={ArrowLeft} variant="light" size="sm">
          Retour à l&apos;accueil
        </CtaButton>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-4">
        Politique de Confidentialité
      </h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Nature de ce Site Web
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg mb-4">
              Ce site web est <strong>purement informatif</strong>. Aucune
              donnée personnelle n&apos;est collectée, stockée ou traitée via ce
              site internet.
            </p>
            <p>
              Le site présente uniquement des informations sur le cabinet du{" "}
              {doctor.fullName} et ses activités médicales.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact et Prise de Rendez-vous
          </h3>
          <p className="mb-4">
            Pour nous contacter ou prendre rendez-vous, deux options
            s&apos;offrent à vous :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                Contact Téléphonique
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Communication directe avec le cabinet
              </p>
              <CtaButton
                href={`tel:${contact.details.phone}`}
                icon={Phone}
                variant="light"
                size="sm"
                external
              >
                {contact.details.phone}
              </CtaButton>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
                Doctolib
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Redirection vers une plateforme externe
              </p>
              <CtaButton
                href="[Lien Doctolib]"
                icon={ExternalLink}
                variant="dark"
                size="sm"
                external
              >
                Prendre rendez-vous
              </CtaButton>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm">
              <strong>Important :</strong> Lorsque vous utilisez Doctolib pour
              prendre rendez-vous, vous êtes redirigé vers une plateforme
              externe qui possède sa propre politique de confidentialité et ses
              propres conditions d&apos;utilisation.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Données Techniques
          </h3>
          <p className="mb-4">Ce site web :</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>N&apos;utilise pas de cookies marketing ou publicitaires</li>
            <li>N&apos;effectue pas de suivi comportemental</li>
            <li>Ne collecte pas d&apos;adresses email</li>
            <li>Ne stocke pas d&apos;informations personnelles</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Seuls les cookies techniques essentiels au fonctionnement du site
            peuvent être utilisés (gestion de la session, sécurité de base).
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Responsable du Site
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-2">
              <strong>Nom :</strong> {doctor.fullName}
            </p>
            <p className="mb-2">
              <strong>Profession :</strong> {doctor.title}
            </p>
            <p className="mb-2">
              <strong>Adresse :</strong> {contact.address.name},{" "}
              {contact.address.street}, {contact.address.postalCode}{" "}
              {contact.address.city}
            </p>
            <p>
              <strong>Téléphone :</strong> {contact.details.phone}
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Évolutions Futures
          </h3>
          <p>
            Si ce site web venait à intégrer des fonctionnalités de collecte de
            données (formulaires de contact, système de rendez-vous intégré,
            etc.), cette politique de confidentialité serait mise à jour en
            conséquence et vous en seriez informé.
          </p>
          <p className="mt-4 text-gray-600 text-sm">
            <strong>Dernière mise à jour :</strong>{" "}
            {new Date().toLocaleDateString("fr-FR")}
          </p>
        </section>
      </div>

      <div className="mt-12 flex justify-center">
        <CtaButton href="/mentions-legales" variant="light" size="sm">
          Consulter les mentions légales
        </CtaButton>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
