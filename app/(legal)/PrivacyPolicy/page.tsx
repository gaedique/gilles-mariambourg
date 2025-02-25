import ActionButton from "@/src/components/ui/ActionButton";
import { ArrowLeft, FileText, Mail, Phone } from "lucide-react";
import Head from "next/head";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Politique de Confidentialité - Dr Gilles Mariambourg</title>
        <meta
          name="description"
          content="Politique de confidentialité du cabinet du Dr Gilles Mariambourg"
        />
      </Head>
      <div className="mb-8">
        <ActionButton href="/" icon={ArrowLeft} variant="light" size="sm">
          Retour à l'accueil
        </ActionButton>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-4">
        Politique de Confidentialité
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Préambule
          </h2>
          <p className="mb-4">
            Le Dr Gilles Mariambourg, chirurgien orthopédique, attache une
            importance primordiale à la protection et à la confidentialité de
            vos données personnelles. La présente politique a pour objectif de
            vous informer sur la manière dont nous collectons, utilisons et
            protégeons vos informations personnelles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Identification du Responsable de Traitement
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="mb-2">
              <strong>Nom</strong> : Dr Gilles Mariambourg
            </p>
            <p className="mb-2">
              <strong>Profession</strong> : Chirurgien orthopédique
            </p>
            <p className="mb-2">
              <strong>Adresse du cabinet</strong> : [Adresse complète du
              cabinet]
            </p>
            <p>
              <strong>Contact</strong> : [Numéro de téléphone] | [Adresse email]
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Types de Données Collectées
          </h2>
          <p className="mb-4">
            Nous collectons et traitons les types de données personnelles
            suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Données d'identification : nom, prénom, date de naissance</li>
            <li>Coordonnées : adresse postale, email, numéro de téléphone</li>
            <li>
              Données de santé : informations médicales nécessaires à votre
              prise en charge
            </li>
            <li>Données de connexion : adresse IP, cookies</li>
          </ul>
          <p className="text-red-600 font-semibold">
            Nous ne collectons que les données strictement nécessaires à notre
            activité médicale.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Finalités de la Collecte
          </h2>
          <p className="mb-4">
            Vos données sont collectées et traitées pour les finalités suivantes
            :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Gestion des rendez-vous et suivi médical</li>
            <li>Communication professionnelle</li>
            <li>Établissement de factures et documents médicaux</li>
            <li>Tenue du dossier médical</li>
            <li>Réponse à vos demandes et questions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Base Légale du Traitement
          </h2>
          <p>
            Le traitement de vos données personnelles est basé sur les
            fondements juridiques suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Consentement explicite</li>
            <li>
              Obligation légale (notamment en matière de conservation des
              dossiers médicaux)
            </li>
            <li>Intérêt légitime dans le cadre du suivi médical</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Destinataires des Données
          </h2>
          <p className="mb-4">Seuls sont destinataires de vos données :</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Le personnel médical et administratif du cabinet</li>
            <li>
              Les professionnels de santé intervenant dans votre parcours de
              soins
            </li>
            <li>Les organismes de sécurité sociale et mutuelles</li>
          </ul>
          <p className="mt-4 text-red-600 font-semibold">
            Vos données ne sont jamais vendues, louées ou échangées avec des
            tiers commerciaux.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Durée de Conservation
          </h2>
          <p>
            Vos données sont conservées conformément aux dispositions légales :
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              Dossiers médicaux : 20 ans à compter de la dernière consultation
            </li>
            <li>Données de facturation : 10 ans</li>
            <li>Données de contact : 3 ans sans interaction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Vos Droits
          </h2>
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
          </ul>
          <div className="space-y-4">
            <p className="font-semibold mb-4">
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ActionButton
                href="mailto:[email-address]"
                icon={Mail}
                variant="dark"
                external
              >
                Contactez par email
              </ActionButton>
              <ActionButton
                href="tel:[phone-number]"
                icon={Phone}
                variant="light"
                external
              >
                Appelez-nous
              </ActionButton>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Sécurité des Données
          </h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et
            organisationnelles appropriées pour garantir la sécurité et la
            confidentialité de vos données :
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Chiffrement des données sensibles</li>
            <li>Systèmes de protection contre les accès non autorisés</li>
            <li>Formations régulières du personnel aux bonnes pratiques</li>
            <li>Mise à jour régulière des systèmes de sécurité</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Délégué à la Protection des Données
          </h2>
          <p>
            Un Délégué à la Protection des Données (DPO) peut être contacté pour
            toute question relative à la protection de vos données personnelles
            :
          </p>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-4">
            <p>
              <strong>Nom</strong> : [Nom du DPO]
              <br />
              <strong>Contact</strong> : [Email ou téléphone du DPO]
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            11. Réclamation et Autorité de Contrôle
          </h2>
          <p className="mb-4">
            En cas de non-respect de vos droits, vous pouvez introduire une
            réclamation auprès de la Commission Nationale de l'Informatique et
            des Libertés (CNIL).
          </p>
          <ActionButton
            href="https://www.cnil.fr"
            icon={FileText}
            variant="dark"
            external
          >
            Visiter le site de la CNIL
          </ActionButton>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            12. Mise à Jour de la Politique
          </h2>
          <p>
            Notre politique de confidentialité peut être mise à jour
            périodiquement. Nous vous invitons à consulter régulièrement cette
            page pour rester informé des éventuelles modifications.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Dernière mise à jour</strong> : [Date de la dernière mise à
            jour]
          </p>
        </section>
      </div>
      <div className="mt-12 flex justify-center">
        <ActionButton href="/mentions-legales" variant="light" size="sm">
          Consulter les mentions légales
        </ActionButton>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
