import { type Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)', // branco (modo claro)
        foreground: 'hsl(222.2 84% 4.9%)', // quase preto (modo claro)
        border: 'hsl(240 5.9% 90%)', // cinza claro para bordas
        ring: 'hsl(240 4.9% 83.9%)', // cor para anéis de foco

        // modo escuro (utilizado via className="dark")
        dark: {
          background: 'hsl(222.2 84% 4.9%)', // quase preto
          foreground: 'hsl(210 40% 98%)', // quase branco
          border: 'hsl(240 3.7% 15.9%)', // cinza escuro
          ring: 'hsl(240 4.9% 10%)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'], // Geist
        mono: ['var(--font-mono)', 'monospace'], // Geist_Mono
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'theme(colors.foreground)',
            '--tw-prose-headings': 'theme(colors.strong)',
            '--tw-prose-lead': 'theme(colors.subtle)',
            '--tw-prose-links': 'theme(colors.ring)',
            '--tw-prose-bold': 'theme(colors.strong)',
            '--tw-prose-counters': 'theme(colors.subtle)',
            '--tw-prose-bullets': 'theme(colors.subtle)',
            '--tw-prose-hr': 'theme(colors.border)',
            '--tw-prose-quotes': 'theme(colors.subtle)',
            '--tw-prose-quote-borders': 'theme(colors.border)',
            '--tw-prose-captions': 'theme(colors.subtle)',
            '--tw-prose-code': 'theme(colors.strong)',
            '--tw-prose-pre-code': 'theme(colors.foreground)',
            '--tw-prose-pre-bg': 'theme(colors.muted)',
            '--tw-prose-th-borders': 'theme(colors.border)',
            '--tw-prose-td-borders': 'theme(colors.border)',
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
