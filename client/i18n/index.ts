import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Home": "Home",
      "About Us": "About Us",
      "Contact": "Contact",
      "Life Insurance": "Life Insurance",
      "Retirement Planning": "Retirement Planning",
      "Health Insurance": "Health Insurance",
      "Medicare": "Medicare",
      "Final Expense": "Final Expense",
      "Estate Planning": "Estate Planning",
      "Partners": "Partners",
      "Careers": "Careers",
    }
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenido a React y react-i18next",
      "Home": "Inicio",
      "About Us": "Sobre Nosotros",
      "Contact": "Contacto",
      "Life Insurance": "Seguro de Vida",
      "Retirement Planning": "Planificación de Jubilación",
      "Health Insurance": "Seguro de Salud",
      "Medicare": "Medicare",
      "Final Expense": "Gastos Finales",
      "Estate Planning": "Planificación Patrimonial",
      "Partners": "Socios",
      "Careers": "Carreras",
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;