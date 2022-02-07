import React from 'react';
import '../css/servicios.css'
import { ReturnService } from './ReturnService';

export const Services = () => {
  return (
    <div id='servicios'>
      <section className='servicios'>
            <h1 
                className='servicios-titulo'
            >
                Nuestros Servicios
            </h1>

            <div className='service-container'>

            <ReturnService 
                title='Soluciones IT' 
                description={
                    <>
                        Consultoría Informática
                        <br/>
                        Seguridad y Auditoría de Sistemas. 
                        <br/>
                        Redes informáticas y Comunicaciones. 
                        <br/>
                        Aseguramiento general de los sistemas informáticos. 
                        <br/>
                        Planes de contingencia.
                        <br/>
                        Procedimientos y políticas de respaldo de datos.
                    </>
                }
            />

            <ReturnService 
                title='Soporte Informático' 
                description={
                    <>
                        Mantenimiento técnico correctivo y preventivo.
                        <br/> 
                        Soporte On-Site de técnicos especializados, por lapsos pactados.
                        <br/> 
                        Tiempos de respuestas asegurados.
                        <br/> 
                        Atención remota. 
                        <br/>
                        Informe de incidentes. 
                        <br/>
                        Limpieza y ajuste de equipos.
                    </>
                }
            />

            <ReturnService 
                title='Virtualización y Cloud' 
                description={
                    <>
                        Virtualización de servidores
                        <br/>
                        Virtualización de aplicaciones y S.O.
                        <br/>
                        Administración centralizada
                        <br/>
                        Nube Privada, Pública e Híbrida.
                    </>
                }
            />


            <ReturnService 
                title='Conectividad y Redes' 
                description={
                    <>
                        Configuración de redes LAN y WAN
                        <br/>
                        Wi-Fi Corporativo
                        <br/>
                        Monitoreo de enlaces
                        <br/>
                        Acceso y optimización del uso de internet
                        <br/>
                        Soluciones integrales para Teletrabajo
                    </>
                }
            />


            <ReturnService 
                title='Desarrollo de software' 
                description={
                    <>
                        Desarrollo web y mobile
                        <br/>
                        Proyectos de migración cloud
                        <br/>
                        Contratación de Developers por hora - Proyecto
                        <br/>
                        Mejora continua en software productivo
                        <br/>
                        Coaching en Metodologías Ágiles
                        <br/>
                        DevOps Culture
                    </>
                }
            />
            </div>
      </section>
    </div>
  );
};
