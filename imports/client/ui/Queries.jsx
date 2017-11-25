import gql from 'graphql-tag';

export const

    MarcaSubcategoriaCOLORSQuery = gql`
        query ProductesQuery(
                    $apiUrl: String,
                    $pageId: String,
                    $categoryId: String,
                    $subcategoryId: String,
                    $sizeId: String,
                    $brandId: String,
                    $colorId: String

            ) {
            marcaSubcategoriaCOLORS
                    (
                        apiUrl: $apiUrl,
                        pageId: $pageId,
                        categoryId: $categoryId,
                        subcategoryId: $subcategoryId,
                        colorId: $colorId,
                        brandId: $brandId,
                        sizeId: $sizeId
                    ) {
              colorId
              nom_color
              label_color
            }
        }`
    ,

    ProducteDETALLSQuery = gql`
        query ProducteDETALLSQuery(
                $apiUrl: String,
                        $productId: String
            ) {
                producteDETALLS(
                    apiUrl: $apiUrl,
                    productId: $productId
                ) {
                  id
                    referencia
                    descripcion
                    categoria
                    marca
                    precioBase
                    precio2
                    precio3
                    precio4
                    precioMiscelaneo
                    proveedor
                    descripcion_long_es
                    nom_marca
                    logo_marca
                    nom_categoria
                    imagen_principal
                    tallas {
                      id
                        barCode
                        producto
                        talla
                        color
                        existencias
                        costoPonderado
                        tallaId
                        num_color
                        labelColor
                        nom_talla
                        label_talla
                        orden_talla
                        publicar_talla
                    }
                    gallery {
                      id
                        producto
                        imagen
                        imagen_min
                        type
                        ppal
                    }
                }
    }`,

    SubCategoriaMARQUESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaMARQUES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                marcaId
                nom_marca
             }
    }`,

    SubCategoriaTALLESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaTALLES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                tallaId
                nom_talla
                label_talla
                orden_talla
                publicar_talla
             }
    }`,

    MarcaSubCategoriaTALLESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            marcaSubcategoriaTALLES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                tallaId
                nom_talla
                label_talla
                orden_talla
                publicar_talla
             }
    }`,

    SubCategoriaCOLORSQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaCOLORS(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                colorId
                nom_color
                label_color
             }
    }`,

    SubCategoriaPRODUCTESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaPRODUCTES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                id
                referencia
                descripcion
                categoria
                marca
                precioBase
                proveedor
                descripcion_long_es
                nom_marca
                logo_marca
                nom_categoria
                imagen_principal
                gallery {
                  id
                  producto
                  imagen
                  imagen_min
                  type
                  ppal
                }
                galleryColors {
                  id
                  fotoId
                  colorId
                  num_color
                  label_color
                  imagen_min
                }
                sizes {
                    id
                    tallaId
                    existencia_talla
                    nom_talla
                    label_talla
                    orden_talla
                    publicar_talla
                }
                othersColors {
                    color
                    existencia_color
                    num_color
                    nom_color
                }
             }
    }`,

    CategoriaMARQUESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaMARQUES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                marcaId
                nom_marca
             }
    }`,

    CategoriaTALLESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaTALLES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                tallaId
                nom_talla
                label_talla
                orden_talla
                publicar_talla
             }
    }`,

    CategoriaCOLORSQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaCOLORS(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
                colorId
                nom_color
                label_color
             }
    }`,

    CategoriaPRODUCTESQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            categoriaPRODUCTES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ){
               	id
        		referencia
                descripcion
                categoria
                marca
                precioBase
                proveedor
                descripcion_long_es
                nom_marca
                logo_marca
                nom_categoria
                imagen_principal
                gallery {
                  id
                  producto
                  imagen
                  imagen_min
                  type
                  ppal
                }
                galleryColors {
                  id
                  fotoId
                  colorId
                  num_color
                  label_color
                  imagen_min
                }
             }
    }`,

    TallesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaTALLES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            )
    }`,

    ColorsQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaCOLORS(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            )
    }`,

    MarquesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaMARQUES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            )
    }`,

    ProductesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategoriaPRODUCTES(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ) {
                id
                referencia
                descripcion
                categoria
                marca
                precioBase
                precio2
                precio3
                precio4
                precioMiscelaneo
                proveedor
                descripcion_long_es
                nom_marca
                logo_marca
                nom_categoria
                imagen_principal
                gallery {
                    id
                    producto
                    imagen
                    imagen_min
                    type
                    ppal
                }
                galleryColors {
                    id
                    fotoId
                    colorId
                    num_color
                    label_color
                    imagen_min
                }
          }
    }`,

    SubcategoriesQuery = gql`
        query (
            $apiUrl: String,
            $pageId: String,
            $categoryId: String,
            $subcategoryId: String,
            $sizeId: String,
            $brandId: String,
            $colorId: String
        ) {
            subcategories(
                apiUrl: $apiUrl,
                pageId: $pageId,
                categoryId: $categoryId,
                subcategoryId: $subcategoryId,
                colorId: $colorId,
                brandId: $brandId,
                sizeId: $sizeId
            ) {
                categoriaId
                nom_categoria
            }
        }`
;
