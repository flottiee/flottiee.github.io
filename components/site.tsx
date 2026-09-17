"use client";

import { useMemo, useState } from "react";
import { CursorGlow } from "@/components/cursor-glow";
import { useLocale } from "@/lib/locale";
import { useActiveSection } from "@/lib/use-active-section";

export function Site() {
  const { t, locale, setLocale } = useLocale();
  const ids = useMemo(() => ["intro", "work", "practice", "contact"], []);
  const active = useActiveSection(ids);
  const [openProject, setOpenProject] = useState<number | null>(0);

  return (
    <>
      <CursorGlow />
      <a className="skip" href="#intro">
        {t.skip}
      </a>

      <header className="topbar">
        <p className="mark">{t.heroName}</p>
        <div className="topbar-actions">
          <span className="sr-only">{t.langLabel}</span>
          <button
            type="button"
            className={locale === "ru" ? "lang is-on" : "lang"}
            onClick={() => setLocale("ru")}
            aria-pressed={locale === "ru"}
          >
            RU
          </button>
          <button
            type="button"
            className={locale === "en" ? "lang is-on" : "lang"}
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
        </div>
      </header>

      <div className="shell">
        <nav className="menu" aria-label={t.menu}>
          <p className="menu-kicker">{t.menu}</p>
          <ol>
            <li>
              <a className={active === "intro" ? "is-active" : ""} href="#intro">
                00  {t.heroKicker}
              </a>
            </li>
            {t.nav.map((item) => (
              <li key={item.id}>
                <a className={active === item.id ? "is-active" : ""} href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main>
          <section id="intro" className="panel hero">
            <p className="kicker">{t.heroKicker}</p>
            <h1>{t.heroName}</h1>
            <p className="role">{t.heroRole}</p>
            <p className="lead">{t.heroLead}</p>
          </section>

          <section id="work" className="panel">
            <div className="section-head">
              <h2>{t.workTitle}</h2>
              <p>{t.workHint}</p>
            </div>
            <ul className="projects">
              {t.projects.map((project, index) => {
                const isOpen = openProject === index;
                return (
                  <li key={project.title}>
                    <button
                      type="button"
                      className={isOpen ? "project is-open" : "project"}
                      onClick={() => setOpenProject(isOpen ? null : index)}
                      onMouseEnter={() => setOpenProject(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="project-year">{project.year}</span>
                      <span className="project-title">{project.title}</span>
                      <span className="project-role">{project.role}</span>
                    </button>
                    <p className={isOpen ? "project-note is-open" : "project-note"}>
                      {project.note}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section id="practice" className="panel">
            <div className="section-head">
              <h2>{t.practiceTitle}</h2>
            </div>
            {t.practiceBody.map((paragraph) => (
              <p className="body" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <ul className="chips">
              {t.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section id="contact" className="panel contact">
            <div className="section-head">
              <h2>{t.contactTitle}</h2>
            </div>
            <p className="lead">{t.contactLead}</p>
            <a className="mail" href={`mailto:${t.email}`}>
              {t.email}
            </a>
            <p className="availability">{t.availability}</p>
          </section>
        </main>
      </div>

      <footer className="foot">
        <p>{t.footer}</p>
      </footer>
    </>
  );
}
