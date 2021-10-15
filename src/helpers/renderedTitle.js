export const renderedTitle = (name) => {
  switch (name) {
    case "authors":
      return "Autores";
    case "author":
      return "del Autor";
    case "coauthors":
      return "Coautores";
    case "departments":
      return "Comisiones";
    case "department":
      return "de la Comisión";
    case "faculties":
      return "Áreas";
    case "faculty":
      return "del Área";
    case "groups":
      return "Grupos";
    case "group":
      return "del Grupo de Investigación";
    case "institutions":
      return "Instituciones";
    case "institution":
      return "de la Institución";
    case "literature":
      return "Artículos";
    default:
      return null;
  }
};
