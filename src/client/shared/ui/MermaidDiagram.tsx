'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const renderDiagram = async () => {
      try {
        // Inicialização estrita com tema ajustável (pode ser hardcoded light/dark dependendo do design system)
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: 'rgba(255, 255, 255, 0.05)',
            primaryTextColor: '#eaeaeaff',
            primaryBorderColor: 'rgba(25, 145, 31, 0.65)',
            lineColor: 'rgba(255, 255, 255, 0.2)',
            secondaryColor: 'rgba(0, 0, 0, 0.5)',
            tertiaryColor: 'transparent',
            background: 'transparent',
            fontFamily: 'inherit',
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
          },
        });

        // Use um ID unico por instância
        const id = `mermaid-svg-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);

        if (isMounted) {
          setSvgContent(svg);
          setError(false);
        }
      } catch (err) {
        console.error('Error rendering Mermaid diagram:', err);
        if (isMounted) {
          setError(true);
        }
      }
    };

    if (chart) {
      renderDiagram();
    }

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="p-8 border border-red-500/20 rounded-2xl bg-red-500/5 text-red-400 text-sm text-center">
        Não foi possível renderizar o diagrama no momento.
      </div>
    );
  }

  return (
    <div
      className="w-full h-full min-h-[300px] flex items-center justify-center overflow-x-auto overflow-y-hidden text-foreground"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
