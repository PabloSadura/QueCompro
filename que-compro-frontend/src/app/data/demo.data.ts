import { Product, SearchEvent } from  '../interfaces/interfaces' ; // Asegúrate que la ruta a tu interfaz sea correcta

export const DEMO_DATA: SearchEvent = {
  // Datos del evento de búsqueda general

  id:  '9A1r7D0uSDi8GWjh8LCU' ,
  createdAt: new Date().toISOString(), // Fecha actual en formato ISO
  status: 'Completado', // El estado final de una búsqueda exitosa
  query:  "aspiradora robot" ,
  result: {
            productos: [
                {
                    position: 12,
                    title:  'Xiaomi Vacuum E10 Robot Aspirador WiFi' ,
                    product_id :  "10646767087229606851" ,
                    serpapi_product_api :  'https://serpapi.com/search.json?engine=google_product&gl=ar&google_domain=google.com&hl=es&product_id=10646767087229606851 ',
                    product_link :   'https://www.google.com/search?ibp=oshop&q=aspiradora robot&prds=catalogid:10646767087229606851,headlineOfferDocid:11509444608509434341,imageDocid:13364897304625887098,rds:PC_13403884435269798524|PROD_PC_13403884435269798524,gpcid:13403884435269798524,mid:576462476247897422,pvt:hg&hl=es&gl=ar&udm=28' ,
                    immersive_product_page_token :  "eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTA2NDY3NjcwODcyMjk2MDY4NTEiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxMTUwOTQ0NDYwODUwOTQzNDM0MSIsImltYWdlRG9jaWQiOiIxMzM2NDg5NzMwNDYyNTg4NzA5OCIsInJkcyI6IlBDXzEzNDAzODg0NDM1MjY5Nzk4NTI0fFBST0RfUENfMTM0MDM4ODQ0MzUyNjk3OTg1MjQiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjEzNDAzODg0NDM1MjY5Nzk4NTI0IiwibWlkIjoiNTc2NDYyNDc2MjQ3ODk3NDIyIiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9" ,
                    serpapi_immersive_product_api :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTA2NDY3NjcwODcyMjk2MDY4NTEiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxMTUwOTQ0NDYwODUwOTQzNDM0MSIsImltYWdlRG9jaWQiOiIxMzM2NDg5NzMwNDYyNTg4NzA5OCIsInJkcyI6IlBDXzEzNDAzODg0NDM1MjY5Nzk4NTI0fFBST0RfUENfMTM0MDM4ODQ0MzUyNjk3OTg1MjQiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjEzNDAzODg0NDM1MjY5Nzk4NTI0IiwibWlkIjoiNTc2NDYyNDc2MjQ3ODk3NDIyIiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9' ,
                    source :  'Mercadolibre.com.ar' ,
                    source_icon :   'https://serpapi.com/searches/68e6612fe6590ea0d8fbc96b/images/89e545a95d03981f9e244af8383b1f95aa7e8268d27a8be533838fb84a172f64.pn' ,
                    price :  '$ 323.520,00 ahora' ,
                    extracted_price : 323520,
                    installment : {
                        price :  "$ 77.704,11/mes" ,
                        extracted_price : 77704.11,
                        period : 6
                    },
                    rating : 4.6,
                    reviews : 3700,
                    thumbnail :   'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5tNgGDBHtmMEISGE81iuRj3XfP6x9jJ_hV8fh8E6UWezfHUfGDTdDKYFa3VXQOQR45XDDWiu27x6lb7BVhe1aS2xIr01yPnH3Jh-gpiZnDT6BseMxa8hAiw ',
                    serpapi_thumbnail :   'https://serpapi.com/images/url/TAdbUXicDcnhEoEwAADgJ6pUzHTnnG4pnCRJ_HFTa5tjptYZT-V1vA3f3-_7YUrJ1rMsIsrmJRWpDHUWjklbhRUvzfJ-s1p2l5ILOnmM_-dN42oUltlAxTREfqRuq2C-DQNo8y69uEWdAD26LE4shzWDAdjtybuOdnWIsgotDzPs5sVmvUn7gwKhPe-coQbX89DPGbHx1tHzpme_EhG5C2ZQyY8CZcBvyUpjyKb8-QMz_D07' ,
                    thumbnails : [
                          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5tNgGDBHtmMEISGE81iuRj3XfP6x9jJ_hV8fh8E6UWezfHUfGDTdDKYFa3VXQOQR45XDDWiu27x6lb7BVhe1aS2xIr01yPnH3Jh-gpiZnDT6BseMxa8hAiw' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhEguI2kaBYVZi-YN-kgxejJYUoWQfQdk1UEGAaIcVOzBW-2-kGcIA5atnBIfECGl3Oh_xBtAXeBRJndNrW_D6FzDa78P9Xt-S2o-L0hhpEy4joMoJgcPC' ,
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqljiqFd4BhJoLgdDWRqqciUZKqHSUqBR--Wxg54Vao7QYcmkQXxdzot70KNIOTBDxCuRUbRuWm8p2sSThsZaqK9mckCQ2fKovdg-rZFPFFDe0Qe9z04FpRA' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHmfw040pjk25x1l62afakJFPw788CieP-eFsacuUiVqCdLSIl1GHygex1r2c44w2sBXnTxY9QQC8rPFSglqV633CVgEMcw9t_ujSWxjEmjlc8hJb1Lfhg' ,
                          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLOhXqUUhGP3QCJrRVRDv_S-4sVlJedxjjdLI8xBzlnwxgCw-8adYbStSiWgcC7jARyWNyhnr41jWOa50l0pbaddld9HwM_EjY0PjX_ezyKmGvvs2VBw26' 
                    ],
                    serpapi_thumbnails : [
                          'https://serpapi.com/images/url/TAdbUXicDcnhEoEwAADgJ6pUzHTnnG4pnCRJ_HFTa5tjptYZT-V1vA3f3-_7YUrJ1rMsIsrmJRWpDHUWjklbhRUvzfJ-s1p2l5ILOnmM_-dN42oUltlAxTREfqRuq2C-DQNo8y69uEWdAD26LE4shzWDAdjtybuOdnWIsgotDzPs5sVmvUn7gwKhPe-coQbX89DPGbHx1tHzpme_EhG5C2ZQyY8CZcBvyUpjyKb8-QMz_D07' ,
                          'https://serpapi.com/images/url/WklovHicDclLDoIwFADAE1UU_CfGUEACUUAMIm5ILdgC2lZ4JuihvI-30dnO98MBVLfUtFLQ9qWgLBBchDFgHRCo6IDKu9ZxqVQl2Pqx-t_SDIqFS2PusKenNwRnx3OFsgA1rC9rP0tkur_ui2aUOK5JPHoM3zhFOmpc6pkTAgJ7V8dyb0bI8x6DeSpx7IsiaNPcnm7eNpnNo8UJ0EGXaDvkXDmvcS130mc0sn79JT0J' ,
                          'https://serpapi.com/images/url/lbDw_nicDclJDoIwAADAF7GEYBASY1hSFwxKEVFu0GJBhLa0GORVfsff6Fzn-6mlZMLRtKpHw5vJCiuy7HWVCFnIBqmIdpqoKWNNT9Z89T_HjbC9QQl_PhoOsOnVe3ogOMgg56hJ85Bvk5R7UFGyiSzMS0Gt-Ia6Nr5OeKbS0sNodzx7weSPMC3hmHVLZojkXIu84KHdodaPjXtIX5goQw5OAASVHlf2rJuAQfcH8RI_Kw' ,
                          'https://serpapi.com/images/url/F6mhU3icDclJDoIwAADAF7EjAokxSlgkaCAo6smUUlr2QkvAT_kff6Nzne-HcE6ZLUmoh9ObclQIPO81ETMOeAVFOHQSIwOlVY_34-5_9uFSWD5Mgq5cZF2mdaNuVqU1VFCCJvTiZWuaToViAXkMwPlWZaNTROmpVfzgjdGqTCrU9UVlx0d_XZ9WkjjmFHspbsfM0DQnw-4ZLhZ_zXV6X2u3q1tokjBXopLgH_gjPdY' ,
                          'https://serpapi.com/images/url/TnY_FHicDclJDoIwAADAFyGIuJEYA2hwQVAI24mUtqE0WCtt2B7lf_yNznW-HyIlF6aqYgbbkUuMFFkyfVYJCWQNZ_D1VAV5cV6zav_e_c-0fLR14cMLSPaOY-LeFw_n0oZJeOiKSDFE0lwwGihF3nkz2FPD-qFyemUDUF5GMqrTCjpraoVj6o-EtcacpgFYao3GS4BQg7an_lYcaa7daVbgabw-3a4TemL3-uoHbW0_Rg' 
                    ],
                    pros : [
                         'Validación de usuario excepcionalmente alta (4.6 estrellas con 3700 reseñas), lo que sugiere una alta satisfacción con su rendimiento general y fiabilidad.' ,
                         'Conectividad WiFi para control y programación remota a través de la aplicación.' ,
                         'Proviene de Xiaomi, una marca reconocida por ofrecer una excelente relación entre tecnología y precio. '
                    ],
                    contras : [
                         "No especifica mapeo LiDAR, por lo que probablemente utiliza un sistema giroscópico menos eficiente." ,
                         "No incluye estación de autovaciado ni función de trapeado explícita en el título." 
                    ],
                    immersive_details : {
                        thumbnails : [
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkEs9rrYQs40eHeLtYrFIsBsZDwy8pd8VjeR9C7y1oNwCgqMIj81mDg3Ci6w-k61BhVx5ctrOzFw' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0yJp9XPknC5JM1vudl0G2kBApB4kHNjPfShNWJ_1EA21S3n9AWoMAuwIyJhRVCFFqWreGRCVW' ,
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRSKr5H-sN6M3CVEuDgqcU_MX-Z7cKZGyegsoBTN42pMtZZHgmxLvrJX16_vJAXMoNATYQGoBA' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQb5rEIGf0z3mDH8UBkQxiSnu5J56zP-l2OytFz74Cm3S567vA6czbq0NY8eYhs8QON0Z697OGFOA' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOXMMHocag5g_gb6Rqdt6QapBzBDpu_glzrymCIqxpP_Ug30_vpFKayfiuB5lYihQL19BcT0wAgQ' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWkLiZVhqKb79kjZKBzlDTkMqLu-jH2QF4OexvKd0mbG6m2fGxWu6QQ7QroauFAubJnquNL-Y' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHQvkyVOhKatG-oxZ55J_9KKGOUYHQZLCp246irgbjeZN_f5TeoCm1tdgVZrTX-e0joR4L40_1' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2p9HMgyrQhTi05ihvnBu1-nmNZX6XWkkrevcMEnQb6yoKCw4Rhn6p0xTDuj5MEGG7aan0Z5uR' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTs9p_4wAT6xTVF5T4LdY7630sctcYrrvGLNQWRzOzv5_g_V9tDjaUt0S1r9g' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgyzoGht6bs-Z5EFMdFiJdU4qIEJyGM8d72aLzYW-7ZGDxoxzv0c5xI4IYKqsnau6o2sac0Lo' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRt9b62YJxdgIpl5dDN5cbwRzSegXKu81CdbWQoJVyRT4dY0P4QlQ7lozlmVA' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrWXCwt-4z5l9T2i6Jdh79hgFphecfQL4rDUwr_ls5ObBgApGk28lLafOkuA' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTJBDSurn37xDwd_-RHSQIIOQ7rK7j9qbOxLWhKM5YTyU4mdhGLUuVaYqZ5r14FMIjoZ61FsYU' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuXfbvlSvwyfkCPVY0FEw4FwsbkwfWKut_rz0h0Ch_1A5aF2_4A1hvx8cr1A' 
                        ],
                        title :  'Aspiradora Robot Xiaomi E10' ,
                        brand :  'Xiaomi' ,
                        reviews : 3652,
                        rating : 4.6,
                        price_range :  '$ 269.000-$ 295.000' ,
                        stores : [
                            {
                                name :  'Mercadolibre.com.ar' ,
                                logo :   "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.mercadolibre.com.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL" ,
                                link :   'https://www.mercadolibre.com.ar/aspiradora-trapeadora-robot-xiaomi-e10-color-blanco/p/MLA24237954?matt_tool=38087446&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLA2423334826&from=gshop' ,
                                title :  "Aspiradora Trapeadora Robot Xiaomi E10 Color Blanco" ,
                                tag :  "Mejor precio" ,
                                details_and_offers : [
                                     "En stock para compras en línea" ,
                                    " Entrega gratuita "
                                ],
                                price :  "$ 323.520,00",
                                extracted_price : 323520,
                                shipping :  "Gratis" ,
                                total :  "$ 323.520,00" ,
                                extracted_total : 323520
                            },
                            {
                                name :  'Megatone' ,
                                logo :   'https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.megatone.net&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                link :   'https://www.megatone.net/producto/aspiradora-trapeadora-robot-xiaomi-e10-bhr6783eu-blanco_MKT1532TRE/' ,
                                title : " Aspiradora Trapeadora Robot Xiaomi E10 BHR6783EU Blanco" ,
                                rating : 4.2,
                                reviews : 52202,
                                details_and_offers : [
                                     "En stock para compras en línea" ,
                                     "Devoluciones por 10 días" 
                                ],
                                price :  "$ 431.799,00" ,
                                extracted_price : 431799,
                                total :  "$ 431.799,00" ,
                                extracted_total : 431799
                            },
                            {
                                name :  'NUVAC' ,
                                logo :   'https://encrypted-tbn3.gstatic.com/faviconV2?url=https://nuvac.cl&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                link :   'https://nuvac.cl/dreame-mova-e10-robot-aspiradora-trapeador/' ,
                                title : 'Dreame Mova E10 | Robot aspiradora y trapeador 2-en-1 nüvac' ,
                                details_and_offers : [
                                     'En stock para compras en línea '
                                ],
                                price : ' $ 359.490,97 ',
                                extracted_price : 359490.97,
                                total :  '$ 359.490,97' ,
                                extracted_total : 359490.97
                            }
                        ],
                        about_the_product : {
                            title :  'Aspiradora Trapeadora Robot E10' ,
                            link :   'https://xiaomistore.com.ar/smart-home-/329-aspiradora-robot-xiaomi-e10-eu-6934177715563.html' ,
                            displayed_link :  'xiaomistore.com.ar' ,
                            icon :   'https://encrypted-tbn0.gstatic.com/faviconV2?url=https://xiaomistore.com.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2' ,
                            description :  'Descubre la eficiencia avanzada de limpieza con una aspiradora robot de Xiaomi. Diseñada para un rendimiento potente y preciso, esta innovadora aspiradora inteligente utiliza tecnología de mapeo láser y potencia de succión ajustable para mantener tu hogar impecable. Experimenta la comodidad y la innovación en la limpieza del hogar con la Aspiradora Xiaomi Robot Vacuum E10.' ,
                            features : [
                                {
                                    title :  'Marca' ,
                                    value :  'Xiaomi' 
                                },
                                {
                                    title :  'Sin cable' ,
                                    value :  'Sí' 
                                },
                                {
                                    title :  'Peso' ,
                                    value : ' 4.8 kg '
                                },
                                {
                                    title :  'Capacidad' ,
                                    value :  '0.2 litros '
                                }
                            ]
                        },
                        ratings: [
                            {
                                stars : 1,
                                amount : 154
                            },
                            {
                                stars : 2,
                                amount : 71
                            },
                            {
                                stars : 3,
                                amount : 133
                            },
                            {
                                stars : 4,
                                amount : 300
                            },
                            {
                                stars : 5,
                                amount : 2994
                            }
                        ],
                        user_reviews : [
                            {
                                title :  'El producto llegó antes de' ,
                                text :  'El producto llegó antes de lo indicado y el servicio de la tienda fue 10/10. Pero ya en el funcionamiento del robot, es muy torpe, sobre todo con las alfombras/tapetes, se suele enredar con facilidad. Y para regresar a la estación de carga se pierde, lo que debería ser una tarea fácil se convierte en una largo proceso.\nEste robot no reconoce mapas ni aspira solo por zonas, el hace todo el recorrido por donde pueda pasar y no encuentre obstáculos.\nSu batería es duradera, en mi caso recorre cerca de 90metros en cada proceso y regresa a la base con un promedio de 60% de carga. ',
                                user_name :  'Fabio C.' ,
                                source :  'alkosto.com' ,
                                rating : 4,
                                date :  'Hace 9 meses' ,
                                icon :   'https://lh3.googleusercontent.com/shsm/AGYqVK3oLGqxfRkM0SmLUcMcf-RME8Iw10u36ETP-cVf5esFTGdsJ6FTWuNKHNbKtI7QKaiZKQ=w40-h40-c0x00000000-cc' 
                            },
                            {
                                title :  'El diseño es bueno, realmente' ,
                                text :  'El diseño es bueno, realmente sí cumple con su función que es aspirar, tiene buena succión y es fácil de desocupar y limpiar. No lo recomiendo porque no tiene sistema Lidar de navegación por lo cual no mapea y guarda cada habitación, toca estar pendiente porque a veces no aspira todos los espacios. Por el precio es mejor comprar una con un poco más de tecnología' ,
                                user_name :  'Dayana V.' ,
                                source :  'alkosto.com' ,
                                rating : 3,
                                date :  'Hace un año' ,
                                icon :   'https://lh3.googleusercontent.com/shsm/AGYqVK1_O0lMldI_kbUm2wBB04it467dV-rrAhSHkwAZpBclqOlBuHriTnJrh1Wvc-wce9sgqw=w40-h40-c0x00000000-cc'
                            }
                        ],
                        videos: [
                            {
                                title :  'Xiaomi Vacuum E10 Vacuum Cleaner - Is It Worth It?' ,
                                link :   'https://www.youtube.com/watch?v=0rUUMPMqpZw' ,
                                source :  'YouTube' ,
                                channel :  'Foli Tech' ,
                                duration :  '8:17 ',
                                thumbnail :   'https://i.ytimg.com/vi/0rUUMPMqpZw/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3kmwpQGAf2IideMYbAn5jDAJwgRCA' ,
                                preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTeBEMjjzBI6RwQ3GwzXjCNXbx8WCcCNE_qKg '
                            },                            {
                                title :  'Aspiradora Xiaomi E10 *REVIEW y TUTORIAL DE USO*' ,
                                link :   'https://www.youtube.com/watch?v=NxKhn7OPGeA' ,
                                source :  'YouTube' ,
                                channel :  'Tiendas CLICK Guatemala' ,
                                duration :  '9:12' ,
                                thumbnail :   'https://i.ytimg.com/vi/NxKhn7OPGeA/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mLE4axpLj3k-8pL-ccGGRJ88d5MA' 
                            },
                            {
                                title :  'Xiaomi Robot Vacuum E10 (Robot Aspiradora)' ,
                                link :   'https://www.youtube.com/watch?v=xdyUMM1ooCY' ,
                                source :  'YouTube' ,
                                channel :  'alvaro stash' ,
                                duration :  '9:31' ,
                                thumbnail :   'https://i.ytimg.com/vi/xdyUMM1ooCY/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3l2TahRWgm_WWcoBYAktqdzl_jHkA ',
                                preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRGtS5NcXte_wrrvN3jeD4QsnbwtazBj-iK6A' 
                            },
                            {
                                title :  'Xiaomi Robot Vacuum E10 Unboxing + First Boot Up (Global Version)' ,
                                link :   'https://www.youtube.com/watch?v=obZOKAFdHj4' ,
                                source :  'YouTube' ,
                                channel :  'Kendrick Unbox' ,
                                duration : ' 8:56' ,
                                thumbnail :   'https://i.ytimg.com/vi/obZOKAFdHj4/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3l2pyDPk0xOj7KL6I8BslTSbZhhfA' ,
                                preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTRFhp78XMe5SJlLkGTivBFolEln_MZ5O8zyw' 
                            },
                            {
                                title :  'Robot aspiradora y trapeadora Xiaomi Vacuum e10 Unboxing y ... ',
                                link :   'https://www.youtube.com/watch?v=BcxzQeP7haA' ,
                                source :  'YouTube' ,
                                channel :  'CozyHomeMx' ,
                                duration :  '16:25' ,
                                thumbnail :   'https://i.ytimg.com/vi/BcxzQeP7haA/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3kgDxAQEjIN2K2lHOmQfJ7AN-LjfA '
                            },
                            {
                                title : ' Xiaomi E10C Robot Vacuum Cleaner Mop. At an unbeatable price' ,
                                link :   'https://www.youtube.com/watch?v=JVCx-TUatwk&vl=en' ,
                                source :  'YouTube' ,
                                channel :  'GTechMx' ,
                                duration :  '9:11' ,
                                thumbnail :   'https://i.ytimg.com/vi/JVCx-TUatwk/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mDyPztCMS8EGApUDrOD_pLbbybkg' ,
                                preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQ6dr7TmsF1T27UCKeHJcad7dpuR7Pzy2FJyQ '
                            },
                            {
                                title :  'Cómo quitar la RUEDA delantera en robot Aspiradora Xiaomi ...' ,
                                link :   'https://www.youtube.com/watch?v=QOSES3bCbwY' ,
                                source :  'YouTube' ,
                                channel :  'AnMax' ,
                                duration :  '0:57' ,
                                thumbnail :   'https://i.ytimg.com/vi/QOSES3bCbwY/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mCr269-t6tFvVZV2b6Pu56_Bm_Mw' ,
                                preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSBt_Nw3G04ZE_X36JUBhzwumfmi1TTN-p3vw' 
                            },
                            {
                                title :  'configura fácil y rápido tu robot aspiradora Xiaomi vacuum cleaner ...' ,
                                link :   'https://www.youtube.com/watch?v=Kklm4Wd6EIs' ,
                                source :  'YouTube' ,
                                channel :  'Fredy Artcore-Bioteknesis Technotuber,Android-IOS🍀 ',
                                duration :  '12:18' ,
                                thumbnail :   'https://i.ytimg.com/vi/Kklm4Wd6EIs/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3lU-pVsz6r6OWKngMK5S08CSpNAqg' ,
                                preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSqvQJZwbOg8_eB-k5h6YB6715spTrTs3AueQ' 
                            },
                            {
                                title :  'ASPIRADORA ROBOT XIAOMI E10 U$ 210 DOLARES XIAOMI S20 ...' ,
                                link :   'https://www.instagram.com/reel/DN3QN7Y3JBp/?hl=es' ,
                                source :  'Instagram' ,
                                duration :  '0:36' ,
                                thumbnail :   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57e0QxcelMrzPMHarZm6LtbNzO1Sd0jE9v3HS4QlSPrY0iw&s' 
                            },
                            {
                                title :  'Xiaomi Robot Vacuum E5 Vs E10 – Which Is Better? Full Feature ...' ,
                                link :   'https://www.youtube.com/watch?v=iwwNnjQdFVc' ,
                                source :  'YouTube' ,
                                channel :  'Stratology Hub' ,
                                duration :  '1:28' ,
                                thumbnail :   'https://i.ytimg.com/vi/iwwNnjQdFVc/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mknhdfI8XpFXHGtIQjfcaVNzub3g' 
                            },
                            {
                                 title :  'Xiaomi Robot Vacuum Cleaner E10' ,
                                 link :   'https://www.youtube.com/watch?v=a8GoybFpZcQ' ,
                                 source :  'YouTube' ,
                                 channel :  'Syntech Distribution' ,
                                 duration :  '1:28' ,
                                 thumbnail :   'https://i.ytimg.com/vi/a8GoybFpZcQ/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mKyhgDEr8J11-VAM7xBJH0bxWyiA' 
                            },
                            {
                                 title :  '🧽 ¡Tu casa limpia sin mover un dedo! La Xiaomi Robot Vacuum E10 ... ',
                                 link :   'https://www.facebook.com/biamaqmaquinarias/videos/-tu-casa-limpia-sin-mover-un-dedola-xiaomi-robot-vacuum-e10-aspira-y-friega-al-m/727220796360270/' ,
                                 source :  'Facebook' ,
                                 channel :  'Biamaq Maquinarias' ,
                                 duration :  '0:19' ,
                                 thumbnail :   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5JW-QFPcJW7w1g4GchbPmp_FSBBKTAH9S-BDyPc6Fh2AcA&s' 
                            }
                        ],
                         discussions_and_forums : [
                            {
                                 title : ' ¿Por qué el robot Xiaomi E10 no reutiliza el mapa guardado antes y lo sigue reseteando? : r/RobotVacuums ',
                                 link :   'https://www.reddit.com/r/RobotVacuums/comments/1jgjh3l/why_does_the_xiaomi_e10_robot_does_not_reuse_the/?tl=es-419' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 6 meses' ,
                                 comments : 3,
                                 items : [
                                    {
                                         snippet :  'Creo que es porque usa un rastreador de piso/giroscopio.' ,
                                         link :   'https://www.reddit.com/r/RobotVacuums/comments/1jgjh3l/comment/mj00t6i/?tl=es-419 ',
                                         top_answer : true,
                                         votes : 2
                                    },
                                    {
                                         snippet :  'Porque es un modelo de gama baja y no puede guardar un mapa para uso futuro. No tiene selección de habitación, capacidad de configuración de zona prohibida, etc.' ,
                                         link :   'https://www.reddit.com/r/RobotVacuums/comments/1jgjh3l/comment/mj0grdg/?tl=es-419' ,
                                         votes : 2
                                    },
                                    {
                                         snippet : ' No tiene selección de habitación, capacidad de configuración de zona prohibida, etc. CoachSoggy2824 ',
                                         link :   'https://www.reddit.com/r/RobotVacuums/comments/1jgjh3l/why_does_the_xiaomi_e10_robot_does_not_reuse_the/?tl=es-419#:~:text=No%20tiene%20selecci%C3%B3n%20de%20habitaci%C3%B3n%2C%20capacidad%20de%20configuraci%C3%B3n%20de%20zona%20prohibida%2C%20etc.%20CoachSoggy2824' 
                                    }
                                ]
                            },
                            {
                                 title :  'Xiaomi Robot Vacuum E10 | Xiaomi Global : r/XiaomiGlobal' ,
                                 link :   'https://www.reddit.com/r/XiaomiGlobal/comments/1cnp4f3/xiaomi_robot_vacuum_e10_xiaomi_global/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace un año' ,
                                 items : [
                                    {
                                         snippet :  'Al seleccionar entre aspiración, aspiración y fregado o solo fregado, funciona bien.' ,
                                         link :   'https://www.reddit.com/r/XiaomiGlobal/comments/1cnp4f3/xiaomi_robot_vacuum_e10_xiaomi_global/?tl=es-es#:~:text=Al%20seleccionar%20entre%20aspiraci%C3%B3n%2C%20aspiraci%C3%B3n%20y%20fregado%20o%20solo%20fregado%2C%20funciona%20bien.' 
                                    },
                                    {
                                         snippet :  'En la aplicación MI, al seleccionar la velocidad de aspiración silenciosa, estándar, media y turbo, no cambia en el dispositivo.' ,
                                         link :   'https://www.reddit.com/r/XiaomiGlobal/comments/1cnp4f3/xiaomi_robot_vacuum_e10_xiaomi_global/?tl=es-es#:~:text=En%20la%20aplicaci%C3%B3n%20MI%2C%20al%20seleccionar%20la,y%20turbo%2C%20no%20cambia%20en%20el%20dispositivo.' 
                                    }
                                ]
                            },
                            {
                                 title :  'La aspiradora robot Xiaomi E10 dejó de aspirar : r/RobotVacuums ',
                                 link :   'https://www.reddit.com/r/RobotVacuums/comments/1j8ri20/xiaomi_robot_vacuum_e10_has_stopped_suctioning/?tl=es-419' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 6 meses' ,
                                 items : [
                                    {
                                         snippet :  'Mi nueva aspiradora robot me redujo el tiempo de limpieza en un 90%. ',
                                         link :   'https://www.reddit.com/r/RobotVacuums/comments/1j8ri20/xiaomi_robot_vacuum_e10_has_stopped_suctioning/?tl=es-419#:~:text=Mi%20nueva%20aspiradora%20robot%20me%20redujo%20el%20tiempo%20de%20limpieza%20en%20un%2090%25.' 
                                    }
                                ]
                            },
                            {
                                 title :  'Restablecimiento de fábrica del Xiaomi Robot Vacuum E10 : r/Xiaomi ',
                                 link :   'https://www.reddit.com/r/Xiaomi/comments/1cu71qf/xiaomi_robot_vacuum_e10_factory_reset/?tl=es-419' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace un año ',
                                 items : [],
                            },
                            {
                                 title :  'Restablecimiento de Fábrica para Xiaomi Robot Vacuum E10 : r/Xiaomi' ,
                                 link :   'https://www.reddit.com/r/Xiaomi/comments/1d7x2w0/factory_reset_for_xiaomi_robot_vacuum_e10/?tl=es-419' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace un año ',
                                 items : []
                            }
                        ],
                         more_options : [
                            {
                                 title : 'Aspiradora Trapeadora Robot Sansei Blanco RVCS23' ,
                                 thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgLmIXiuca4gE5eZ3nbv-xvDD2S0VwK6j3-vSURy3tiK36FZ_VUALDU6qSZxf3G2b70nQ0U4U' ,
                                 price :  '$ 199.999,00' ,
                                 extracted_price : 199999,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiOTAwNjIxNDkyMDAwNDk1MTkxMiIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6IjU5Njk4NjcwOTYyMDYyMTY1MzMiLCJpbWFnZURvY2lkIjoiMTExNzI3MTYzNDczOTg5NjkwOTkiLCJyZHMiOiIiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6Ijk0ODM3NjAyMDIxNzkwNjY2ODkiLCJtaWQiOiI1NzY0NjI0NzYyNDc4OTc0MjIiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIiwicHZmIjpudWxsfQ%3D%3D' 
                            },
                            {
                                 title : ' Aspiradora Robot Gadnic 3 Modos de Limpieza y Trapeo ',
                                 thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQLcW5LLuzxDg8HA_l2CEmC4LAe44W02UriW7tYGZKohdwrvW0e5AZ9oQr-qA01msQVLXnGFFW' ,
                                 price :  '$ 118.649,00' ,
                                 extracted_price : 118649,
                                 reviews : 1,
                                 rating : 5,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTY1NTUxODA4MzkyMDYyOTcyNDYiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiI2ODU0MjkwMDQxNDQxMTYzMTY4IiwiaW1hZ2VEb2NpZCI6IjExNTE0ODUyMTgxMzkxNDExMDIzIiwicmRzIjoiUENfMTIzNDAxMjM5MzkxMzQyNDQ2MjF8UFJPRF9QQ18xMjM0MDEyMzkzOTEzNDI0NDYyMSIsInF1ZXJ5IjoiYXNwaXJhZG9yYStyb2JvdCIsImdwY2lkIjoiMTIzNDAxMjM5MzkxMzQyNDQ2MjEiLCJtaWQiOiI1NzY0NjI0NzYyNDc4OTc0MjIiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIiwicHZmIjpudWxsfQ%3D%3D' 
                            },
                            {
                                 title :  'Aspiradora Robot Electrolux Home-Speed ERB10' ,
                                 thumbnail :   'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxhYosSOmwp7k_JkbXOmVld7jyrK4ypnDOStLc1STOwnoQYmcI3FXdOj20PECHt1Td8-xJfF54',
                                 price :  "$ 159.999,00" ,
                                 extracted_price : 159999,
                                 reviews : 167,
                                 rating : 4.2,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTQwMDc3NzI4NzM5Nzc1OTY1NTIiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiI5NTQ4MDQ2MDEwMTA2MzEyNzk4IiwiaW1hZ2VEb2NpZCI6IjkwMzE4NDkxMTE0NzkzNzQzODQiLCJyZHMiOiJQQ185NDQ4NjgxOTU0OTc2MDQ4OTkyfFBST0RfUENfOTQ0ODY4MTk1NDk3NjA0ODk5MiIsInF1ZXJ5IjoiYXNwaXJhZG9yYStyb2JvdCIsImdwY2lkIjoiOTQ0ODY4MTk1NDk3NjA0ODk5MiIsIm1pZCI6IjU3NjQ2Mjg1NTAzOTk3Nzc2OCIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9' 
                            },
                            {
                                 title :  'Aspiradora Robot Philco RVCF25PI con Trapeadora ',
                                 thumbnail :   'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX9hSTo6rTDLYMbTVGvostzXV3_FA_ekIp4gMMfZYN-ZlADHDHu5TKFyTpkRta261wzAagOUY' ,
                                 price :  '$ 219.999,00 ',
                                 extracted_price : 219999,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMjYxODc4NDQ2Njc2MTc3MTM1NyIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6Ijg2MDg2NzgxNzE3ODcyNzI0MDIiLCJpbWFnZURvY2lkIjoiNTUxOTU3Njc1NzAwNzc3NTM1NyIsInJkcyI6IiIsInF1ZXJ5IjoiYXNwaXJhZG9yYStyb2JvdCIsImdwY2lkIjoiODMyMzY4ODU0MTI1NTM5OTE4MyIsIm1pZCI6IjU3NjQ2MjQ3NjI0Nzg5NzQyMiIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9 '
                            },
                            {
                                 title :  'Xiaomi Aspiradora Robot Vacuum E5' ,
                                 thumbnail :   'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAOkgbfW6PFWiIO2PeItoOQUay7ctaYcqWqMFTATF23OoV5EfPAuj9v-ugcOohUzYeIuQ3seq_' ,
                                 price :  '$ 194.000,00' ,
                                 extracted_price : 194000,
                                 reviews : 3000,
                                 rating : 4.7,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiNzc2MDE4ODk5NTYyNjI3NzM5NyIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6IjEyODY1MjQ4NTM3ODQ3NTI4NzIyIiwiaW1hZ2VEb2NpZCI6IjM4MTE5MzAyMzE5MjM1MjQzMzQiLCJyZHMiOiJQQ18xMDI4Mjc0MTkxNjQ5NzIyNjk4NnxQUk9EX1BDXzEwMjgyNzQxOTE2NDk3MjI2OTg2IiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiIxMDI4Mjc0MTkxNjQ5NzIyNjk4NiIsIm1pZCI6IjU3NjQ2Mjg1MzEzNTgwNDEzNCIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9' 
                            },
                            {
                                 title :  'Aspiradora Robot ATMA ATAR21C2PI Filtro Hepa Outlet' ,
                                 thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_4NfXG5YagvJH8p84pEQ7pleFEeM9RKL8HLeAoBYc8KK1UIewuf6a7qdJskon64UiewHZCyOG' ,
                                 price :  '$ 181.599,00' ,
                                 extracted_price : 181599,
                                 original_price :  '$ 199.999' ,
                                 extracted_original_price : 199999,
                                 reviews : 2,
                                 rating : 5,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTY4MDAyNjYxMDkwMzEzMDUzMjEiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiI3NjI4MTM3MjA2MDAyMTQ3NDcxIiwiaW1hZ2VEb2NpZCI6IjY3ODg4MDEwNjk3NjEwMzcwMTEiLCJyZHMiOiJQQ18xMjA1NDA5MjA2Mzc4ODM0MTQxOHxQUk9EX1BDXzEyMDU0MDkyMDYzNzg4MzQxNDE4IiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiIxMjA1NDA5MjA2Mzc4ODM0MTQxOCIsIm1pZCI6IjU3NjQ2MjgzODk4NDI0NDQwNiIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9' 
                            }
                        ],
                    }
                },
                {
                     position : 36,
                     title :  'Aspiradora Robot Liectroux C30B Trapeadora 3 Modos 200m2 App Programable' ,
                     product_id :  '10657393081579418839' ,
                     serpapi_product_api :   'https://serpapi.com/search.json?engine=google_product&gl=ar&google_domain=google.com&hl=es&product_id=10657393081579418839',
                     product_link :   'https://www.google.com/search?ibp=oshop&q=aspiradora robot&prds=catalogid:10657393081579418839,headlineOfferDocid:10818751396912078316,imageDocid:13710909047501614973,rds:PC_15698425103373783522|PROD_PC_15698425103373783522,gpcid:15698425103373783522,mid:576462775813088405,pvt:hg&hl=es&gl=ar&udm=28' ,
                     immersive_product_page_token :  'eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTA2NTczOTMwODE1Nzk0MTg4MzkiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxMDgxODc1MTM5NjkxMjA3ODMxNiIsImltYWdlRG9jaWQiOiIxMzcxMDkwOTA0NzUwMTYxNDk3MyIsInJkcyI6IlBDXzE1Njk4NDI1MTAzMzczNzgzNTIyfFBST0RfUENfMTU2OTg0MjUxMDMzNzM3ODM1MjIiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjE1Njk4NDI1MTAzMzczNzgzNTIyIiwibWlkIjoiNTc2NDYyNzc1ODEzMDg4NDA1IiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9 ',
                     serpapi_immersive_product_api :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTA2NTczOTMwODE1Nzk0MTg4MzkiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxMDgxODc1MTM5NjkxMjA3ODMxNiIsImltYWdlRG9jaWQiOiIxMzcxMDkwOTA0NzUwMTYxNDk3MyIsInJkcyI6IlBDXzE1Njk4NDI1MTAzMzczNzgzNTIyfFBST0RfUENfMTU2OTg0MjUxMDMzNzM3ODM1MjIiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjE1Njk4NDI1MTAzMzczNzgzNTIyIiwibWlkIjoiNTc2NDYyNzc1ODEzMDg4NDA1IiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9' ,
                     source :  'Galicia' ,
                     source_icon :   'https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn%3AANd9GcSPtKZnxNKf7DSEeGXsBoP5fz7nLfs6EKQ3apUrpw58HRLZRo4vaNQrdpiqayLyjSf09Ame5PfFL_tcorEEnyvis0er' ,
                     multiple_sources : true,
                     price :  '$ 310.148,92 ',
                     extracted_price : 310148.92,
                     rating : 4.5,
                     reviews : 626,
                     thumbnail : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPCWEZ9bIxPzu0J3tLML4xCMqUPtfGbcP8xSMmVF0dESIJamFHYzcBGHUmSWz09Ds3eWWcutVy0_9tKZgfZjTVA6KVw5CDgiwXKbtlZcxMUARwM9kD7I2skg' ,
                     serpapi_thumbnail :   'https://serpapi.com/images/url/ui6irnicDclJDoIwFADQEykoTiUxBkHmGiKTsjFSoCAy2W9ATuV1vI2-7ft-coCWiRyX1uT5biFNJhDXsyllcIOCTElTcSxv2rao6a7b_k-UjgnSiOfI4SFCsTE444s3BbCxvRhk3PkOZFpMnM3g4ipQ-eTgGuatUvXLSPaa7lduOPJIYUIahuQFwZu_IrAimkV3L5BWVtAvZYUW_dmK4RGRAfvSqceoVNbGnJX0B4-XPq8' ,
                     thumbnails : [
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPCWEZ9bIxPzu0J3tLML4xCMqUPtfGbcP8xSMmVF0dESIJamFHYzcBGHUmSWz09Ds3eWWcutVy0_9tKZgfZjTVA6KVw5CDgiwXKbtlZcxMUARwM9kD7I2skg' ,
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_0A9vbxRStA74K-cuPQxvwTOdxmcu7A3nxJoZ8gJbheEKtqpqg6mqfTa9jBM7iwD25KWr2VYlTJESFdSxM3Q2CYQU4zMvtr7gv8Y9fMM' ,
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEGFQilt3D9XGbV97gRFPC_SyjCBsL88RDYVMsq2Gipmbv2xZpyFtKh99a4Kv-oFc16Ri-U1qRaT4H1aYOt8lrFHQgYz-vsCbN9E2ohJY' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3vuIQKLtJH5ECjlWAw-HBmpap767MSXUFQCBfqvQdKhEht5XqOtO6igOMgTDZMdNoGWKFUU_OVqC4oUMCRwEy5CgAGWjziTgHraN6sG1Ab7BJbWVoLLxC4g' ,
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7OYTiJBvAPY42kBXDDhXusmzyA4PUhXnuV_h5QCXZhf9IhGBTRsHg4DhGhRgltaHiim6iuEdRVCIzBRhZBv3eo21cUeUQythfqLbV6GWv1IiXqQ2dgX4J' 
                    ],
                     serpapi_thumbnails : [
                          'https://serpapi.com/images/url/ui6irnicDclJDoIwFADQEykoTiUxBkHmGiKTsjFSoCAy2W9ATuV1vI2-7ft-coCWiRyX1uT5biFNJhDXsyllcIOCTElTcSxv2rao6a7b_k-UjgnSiOfI4SFCsTE444s3BbCxvRhk3PkOZFpMnM3g4ipQ-eTgGuatUvXLSPaa7lduOPJIYUIahuQFwZu_IrAimkV3L5BWVtAvZYUW_dmK4RGRAfvSqceoVNbGnJX0B4-XPq8' ,
                          'https://serpapi.com/images/url/C9AOrXicDcndEkJAGADQJ0Kh_Mw0zVZqhtlKVKObhsXShF0-bL1Nj9Xb1Lk9308BwDpbUbKatC8GWSpBUk9l2kEMJZFJUyld0TBW1nTJF_-z0T61diS8T5A1JOIUADJ0TyL90RfDGB5SUZHeQFot3OZmUjcpMscDzjidVzwPY-uxwkY5btSZd23VS_QMXSfYpoHAmq-uI_-sv_EArUEHM7JyjH8ySznG' ,
                          'https://serpapi.com/images/url/tTQr_HicDcndCoIwGADQJ5qmSTkhotQpWZZW0roJnaILf6b7kOxteqzeps7t-X4qACEtVS1aNkwCihxB1s6UUkIKnCmsa1RZdULwtlz3q_9ZmzDHHotcj0S8hrmDb16W4GUZk5P9OE9Peyv3phk7NDnIXve4aLJRf93FRCCoME6NYEQdYdoi5uiq9XF6MXwtpUcw64H4UUnfaJR2FmJX76od_QHP6jhz' ,
                          'https://serpapi.com/images/url/l2iFR3icDclZCoJAGADgE6mEGwkROrnkiuVGL-HWqKQz6p9Wp-o63aa-1-_7aQDorHBcPZTTi0JdMVAMPItnyKEt2ZL03NwQStsB78fd_xTVr7ZmGfLL4xg6LtiWqKPunqorY2k9zaksyd45i40QabdxCSun0RsQszGAQGpx4OHocPEqn5ipY8TxNUhGJJDYQ6dVf4kIq2bavdsIW1PuS7O5UQtZs4s0Ia77RAL-AXgNPfQ' ,
                          'https://serpapi.com/images/url/RimjIXicDclhCoIwGADQE5VoZihEOI1lROVIm_4JnbZvlDrbFOxQ3afb1Pv7vh_QWirPMOqWvSap62qmy9acc6ULLdicdY2hoJNStHzTr__n-cfKxYysTtlF7NHonzPbeiAahkAH1bwn3z4nQNshvcEyDmgOdzcCjC5E7bgdAgbCn7rYCdE4YthWJA2iNyKQo3FRd5bJkjqJJw33_lCmDr6OZiRoH1sVp_b-BzKpPlg' 
                    ],
                     pros : [
                         'Combina aspiración con función de trapeado.' ,
                         'Excelente validación por parte de los usuarios (4.5 estrellas con 626 reseñas), indicando un buen rendimiento en su segmento de precio.' ,
                         'Soporte para control y programación mediante aplicación móvil.' 
                    ],
                     contras : [
                        ' La tecnología de navegación no está especificada, lo que sugiere que probablemente carece de un sistema LiDAR, siendo menos eficiente que la competencia de gama alta. ',
                        ' La marca (Liectroux) es menos reconocida en el mercado, lo que puede generar dudas sobre el soporte a largo plazo.' 
                    ],
                     immersive_details : {
                         thumbnails : [
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYT9intDdEpj8215iNmOouS7V3NecEKlpC4sHP_JSEBAqd_dWxIoI_ZY2bvX3YRlWf7Vnt95Zt7VG0F1oLPI2esIAHZkJDr6jC92NvM1vQhMJBtfAAP2g1xA' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdpw7ZCZFR3BGNM7Z_PNZm_OmYjxF7DBEPatQNRzZgNvkkrJZ4lgQjmqVwxSHU63sSl21WK_y72pUWtiri_jnPWVhuQYDrvwkhN2vGMgY' ,
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTK2c1aaYkBJ6u8uPZdVm9oHY0aey_iFZUMaPdL88A63M4UrlCGoop7SAz7qajzwRX4cshz-GbFhuM6twzhEWKJn905tqlW_kqod07B60k' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmpnfMpgbDTowLbgPGrubgCsMBH6II2CmYEHtGzfDxnvfZjX9OVyeSAIrJYwk_FOCi3Cwwpt3gV4_eHwZKMr0aqNCIauqjwpDwadFELxFzP8wcBzzpRGrZng' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTil9xo2SZtIU4HBhAnLMYxGKbV-7WY0wFmiTno0_xXtKvvYnijuniVDSLw_X6GCo6GARbK4rD5DtfbCMZhReGS9NNtrEuZF6lYnFaFyhIwIB-glv_dFqad' ,
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSlgu38rDeFHHjbDq_6cYOMUGs2i-APtYXuwC-OMrZt91x9KHBkfscMhpFllV4jKuL_goI_EnsnIPM3VSEzbFS-mrGM4fWv8UU6MoskUYfnzH7zwsWe0-r' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTK6y3RQ1FuvDOlsxbhGJmE3O66zuIzkLiyHudRUgG8mTUCDu0YF-HG-jC8TMZIjC82OrJq8tnKQsLF607MDLVhdgR25ESmMJIW2vKexUZCDUgZeO1Pn4W4' 
                        ],
                         title :  'Aspiradora Robot Liectroux C30B Trapeadora 3 Modos 200m2 App Programable' ,
                         brand :  'LIECTROUX' ,
                         reviews : 625,
                         rating : 4.5,
                         price_range :  '$ 357.449-$ 399.999 ',
                         stores : [
                            {                               
                                 name :  'Galicia' ,
                                 logo :   'https://encrypted-tbn0.gstatic.com/faviconV2?url=https://tienda.galicia.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL ',
                                 link :   'https://tienda.galicia.ar/pequenos-electro/92409-aspiradora-robot-liectroux-c30b-trapeadora-3-modos-200m2-app-programable-06-lts-0650414773054.html?srsltid=AfmBOorXKUR61Jtf7-_E5WZqq1G2MwgEzuaysTy6UNzwfK-dz1GIdLg9TyE' ,
                                 title : ' Aspiradora Robot Liectroux C30B Trapeadora 3 Modos 200m2 App Programable 0.6 Lts' ,
                               
                                 details_and_offers : [
                                     'En stock para compras en línea' ,
                                     'Entrega gratuita' 
                                ],
                                 price :  '$ 310.148,92' ,
                                 extracted_price : 310148.92,
                                 shipping :  'Gratis' ,
                                 total :  '$ 310.148,92' ,
                                 extracted_total : 310148.92
                            },
                            {
                                 name :  'Mercadolibre.com.ar' ,
                                 logo :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.mercadolibre.com.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 link :   'https://www.mercadolibre.com.ar/aspiradora-robot-liectroux-c30b-negra/p/MLA44720693?matt_tool=38087446&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLA920420665&from=gshop' ,
                                 title :  'Aspiradora robot Liectroux C30B negra' ,
                                 tag :  'Mejor precio ',
                                 details_and_offers : [
                                    ' En stock para compras en línea' ,
                                    ' Entrega gratuita '
                                ],
                                 price :  '$ 257.821,00' ,
                                 extracted_price : 257821,
                                 shipping :  'Gratis' ,
                                 total :  '$ 257.821,00' ,
                                 extracted_total : 257821
                            },
                            {
                                 name :  'Carrefour' ,
                                 logo :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.carrefour.com.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 link :   'https://www.carrefour.com.ar/aspiradora-robot-liectroux-c30b-trapeadora-3-modos-200m2-app-programable-0-6-lts-1755514/p?idsku=255990&srsltid=AfmBOopvyeuZ9fI5sTszQ6LOk7GX3w7KWh5MzdAblvwlPRHpr_1cUz6X5Zg' ,
                                 title :  'Aspiradora Robot Liectroux C30B Trapeadora 3 Modos 200m2 App Programable 0.6 Lts' ,
                                 rating : 4.3,
                                 reviews : 49,
                                 details_and_offers : [
                                    ' En stock para compras en línea' 
                                ],
                                 price :  '$ 342.949,00' ,
                                 extracted_price : 342949,
                                 total : ' $ 342.949,00' ,
                                 extracted_total : 342949
                            }
                        ],
                         about_the_product : {
                             description :  'La Aspiradora Robot C30B posee múltiples modos de limpieza. Puede aspirar y trapear para que tengas tus suelos impecables siempre. La C30B puede limpiar fácilmente grandes espacios gracias a su depósito de gran tamaño, que le permite al robot limpiar durante más tiempo. Posee una baja estatura, la cual permitirá limpiar en lugares difíciles de alcanzar, como abajo de muebles o espacios reducidos. La C30B es la solución para la limpieza de tu casa. ¡Junto con la combinación de aspirador y mopa, la C30B tus pisos van a brillar!' ,
                             features : [
                                {
                                     title :  'Filtro HEPA' ,
                                     value :  'Sí' 
                                },
                                {
                                     title :  'Sin cable' ,
                                     value :  'Sí' 
                                },
                                {
                                     title :  'Compatibilidad con asistentes' ,
                                     value :  'Asistente de Google, Amazon Alexa' 
                                },
                                {
                                     title :  'Capacidad' ,
                                     value :  '0.35 litros' 
                                }
                            ]
                        },
                         ratings : [
                            {
                                 stars : 1,
                                 amount : 31
                            },
                            {
                                 stars : 2,
                                 amount : 11
                            },
                            {
                                 stars : 3,
                                 amount : 32
                            },
                            {
                                 stars : 4,
                                 amount : 83
                            },
                            {
                                 stars : 5,
                                 amount : 468
                            }
                        ],
                         user_reviews : [
                            {
                                 title :  'Simple, eficiente, potente, bajita, buen precio.' ,
                                 text :  'La altura es perfecta para pasar debajo de muebles bajitos, un poco ancha pero logra entrar y hacer su trabajo en el 97% de la superficie. Eficiente busca y limpia los lugares que le faltan, haciendo el trabajo rpidamente aprox 1 metro por minuto, la potencia media es ms que suficiente, bajo ruido. Excelente producto. ',
                                 user_name :  'andecastro-0' ,
                                 source : ' ebay.com' ,
                                 rating : 5,
                                 date : ' Hace 4 años' ,
                                 icon :   'https://lh3.googleusercontent.com/shsm/AGYqVK2lkFCjP5tHuNNy7-sSFIu0gou1FeDHPMmcZzdec9AiaqlSr_LNlCfa_S5HhCd5U1IN2A=w40-h40-c0x00000000-cc' 
                            },
                            {
                                 text :  'Muy buen producto. Cumple con mis espectativas. Si lo que buscan es un trapeador para porcelanato. En mi caso es pulido brillante y queda marcado con la mopa. Nada que no pueda solucionar un trapo seco despues de que termine el robot.' ,
                                 user_name :  'Matias Ferrari' ,
                                 source :  'Google Customer Reviews' ,
                                 rating : 5,
                                 date :  'Hace 3 años ',
                                 icon :   'https://lh3.googleusercontent.com/a-/ALV-UjUEjWeTFfXq36naMWZteQ1B0P6V7y1n1gBbTWwrrnLehv6E9cM' 
                            }
                        ],
                         videos : [
                            {
                                 title : ' La Mejor Aspiradora Robot Precio Calidad!! Liectroux C30B' ,
                                 link :   'https://www.youtube.com/watch?v=JgxVxwHHQmI' ,
                                 source :  'YouTube' ,
                                 channel :  'El Rincón de Cabra' ,
                                 duration :  '7:44' ,
                                 thumbnail :   'https://i.ytimg.com/vi/JgxVxwHHQmI/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mKDY-52XuludEyw9V0j82-mR5uqQ' 
                            },
                            {
                                 title :  'Aspiradora Robot Liectroux C30B Trapeadora 3 Modos 200m2 App ...' ,
                                 link :   'https://www.youtube.com/watch?v=y0PBLmGgllY' ,
                                 source :  'YouTube' ,
                                 channel :  'Bidcom' ,
                                 duration : ' 1:53' ,
                                 thumbnail :   'https://i.ytimg.com/vi/y0PBLmGgllY/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3nfgPylLnFlxMu-XRjl5o0Po5QGvQ'
                            },
                            {
                                 title :  'Robot Aspiradora Liectroux C30B l Unboxing y Revisión ... ',
                                 link :   'https://www.youtube.com/watch?v=mDi15vGHSRs' ,
                                 source :  'YouTube' ,
                                 channel :  'ScodelTh' ,
                                 duration :  '23:17' ,
                                 thumbnail :   'https://i.ytimg.com/vi/mDi15vGHSRs/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3kkFRWD4mHSgw3iqMOlNbnkRHvq0w ',
                                 preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcSdhfSNuOxCijvSyz1S2aHaV_sBS_09eR84Mw' 
                            }
                        ],
                         more_options : [
                            {
                                 title : ' Aspiradora Trapeadora Robot Sansei Blanco RVCS23 ',
                                 thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0H4IQO5MQGfaqez1LSBqUEGBpuFeyb8QoY-_8IBOfMTdWAd58Kk5SOVX1QS2vDW_iGiBURsQZxrL3XYREtekjr1zEUzRpGG8f7cFxrAxq-HrmWdA5b_ei' ,
                                 price :  '$ 199.999,00' ,
                                 extracted_price : 199999,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiOTAwNjIxNDkyMDAwNDk1MTkxMiIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6IjU5Njk4NjcwOTYyMDYyMTY1MzMiLCJpbWFnZURvY2lkIjoiMTExNzI3MTYzNDczOTg5NjkwOTkiLCJyZHMiOiIiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6Ijk0ODM3NjAyMDIxNzkwNjY2ODkiLCJtaWQiOiI1NzY0NjI3NzU4MTMwODg0MDUiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIiwicHZmIjpudWxsfQ%3D%3D' 
                            },
                            {
                                 title : ' Aspiradora Robot Electrolux Home-Speed ERB10' ,
                                 thumbnail :   'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTintCqzWYO1IS_AfL7TgSKJFDn9ECIs_4q0_fyWWZijMLJbMAIAFosuxMoOfL3G2u1j2bjV0h3OTSxkMwf7Kj1-0rQYENHkhnX7kd6F-A2XAhBFysATZPDWg' ,
                                 price :  '$ 188.888,00' ,
                                 extracted_price : 188888,
                                 reviews : 167,
                                 rating : 4.2,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTQwMDc3NzI4NzM5Nzc1OTY1NTIiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiI5MTUwNDY4Njk4OTcxMzc4OTM4IiwiaW1hZ2VEb2NpZCI6IjEyNjA4Mjc5NDg4NDc0MTc0MDQxIiwicmRzIjoiUENfOTQ0ODY4MTk1NDk3NjA0ODk5MnxQUk9EX1BDXzk0NDg2ODE5NTQ5NzYwNDg5OTIiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6Ijk0NDg2ODE5NTQ5NzYwNDg5OTIiLCJtaWQiOiI1NzY0NjI4NTUwMzk5Nzc3NjgiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIiwicHZmIjpudWxsfQ%3D%3D' 
                            },
                            {
                                 title : ' Xiaomi Aspiradora Robot Vacuum E5 ',
                                 thumbnail :   'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiyYM3Scc7sH6oCuF0hHeh_ofLwx1xzV0SwbCu8WeCI2B5BNAuFyJ8GXKWzPPb8O9Hmr_UnXRZlC-ubRdl7er1ShpW1gRDg86Fl6wfD3w',
                                 price : ' $ 171.957,00 ',
                                 extracted_price : 171957,
                                 reviews : 3000,
                                 rating : 4.7,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTIxNjU2NDA2ODM3NzY3MjAyMDAiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIzMjgxMDc1NzE5MzQ0NDY5NDcxIiwiaW1hZ2VEb2NpZCI6Ijc0MTk1NzUzNDQzMzQxMDA1MTIiLCJyZHMiOiJQQ18xMDI4Mjc0MTkxNjQ5NzIyNjk4NnxQUk9EX1BDXzEwMjgyNzQxOTE2NDk3MjI2OTg2IiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiIxMDI4Mjc0MTkxNjQ5NzIyNjk4NiIsIm1pZCI6IjU3NjQ2Mjg1MzEzNTgwNDEzNCIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9'
                            },
                            {
                                 title : ' Aspiradora Robot Gadnic 3 Modos de Limpieza y Trapeo' ,
                                 thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbamkL7TqGZ8cEaokj2d_Hb6zvn5EPSfNe8-Qs8hdCS1z7MMgPpwvSC7mG3SbbJcCgTrFjyW74Gnez_bafbjH2g5hr-_t0MviZI8NIg4QxFODfvtc3BDrHbg' ,
                                 price : ' $ 118.649,00' ,
                                 extracted_price : 118649,
                                 reviews : 1,
                                 rating : 5,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTY1NTUxODA4MzkyMDYyOTcyNDYiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiI2ODU0MjkwMDQxNDQxMTYzMTY4IiwiaW1hZ2VEb2NpZCI6IjExNTE0ODUyMTgxMzkxNDExMDIzIiwicmRzIjoiUENfMTIzNDAxMjM5MzkxMzQyNDQ2MjF8UFJPRF9QQ18xMjM0MDEyMzkzOTEzNDI0NDYyMSIsInF1ZXJ5IjoiYXNwaXJhZG9yYStyb2JvdCIsImdwY2lkIjoiMTIzNDAxMjM5MzkxMzQyNDQ2MjEiLCJtaWQiOiI1NzY0NjI3NzU4MTMwODg0MDUiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIiwicHZmIjpudWxsfQ%3D%3D' 
                            },
                            {
                                 title : ' Aspiradora Robot Philco RVCF25PI con Trapeadora' ,
                                 thumbnail :   'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdDo0o7uY2NwdWBaSXNSwc-b6CSxHAWFQLJLE-hU_TfV7wBqpUE5UV3efjvD20znAyOm8Gr5RlAun4HZPG4wMioY2g32spQe2mQhjqUNFKQlRbhg-UPekn' ,
                                 price :  '$ 219.999,00' ,
                                 extracted_price : 219999,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMjYxODc4NDQ2Njc2MTc3MTM1NyIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6Ijg2MDg2NzgxNzE3ODcyNzI0MDIiLCJpbWFnZURvY2lkIjoiNTUxOTU3Njc1NzAwNzc3NTM1NyIsInJkcyI6IiIsInF1ZXJ5IjoiYXNwaXJhZG9yYStyb2JvdCIsImdwY2lkIjoiODMyMzY4ODU0MTI1NTM5OTE4MyIsIm1pZCI6IjU3NjQ2Mjc3NTgxMzA4ODQwNSIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9' 
                            },
                            {
                                 title :  'Aspiradora Robot ATMA ATAR21C2PI Filtro Hepa Outlet' ,
                                 thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQE-ItOasbSJbPuabwXLGZ0fTNgitiXh8NCQccVxAO1vcp6i5rCNliHjHTKx2KzuagL80lWkFVer_jlCvN7I0yP3bVK9iEahSfPCJBuutwfq0WveB7WqBsWJA' ,
                                 price : ' $ 181.599,00' ,
                                 extracted_price : 181599,
                                 original_price : ' $ 199.999' ,
                                 extracted_original_price : 199999,
                                 reviews : 2,
                                 rating : 5,
                                 serpapi_link :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTY4MDAyNjYxMDkwMzEzMDUzMjEiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiI3NjI4MTM3MjA2MDAyMTQ3NDcxIiwiaW1hZ2VEb2NpZCI6IjY3ODg4MDEwNjk3NjEwMzcwMTEiLCJyZHMiOiJQQ18xMjA1NDA5MjA2Mzc4ODM0MTQxOHxQUk9EX1BDXzEyMDU0MDkyMDYzNzg4MzQxNDE4IiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiIxMjA1NDA5MjA2Mzc4ODM0MTQxOCIsIm1pZCI6IjU3NjQ2MjgzODk4NDI0NDQwNiIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMiLCJwdmYiOm51bGx9' 
                            }
                        ]
                    }
                },
                {
                     position : 31,
                     title :  'Aspiradora Robot iRobot Roomba J7' ,
                     product_id :  '14140919058950769517' ,
                     serpapi_product_api :   'https://serpapi.com/search.json?engine=google_product&gl=ar&google_domain=google.com&hl=es&product_id=14140919058950769517 ',
                     product_link :   'https://www.google.com/search?ibp=oshop&q=aspiradora robot&prds=catalogid:14140919058950769517,headlineOfferDocid:15703285674399689003,imageDocid:4273857647105204296,rds:PC_9233890498144907725|PROD_PC_9233890498144907725,gpcid:9233890498144907725,mid:576462600916801552,pvt:hg&hl=es&gl=ar&udm=28' ,
                     immersive_product_page_token :  'eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTQxNDA5MTkwNTg5NTA3Njk1MTciLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxNTcwMzI4NTY3NDM5OTY4OTAwMyIsImltYWdlRG9jaWQiOiI0MjczODU3NjQ3MTA1MjA0Mjk2IiwicmRzIjoiUENfOTIzMzg5MDQ5ODE0NDkwNzcyNXxQUk9EX1BDXzkyMzM4OTA0OTgxNDQ5MDc3MjUiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjkyMzM4OTA0OTgxNDQ5MDc3MjUiLCJtaWQiOiI1NzY0NjI2MDA5MTY4MDE1NTIiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIn0=' ,
                     serpapi_immersive_product_api :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTQxNDA5MTkwNTg5NTA3Njk1MTciLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxNTcwMzI4NTY3NDM5OTY4OTAwMyIsImltYWdlRG9jaWQiOiI0MjczODU3NjQ3MTA1MjA0Mjk2IiwicmRzIjoiUENfOTIzMzg5MDQ5ODE0NDkwNzcyNXxQUk9EX1BDXzkyMzM4OTA0OTgxNDQ5MDc3MjUiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjkyMzM4OTA0OTgxNDQ5MDc3MjUiLCJtaWQiOiI1NzY0NjI2MDA5MTY4MDE1NTIiLCJwdnQiOiJoZyIsInV1bGUiOm51bGwsImdsIjoiYXIiLCJobCI6ImVzIn0%3D' ,
                     source :  'Inovamusicnet' ,
                     source_icon :   'https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn%3AANd9GcQSedF1ldmZn22Js86zqq_GTQzk15w1z2QhxjGEwTl3dcwtk24wpoPSzAwRTTfiDDx3IYEEfQ9UVhBE3Fxes_b_Ld_OC2jzlzMS3qx7DTs' ,
                     multiple_sources : true,
                     price :  '$ 538.650,00 ',
                     extracted_price : 538650,
                     rating : 4.1,
                     reviews : 1100,
                     thumbnail :   'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFi0_ugGOz4T5UeSELgEl6BB42BpuZ2rT5H-j7uSANjJFYOKMHnxV7eWfjh5aWmnfwpLNAey5HiQg3cEXtnQLEGx2EJ_zNHj0XyNJ6P4Q' ,
                     serpapi_thumbnail :   'https://serpapi.com/images/url/B9JItHicDcltD0JAAADgX-Rl8rJsrbEdJp1EUV9M5xyWc3EW_k0_q39Tz9fn-6k5Z6MpSZiiYWEclwJ_UFkkIy94g0TUd9JY94w1lOxfu_-ZFiy3Ljo7jZxPxA1XNdEuOAYBAU_dtlXFZtNdGRLNE1pjii3Y-s4tPBw9Ol8NnFZtrRVpR6s3C6CFF81rIrJBIOM0CoA7K8DPV-i1crZAXz-p0Q_SqziK' ,
                     thumbnails : [
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFi0_ugGOz4T5UeSELgEl6BB42BpuZ2rT5H-j7uSANjJFYOKMHnxV7eWfjh5aWmnfwpLNAey5HiQg3cEXtnQLEGx2EJ_zNHj0XyNJ6P4Q' ,
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuDagVV4E9Qvk7Q6GMFmo5sGkmvkffz7V_YMvJaM7XiSsKih02_2czcmwoqPQNUKsajejA-If3KAWYT1tcpZpnNlH5Rw3edGgGrEKONugNbiXG5cJaIgeVlw' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNyjxmWkTGl18er5hj9WNOvZHngcuTBk4NFCg5qn4Sr6OF5xtKacmXjpydwVWGlDGuq15XUNy_p_Vu4MXbQ_rf5f-plKNQ1_aDhytXvw-n' ,
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQgBJiNySHUAuhVUfGtAkGXyPy4MbljKloEwmSUT0ycOw1pCKey4Oblf2dVWIA4ndp08sM_4gvQOD1929kvVEFQ-EPuGiVwt0MOwySOSeg' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZs_GYD87XBOBdYSgNupS9EHI6jWWGuna_H4RqPt_jM0UgSC9vACGqyjUFwbdrBhrqkW7ZAgVTWAWvgq0h99WhnBYPEscGMwQT4cuiQ88k6UqR1DqhSa7n' 
                    ],
                     serpapi_thumbnails : [
                          'https://serpapi.com/images/url/B9JItHicDcltD0JAAADgX-Rl8rJsrbEdJp1EUV9M5xyWc3EW_k0_q39Tz9fn-6k5Z6MpSZiiYWEclwJ_UFkkIy94g0TUd9JY94w1lOxfu_-ZFiy3Ljo7jZxPxA1XNdEuOAYBAU_dtlXFZtNdGRLNE1pjii3Y-s4tPBw9Ol8NnFZtrRVpR6s3C6CFF81rIrJBIOM0CoA7K8DPV-i1crZAXz-p0Q_SqziK' ,
                          'https://serpapi.com/images/url/btOXxXicDclJDoIwAADAF7EoIsHEGBK1KqGKKKIXUkopZa22QORVfsff6Fzn-8ml5GKhaaTBrzeXJFVk0ugqFRJJhlXc1prIW85ZQ1fP5f8WDkxtgINujWgYzja235eWPwfetm5NAcq6L7NstML47vUH5FkRC4TLcn0aT_GI66F9nnx4dQUqSOEo-8xwndv9MpGYP3gDq515HgySAgpeG_cIOwoTFgETH9CekrAaftFZP54' ,
                          'https://serpapi.com/images/url/XoZzEnicDcnbCoIwAADQL1KRXKQQUYkG0sQyHb2ITt28zanzst_pr_qbOq_n-6FC8MnStILhUXJR5IrI2E4lk0hFhVXcd9pEe84rRk7D8X_WGeamix9Q1lsXN6Hb6odiBLQ2Y-gv7xsjeA4vjQGdKwEDM57j3nfAJrwUd6jmMl-j2G1tdx50gF5QJjyJZuOOsiAZS1AqvPVgoCepTaVAy6qwH5WZO1I' ,
                          'https://serpapi.com/images/url/YISwGHicDcldDoIgAADgE_k7H9KtNSujcoqOtN5aIiKpSIkyjtOxuk19r9_300oppsCyCMdvLSSpDVlxx6STfEiGTTwO1tSOQjBON6_1_4IwrX2Ac7o9s1SjYxHObVk0QIYduOlMe0nVP-N-jNSAioutMVSO2MVEe7DqG7cur6fQ47WwV1Ny9-iSw73ju363lNEhN6JsBqxU0k6g0ggiQn86JznZ' ,
                          'https://serpapi.com/images/url/zYunbHicDcldDoIgAADgE5W2mopba2JFPWT-RvbiFB1oC0Ew56W6T7ep7_X7fpjWQrmG0XAyzEI39UJXfL2kSpe6JUvSvwzFeiFaTndy-z_XC2qASPpQBcr3jn2HV1jnCQ1GkYDD6Wx1GKORl8VpE8tQF93FzGjig7fnIzl32XGq6gGyQT6x_fDoLcUeflNpMgAw4zAPD4qgyxSlGzK2keM8rUzGq71kSWnzHyF_Pg4' 
                    ],
                     pros : [
                         'Tecnología de navegación V-SLAM avanzada con una cámara frontal para la detección y evasión precisa de obstáculos pequeños (P.O.O.P. - Pet Owner Official Promise).' ,
                         'Alto volumen de reseñas (1100) que validan el rendimiento de un modelo de gama alta de iRobot. '
                    ],
                     contras : [
                         'Esta versión no incluye la estación de autovaciado (ausencia del '+' en el modelo). ',
                         'Precio elevado para un modelo sin estación de autovaciado y sin la precisión del mapeo LiDAR en todas las condiciones.' 
                    ],
                     immersive_details : {
                         thumbnails : [
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkvOeF-ukHHN7eLMeFbi8j_JiXJ9VDHV9huc3sAZiW0kjna1p4_wPh_tN0GJ_piInnX4uBYs2D5tUZL_-JY0TVauyCCn8d2qFOQ4CbZ3QXOVir5zrUIr5Z' ,
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUNXjkgKAhGttn1atBU_y-3vTP0vAf56yVLf4EdhXug9BGZbsUh4xIxQe5gYOafDHH8NWX1h8hPtbVlDR0-HFlKA1kJh8GH2VROTenJ85GhOY-uV63Bvo4G64' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMBDc9Z5m8ETBR_aKEzanjPu95RFSU-4FapryEFFoyH8DncKRI9ABzVLesOnNHHyBZoLEf7VuCERoD-S1_cT2lRyKxvCg4GMFr1c2q7Ana-3XlPV2cZAE_vg' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_Q6Hq05I6f0B0od3vidSoGTD4IUhYZuXQ08WkGiGD4u937jk8cpr_sl64cGXg9k0fiSGyn7E0p2qYUn5vM3MZEsnPGBzYyhJ1hhIIA4V9XYKnCp9IiYMX2w' ,
                              'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIDJpJpBZZC-_ODM2_Y-9zcetV-QqhCXNNhsu9Kp_3Q9gyqlpsYTLs8Pk_ilwvzhM-X7rQOQ5ePrp6dqK0HNWq33CIlNrsafZWuNP9KUtqY0lr_lJ5D1MG' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_x1UyHT0FBSko9Hr9JQ3jIbZ0iIWAhymrSCb8Ebv5mS0zwDGDthnHxHwS92GwJIDp0tkvVS8qdDZkS7n6N5D8XLHuusADhVfRarKSvZywsWqenf4yvBcD4w' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLQ1y5wOlaREIdQEwi2eJTzJlO7cSSE78M42HO5YrdJw4NdgcqpSguX_-VZGq5Te8lM3PO4dch5CypbAG3Yk1P990aBcDhjX_1T3FMxBv7' ,
                              'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkfh7ptOJW9hYMtBKHN-XjoIG75-R6C026bWDhNYHK_0R2tL-L8WwNw-VIak0C0EOkiVjGYuseFHTvrbEcIMeLQe9cE1opwcq-kW-K7yO3ca-WjONLkhZnNg' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0avRF4qKE5OjevEf3Pd5uCY5wX53gSb3dQKuTo4r_mwK6Iyg06E-5fprOoRpQ_Nz7pTp7ZKio7Xu90dY_T-dzGYLGSm7b_Vqg8j-jztY' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeXehN7bakOjNve0yYiZB00IsnvpGo9rzMZKcuB4Q4wMf3LyDyfQ4_yR2BCQ-Ogfs6KvHzrtgPICIfljG4_xG7zy-4-h5s9PPZSlBtlirp' ,
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6B87jviqLuQTa0qGrGdoLObmj5DrtBprW8kZZKDh4pXJSbmbe0Q7MtqlhxkMrN6wEAFamT1VazEomBFPpC4cXw0Pv1j49K1ljRifefmU' ,
                              'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQIbkWaW76vVbmFbuLuOsfRohIdUwSPECT6gd3RZ-NKtW3ALaCWc1bB1ueo4afpk1AmWvvcNkotLWIfNL3xvpjhHK3NSckvsUs52T7Ej4PfHz0zM5ci1Fa0lQ' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPP861cy686cq-Ld4UJCv8o8ZeulsFm2OHuxc1sbG-HUt6jmro-7nghW3SIZUhrlP5TW2WPHU2xCfOOcNh71uD9dX1Frz9bYA5XIC2x1LDsRaPQO1vA-bovGg' ,
                              'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScBaRXOO7Eh83Ay-CjDsStXkJvKG9taaZXw6an9j1D-MEu4gEPUsx_V9qpy1BcouUyvOtCfQGcEZxp12shqTfxqohA9sMU0W_1PYFYmwoA' 
                        ],
                         title :  'Aspiradora Robot iRobot Roomba J7' ,
                         brand :  'iRobot' ,
                         reviews : 1094,
                         rating : 4.1,
                         price_range : ' $ 419.999-$ 716.017 ',
                         stores : [
                         {
                                 name :  'Inovamusicnet' ,
                                 logo :   'https://encrypted-tbn0.gstatic.com/faviconV2?url=https://www.inovamusicnet.com&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 link :   'https://www.inovamusicnet.com/producto/irobot-roomba-j7-7150-robot-aspirador-conectado-con-wi-fi-identifica-y-evita-obstaculos-como-residuos-y-cables-de-mascotas-mapeo-inteligente-funciona-con-alexa-ideal-para-pelo-de-mascotas-alfom/?srsltid=AfmBOopNRlOUc1JjEnzCmWtc31rir3L2FSAWbqYylm5meQNBJWLoRlm2GwY' ,
                                 title :  'iRobot Roomba J7 (7150) Robot Aspiradora Wi-Fi - Evita Obstáculos, Mapea Inteligente, Compatible Alexa, Ideal para Mascotas, Alfombras y Pisos Duros ',
                                 details_and_offers : [
                                     'En stock para compras en línea' ,
                                     'Entrega gratuita' ,
                                     'Devoluciones por 10 días' 
                                ],
                                 price : ' $ 538.650,00' ,
                                 extracted_price : 538650,
                                 shipping :  'Gratis' ,
                                 total :  '$ 538.650,00' ,
                                 extracted_total : 538650
                            },
                            {
                                 name :  'Mercadolibre.com.ar' ,
                                 logo :   'https://encrypted-tbn1.gstatic.com/faviconV2?url=https://articulo.mercadolibre.com.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 link :   'https://articulo.mercadolibre.com.ar/MLA-1468474551-robot-aspirador-irobot-roomba-j7-7150-con-conexion-wifi-_JM?matt_tool=38087446&utm_source=google_shopping&utm_medium=organic' ,
                                 title :  'Robot Aspirador Irobot Roomba J7 (7150) Con Conexión Wifi' ,
                                 details_and_offers : [
                                    ' En stock para compras en línea' ,
                                     'Entrega gratuita' 
                                ],
                                 price :  '$ 1.082.198,52' ,
                                 extracted_price : 1082198.52,
                                 shipping :  'Gratis' ,
                                 total :  '$ 1.082.198,52' ,
                                 extracted_total : 1082198.52
                            },
                            {
                              
                                 name :  'Igra Shop' ,
                                 logo :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.igrashop.com.ar&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 link :   'https://www.igrashop.com.ar/productos/irobot-aspiradora-robot-roomba-j7-7150/?variant=564268584&pf=mc&srsltid=AfmBOopPoxIhvrWx901eN77E6dBgL4J2ZNIjSK5jGsBkGyUkMjg32iZsmns' ,
                                 title :  'Irobot - Aspiradora Robot Roomba J7 (7150)' ,
                                 details_and_offers : [
                                     'En stock para compras en línea ',
                                    ' Entrega gratuita ',
                                     'Devoluciones por 10 días '
                                ],
                                 price :  '$ 1.100.000,00' ,
                                 extracted_price : 1100000,
                                 shipping :  'Gratis' ,
                                 total :  '$ 1.100.000,00 ',
                                 extracted_total : 1100000
                            }
                        ],
                         about_the_product : {
                             title :  'Robot aspirador Roomba® j7' ,
                             link :   'https://www.irobot.es/es_ES/irobot-roomba-j7/J715840.html' ,
                             displayed_link : ' irobot.es ',
                             icon :   'https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.irobot.es&client=SHOPPING&size=32&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2' ,
                             description :  'La Roomba J7 utiliza un sistema de limpieza superior de tres fases y dos rodillos de silicona para una limpieza diaria potente, y esta guiado por la tecnologia de trazado de mapas inteligente Imprint que aprende, crea mapas y se adapta a cada habitacion. El sistema de limpieza superior de tres fases y los cepillos de goma dobles proporcionan una limpieza potente, guiada por la tecnologia de trazado de mapas inteligente que aprende, crea mapas y se adapta a cada habitacion. ',
                             features : [
                                {
                                     title :  'Sin bolsa' ,
                                     value :  'Sí' 
                                },
                                {
                                     title :  'Marca' ,
                                     value :  'iRobot' 
                                },
                                {
                                     title : ' Sin cable' ,
                                     value :  'Sí' 
                                },
                                {
                                     title :  'Para mascotas ',
                                     value :  'Sí' 
                                },
                                {
                                     title :  'Compatibilidad con asistentes' ,
                                     value :  'Asistente de Google, Amazon Alexa '
                                },
                                {
                                     title :  'Peso' ,
                                     value :  '3.4 kg' 
                                },
                                {
                                     title :  'Capacidad' ,
                                     value :  '33.9 litros'
                                }
                            ]
                        },
                         ratings : [
                            {
                                 stars : 1,
                                 amount : 129
                            },
                            {
                                 stars : 2,
                                 amount : 42
                            },
                            {
                                 stars : 3,
                                 amount : 80
                            },
                            {
                                 stars : 4,
                                 amount : 213
                            },
                            {
                                 stars : 5,
                                 amount : 630
                            }
                        ],
                         user_reviews : [
                            {
                                 title :  'Una gran ayuda' ,
                                 text : ' Las primeras impresiones están siendo muy buenas, primero se aprende la casa y hace un plano de ella, de manera que puedas asignarle tareas concretas como por ejemplo: la cocina y el baño. Sabes esquivar los obstáculos con lo que no va chocándose con todo, y si estás en su camino, calma, no te atropellará, te esquivará sin problemas. Hace foto grafías de los obstáculos que le resultan dudosos para que luego los revises y le indique si es algo temporal o permanente, de esa manera va aprendiendo a ser cada vez más eficaz. El nivel de ruido que hace es un poco más bajo que el de una aspiradora standard, con la salvedad de cuando se desplaza de un habitáculo a otro suena mucho menos. La capacidad del depósito es bastante aceptable y tarda muchos días en llenarse, además, si así lo configuras, la propia aplicación te avisa de que toca vaciarlo. La durabilidad de los accesorios que se desgastan también está monitorizada por la aplicación, en función de las horas de uso que tengan. Otras opciones que tiene la aplicación es programarla en la hora que elijas, así como elegir el nivel de limpieza que necesites. Otro detalle que me parece interesante es que si tiene una tarea muy intensiva y se queda sin batería durante su tarea, se cargará y volverá a la faena de forma automática hasta terminarla. Por supuesto los niveles de carga de la batería están bien visibles en la aplicación. El aspirado es bastante potente y va trazando un patrón que le permite no dejarse nada por aspirar, tiene un cepillo lateral redondo que sirve para las esquinas y los bordes de las paredes, que tiende a acumularse mucha porquería en ellos. De momento no ha tenido ningún atasco de pelos ni nada en los rodillos, así que el sistema parece estar bastante bien diseñado, como decía en el título una gran ayuda para mantener el suelo limpio sin esfuerzo.' ,
                                 user_name :  'Mati' ,
                                 source :  'worten.es' ,
                                 rating : 5,
                                 date :  'Hace 3 años ',
                                 icon :   'https://lh3.googleusercontent.com/shsm/AGYqVK3o3P7qozpbiYAXiVdazXN8vsx8omSuQC0EwkP4r7cqErN3qAdRSl3F3m1rSO0drjq_4w=w40-h40-c0x00000000-cc' 
                            },
                            {
                                 title :  'El irobot Roomba j7 me ha convencido por completo.' ,
                                 text : ' La instalación fue muy fácil. Enchufe la estación de carga en el enchufe, cargué el robot, descargue la aplicación y listo. Durante las dos primeras ejecuciones de limpieza, el J7 creó un mapa de limpieza Disponemos de 2 plantas + sótano. Y entonces tuve 3 tarjetas creadas. En estos mapas, puede usar la aplicación para insertar áreas restringidas (que el robot no limpia) y nombrar habitaciones individuales. De esta manera, puede enviar el robot a un área específica. Tenemos un perro y un bebé de 8 meses. Así que tenía que pasar la aspiradora todos los días. Ahora Roomba aspira todos los días. Eso me ahorra mucho tiempo. Roomba es minucioso en la limpieza. Limpia las alfombras sin esfuerzo. No tiene problemas con las cortinas. Lo que me molesta un poco es el tiempo que se tarda en aspirar un piso (80 metros cuadrados) tarda 1 hora y 20. Es bonito y plano, por lo que también puede aspirar debajo de la cama. Si reconoce un obstáculo (juguetes, zapatos), le toma una foto y después puedes calificar este obstáculo en la aplicación. Un pequeño ayudante muy útil que hace que mi trabajo doméstico diario sea más fácil.' ,
                                 user_name :  'Ruben' ,
                                 source :  'worten.es' ,
                                 rating : 5,
                                 date :  'Hace 3 años ',
                                 icon :   'https://lh3.googleusercontent.com/shsm/AGYqVK3toPPNEW0OBdutWxCD_mbGWibnDTqIu-LUJg9HvwXbGFgdWuLlo27AA0Y94KnmpZKHVg=w40-h40-c0x00000000-cc' 
                            }
                        ],
                         videos : [
                            {
                                 title :  'Aspiradora Robot Roomba J7 Irobot - 94J715030' ,
                                 link :   'https://www.youtube.com/watch?v=b13Nl-3rmuI' ,
                                 source :  'YouTube' ,
                                 channel :  'Tienda Newsan ',
                                 duration :  '0:39' ,
                                 thumbnail :   'https://i.ytimg.com/vi/b13Nl-3rmuI/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3kT1EWuuw0MQlCM6ImeMUugu7CtKg' 
                            },
                            {
                                 title :  'Probamos el Roomba j7+, el robot aspirador que no se comerá tus ...' ,
                                 link :   'https://www.youtube.com/watch?v=DT8FTbJ5gaE' ,
                                 source :  'YouTube' ,
                                 channel :  'Expansión' ,
                                 duration :  '2:57' ,
                                 thumbnail :   'https://i.ytimg.com/vi/DT8FTbJ5gaE/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3lfZD2hgg1LlgvFuLkOy2-GinLwlQ'
                            },
                            {
                                 title :  'LIMPIEZA TOTAL iRobot Roomba j7+ | Filtro | Cepillos | Depósito' ,
                                 link :   'https://www.youtube.com/watch?v=Izm2P9CWrJk' ,
                                 source :  'YouTube' ,
                                 channel :  'MrBaixa' ,
                                 duration :  '12:23' ,
                                 thumbnail :   'https://i.ytimg.com/vi/Izm2P9CWrJk/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3k0MIh3gUbnkSLlgSzP81jEfAZCnQ' ,
                                 preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQBBwS9pnRdkvU01DhCMPk9VdnwLAFXqT32dA' 
                            },
                            {
                                 title :  'Roomba j7 + vs. COMBO 10 MAX + Autowash' ,
                                 link :   'https://www.youtube.com/watch?v=CKoiaQloDeA' ,
                                 source :  'YouTube' ,
                                 channel :  'Prestazion.com' ,
                                 duration :  '3:55' ,
                                 thumbnail :   'https://i.ytimg.com/vi/CKoiaQloDeA/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3lhGZR2Cm7xkjnMatufNr5IpU3iUw' ,
                                 preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRr0_0cIpIV8GJOojSys9-AmczopGSmfyclrA' 
                            },
                            {
                                 title :  'iRobot Roomba J7: tu aliado para una limpieza eficiente' ,
                                 link :   'https://www.youtube.com/watch?v=sf-fNeTso9A' ,
                                 source :  'YouTube' ,
                                 channel :  'Hiraoka' ,
                                 duration :  '0:47' ,
                                 thumbnail :   'https://i.ytimg.com/vi/sf-fNeTso9A/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3mlblCZlNGsE9QjQevCc093KfUumg' 
                            },
                            {
                                 title :  '¡No dejes escapar a uno de nuestros robots más vendidos! Roomba ...' ,
                                 link :   'https://www.instagram.com/reel/DOJH1b6kfs9/' ,
                                 source :  'Instagram' ,
                                 channel :  'irobot_mx' ,
                                 duration :  '0:30' ,
                                 thumbnail :   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAm5nSWzE0QNOQlHCRuOh2fPbO0BoS25PsT4Av1QCmGLx6g&s' 
                            },
                            {
                                 title :  'iRobot Roomba J7 Vale a Pena? Análise Completa do Melhor ...' ,
                                 link :   'https://www.youtube.com/watch?v=iZR9R7YjKOM&pp=0gcJCfwAo7VqN5tD' ,
                                 source :  'YouTube' ,
                                 channel : ' João Sanches' ,
                                 duration : ' 6:58' ,
                                 thumbnail :   'https://i.ytimg.com/vi/iZR9R7YjKOM/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3m4hemncn8v6j_sTO2GN0DBv2_bbQ',
                                 preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRdhcLM6SHO0VXC9hsvxcg35C8cBi7E0sp-Xg '
                            },
                            {
                                 title :  'iRobot Roomba j7 Robot Vacuum 7150 REVIEW' ,
                                 link :   'https://www.youtube.com/watch?v=LHJmzpyAdfs' ,
                                 source :  'YouTube' ,
                                 channel :  'Just A Dad Videos' ,
                                 duration :  '5:06' ,
                                 thumbnail :   'https://i.ytimg.com/vi/LHJmzpyAdfs/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3lj38i0EAEvrPJdZ6pQHaUOx_1hqw' 
                            },
                            {
                                 title :  'Roomba j7+, EL ROBOT ASPIRADOR DEFINITIVO (se vacía solo)' ,
                                 link :   'https://www.youtube.com/watch?v=M2mnWvHlZ3A' ,
                                 source :  'YouTube' ,
                                 channel :  'Topes de Gama' ,
                                 duration : ' 9:28' ,
                                 thumbnail :   'https://i.ytimg.com/vi/M2mnWvHlZ3A/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3moCEgCf795bXsRkQDE5jDolc_hpg' 
                            },
                            {
                                 title :  'Roomba Combo J7: 2-in-1 Robot Vacuum Cleaner – Vacuums and ...' ,
                                 link :   'https://www.youtube.com/watch?v=t5UXSvdb3YE ',
                                 source :  'YouTube' ,
                                 channel :  'Quero Comprar ',
                                 duration :  '10:30' ,
                                 thumbnail :   'https://i.ytimg.com/vi/t5UXSvdb3YE/mqdefault.jpg?sqp=-oaymwEGCMACELQB&rs=AMzJL3nsm-xATr2174iAQGOQ3kkIMCofNg' ,
                                 preview :   'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQOmAq9uBSQtUSGFj4Jm5-OIKgK17oXdowxVQ'
                            },
                            {
                                 title :  'Esta es tu última para adquirir un robot iRobot de la aclamada ...' ,
                                 link :   'https://www.instagram.com/reel/DLPuoYFzw_E/' ,
                                 source :  'Instagram' ,
                                 channel :  'irobot_mx' ,
                                 duration :  '0:06' ,
                                 thumbnail :   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNNw_5BU1qyswhrPKKQwfvUZLtsBt5YWP08btnrIn3rM9Sg&s' 
                            },
                            {
                                 title : ' ¡Limpieza inteligente sin esfuerzo con iRobot Roomba Combo j7+ ...' ,
                                 link :   'https://www.facebook.com/irobot.mx/videos/limpieza-inteligente-sin-esfuerzo-con-irobot-roomba-combo-j7-un-robot-2-en-1-que/835860141789793/' ,
                                 source :  'Facebook' ,
                                 channel :  'iRobot' ,
                                 duration :  '0:50' ,
                                 thumbnail :   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJsBP3tCj7bAXGVIKavQH6ULYZ6ndcPEiw2vC9ikUz_GQ5g&s' 
                            }
                        ],
                         discussions_and_forums : [
                            {
                                 title :  '¿Vale la pena la diferencia de precio entre la j7 y la j7+? : r/roomba' ,
                                 link :   'https://www.reddit.com/r/roomba/comments/qrzhig/is_the_price_difference_between_the_j7_and_j7/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 3 años' ,
                                 comments : 12,
                                 items : [
                                    {
                                         snippet :  'definitivamente' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/qrzhig/comment/iapunml/?tl=es-es' ,
                                         top_answer : true,
                                         votes : 1
                                    },
                                    {
                                         snippet :  'El + incluye la base de autovaciado y sí, en mi opinión, vale la pena. De hecho, si tuviera que elegir entre la evitación de obstáculos con IA y la base de limpieza, me quedaría con la base de limpieza.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/qrzhig/comment/hkofkt4/?tl=es-es' ,
                                         votes : 1
                                    },
                                    {
                                         snippet : ' El mejor Roomba para moqueta de pelo corto y madera que no se atasque en un salón hundido. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/qrzhig/is_the_price_difference_between_the_j7_and_j7/?tl=es-es#:~:text=El%20mejor%20Roomba%20para%20moqueta%20de%20pelo,no%20se%20atasque%20en%20un%20sal%C3%B3n%20hundido.' 
                                    },
                                    {
                                         snippet :'  Cuando lo pongo a limpiar mi apartamento de 1.200 pies cuadrados, se vacía solo de 1 a 3 veces durante la limpieza.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/qrzhig/is_the_price_difference_between_the_j7_and_j7/?tl=es-es#:~:text=Cuando%20lo%20pongo%20a%20limpiar%20mi%20apartamento,1%20a%203%20veces%20durante%20la%20limpieza.' 
                                    },
                                    {
                                         snippet :'También creo que es un poco más rápido y más sensible al moverse y responder a las cosas mientras limpia, y la cámara frontal montada le ayuda a navegar mejor.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/qrzhig/is_the_price_difference_between_the_j7_and_j7/?tl=es-es#:~:text=Tambi%C3%A9n%20creo%20que%20es%20un%20poco%20m%C3%A1s,frontal%20montada%20le%20ayuda%20a%20navegar%20mejor.' 
                                    }
                                ]
                            },
                            {
                                 title :  'Estoy dudando entre un Roomba i3 y un j7 : r/roomba' ,
                                 link :   'https://www.reddit.com/r/roomba/comments/14p2wib/im_hesitating_between_a_roomba_i3_and_a_j7/?tl=es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date : ' Hace 2 años' ,
                                 items : [
                                    {
                                         snippet :  'Tiene un contenedor autovaciable que contiene hasta 60 días de suciedad y desechos*. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/14p2wib/im_hesitating_between_a_roomba_i3_and_a_j7/?tl=es#:~:text=Tiene%20un%20contenedor%20autovaciable%20que%20contiene%20hasta%2060%20d%C3%ADas%20de%20suciedad%20y%20desechos*.' 
                                    },
                                    {
                                         snippet :  'El mapeo no está sincronizado cada dos ejecuciones, por lo que tengo que restablecer la aspiradora Roomba y el wifi tres veces cada vez, al menos dos veces por'  ,
                                         link :   'https://www.reddit.com/r/roomba/comments/14p2wib/im_hesitating_between_a_roomba_i3_and_a_j7/?tl=es#:~:text=El%20mapeo%20no%20est%C3%A1%20sincronizado%20cada%20dos,cada%20vez%2C%20al%20menos%20dos%20veces%20por' 
                                    },
                                    {
                                         snippet :  'Los filtros reemplazables deben aspirarse cada dos días, al menos ahora debido al exceso de polvo del exterior.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/14p2wib/im_hesitating_between_a_roomba_i3_and_a_j7/?tl=es#:~:text=Los%20filtros%20reemplazables%20deben%20aspirarse%20cada%20dos,debido%20al%20exceso%20de%20polvo%20del%20exterior.' 
                                    }
                                ]
                            },
                            {
                                 title : ' ¿Alguien tiene un combo j7+ que no deje rayas mientras friega? : r/roomba ',
                                 link :   'https://www.reddit.com/r/roomba/comments/13ldi41/does_anyone_have_a_j7_combo_which_doesnt_streak/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 2 años' ,
                                 comments : 14,
                                 items : [
                                    {
                                         snippet :  'Lo que me funcionó: Había estado lavando a mano las almohadillas de microfibra en mi fregadero con Dawn Powerwash. Y se me ocurrió que normalmente se sentirían bastante rígidas una vez que se secaran, probablemente porque es difícil enjuagar hasta la última gota de jabón (aunque siento que me quedaría allí y enjuagaría _para siempre_). Entonces creo que las pequeñas fibras simplemente no absorbían tanta agua como deberían, y también estaban un poco enmarañadas y no hacían contacto con el piso muy bien. Probé lavar las almohadillas en mi lavadora en un ciclo delicado con enjuague adicional, y parece haber hecho una gran diferencia. La almohadilla se carga de agua mucho mejor ahora, y no se me queda ninguna raya.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/13ldi41/comment/kwydfrq/?tl=es-es' ,
                                         top_answer : true,
                                         votes : 1
                                    },
                                    {
                                         snippet :  'Cambia la configuración para fregar. Hay una que tiene líquido extra, así como una configuración de fregado. Encuentro que usar esas eliminó las rayas.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/13ldi41/comment/kishzlm/?tl=es-es' ,
                                         votes : 1
                                    },
                                    {
                                         snippet :  'Cuando trapeo mis pisos, no se secan exactamente de manera uniforme, lo cual no me importa realmente siempre y cuando estén limpios y sin rayas cuando estén sec' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/13ldi41/does_anyone_have_a_j7_combo_which_doesnt_streak/?tl=es-es#:~:text=Cuando%20trapeo%20mis%20pisos%2C%20no%20se%20secan,limpios%20y%20sin%20rayas%20cuando%20est%C3%A9n%20sec' 
                                    },
                                    {
                                         snippet :  'También es terrible para fregar, independientemente de lo que se haga (no tiene oscilación o vibración, por lo que es horrible para eliminar la suciedad seca y ' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/13ldi41/does_anyone_have_a_j7_combo_which_doesnt_streak/?tl=es-es#:~:text=Tambi%C3%A9n%20es%20terrible%20para%20fregar%2C%20independientemente%20de,horrible%20para%20eliminar%20la%20suciedad%20seca%20y' 
                                    },
                                    {
                                         snippet :  'Incluso en alta potencia, deja rayas, pero también deja MUCHA solución en las rayas húmedas.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/13ldi41/does_anyone_have_a_j7_combo_which_doesnt_streak/?tl=es-es#:~:text=Incluso%20en%20alta%20potencia%2C%20deja%20rayas%2C%20pero,deja%20MUCHA%20soluci%C3%B3n%20en%20las%20rayas%20h%C3%BAmedas.' 
                                    }
                                ]
                            },
                            {
                                 title : ' ¿Roomba J7 o I7? : r/roomba' ,
                                 link :   'https://www.reddit.com/r/roomba/comments/t23umi/roomba_j7_or_i7/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 3 años' ,
                                 comments : 8,
                                 items : [
                                    {
                                         snippet :  'Esto tiene una comparación de Roomba i7 vs j7:' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/t23umi/comment/kw42k6l/?tl=es-es' ,
                                         top_answer : true,
                                         votes : 1
                                    },
                                    {
                                         snippet :  'Si bien es mejor obtener el j7, como la mayoría ha destacado, recientemente adquirí el i7 (estaba actualizando desde mi antigua serie 800). Dos razones: el i7 está disponible a un precio realmente barato, con excelentes ofertas. Además, personalmente creo que la primera iteración de una nueva tecnología suele ser propensa a errores. Preferiría optar por la siguiente iteración, que es más estable y iRobot podría solucionar cualquier problema de la experiencia con el j7. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/t23umi/comment/hzl7r3m/?tl=es-es' ,
                                         votes : 1
                                    },
                                    {
                                         snippet :  'El robot lo maneja bien, siempre y cuando lo limpies con regularidad. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/t23umi/roomba_j7_or_i7/?tl=es-es#:~:text=El%20robot%20lo%20maneja%20bien%2C%20siempre%20y%20cuando%20lo%20limpies%20con%20regularidad.' 
                                    },
                                    {
                                         snippet :  'Roomba I7 se niega a reiniciarse y no se puede desactivar el bloqueo de seguridad para niños' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/t23umi/roomba_j7_or_i7/?tl=es-es#:~:text=Roomba%20I7%20se%20niega%20a%20reiniciarse%20y,desactivar%20el%20bloqueo%20de%20seguridad%20para%20ni%C3%B1os' 
                                    },
                                    {
                                         snippet :  'Decepcionado con el rendimiento de limpieza del J7 en la alfombra.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/t23umi/roomba_j7_or_i7/?tl=es-es#:~:text=Decepcionado%20con%20el%20rendimiento%20de%20limpieza%20del%20J7%20en%20la%20alfombra' 
                                    }
                                ]
                            },
                            {
                                 title :  'J7 de repente \ No se puede conectar/Necesita reiniciar\  en la aplicación : r/roomba' ,
                                 link :   'https://www.reddit.com/r/roomba/comments/14zlbjd/j7_suddenly_unable_to_connectneeds_reboot_in_app/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 2 años ',
                                 items : [
                                    {
                                         snippet :  'La aplicación lo vio inmediatamente como que necesitaba configuración, se conectó a WiFi, verificó la contraseña de WiFi y se conectó a la nube. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/14zlbjd/j7_suddenly_unable_to_connectneeds_reboot_in_app/?tl=es-es#:~:text=La%20aplicaci%C3%B3n%20lo%20vio%20inmediatamente%20como%20que,WiFi%20y%20se%20conect%C3%B3%20a%20la%20nube.' 
                                    },
                                    {
                                         snippet :  'Comprobación del robot para detectar problemas físicos, por ejemplo: parachoques atascado, cepillo lateral atascado, etc. No hay problemas físicos visibles.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/14zlbjd/j7_suddenly_unable_to_connectneeds_reboot_in_app/?tl=es-es#:~:text=Comprobaci%C3%B3n%20del%20robot%20para%20detectar%20problemas%20f%C3%ADsicos%2C,atascado%2C%20etc.%20No%20hay%20problemas%20f%C3%ADsicos%20visibles.' 
                                    },
                                    {
                                         snippet :  'Apagado, espera de unos minutos, encendido. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/14zlbjd/j7_suddenly_unable_to_connectneeds_reboot_in_app/?tl=es-es#:~:text=Apagado%2C%20espera%20de%20unos%20minutos%2C%20encendido.' 
                                    }
                                ]
                            },
                            {
                                 title : ' ¿Un J7 podrá aspirar mis alfombras? : r/roomba ',
                                 link :   'https://www.reddit.com/r/roomba/comments/xau2gj/will_a_j7_be_able_to_vacuum_my_rugs/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date : ' Hace 3 años ',
                                 comments : 14,
                                 items : [
                                    {
                                         snippet : ' No. Se atascará.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/xau2gj/comment/inzri0q/?tl=es-es' ,
                                         top_answer : true,
                                         votes : 3
                                    },
                                    {
                                         snippet :  '¡Gracias a todos! Voy a comprarlo en iRobot y aprovecharé la política de 60 días. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/xau2gj/comment/iny04h7/?tl=es-es' ,
                                         votes : 3
                                    },
                                    {
                                         snippet :  'Mis j7 aspiran nuestras alfombras que tienen unos 3 cm de altura sin ningún problema.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/xau2gj/will_a_j7_be_able_to_vacuum_my_rugs/?tl=es-es#:~:text=Mis%20j7%20aspiran%20nuestras%20alfombras%20que%20tienen,3%20cm%20de%20altura%20sin%20ning%C3%BAn%20problema.' 
                                    },
                                    {
                                         snippet :  'Tenemos alfombras de Ruggable sobre pisos de laminado de madera y nuestro j7+ pasa de los pisos a las alfombras sin problemas. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/xau2gj/will_a_j7_be_able_to_vacuum_my_rugs/?tl=es-es#:~:text=Tenemos%20alfombras%20de%20Ruggable%20sobre%20pisos%20de,los%20pisos%20a%20las%20alfombras%20sin%20problemas.' 
                                    },
                                    {
                                         snippet : ' Esta pequeña elevación de la rueda delantera y la Roomba suele ser suficiente para levantar el aspirador y superar obstáculos más altos.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/xau2gj/will_a_j7_be_able_to_vacuum_my_rugs/?tl=es-es#:~:text=Esta%20peque%C3%B1a%20elevaci%C3%B3n%20de%20la%20rueda%20delantera,el%20aspirador%20y%20superar%20obst%C3%A1culos%20m%C3%A1s%20altos. '
                                    }
                                ]
                            },
                            {
                                 title :  'j5 vs j7 robot aspiradora y fregona autovaciable, ¿cuál es mejor? : r/roomba ',
                                 link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL ',
                                 date : ' Hace 10 meses ',
                                 comments : 4,
                                 items : [
                                    {
                                         snippet : ' En mi opinión, con 3 perros, opte por los no combos s9 o j9 y, si está configurado con un robot trapeador, obtenga el M6. El j7 puede soportar mascotas, pero necesitarás darle mantenimiento a diario, especialmente si alguno de los perros que tienes tiene pelo largo. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/comment/lz8fhuu/?tl=es-es ',
                                         top_answer : true,
                                         votes : 1
                                    },
                                    {
                                         snippet : ' Consigue la J7 y la base de autollenado. Esa base vacía automáticamente el depósito de suciedad y rellena el tanque de solución. Es realmente manos libres durante un mes o más a la vez. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/comment/lz88t7w/?tl=es-es' ,
                                         votes : 2
                                    },
                                    {
                                         snippet :  'El j7 puede soportar mascotas, pero necesitarás darle mantenimiento a diario, especialmente si alguno de los perros que tienes tiene pelo largo. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-es#:~:text=El%20j7%20puede%20soportar%20mascotas%2C%20pero%20necesitar%C3%A1s,los%20perros%20que%20tienes%20tiene%20pelo%20largo. '
                                    },
                                    {
                                         snippet :  'Si bien ambos son robots aspiradora y friegasuelos combinados, con eliminación automática de suciedad, este último tiene un mejor rendimiento de fregado, por lo ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-es#:~:text=Si%20bien%20ambos%20son%20robots%20aspiradora%20y,un%20mejor%20rendimiento%20de%20fregado%2C%20por%20lo' 
                                    },
                                    {
                                         snippet :  'Decepcionado con el rendimiento de limpieza del J7 en la alfombra. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-es#:~:text=Decepcionado%20con%20el%20rendimiento%20de%20limpieza%20del%20J7%20en%20la%20alfombra.' 
                                    }
                                ]
                            },
                            {
                                 title :  'J5 vs J7 robot aspiradora y trapeadora autovaciable, ¿cuál es mejor? : r/roomba ',
                                 link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-419' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace 10 meses ',
                                 comments : 4,
                                 items : [
                                    {
                                         snippet :'  En mi opinión —con 3 perros, ve por la s9 o la j9, las que no son combos, y si te decides por un robot que trapea, consigue la M6. La j7 puede con las mascotas, pero vas a tener que estarle encima a diario, sobre todo si alguno de tus perros es de pelo largo.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/comment/lz8fhuu/?tl=es-419' ,
                                         top_answer : true,
                                         votes : 1
                                    },
                                    {
                                         snippet :  'Conseguí la J7 y la base de autollenado. Esa base vacía el depósito de suciedad y vuelve a llenar el tanque de solución automáticamente. Es realmente manos libres por un mes o más a la vez.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/comment/lz88t7w/?tl=es-419' ,
                                         votes : 2
                                    },
                                    {
                                         snippet :  'Decepcionado con el rendimiento de limpieza de la J7 en la alfombra.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-419#:~:text=Decepcionado%20con%20el%20rendimiento%20de%20limpieza%20de%20la%20J7%20en%20la%20alfombra.' 
                                    },
                                    {
                                         snippet :  'Decepcionado con el rendimiento de limpieza de la j7 en la alfombra. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-419#:~:text=Decepcionado%20con%20el%20rendimiento%20de%20limpieza%20de%20la%20j7%20en%20la%20alfombra.' 
                                    },
                                    {
                                         snippet :  'Tengo el mío hace 6 meses y todavía no tuve que cambiar la bolsa de la base, así que probablemente te va a dar espacio de sobra para el pelo de perro.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/1h0ww7l/j5_vs_j7_self_emptying_vacuum_and_mop_combo_which/?tl=es-419#:~:text=Tengo%20el%20m%C3%ADo%20hace%206%20meses%20y,de%20sobra%20para%20el%20pelo%20de%20perro.' 
                                    }
                                ]
                            },
                            {
                                 title : ' J7 luz circular blanca continua : r/roomba' ,
                                 link :   'https://www.reddit.com/r/roomba/comments/1azwsfy/j7_continuous_white_light_circle/?tl=es-es' ,
                                 source :  'Reddit' ,
                                 icon :   'https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.reddit.com&client=SHOPPING&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL' ,
                                 date :  'Hace un año ',
                                 items : [
                                    {
                                         snippet :  'El wifi funciona y el j7 se configuró originalmente para el wifi de la casa, no para el wifi de invitados. ',
                                         link :   'https://www.reddit.com/r/roomba/comments/1azwsfy/j7_continuous_white_light_circle/?tl=es-es#:~:text=El%20wifi%20funciona%20y%20el%20j7%20se,casa%2C%20no%20para%20el%20wifi%20de%20invitados.'
                                    },
                                    {
                                         snippet : ' Retira el depósito de polvo y mantén presionado el botón LIMPIAR durante siete (7) segundos hasta que el Roomba emita un tono.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/1azwsfy/j7_continuous_white_light_circle/?tl=es-es#:~:text=Retira%20el%20dep%C3%B3sito%20de%20polvo%20y%20mant%C3%A9n,hasta%20que%20el%20Roomba%20emita%20un%20tono.' 
                                    },
                                    {
                                         snippet :  'El anillo i7 no se apaga nunca, permanece blanco todo el tiempo, ya sea que la Roomba esté cargando, aspirando o simplemente descansando completamente cargada.' ,
                                         link :   'https://www.reddit.com/r/roomba/comments/1azwsfy/j7_continuous_white_light_circle/?tl=es-es#:~:text=El%20anillo%20i7%20no%20se%20apaga%20nunca%2C,cargando%2C%20aspirando%20o%20simplemente%20descansando%20completamente%20cargada.' 
                                    }
                                ]
                            }
                        ],
                         
                    }
                },
                {
                     position : 8,
                     title :  'robot aspirador y trapeador iRobot Roomba Combo i5+ con autovaciado ',
                     product_id :  '17415312784287207478' ,
                     serpapi_product_api :   'https://serpapi.com/search.json?engine=google_product&gl=ar&google_domain=google.com&hl=es&product_id=17415312784287207478' ,
                     product_link :   'https://www.google.com/search?ibp=oshop&q=aspiradora robot&prds=catalogid:17415312784287207478,headlineOfferDocid:15240396965526259085,imageDocid:11473287795360779864,rds:PC_16396827973688459785|PROD_PC_16396827973688459785,gpcid:16396827973688459785,mid:576462517364235444,pvt:hg&hl=es&gl=ar&udm=28' ,
                     immersive_product_page_token : ' eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTc0MTUzMTI3ODQyODcyMDc0NzgiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxNTI0MDM5Njk2NTUyNjI1OTA4NSIsImltYWdlRG9jaWQiOiIxMTQ3MzI4Nzc5NTM2MDc3OTg2NCIsInJkcyI6IlBDXzE2Mzk2ODI3OTczNjg4NDU5Nzg1fFBST0RfUENfMTYzOTY4Mjc5NzM2ODg0NTk3ODUiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjE2Mzk2ODI3OTczNjg4NDU5Nzg1IiwibWlkIjoiNTc2NDYyNTE3MzY0MjM1NDQ0IiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9' ,
                     serpapi_immersive_product_api :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTc0MTUzMTI3ODQyODcyMDc0NzgiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIxNTI0MDM5Njk2NTUyNjI1OTA4NSIsImltYWdlRG9jaWQiOiIxMTQ3MzI4Nzc5NTM2MDc3OTg2NCIsInJkcyI6IlBDXzE2Mzk2ODI3OTczNjg4NDU5Nzg1fFBST0RfUENfMTYzOTY4Mjc5NzM2ODg0NTk3ODUiLCJxdWVyeSI6ImFzcGlyYWRvcmErcm9ib3QiLCJncGNpZCI6IjE2Mzk2ODI3OTczNjg4NDU5Nzg1IiwibWlkIjoiNTc2NDYyNTE3MzY0MjM1NDQ0IiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9' ,
                     source :  'Inovamusicnet' ,
                     source_icon :   'https://serpapi.com/searches/68e6612fe6590ea0d8fbc96b/images/89e545a95d03981f9e244af8383b1f95110da77971716f3e3a6f7177957000d1.png' ,
                     multiple_sources : true,
                     price :  '$ 299.000,00' ,
                     extracted_price : 299000,
                     rating : 4.1,
                     reviews : 826,
                     thumbnail :   'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBbfmOdfUDv2FxARuYRDWT10swzIFBsqTbiO3tl-r_btHSkCztKBKGn9_BFgOysOWwX5sRMGKbK6KDI604_uwrmbxBSmuEjziYaSPCFoW221ohqssSIWiq' ,
                     serpapi_thumbnail :   'https://serpapi.com/images/url/GIxtBnicDclbCoJAFADQFfnISkiIaDRNhjK0sL6k0dKpnFHvNR-Laj_tps7v-X4KxAosTbuJtBkqvGUKMqGrOeAVeaqmstSgkFXFRb6ql_-z1vts4aUhYfcyyO4n5224_TpsL6ETHyc6dKPvEqiPjAdTfClNwnAbPe0RKaGeWCTEzYMBgrg7zyHceZRRkzq-qc-StmtK1pOobDePkV-u0cF2ZWwYE1nUAJEf8_oHUWU-6A' ,
                     thumbnails : [
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBbfmOdfUDv2FxARuYRDWT10swzIFBsqTbiO3tl-r_btHSkCztKBKGn9_BFgOysOWwX5sRMGKbK6KDI604_uwrmbxBSmuEjziYaSPCFoW221ohqssSIWiq' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS61ejslw5VlUiagHNajFGbaddUBIobAtKyJwvd2v6uI86QZBiLwoQMsQxl9xTJBg-zVLFJ9pBdFzDiSebuKKVUEkBbnTXMDCVXeZfBEo9a7QodeQ9V_nuq' ,
                          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAJgzMSTWT_9eBqJp03EOuuNeOaf5imtBs_pNXtDus5ZtdQIPohTfNSxooSZMCFAvOz7WhJ5CLDX5mux9YUjmjlwKZ9vctPwMxnVIeafk' ,
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEwXOyOP5jWmMEb4kMbZ8etmwVpo3uANpWBO1RMRztGR-na4IdqZY-PY6Ey3f45rhByqBVt7DW7Dy_mDlRdv0njzqhlq-aXQhf5wqz0SY' ,
                          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmROhHNZzJngVe72o8aizp32UQIVjvjugyj3-3p9Rqaj4K0CKxTalIys7AcuLUbZHepduUK7pXVAdCEwlOvAQVnMIxxVfhvxOCl8bjFnk' 
                    ],
                     serpapi_thumbnails : [
                          'https://serpapi.com/images/url/GIxtBnicDclbCoJAFADQFfnISkiIaDRNhjK0sL6k0dKpnFHvNR-Laj_tps7v-X4KxAosTbuJtBkqvGUKMqGrOeAVeaqmstSgkFXFRb6ql_-z1vts4aUhYfcyyO4n5224_TpsL6ETHyc6dKPvEqiPjAdTfClNwnAbPe0RKaGeWCTEzYMBgrg7zyHceZRRkzq-qc-StmtK1pOobDePkV-u0cF2ZWwYE1nUAJEf8_oHUWU-6A ',
                          'https://serpapi.com/images/url/DZCAQXicDclRDoIgAADQE6WrloVba1FqabWxkrl-GggpZoCBaR2q-3Sber_v-ymt1cZ3XS7zx0tbzgaWyrFTGEusyJ1c3V1TKq2FLBbN_H_-8sBAlB-9Ia9M3U1wnQpSbA6kCiNKGEvhVtGlTV5x92Sjp9duZx46Q7HrFNob1NegP8WwGLzxLoyBhix8r8WR0zZJcBrcIJWnbL9e4YyfrzBQgEyRYhwBfJFt8wNomT7u' ,
                          'https://serpapi.com/images/url/Pt-ERnicDclJDoIwFADQEwlGQwwkxjCoAWUKKMiGYCmTQov9BeQ2Hsvb6Nu-76cCoEwRRdyh15sCzhdw71ZCySCDGgmItCKrCKV1V-767f8U1cnlI_JVq5ztIIzCVMZab9Hleu9y7mA3K6S6BY2l1InB4ExKIPdNj1Rh4QQTIUFi6wd1cOdNVFmSfjZiqeWTfLs0bfMcT4k8IPBGe-quJs6Kxw9NUTtD' ,
                          'https://serpapi.com/images/url/BPIw-XicDclJDoIwFADQEzEYQJTEGAiEuGA0YdoYKENBKC18JeU2Hsvb6Nu-7wcD0NWQpIaghVNoagEqIovdCiX0SETzJK14prQn3ZVd_meYfn12UeRsWcCDUBvSyXMq9elVxamBaUvorLxMn6ZWcIi9eAc3Fkip3mpW5EKYHx2utKq2YIszKwHdTnWbPyZ7jOu3TIad4ZEJZRbhVtvYLt_zHyW4OkE' ,
                          'https://serpapi.com/images/url/mNPlvnicDcnbCoIwAADQL_KCBl4gQqTSLEXLEb7NbTmXzpnT1L_ps_qbOq_n-6FSisHVNMLRaxGSYEWWXFerQUJZIxV1rTbQToiaV7t--z_Xi7FzRNc2S2gQF-uJV4BYRmfDehWmkachYBMbq4WZiimcrIdsE-l-NN9gEy6D5aHxnJdFQAQe88gSd-Bhf_9ukslLAb-E8wwedJoTv7FLduDPH0O7Ouw' 
                    ],
                     extensions : [
                        ' PRECIO BAJO' 
                    ],
                      pros : [
                        'Incluye estación de autovaciado, una característica de gama alta que reduce drásticamente la frecuencia de mantenimiento. ',
                        'Funcionalidad Combo que integra aspirado y trapeado en un solo dispositivo.',
                        'Fuerte respaldo de una marca líder en la industria como iRobot',
                    ],
                        contras : [
                            'Utiliza navegación V-SLAM, que puede ser menos precisa que LiDAR en condiciones de poca luz o en diseños de planta complejos. ',
                            ' La calificación de 4.1, aunque buena, es inferior a la de otros competidores con alto volumen de reseñas' 
                    ]
                },
                {
                     position : 15,
                     title :  'Roborock Q7 M5+ Robot Trapeador 7 semanas' ,
                     product_id :  '6255378403228501573' ,
                     serpapi_product_api :   'https://serpapi.com/search.json?engine=google_product&gl=ar&google_domain=google.com&hl=es&product_id=6255378403228501573' ,
                     product_link :   'https://www.google.com/search?ibp=oshop&q=aspiradora robot&prds=catalogid:6255378403228501573,headlineOfferDocid:13975601456881073697,imageDocid:1323901879763458717,rds:PC_10899927057649909501|PROD_PC_10899927057649909501,gpcid:10899927057649909501,mid:576462835499202068,pvt:hg&hl=es&gl=ar&udm=28' ,
                     immersive_product_page_token :'  eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiNjI1NTM3ODQwMzIyODUwMTU3MyIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6IjEzOTc1NjAxNDU2ODgxMDczNjk3IiwiaW1hZ2VEb2NpZCI6IjEzMjM5MDE4Nzk3NjM0NTg3MTciLCJyZHMiOiJQQ18xMDg5OTkyNzA1NzY0OTkwOTUwMXxQUk9EX1BDXzEwODk5OTI3MDU3NjQ5OTA5NTAxIiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiIxMDg5OTkyNzA1NzY0OTkwOTUwMSIsIm1pZCI6IjU3NjQ2MjgzNTQ5OTIwMjA2OCIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMifQ==' ,
                     serpapi_immersive_product_api :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiNjI1NTM3ODQwMzIyODUwMTU3MyIsImhlYWRsaW5lT2ZmZXJEb2NpZCI6IjEzOTc1NjAxNDU2ODgxMDczNjk3IiwiaW1hZ2VEb2NpZCI6IjEzMjM5MDE4Nzk3NjM0NTg3MTciLCJyZHMiOiJQQ18xMDg5OTkyNzA1NzY0OTkwOTUwMXxQUk9EX1BDXzEwODk5OTI3MDU3NjQ5OTA5NTAxIiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiIxMDg5OTkyNzA1NzY0OTkwOTUwMSIsIm1pZCI6IjU3NjQ2MjgzNTQ5OTIwMjA2OCIsInB2dCI6ImhnIiwidXVsZSI6bnVsbCwiZ2wiOiJhciIsImhsIjoiZXMifQ%3D%3D' ,
                     source :  'Inovamusicnet' ,
                     source_icon :   'https://serpapi.com/searches/68e6612fe6590ea0d8fbc96b/images/89e545a95d03981f9e244af8383b1f9574e408c397e9dc4519ea8104e741cfbd.png' ,
                     multiple_sources : true,
                     price :  '$ 418.950,00' ,
                     extracted_price : 418950,
                     rating : 4.5,
                     reviews : 52,
                     thumbnail :   'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSE072Ds970TRFyObgCihfX038fM8rpjMgIOFkC8PcLIiYprrdZ-OXwVwEaZ-r6TyEz08mqJe9B9L3tD2G_A4NQH-hjkkF-Fb3joHWIm' ,
                     serpapi_thumbnail :   'https://serpapi.com/images/url/fxaRTXicDcnbCoIwAADQL5qaRm5CRHkPL2VS5kvovE1R5xyI_U2f1d_UeT3fT8M5nTVRLAfMVsrLAvB82Aj1zDNOsIDHXpybkVIy1Idp_z_tGBTIxtHNlFTZmJEqxZG1hnmtk6ZKJAVWPmS09Ws3tDodXrDnkidlrEhBmCz3xcxSwHbxar4l2E_nEp2Qp3BDtl_HbXB1QNN2nQWsXGlH5-H28Aetpze' ,
                     thumbnails : [
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSE072Ds970TRFyObgCihfX038fM8rpjMgIOFkC8PcLIiYprrdZ-OXwVwEaZ-r6TyEz08mqJe9B9L3tD2G_A4NQH-hjkkF-Fb3joHWIm8' ,
                          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMCxaVeM4gD00WoThP1RFw6AH8aQrdX5Px8nO34nUW6CjSMOvJ3z9vFEtiiemdmCT39s576V1w5JXnbE5407BBIyYNCiGD-N8k4wsk0MLXJ7KCpe7R1bWk' ,
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQx9Lx2EyuHyAtGjAfiBJxnr8LQ1TPtmg8KpSwttLJ-fovrZh3MmlXTV0cxbyNV5ux8SLxaCHeTLmv8-Uca4MjuXmjb25QpIl8ts2QonCIiBPesux-3byKu' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkn3n6NrdlKI5yW0ozL7gsgol1497WNZSGWivyPD8Q7cckaaQ63-jNgHCYMneFq_dVoKP5nudQk07CUd1fx9ApwvSntpEQRbAJY-c8g4Z36txz5RwAujF9Lg' ,
                          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSB2V6W-IlT6Ul9-Fo6CVW0JAM8QyEle373pOVMxpL0pM3nzDhV8N4FNE3yv3M_6wQn65RPpydJ2K5WmXuLfjD1JdfCi9SrIZFyAq0TB2PvM-T0Y3eVQW5WJA' 
                    ],
                     serpapi_thumbnails : [
                          'https://serpapi.com/images/url/fxaRTXicDcnbCoIwAADQL5qaRm5CRHkPL2VS5kvovE1R5xyI_U2f1d_UeT3fT8M5nTVRLAfMVsrLAvB82Aj1zDNOsIDHXpybkVIy1Idp_z_tGBTIxtHNlFTZmJEqxZG1hnmtk6ZKJAVWPmS09Ws3tDodXrDnkidlrEhBmCz3xcxSwHbxar4l2E_nEp2Qp3BDtl_HbXB1QNN2nQWsXGlH5-H28Aetpze9' ,
                          'https://serpapi.com/images/url/rf-ITHicDcnbEkJAAADQLxJyWcw0DaubIknokbXDZqzN7qT6qP6nv6nzer6fVgjGHVnGFI0vJnAtiYrOZw0XpSBohoZe5u3AGKHN8r74n-NGtb1BSQifZYZDvfEVJR_SNlaT9WS6W6s8jXVhxE-LHjWdXnIT3s7h8RFob_uxXglCcF_3MNVsbgAzUycjKGi1MnQFeN7udY0g2fhSZHX6xDslPBQB2EOGQaJWefcDn3E7Zg' ,
                          'https://serpapi.com/images/url/eRFUW3icDcndCoIwGADQJzLTEqYQYRGlTlG0iO50mj-4udw3216q9-lt6tye76cD4MIzzYaRWXNoagMqZq1aASX0ZEUmaopu4rxn7f61-5_nJ7V7JplysbJPWl60D-fBf_aHULEZ4cwqUqAtinj-BsCh8ZyW-dFtYjrei9uaqEonN0cqlGNVHi9NgemCjCspt_Eg73SobCfjwYhA2NnEjkF_SBshlbGpdCR_hcE_gA' ,
                          'https://serpapi.com/images/url/fjIswHicDclJDoIwAADAFwESdhJjCCoqSFiiBC4GWyybbYEi4Kv8jr_Ruc73UzJGB1MQCgz6hbICcuyOJR4NLGcV4AF5CkNJKK0w2nTr_5mWDw0HxA2WsOr3sHWPypKsyNvT0IBIK8qGlvhZ7CTVawm2eqgB0OR5qEpc7aODnZ5xse9u8ErcQMEjDJuVZl-g-JgNi06vGDO6C6O7dUo5oCM5k1Q2v5VossZ6b3joB59SPoU' ,
                          'https://serpapi.com/images/url/PmPxW3icDclJDoIwAADAFxWQSgUSY3DBgBZBsFUvRtkNlip1qa_yO_5G5zrfTyUE72xVzVl6k1zkGRAnpitlJ46iTpW0vahd1XJes3J0Hf7PdoLMmqfxWCeIAq9J0KaxgNuiCaGa72AzkrMmhwPIVwS_-FLjGLL3tCJm0HeDGZQPiA_oGTFkrEMuM19fGPSyvS-L87TnZ8WktuKbt3elc9WSsR4-MEi0HcxJRA3qOz_ZvDup' 
                    ],
                     extensions : [
                         'PRECIO BAJO' 
                    ],
                     pros : [
                         'Marca Roborock, reconocida por su tecnología de navegación y trapeado sónico de vanguardia.' ,
                         'La designación Q7 M5+ sugiere un modelo moderno que probablemente incluye mapeo LiDAR y una estación de autovaciado.' ,
                         'Calificación de usuario muy alta (4.5 estrellas)' ,
                    ],
                     contras : [
                       '  Volumen de reseñas relativamente bajo (52), lo que introduce un pequeño grado de incertidumbre en comparación con modelos con miles de valoraciones.' ,
                         'El título del producto es ambiguo (7 semanas), lo que podría generar confusión'
                    ]
                },
                {
                     position : 4,
                     title :  'Robot Aspirador Wyze Lidar Mapping, 110 Min De Autonomía, Co' ,
                     product_id :  '996865571621834440' ,
                     serpapi_product_api :   'https://serpapi.com/search.json?engine=google_product&gl=ar&google_domain=google.com&hl=es&product_id=996865571621834440' ,
                     product_link :   'https://www.google.com/search?ibp=oshop&q=aspiradora robot&prds=catalogid:996865571621834440,headlineOfferDocid:17572386017850203690,imageDocid:7435828859272556999,rds:PC_5462293695863564408|PROD_PC_5462293695863564408,gpcid:5462293695863564408,mid:576462826536199012,pvt:hg&hl=es&gl=ar&udm=28' ,
                     immersive_product_page_token :  'eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiOTk2ODY1NTcxNjIxODM0NDQwIiwiaGVhZGxpbmVPZmZlckRvY2lkIjoiMTc1NzIzODYwMTc4NTAyMDM2OTAiLCJpbWFnZURvY2lkIjoiNzQzNTgyODg1OTI3MjU1Njk5OSIsInJkcyI6IlBDXzU0NjIyOTM2OTU4NjM1NjQ0MDh8UFJPRF9QQ181NDYyMjkzNjk1ODYzNTY0NDA4IiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiI1NDYyMjkzNjk1ODYzNTY0NDA4IiwibWlkIjoiNTc2NDYyODI2NTM2MTk5MDEyIiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9' ,
                     serpapi_immersive_product_api :   'https://serpapi.com/search.json?engine=google_immersive_product&page_token=eyJlaSI6IkwySG1hTlA3T1Bhb2hiSVBfOXlxMlFRIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiOTk2ODY1NTcxNjIxODM0NDQwIiwiaGVhZGxpbmVPZmZlckRvY2lkIjoiMTc1NzIzODYwMTc4NTAyMDM2OTAiLCJpbWFnZURvY2lkIjoiNzQzNTgyODg1OTI3MjU1Njk5OSIsInJkcyI6IlBDXzU0NjIyOTM2OTU4NjM1NjQ0MDh8UFJPRF9QQ181NDYyMjkzNjk1ODYzNTY0NDA4IiwicXVlcnkiOiJhc3BpcmFkb3JhK3JvYm90IiwiZ3BjaWQiOiI1NDYyMjkzNjk1ODYzNTY0NDA4IiwibWlkIjoiNTc2NDYyODI2NTM2MTk5MDEyIiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsLCJnbCI6ImFyIiwiaGwiOiJlcyJ9' ,
                     source :  'eBay' ,
                     source_icon :   'https://serpapi.com/searches/68e6612fe6590ea0d8fbc96b/images/89e545a95d03981f9e244af8383b1f954bdc2e9741e8b7b29bc08d0e11cfaace.png' ,
                     price :  '$ 414.956,31' ,
                     extracted_price : 414956.31,
                     rating : 4.3,
                     reviews : 3800,
                     thumbnail :   'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4BK2nX9x8TqjG1YqE86koF2il_ClcYgRWQ3ZaJS60-MzQNQUYnYDtVjt-8zNf-bjhJKHT-55pNyUjO9jrL-hDsVJUhuyQ5w9uPPct8yq-EOE8ZQDDAnCy' ,
                     serpapi_thumbnail :   'https://serpapi.com/images/url/idGZOHicDclhEoFAGADQE62Qms2MMVSYIhah_phatK1sm76G7VDu4za8v-_7YQCyHmraVdCnknC9IEiF3slqSCCnHVo-tJqVUuYiG1ej_w0nwcWa091g6vfFyXrjfcXnvahysXkvZ_28ONsFjbLtkehx4u3MLlq1JCBhJCIHDhwQboMbSjnz_MUeGYYMVMjXFn8uEXPqgxeyRhHjZTWbDQWsKuSuXRwTx5kIW_0Azxg84Q' ,
                     thumbnails : [
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4BK2nX9x8TqjG1YqE86koF2il_ClcYgRWQ3ZaJS60-MzQNQUYnYDtVjt-8zNf-bjhJKHT-55pNyUjO9jrL-hDsVJUhuyQ5w9uPPct8yq-EOE8ZQDDAnCy' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcF3rfpT0yRQ_HvEFw8XqA6qzIeQw6CyiVs3JS0qU1Pak8-6zm-tMB7eEVFLXQ2dSl2LVYuNFca_0bgoF8Qakv8NGWlypJPS-MqnWGvPkV4iX8NbIFvLnA' ,
                          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5yGuoP6YuqqgU0BNmTQdzDLnRpSW2ZD4j392QfkVlUNsH1sJWT1lQPWRYkmq3KcrntK6aVLwXmEDkxNYC8aLUO4r8cfqDDGTlsd70ZQpoZpNjWbPA8HBH' ,
                          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR04QpLLqhhSnIH81UaNwz-HrDN0pMipTXW4YRp7_-4stVqB5c37CSYx3SLSa2IJ_YDj350grexj5dXWE85B4Ake4HNtcICgWr74XffzRyZJjPJNLfn2DOPJw' ,
                          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlsq5ElmmA2x3UuTZQVzzRFM7Eq_6RV06tCzywp-Fdid3yJA8uHE7Na7QU3bzPDB-R5b60d6-Lg7a5_wUlD4TvibhIoKVgMxNPRXDUdQ30mPW69BaWxyJwtw' 
                    ],
                     serpapi_thumbnails : [
                          'https://serpapi.com/images/url/idGZOHicDclhEoFAGADQE62Qms2MMVSYIhah_phatK1sm76G7VDu4za8v-_7YQCyHmraVdCnknC9IEiF3slqSCCnHVo-tJqVUuYiG1ej_w0nwcWa091g6vfFyXrjfcXnvahysXkvZ_28ONsFjbLtkehx4u3MLlq1JCBhJCIHDhwQboMbSjnz_MUeGYYMVMjXFn8uEXPqgxeyRhHjZTWbDQWsKuSuXRwTx5kIW_0Azxg84Q' ,
                          'https://serpapi.com/images/url/mICnVHicDcn_DkJAAADgJ_Ijmi5ba2pODHMp9JdxhOHccTE9VO_T29T37_f91JzTSZekkuBxpbwsBJ4TVawmnvEGi3jopakeKG1IdWSH_-mGX-wtjDBUxye9yesVpZfZhAtImKGxt12iRTuvTTSpTiiz-ybIWiBo717g3mlXmhF0E6QUYae40ePlQ5ylcl4NEKCsnYFvxd1KnSAUPEZiaw7aaNskwM9tOLvE-AEH3T13' ,
                          'https://serpapi.com/images/url/M-ptaXicDclXDoIwAADQE8kSFU2MAWsgQiogQ_jDskdpaYnjUN7H2-j7fd9PzTlhO1EsMJpehBf5gt-xLFSMZ7xBAhoHkdUjIQ2uDnT_v50O862JgtXLnEd3ncyUVqFkwCHw8jdwsE-usZICtV1uFa_soj6EzJLZOQ7k3nNjP-kGurTRhLm9ziLncRtOoHvC5KhlTnhRJw2VFAAz6Fm-kVKPjCmBbXx3dc0yrB8zcD3n' ,
                          'https://serpapi.com/images/url/exMAfXicDcnbEkJAAADQL3KJNWSmaVyaMNpEhV6MFoumtdgZl6_qd_qbOq_n-6kZo6MuCCVBw0JZWXDsSWQejyxnDeJR9xbGuqO0IXjf7_6nG7DYHlEoggv1_b6uI-I62uaWw2nlnMGGIj019JrEIA2pmnFgZPfeVJCsWlE6y5Ef5ZLrZandyoqIh3JulSKJD5piAuNVAgcy5Fo4HlSQVNUaLg-vDTzoV0Syz4E3_QA4wz0R' ,
                          'https://serpapi.com/images/url/1dHB8HicDclZCoJAAADQE7mgOZNChKZWlqKDS_QjOiMquIw55nKqrtNt6v2-76dijI6aIBQdfq2UFYRjeSfx5cgyVmMe960wVj2ldVceh8P_NN0j6hmjZhwUq2lbXVrkaAqfQbxtyHahNaQAxSJgp22dKWeTmsiro--niwW9DAaRnG--aXBIyYFIAHcvYaakc9SYu_Bd59W1v8Wlu3g-epgRCWSx9ROgGlmyrM7M5h96AD3l' 
                    ],
                     pros : [
                         'Tecnología de mapeo LiDAR, que es técnicamente superior para una navegación precisa y eficiente en comparación con los sistemas giroscópicos o V-SLAM.' ,
                         'Excelente validación de mercado con un volumen muy alto de reseñas (3800), lo que indica un rendimiento y fiabilidad probados.' ,
                        ' Buena autonomía declarada de 110 minutos, adecuada para superficies amplias'
                    ],
                     contras : [
                         'No incluye funcionalidad de trapeado, limitándose a la aspiración.' ,
                         'Carece de estación de autovaciado, lo que requiere un mantenimiento manual más frecuente del depósito. '
                    ]
                }
            ],
             recomendacion_final :  'Según mi análisis, yo compraría el Robot Aspirador Wyze Lidar Mapping (ID: 996865571621834440) debido a que prioriza la característica técnica más crítica para un robot aspirador: la navegación. Su sistema LiDAR garantiza un mapeo superior, una limpieza más metódica y eficiente, y un mejor rendimiento en diversas condiciones de iluminación. Esta superioridad técnica fundamental, combinada con una validación masiva por parte de miles de usuarios, lo convierte en la opción de compra más inteligente y fiable desde una perspectiva de ingeniería.' ,
             total_results : 362
        }
    } 