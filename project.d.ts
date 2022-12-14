// This .d.ts file must contain the project type declaration
declare namespace Project {
  interface Image {
    id: string;
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  }

  interface Schedule {
    horarios: string[];
  }

  interface Plans {
    planes: string[];
  }

  interface Discipline {
    nombre: string;
    descripcion: string;
    clases?: string[];
    horarios?: Schedule[];
    icono: Image;
    imagen: Image;
    link: string;
    planes: Plans[];
  }

  interface DisplicinesStrapi {
    id: string;
    attributes: Discipline;
  }

  interface DisplicinesResponse {
    id: string;
    data: {
      disciplinas: {
        data: DisplicinesStrapi[];
      };
    };
  }

  interface Article {
    nombre: string;
    descripcion: string;
    imagen: Image;
    slug: string;
  }

  interface ArticlesStrapi {
    id: string;
    attributes: Article;
  }

  interface ArticlesResponse {
    id: string;
    data: {
      articulos: {
        data: ArticlesStrapi[];
      };
    };
  }
}
