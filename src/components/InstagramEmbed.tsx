'use client';

import { useEffect, useRef } from 'react';

type Props = {
  url: string;
};

export default function InstagramEmbed({ url }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Se já existe um script do Instagram na página, não adiciona outro
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // Se o script já estiver carregado, processa diretamente
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <div className="my-8 w-full max-w-xl mx-auto">
      <div
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote 
              class="instagram-media" 
              data-instgrm-permalink="${url}" 
              data-instgrm-version="14" 
              style="width:100%; margin: 0 auto;">
            </blockquote>
          `,
        }}
      />
    </div>
  );
}
