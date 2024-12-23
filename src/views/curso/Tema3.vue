<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aplicación de la prospectiva en políticas públicas y desarrollo social'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-left").mb-5 En un entorno social y político en constante cambio, la prospectiva se ha convertido en una herramienta esencial para la planificación de políticas públicas y el desarrollo social. Este enfoque permite a los gobiernos y organizaciones, anticiparse a los problemas y desafíos emergentes, desarrollando estrategias a largo plazo, que no solo responden a las necesidades actuales, sino que también se adaptan a los cambios futuros. La prospectiva ayuda a identificar oportunidades y a prevenir riesgos, facilitando la creación de políticas más efectivas y adaptativas, en contextos de alta incertidumbre. 


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-7
        .bg-color-5.p-4(data-aos="fade-left").h-100
          p(data-aos="fade-left").mb-4 La prospectiva en políticas públicas permite anticiparse a desafíos emergentes mediante el análisis de tendencias y escenarios futuros, diseñando estrategias adaptativas y sostenibles. En el PDF Aplicación de la prospectiva , se estudiará cómo aplicar herramientas prospectivas para la planificación de políticas, destacando casos prácticos y ejemplos en áreas como salud, educación y sostenibilidad ambiental. Este enfoque estratégico promueve el bienestar social y un desarrollo equilibrado a largo plazo.

          a.anexo.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
            .anexo__icono(:style="{'background-color': '#FCDFDB'}")
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo. </strong> Aplicación de la prospectiva
      .col-lg-5
        figure.h-100
          img(src='@/assets/curso/tema3/1.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59107" target="_blank" rel="noopener noreferrer") Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ceupe.com/blog/que-es-el-pensamiento-estrategico-en-una-organizacion.html#:~:text=Ventajas%20del%20pensamiento%20estrat%C3%A9gico%20para%20la%20empresa%3A&text=Asigna%20prioridades%20en%20el%20destino,oportunidades%20y%20detectar%20las%20amenazas" target="_blank" rel="noopener noreferrer") De Ceupe, B. (2019, 25 de septiembre). Qué es el pensamiento estratégico en una organización. Ceupe.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=_Mo8kLMW_C0" target="_blank" rel="noopener noreferrer") BCNChile. (2014, 3 octubre). Seminario: América Latina y el Caribe en 2030: Prospectiva y Políticas Públicas



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
