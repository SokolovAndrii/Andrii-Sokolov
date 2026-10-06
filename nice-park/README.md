# Nice Park — лендінг для водіїв таксі (Київ)

Односторінковий сайт автопарку **Nice Park**: «Найс умови для водіїв таксі».
Мета — залучати водіїв і вести їх на анкету (Google Форма).

**Стек:** Next.js 15 (App Router, статичний експорт) · TypeScript · Tailwind CSS · Framer Motion · lucide-react · next/font (Unbounded + Inter).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # статичний сайт у папці out/
```

## Що де змінювати

Усі тексти, контакти, посилання на анкету і константи калькулятора — в одному файлі
[`src/config/site.ts`](src/config/site.ts):

- `FORM_URL` — посилання на Google Форму (усі кнопки CTA)
- `site.contacts` — Telegram і телефон (зараз стоять заглушки `@PLACEHOLDER`, `+380 XX XXX XX XX`)
- `site.url` — домен сайту (для Open Graph і canonical)
- `calculator` — поріг (25 000), частки 60% / 65%, пальне 26%, тижнів у місяці 4.33
- тексти всіх секцій: `hero`, `benefits`, `conditions`, `requirements`, `steps`, `faq`, `finalCta`

## Структура

```
src/
  app/            layout (SEO, шрифти), page, globals.css
  components/     Hero, Benefits, Calculator, Conditions, Requirements, Steps, Faq, FinalCta, Footer…
  config/site.ts  тексти, контакти, константи
public/           favicon (icon.svg), apple-icon.png, og.png
```

## Деплой на Vercel (3 кроки)

1. Зайдіть на [vercel.com](https://vercel.com) → **Sign up / Log in через GitHub**.
2. **Add New → Project** → оберіть репозиторій `nice-park` → **Import**.
3. Нічого не змінюйте (Vercel сам визначить Next.js) → **Deploy**. За хвилину сайт буде доступний на `*.vercel.app`.

Після деплою оновіть `site.url` у `src/config/site.ts` на реальну адресу (для коректних прев'ю в соцмережах).

## Деплой на Netlify

Add new site → Import from GitHub → репозиторій `nice-park`. Налаштування підтягнуться з `netlify.toml`
(build: `npm run build`, publish: `out`).
