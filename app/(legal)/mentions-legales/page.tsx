"use client";
import { contact, doctor } from "@/src/data/siteData";
import CtaButton from "@/src/ui/CtaButton";
import { ArrowLeft, ExternalLink, FileText, Phone } from "lucide-react";
import Head from "next/head";

const LegalNotice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Mentions Légales - {doctor.fullName}</title>
        <meta
          name="description"
          content={`Mentions légales du cabinet du ${doctor.fullName}`}
        />
      </Head>

      <div className="mb-8">
        <CtaButton href="/" icon={ArrowLeft} variant="light" size="sm">
          Retour à l&apos;accueil
        </CtaButton>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-4">
        Mentions Légales
      </h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Informations Légales
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="mb-2">
              <strong>Responsable de la publication</strong> : {doctor.fullName}
            </p>
            <p className="mb-2">
              <strong>Profession</strong> : {doctor.title}
            </p>
            <p className="mb-2">
              <strong>Numéro RPPS</strong> : {doctor.rppsNumber}
            </p>
            <p className="mb-2">
              <strong>Adresse du cabinet</strong> : {contact.address.name},{" "}
              {contact.address.street}, {contact.address.postalCode}{" "}
              {contact.address.city}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <CtaButton
                href={`tel:${contact.details.phone}`}
                icon={Phone}
                variant="light"
                external
              >
                Nous appeler
              </CtaButton>
              <CtaButton
                href="[Lien Doctolib]"
                icon={ExternalLink}
                variant="dark"
                external
              >
                Prendre rendez-vous
              </CtaButton>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Hébergement du Site
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="mb-4">
              Le site est hébergé par : Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              legal@vercel.com
            </p>
            <CtaButton
              href="https://vercel.com"
              icon={ExternalLink}
              variant="light"
              external
              size="sm"
            >
              Site de l&apos;hébergeur
            </CtaButton>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Nom de domaine
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="mb-4">
              Le nom de domaine est enregistré chez : OVH SAS
              <br />
              2 rue Kellermann, 59100 Roubaix, France
              <br />
              Téléphone : +33 9 72 10 10 07
            </p>
            <CtaButton
              href="https://www.ovhcloud.com"
              icon={ExternalLink}
              variant="light"
              external
              size="sm"
            >
              Site du registraire
            </CtaButton>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Propriété Intellectuelle
          </h3>
          <p className="mb-4">
            L&apos;ensemble des contenus présents sur ce site (textes, images,
            vidéos, graphismes, logos) est protégé par le droit d&apos;auteur et
            la propriété intellectuelle. Toute reproduction, représentation,
            modification ou diffusion sans autorisation préalable est interdite.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Crédits photographiques :</strong>
            <br />• Photographies du Dr {doctor.shortName} : avec autorisation
            <br />• Images d&apos;illustration : iStock et créations par IA
            (Midjourney)
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Droit applicable
          </h3>
          <p>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Responsabilité
          </h3>
          <p>
            Les informations fournies sur ce site ont une vocation exclusivement
            informative et ne remplacent en aucun cas une consultation médicale.
            Le {doctor.fullName} ne saurait être tenu responsable des
            conséquences d&apos;une utilisation inappropriée des informations
            contenues sur ce site.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Données Personnelles et Confidentialité
          </h3>
          <p className="mb-4">
            Le site peut collecter des données personnelles via des formulaires
            de contact. Ces données sont exclusivement destinées à la
            communication entre le {doctor.fullName} et les patients/intéressés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CtaButton
              href="/politique-de-confidentialite"
              icon={FileText}
              variant="dark"
            >
              Consulter notre politique de confidentialité
            </CtaButton>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Cookies et technologies similaires
          </h3>
          <p className="mb-3">
            À l&apos;heure actuelle, ce site n&apos;utilise pas de cookies
            marketing ou publicitaires. Seuls les cookies techniques essentiels
            au fonctionnement du site peuvent être utilisés.
          </p>
          <p>
            Si des cookies sont implémentés ultérieurement à des fins
            d&apos;analyse ou d&apos;amélioration de l&apos;expérience
            utilisateur, cette section sera mise à jour et un système de gestion
            du consentement sera mis en place conformément à la législation en
            vigueur.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Respect de la Déontologie Médicale
          </h3>
          <p className="mb-4">
            Le {doctor.fullName} s&apos;engage à respecter le Code de
            Déontologie Médicale.
          </p>
          <CtaButton
            href="https://www.conseil-national.medecin.fr"
            icon={ExternalLink}
            variant="light"
            external
          >
            Conseil National de l&apos;Ordre des Médecins
          </CtaButton>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Contact
          </h3>
          <p className="mb-4">
            Pour toute question relative aux mentions légales ou à
            l&apos;utilisation du site, vous pouvez nous contacter :
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CtaButton
              href={`tel:${contact.details.phone}`}
              icon={Phone}
              variant="dark"
              external
            >
              Par téléphone
            </CtaButton>
            <CtaButton
              href="[Lien Doctolib]"
              icon={ExternalLink}
              variant="light"
              external
            >
              Via Doctolib
            </CtaButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;
