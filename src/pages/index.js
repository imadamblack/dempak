import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import i10 from '../../public/landing/10.png';
import i11 from '../../public/landing/11.png';
import i12 from '../../public/landing/12.png';
import i13 from '../../public/landing/13.png';
import i14 from '../../public/landing/14.png';
import i15 from '../../public/landing/17.png';
import i16 from '../../public/landing/16.png';
import i17 from '../../public/landing/15.png';
import ico01 from '../../public/landing/icono-1.png';
import ico02 from '../../public/landing/icono-2.png';
import ico03 from '../../public/landing/icono-3.png';
import logo01 from '../../public/landing/logo-1.png';
import logo02 from '../../public/landing/logo-2.png';
import logo03 from '../../public/landing/logo-3.png';
import logo04 from '../../public/landing/logo-4.png';
import logo05 from '../../public/landing/logo-5.png';
import logo06 from '../../public/landing/logo-6.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Cotiza tu envasadora hoy',
    description: 'Solicita una cotización',
  };

  return (
    <>
      <section className="relative min-h-[80vh] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-full absolute bg-gradient-to-t from-brand-1 md:from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i01} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container w-full text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-bold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Aumenta tu capacidad de producción y disminuye costos de envasado hasta 30%
          </h1>
          <p className="ft-1 mt-4">Equipo de envasado | 100% mexicano | Desde $350,000 MXN</p>
          <div className="flex flex-col justify-start items-start mt-12">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-2 md:text-left">{cta.description}</p>
          </div>
          <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>

        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 my-16">
        <div className="relative">
          <Image src={i02} layout="fill" objectFit="cover"/>
        </div>
        <div className="reading-container">
          <p className="ft-2">
            Queremos ayudarte a reducir costos operativos, aumentar tu productividad y mejorar la presentación de tu producto para que te posiciones como líder en tu industria.
            <br/><br/>
            Así, podrás llevar a tu negocio al siguiente nivel con producciones más grandes, llevando tu operación a un
            nuevo nivel de productividad y calidad.
          </p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="3 razones por las que tu negocio necesita una envasadora más pro"
        image={i03}
      />
      <section className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-16">
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Vas a reducir tus costos</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i04} className="object-cover"/>
            </div>
            <p className="order-3">Necesitas menos personal y minimizas errores humanos, disminuyendo significativamente
              en los gastos de producción.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Vas a optimizar el tiempo</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i05} className="object-cover"/>
            </div>
            <p className="order-3">La automatización de envasado se realiza en una fracción del tiempo, aumentando la
              eficiencia operativa.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Mejoras la calidad</h3>
            <div className="relative h-[24rem] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i06} className="object-cover"/>
            </div>
            <p className="order-3">Obtienes empaques uniformes y de alta calidad que realzan la imagen de tu producto en
              el mercado.</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Especificaciones"
        title="Reduce tus costos operativos y envasa hasta 16,000 bolsas por día"
        image={i07}
      />
      <section className="container my-16 md:space-y-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={i08} className="object-cover object-bottom"/>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8 ft-5 font-bold">Hecha para el sector alimenticio, farmacéutico e industrial</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={i08} className="object-cover"/>
            </div>
            <p className="order-3 ft-2">Si tu producto es liquido, viscoso, sólido, polvo, estamos listos para aumentar la
              productividad de tu negocio.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8 ft-5 font-bold">Diseñadas para envasar hasta 3kg por bolsa</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={i09} className="object-cover"/>
            </div>
            <p className="order-3 ft-2">
              Nuestros envasadoras están diseñadas para manejar altos volúmenes e incrementar la producción sin
              comprometer la calidad de tu producto.</p>
          </div>
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={i09} className="object-cover"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={i10} className="object-cover"/>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8 ft-5 font-bold">Entrega segura y puntual</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={i10} className="object-cover"/>
            </div>
            <p className="order-3 ft-2">Si ya decidiste implementar envasadoras automáticas en tu empresa, aquí te van los
              tiempos:<br/>
              En el momento que nos digas que sí, nos va a tomar 2 meses entregarte tu equipo y ponerlo en marcha.
              Acordamos contigo tiempos y fechas para no afectar la operación de tu negocio.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Modelos"
        title="Tenemos la envasadora que necesitas para tus productos"
        image={i11}
      />
      <section className="container my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative w-full h-[30rem]">
              <Image src={i12} layout="fill" objectFit="cover"/>
            </div>
            <div className="p-8">
              <h3 className="ft-3">Envasadora Premium Chica</h3>
              <p className="ft-2 mb-8 font-bold">$350,000.00 MXN</p>
              <hr/>
              <ul className="mt-8 space-y-4">
                <li className="before:content-['›'] before:mr-4">Para presentaciones pequeñas</li>
                <li className="before:content-['›'] before:mr-4">Hasta 16,000 bolsas por día*</li>
                <li className="before:content-['›'] before:mr-4">Granulados pequeños, polvos, semi líquidos o pastosos.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative w-full h-[30rem]">
              <Image src={i13} layout="fill" objectFit="cover"/>
            </div>
            <div className="p-8">
              <h3 className="ft-3">Envasadora Premium Grande</h3>
              <p className="ft-2 mb-8 font-bold">$1’000,000.00 MXN</p>
              <hr/>
              <ul className="mt-8 space-y-4">
                <li className="before:content-['›'] before:mr-4">Para presentaciones grandes</li>
                <li className="before:content-['›'] before:mr-4">Hasta 10,000 bolsas por día*</li>
                <li className="before:content-['›'] before:mr-4">Frituras, granulados, polvos, semi líquidos o pastosos.
                </li>
                <li className="before:content-['›'] before:mr-4">Capacidad de hasta 1.2kg** de producto.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative w-full h-[30rem]">
              <Image src={i14} layout="fill" objectFit="cover"/>
            </div>
            <div className="p-8">
              <h3 className="ft-3">Envasadora Multicabezal</h3>
              <p className="ft-2 mb-8 font-bold">$1’500,000.00 MXN</p>
              <hr/>
              <ul className="mt-8 space-y-4">
                <li className="before:content-['›'] before:mr-4">Para presentaciones pequeñas y grandes</li>
                <li className="before:content-['›'] before:mr-4">Hasta 15,000 bolsas por día*</li>
                <li className="before:content-['›'] before:mr-4">Granulados pequeños, frituras voluminosas.</li>
                <li className="before:content-['›'] before:mr-4">Capacidad de hasta 3kg** de producto.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('models')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Target"
        title="Si quieres aumentar tu producción y tus ganancias, nuestros equipos de envasado son para ti."
        image={i15}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          Seguramente llegaste aquí por 3 razones:
          <br/><br/>
          <ol>
            <li className="ft-2">Tus costos de producción están por las nubes y no ves cómo reducirlos.</li>
            <li className="ft-2">Tu capacidad de producción no es suficiente para cumplir con la demanda de tus
              clientes.
            </li>
            <li className="ft-2">Tus empaques no tienen la calidad o presentación que necesita tu producto para
              destacar.
            </li>
          </ol>
          <br/>
          Queremos que reduzcas tus costos operativos, aumentes tu productividad y mejores la
          calidad de tus productos para que tengas una ventaja competitiva en el mercado.
          {/*<br/><br/>*/}
          {/*Si sigues operando con procesos manuales o poco eficientes, estás perdiendo tiempo y dinero que podrías*/}
          {/*invertir en crecer tu negocio.*/}
          <br/><br/>
          Te aseguro que, con nuestra tecnología, transformarás tu producción y llevarás tu negocio a otro nivel.
        </p>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Alianzas"
        title="Ser parte de la evolución y mejora en la producción de nuestros clientes es nuestro mayor logro."
        image={i16}
      />
      <section className="container my-40 grid grid-cols-2 md:grid-cols-3 gap-20">
        <div className="relative w-full h-[12rem]">
          <Image src={logo01} layout="fill" objectFit="contain"/>
        </div>
        <div className="relative w-full h-[12rem]">
          <Image src={logo02} layout="fill" objectFit="contain"/>
        </div>
        <div className="relative w-full h-[12rem]">
          <Image src={logo03} layout="fill" objectFit="contain"/>
        </div>
        <div className="relative w-full h-[12rem]">
          <Image src={logo04} layout="fill" objectFit="contain"/>
        </div>
        <div className="relative w-full h-[12rem]">
          <Image src={logo05} layout="fill" objectFit="contain"/>
        </div>
        <div className="relative w-full h-[12rem]">
          <Image src={logo06} layout="fill" objectFit="contain"/>
        </div>
      </section>

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i17}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de cotizar tu envasadora industrial
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Por favor llena el siguiente formulario para recibir una cotización a medida de tu negocio.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
