declare namespace CMS {
  interface Response<T = any> {
    data?: T;
  }

  interface Image {
    id?: string;
    documentId?: string;
    url?: string;
    alternativeText?: string;
  }

  interface ItemList {
    titulo?: string;
    descripcion?: string;
  }

  interface SingleTypeIndex {
    inicio?: SingleTypeIndex_Inicio;
    carruseles?: Carrusel[];
    disciplinas?: Discipline[];
    empresa?: SingleTypeEmpresa;
    aliados?: Ally[];
  }

  interface SingleTypeIndex_Inicio {
    principal?: {
      titulo?: string;
      descripcion?: string;
      imagen?: Image;
    };
    mensaje?: {
      titulo?: string;
      descripcion?: string;
    };
  }

  interface SingleTypeEmpresa {
    principal?: {
      titulo?: string;
      descripcion?: string;
      imagen?: Image;
    };
    identidad?: {
      titulo?: string;
      descripcion?: string;
      imagen?: Image;
    }[];
    profesionales?: {
      titulo?: string;
      descripcion?: string;
      imagen?: Image;
    };
    trabajo?: ItemList[];
  }

  interface SingleTypeRequisito {
    requisitos?: ItemList[];
  }

  interface SingleTypeNorma {
    normas?: ItemList[];
  }

  interface SingleTypeDescuento {
    descuentos?: ItemList[];
  }

  interface Carrusel {
    id?: string;
    documentId?: string;
    imagenes?: Image[];
  }

  interface Discipline {
    id?: string;
    documentId?: string;
    nombre?: string;
    descripcion?: string;
    link?: string;
    icono?: Image;
    imagen?: Image;
    clases?: {
      titulo?: string;
      descripcion?: string;
      icono?: Image;
      planes?: string;
      horarios?: string;
    }[];
    horarios?: { horarios?: string }[];
    planes?: { planes?: string }[];
    informacion_adicional?: ItemList;
    requisitos?: ItemList;
  }

  interface Article {
    id?: string;
    documentId?: string;
    titulo?: string;
    descripcion?: string;
    imagen?: Image;
    slug?: string;
    createdAt?: string;
  }

  interface Profesional {
    id?: string;
    documentId?: string;
    nombre_apellido?: string;
    extracto?: string;
    bio?: string;
    imagen?: Image;
    link?: string;
  }

  interface Ally {
      id?: string;
      documentId?: string;
      nombre?: string;
      descripcion?: string;
      descripcion_interna?: string;
      link?: string;
      handle?: string;
      icono_rrss?: string;
      imagen?: Image;
      imagen_info?: Image;
      telefonos?: { numero?: string }[];
      servicios?: {
        titulo?: string;
        descripcion?: string;
        servicio?: {
          titulo?: string;
          icono?: Image;
        }[];
      };
      personal?: {
        profesionales?: {
          titulo?: string;
          descripcion?: string;
          imagen?: Image;
        }[];
      };
  }

  interface Question {
    id?: string;
    documentId?: string;
    titulo?: string;
    descripcion?: string;
  }
}
