import React from 'react';
import '../css/servicios.css'

export const Servicios = () => {
  return (
    <div id='servicios'>
      <section className='servicios'>
            <h1 className='servicios-titulo'>Nuestros Servicios</h1>

            <div className='service-container'>
                <div className='service-box'>
                    <div className='service-box-head'>
                        <h2 className='service-tittle'>Soluciones <br/> IT</h2>
                        <span className='fa-stack fa-4x icons2'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fa fa-lock fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                    <div className='service-box-content'>
                        <p>
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
                        </p>
                        <a href='#contacto'><button>CONTACTAR</button></a>
                    </div>
                </div>


                <div className='service-box'>
                    <div className='service-box-head'>
                        <h2 className='service-tittle'>Soporte Informático</h2>
                        <span className='fa-stack fa-4x icons2'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fa fa-wrench fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                    <div className='service-box-content'>
                        <p>
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
                        </p>
                        <a href='#contacto'><button>CONTACTAR</button></a>
                    </div>
                </div>

                <div className='service-box'>
                    <div className='service-box-head'>
                        <h2 className='service-tittle'>Virtualización y Cloud</h2>
                        <span className='fa-stack fa-4x icons2'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fas fa-cloud fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                    <div className='service-box-content'>
                        <p>
                            Virtualización de servidores
                            <br/>
                            Virtualización de aplicaciones y S.O.
                            <br/>
                            Administración centralizada
                            <br/>
                            Nube Privada, Pública e Híbrida.
                        </p>
                        <a href='#contacto'><button>CONTACTAR</button></a>
                    </div>
                </div>

                <div className='service-box'>
                    <div className='service-box-head'>
                        <h2 className='service-tittle'>Conectividad y Redes</h2>
                        <span className='fa-stack fa-4x icons2'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fas fa-server fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                    <div className='service-box-content'>
                        <p>
                            Configuración de redes LAN y WAN
                            <br/>
                            Wi-Fi Corporativo
                            <br/>
                            Monitoreo de enlaces
                            <br/>
                            Acceso y optimización del uso de internet
                            <br/>
                            Soluciones integrales para Teletrabajo 
                        </p>
                        <a href='#contacto'><button>CONTACTAR</button></a>
                    </div>
                </div>

                <div className='service-box'>
                    <div className='service-box-head'>
                        <h2 className='service-tittle'>Desarrollo de software</h2>
                        <span className='fa-stack fa-4x icons2'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fa fa-code fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                    <div className='service-box-content'>
                        <p>
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
                        </p>
                        <a href='#contacto'><button>CONTACTAR</button></a>
                    </div>
                </div>

            </div>

      </section>
    </div>
  );
};
