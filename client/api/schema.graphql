import React, { Component } from 'react';
import {
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';



//fetchTenda({}): `${URL_API}/jpages/data/general/?pageId=${tendaId}`

let
    apiUrl = `http://api.colombiaespassion.net`,
    pageId = `1`,
    categoryId = `2`
;




const
    CategoriaType = new GraphQLObjectType({
        name: `Categoria`,
        description: `Categoria de ropa`,
        fields: () => ({
            categoriaId: {
                type: GraphQLString
            },
            nom_categoria: {
                type: GraphQLString
            }
        })
    }),

    SubcategoriaType = new GraphQLObjectType({
        name: `Subcategoria`,
        description: `Categoria de ropa`,
        fields: () => ({
            categoriaId: {
                type: GraphQLString
            },
            nom_categoria: {
                type: GraphQLString
            }
        })
    }),

    MarcaType = new GraphQLObjectType({
        name: `Marca`,
        description: `Marca de ropa`,
        fields: () => ({
            marcaId: {
                type: GraphQLString
            },
            nom_marca: {
                type: GraphQLString
            }
        })
    }),

    TallaType = new GraphQLObjectType({
        name: `Talla`,
        description: `Talla de ropa`,
        fields: () => ({
            tallaId: {
                type: GraphQLString
            },
            nom_talla: {
                type: GraphQLString
            },
            label_talla: {
                type: GraphQLString
            },
            orden_talla: {
                type: GraphQLString
            },
            publicar_talla: {
                type: GraphQLString
            }
        })
    }),

    ColorType = new GraphQLObjectType({
        name: `Color`,
        description: `Color de ropa`,
        fields: () => ({
            colorId: {
                type: GraphQLString
            },
            nom_color: {
                type: GraphQLString
            },
            label_color: {
                type: GraphQLString
            }
        })
    }),

    ImageType = new GraphQLObjectType({
        name: `Imagen`,
        description: `Image for the gallery to display`,
        fields: () => ({
            id: {
                type: GraphQLString
            },
            producto: {
                type: GraphQLString
            },
            imagen: {
                type: GraphQLString
            },
            imagen_min: {
                type: GraphQLString
            },
            type: {
                type: GraphQLString
            },
            ppal: {
                type: GraphQLString
            }
        })
    }),

    galleryColorType = new GraphQLObjectType({
        name: `Color`,
        description: `Color for the gallery to display`,
        fields: () => ({
            id: {
                type: GraphQLString
            },
            fotoId: {
                type: GraphQLString
            },
            colorId: {
                type: GraphQLString
            },
            num_color: {
                type: GraphQLString
            },
            label_color: {
                type: GraphQLString
            },
            imagen_min: {
                type: GraphQLString
            }
        })
    }),

    ProductType = new GraphQLObjectType({
        name: `Producto`,
        description: `Producto de ropa`,
        fields: () => ({
            id: {
                type: GraphQLString
            },
            referencia: {
                type: GraphQLString
            },
            descripcion: {
                type: GraphQLString
            },
            categoria: {
                type: GraphQLString
            },
            marca: {
                type: GraphQLString
            },
            precioBase: {
                type: GraphQLString
            },
            precio2: {
                type: GraphQLString
            },
            precio3: {
                type: GraphQLString
            },
            precio4: {
                type: GraphQLString
            },
            precioMiscelaneo: {
                type: GraphQLString
            },
            proveedor: {
                type: GraphQLString
            },
            descripcion_long_es: {
                type: GraphQLString
            },
            nom_marca: {
                type: GraphQLString
            },
            logo_marca: {
                type: GraphQLString
            },
            nom_categoria: {
                type: GraphQLString
            },
            imagen_principal: {
                type: GraphQLString
            },
            gallery: {
                type: new GraphQLList(ImageType)
            },
            galleryColors: {
                type: {
                    type: new GraphQLList(galleryColorType)
                }
            }
        })
    })
;

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: `The root of all... queries.`,
    fields: () => ({
        allSubcategories: {
            type: new GraphQLList(CategoriaType),
            args: {
                apiUrl: { type: GraphQLString },
                pageId: { type: GraphQLString },
                categoryId: { type: GraphQLString }
            },
            resolve:
                (root, args) =>
                    fetch(`${args.apiUrl}/jpages/data/subcategories/?pageId=${args.pageId}&categoryId=${args.categoryId}`)
                        .then(res => res.json())
        },
        laCosa: {
            type: GraphQLString,
            resolve: () => "Un text per a la coseta..."
        }
    })
});

export default new GraphQLSchema({
    query: QueryType
});
