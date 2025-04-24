'use client';
import { useState } from 'react';
import US from 'country-flag-icons/react/3x2/US';
import FR from 'country-flag-icons/react/3x2/FR';
import ES from 'country-flag-icons/react/3x2/ES';
import CN from 'country-flag-icons/react/3x2/CN';
import IN from 'country-flag-icons/react/3x2/IN';
import GB from 'country-flag-icons/react/3x2/GB';
import Image from 'next/image';
import { FlagComponent } from 'country-flag-icons/react/1x1';

type LanguageCode = 'en' | 'fr' | 'es' | 'cn' | 'in' | 'us';

interface LanguageMessages {
  heading: string;
  text: string;
}

const messages: Record<LanguageCode, LanguageMessages> = {
  en: {
    heading: "Thank You",
    text: `At the end of the day, I can only thank you for joining us on this trip. I hope you enjoyed it as much as we did. I hope we made a good team and lived up to your expectations. I also hope you’ve created some new memories to take home with you.

Please follow the link below to our TripAdvisor page and leave us a short review in your own language. We kindly ask that you mention our names in the review.

By leaving a review, you're helping us — the crew — the most, allowing us to work more throughout the summer and stand out from the competition.

THANK YOU!`,
  },
  us: {
    heading: "Thank You",
    text: `At the end of the day, I can only thank you for joining us on this trip. I hope you enjoyed it as much as we did. I hope we made a good team and lived up to your expectations. I also hope you’ve created some new memories to take home with you.

Please follow the link below to our TripAdvisor page and leave us a short review in your own language. We kindly ask that you mention our names in the review.

By leaving a review, you're helping us — the crew — the most, allowing us to work more throughout the summer and stand out from the competition.

THANK YOU!`,
  },
  fr: {
    heading: "Merci Beaucoup",
    text: `À la fin de la journée, je tiens simplement à vous remercier d'avoir été avec nous lors de cette excursion. J'espère que vous en avez autant profité que nous. J'espère que nous avons formé une bonne équipe et que nous avons répondu à vos attentes. J'espère également que vous avez créé de nouveaux souvenirs à ramener chez vous.

Veuillez suivre le lien ci-dessous vers notre page TripAdvisor et nous laisser un petit avis dans votre langue. Nous vous demandons de bien vouloir mentionner nos noms dans votre avis.

En laissant un avis, vous nous aidez énormément — cela nous permet de travailler davantage tout au long de l'été et de nous démarquer de la concurrence.

Merci beaucoup !`,
  },
  es: {
    heading: "¡Muchísimas Gracias!",
    text: `Al final del día, solo quiero agradecerles por habernos acompañado en este viaje. Espero que lo hayan disfrutado tanto como nosotros. Espero que hayamos formado un buen equipo y que hayamos cumplido con sus expectativas. También espero que hayan creado nuevos recuerdos que puedan llevarse a casa.

Por favor, sigan el siguiente enlace a nuestra página de TripAdvisor y déjennos una breve reseña en su idioma. Les pedimos amablemente que mencionen nuestros nombres en la reseña.

Al dejar una reseña, nos ayudan mucho — nos permite trabajar más durante el verano y destacarnos entre la competencia.

¡Muchísimas gracias!`,
  },
  cn: {
    heading: "非常感谢！",
    text: `在一天结束时，我只想感谢你们与我们一起参加这次旅行。希望你们和我们一样享受这次旅行。希望我们组成了一个很好的团队，并且达到了你们的期望。也希望你们创造了一些新的回忆，可以带回家。

请点击下面的链接到我们的TripAdvisor页面，并用你们的语言给我们写一篇简短的评论。请在评论中提到我们的名字。

留下评论将对我们帮助很大——这让我们能在夏天工作更多，并在竞争中脱颖而出。

非常感谢！`,
  },
  in: {
    heading: "बहुत धन्यवाद!",
    text: `दिन के अंत में, मैं केवल आपको इस यात्रा में हमारे साथ जुड़ने के लिए धन्यवाद कहना चाहता हूँ। मुझे उम्मीद है कि आपने इसे उतना ही आनंद लिया जितना हमने लिया। मुझे उम्मीद है कि हम एक अच्छा टीम बन सके और आपकी उम्मीदों पर खरा उतर सके। मुझे यह भी उम्मीद है कि आपने कुछ नई यादें बनाई हैं जिन्हें आप घर ले जाएंगे।

कृपया नीचे दिए गए लिंक पर क्लिक करके हमारे TripAdvisor पृष्ठ पर जाएं और अपनी भाषा में हमें एक संक्षिप्त समीक्षा छोड़ें। कृपया अपनी समीक्षा में हमारे नाम का उल्लेख करें।

समीक्षा छोड़कर आप हमारी सबसे बड़ी मदद कर रहे हैं - यह हमें इस गर्मी में और अधिक काम करने और प्रतिस्पर्धा में खुद को अलग दिखाने का मौका देता है।

बहुत धन्यवाद!`,
  },
};

const flags: { code: LanguageCode; label: string; Component: FlagComponent }[] = [
  { code: 'en', label: 'English', Component: GB },
  { code: 'fr', label: 'Français', Component: FR },
  { code: 'us', label: 'USA', Component: US },
  { code: 'in', label: 'हिंदी', Component: IN },
  { code: 'es', label: 'Español', Component: ES },
  { code: 'cn', label: '中文', Component: CN },
];

export default function Home() {
  const [selected, setSelected] = useState<LanguageCode>('en');
  const { heading, text } = messages[selected];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 px-6 py-12 font-sans flex flex-col items-center justify-center transition-colors duration-500">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {flags.map(({ code, label, Component }) => (
          <button
            key={code}
            onClick={() => setSelected(code)}
            className={`w-16 h-11 p-0.5 rounded-md border bg-white shadow-sm transition-transform duration-300 ease-in-out cursor-pointer ${
              selected === code
                ? 'border-blue-500 scale-110 shadow-md'
                : 'border-gray-300 hover:scale-125 hover:shadow-lg'
            }`}
            title={label}
          >
            <Component className="w-full h-full object-cover rounded-sm" />
          </button>
        ))}
      </div>

      <div className="relative transition-all duration-500 ease-in-out">
        <div className="bg-white/80 text-gray-900 border border-blue-100 backdrop-blur-md rounded-xl shadow-xl p-6 max-w-2xl w-full space-y-4 text-lg leading-relaxed transition-all duration-500 min-h-[350px]">
          <h2 className="text-2xl font-bold text-center mb-2">{heading}</h2>
          <p className="text-center whitespace-pre-line text-gray-800">{text}</p>

          <div className="pt-6 flex justify-center">
            <a
              href="https://www.tripadvisor.com/UserReviewEdit-g295370-d11461459-Blue_Cave_and_Hvar_Tour_5_Islands_Tour_from_Split_and_Trogir-Split_Split_Dalmatia_County_Da.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-90 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src="https://thumbs.bfldr.com/at/q7vbfh-g63bz4-cp5fsl/v/12877933?expiry=1746127918&fit=bounds&height=800&sig=YTg2Njc3ZDE1NzY1YzQ4NWZhZjA0MmUyYTdhOGNmZWIyYjdlNmExNQ%3D%3D&width=1100"
                alt="TripAdvisor"
                width={150}
                height={40}
                className="rounded-md"
              />
              <span className="text-sm text-blue-600 mt-2 underline underline-offset-4">
                Leave a review
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
