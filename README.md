# Portfolio

Интерактивное портфолио-меню на Next.js со статическим экспортом для [GitHub Pages](https://pages.github.com/).

Тёмная тема, RU/EN, одностраничное меню разделов. Имя, проекты и почту можно заменить в `lib/content.ts`.

## Локально

```bash
npm install
npm run dev
```

Сборка статики в `out/`:

```bash
npm run build
```

## Публикация на github.io

1. Создайте репозиторий на GitHub. Для сайта вида `username.github.io` назовите его **`username.github.io`**. Для проектного адреса `username.github.io/portfolio` подойдёт имя **`portfolio`**.
2. В репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Залейте код и дождитесь workflow **Deploy to GitHub Pages**.

Workflow сам выставляет `basePath`: пустой для `*.github.io`, иначе `/имя-репозитория`.

После деплоя сайт будет на `https://flottiee.github.io/` (и на кастомном домене, если в `public/CNAME` указан хост). Для репозитория `username.github.io` `basePath` остаётся пустым.
