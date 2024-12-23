<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Desarrollo sostenible y responsabilidad social'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-left").mb-5 En un mundo donde la tecnología avanza a un ritmo vertiginoso, la capacidad para anticipar y adaptarse a las tendencias tecnológicas emergentes se convierte en una ventaja estratégica clave. La innovación ya no se percibe únicamente como un proceso de mejora continua, sino como un componente esencial de la sostenibilidad y la competitividad organizacional. La perspectiva prospectiva, permite a las organizaciones explorar y prepararse ante futuros posibles en el ámbito tecnológico, brindándoles la flexibilidad y la visión necesaria para mantenerse a la vanguardia.

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-1
        p(data-aos="fade-left") La innovación, vista desde una perspectiva prospectiva, no solo implica el desarrollo de nuevas tecnologías, sino también la habilidad para integrar estos avances de forma estratégica, en el modelo de negocio. Este enfoque permite a las empresas visualizar cómo diferentes tecnologías pueden transformar sus procesos, productos y servicios, y les ayuda a tomar decisiones fundamentadas que maximicen el valor y minimicen los riesgos. 

        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p(data-aos="fade-left").mb-0 Empresas como Google y Amazon, utilizan metodologías prospectivas para evaluar los cambios tecnológicos y anticipar las necesidades de sus clientes, asegurando su liderazgo en el mercado.


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de innovación y su relación con la prospectiva

    p(data-aos="fade-left").mb-4 La innovación se define como el proceso de desarrollar y aplicar ideas, productos o tecnologías que resulten en mejoras significativas para una organización o sector. En el contexto de la prospectiva, la innovación se convierte en un factor de transformación fundamental, debido a que permite anticiparse y adaptarse a los cambios, aprovechando los desarrollos tecnológicos, para mantener una ventaja competitiva (López Fernández, 2016). La prospectiva, al enfocarse en la visualización de futuros posibles, complementa la innovación, al ofrecer una metodología para proyectar y planificar los impactos de estos avances, en el largo plazo.

    p(data-aos="fade-left").mb-4 La relación entre la innovación y prospectiva, radica en la capacidad de ambas para generar valor mediante el aprovechamiento de oportunidades tecnológicas emergentes. Conozcamos qué aporta y ofrece cada una:


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-5.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/2.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Innovación
                p.mb-0 La innovación aporta nuevas soluciones y mejora los procesos existentes.
          .col-lg-5.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Prospectiva
                p.mb-0 La prospectiva ofrece un marco para evaluar las implicaciones de dichos cambios, anticipando sus efectos y permitiendo a las organizaciones adaptarse de manera más ágil. 


    .bg-color-1.p-4(data-aos="fade-left").mb-5
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 De esta forma, las organizaciones que aplican un enfoque prospectivo en sus procesos de innovación, pueden minimizar los riesgos y optimizar sus recursos, maximizando el impacto positivo de sus decisiones. 


    p(data-aos="fade-left").mb-5 Un aspecto clave en esta relación, es la capacidad de anticipación:


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-5.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Innovación
                p.mb-0 La innovación no se limita a responder a las demandas actuales, sino que también se orienta hacia la creación de soluciones que satisfagan las necesidades futuras de los clientes y del mercado.
          .col-lg-5.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Prospectiva
                p.mb-0 La prospectiva permite analizar los cambios del entorno tecnológico y prever cómo estos pueden afectar a la organización en el futuro.


    p(data-aos="fade-left").mb-5 Esta perspectiva a largo plazo, fortalece la resiliencia de la organización y asegura su relevancia en un entorno cada vez más cambiante.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-figura.mb-4
          h5 Figura 1. 
          span Prospectiva como gestión del cambio y clave de innovación

        figure
          img(src="@/assets/curso/tema2/fig1.png", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Tomado de https://www.zabala.es/opiniones/prospectiva-y-cultura-de-innovacion/


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tendencias tecnológicas emergentes y su impacto futuro


    .row.justify-content-between.align-items-center.mb-5
        .col-lg-7
          p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.

          TarjetaAudio.color-primario.bg-color-white.mb-3(
            texto="Tendencias tecnológicas emergentes y su impacto futuro"
            tiempo
            :audio="require('../../assets/curso/podcast/podcast1.mp3')"
          )
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")


    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Herramientas prospectivas para anticipar avances tecnológicos


    p(data-aos="fade-left").mb-4 Las herramientas prospectivas son metodologías diseñadas para ayudar a las organizaciones a prever los cambios tecnológicos y anticiparse a los impactos futuros. Estas herramientas permiten realizar un análisis estructurado de las tendencias emergentes, evaluando su potencial y sus implicaciones estratégicas, en el contexto organizacional. Utilizar herramientas prospectivas no solo ayuda a identificar oportunidades, sino que también permite reducir el riesgo asociado con la implementación de tecnologías nuevas y complejas, fortaleciendo la capacidad de respuesta de la organización.


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left").mb-4 En el libro “La caja de herramientas de la prospectiva estratégica” escrito por Michel Godet expresa lo siguiente:

        .bg-color-4.p-4(data-aos="fade-left").mb-4
          figure.mb-3
            img(src="@/assets/bullets/icon-cita.svg", data-aos="zoom-in", style="max-width: 47px")
          p(data-aos="fade-left").mb-0 #[strong En lo que concierne a las herramientas de la prospectiva estratégica, es preciso recordar su utilidad: estimular su imaginación, reducir las incoherencias, crear un lenguaje común, estructurar la reflexión colectiva y permitir la apropiación. Sin embargo, tampoco hay que olvidar sus limitaciones y las ilusiones que se derivan de la formulación: las herramientas no deben sustituir a la reflexión ni frenar la libertad de elección. (pág. 14) ]

    p(data-aos="fade-left").mb-4 En resumen, las herramientas de prospectiva estratégica, son valiosas para la planificación y toma de decisiones, pero no deben ser utilizadas como sustituto de la reflexión y la creatividad humana. Deben ser utilizadas de manera complementaria y flexible, para aprovechar al máximo su potencial.

    p(data-aos="fade-left").mb-5 Ahora, lo invitamos a estudiar algunas de las herramientas más comunes:  

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-5.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Análisis de tendencias
                p.mb-0 Este método se centra en el estudio de patrones pasados y presentes, para proyectar posibles desarrollos futuros. Mediante el análisis de tendencias, las organizaciones pueden identificar las tecnologías que tienen mayor probabilidad de consolidarse en el mercado y prever cómo podrían influir en sus operaciones y estrategias. Por ejemplo, el análisis de tendencias, permite a las empresas de tecnología identificar y prepararse para su adopción e integración.
          .col-lg-5.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2 Técnica Delphi
                p.mb-0 Consiste en un proceso de consulta a expertos, para obtener consenso sobre el futuro de ciertas tecnologías o tendencias. A través de esta técnica, las organizaciones pueden obtener opiniones informadas sobre el impacto y la viabilidad de diferentes innovaciones tecnológicas. Esto es especialmente valioso en contextos de alta incertidumbre, donde las opiniones de expertos pueden ofrecer una guía valiosa para la planificación estratégica.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71774" target="_blank" rel="noopener noreferrer") López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica: ( ed.). Editorial Universo Sur. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://hal-lara.archives-ouvertes.fr/hal-02185401/document" target="_blank" rel="noopener noreferrer") Godet, M., Monti, R., Meunier, F., & Roubelat, F. (2000). La caja de herramientas de la prospectiva estratégica (Doctoral dissertation, Centre national de l'entrepreneuriat (CNE)). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.zabala.es/opiniones/prospectiva-y-cultura-de-innovacion/" target="_blank" rel="noopener noreferrer") García, M. (2023, 15 septiembre). La prospectiva en la cultura estratégica de innovación. Zabala Innovación.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://alfaiot.com/actualidad-iot/tecnologias-emergentes-tendencias-tecnologicas/" target="_blank" rel="noopener noreferrer") Alfaiot-Webmaster. (2024, 8 marzo). Tecnologías emergentes. Tendencias tecnológicas en 2024. AlfaIOT. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://inteligenciaprospectiva.wordpress.com/2014/01/06/metodos-y-herramientas-prospectivas/" target="_blank" rel="noopener noreferrer") Sergioprince. (2014, 6 enero). Métodos y herramientas prospectivas. Inteligencia prospectiva. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
