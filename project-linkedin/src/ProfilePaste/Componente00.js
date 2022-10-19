import { FaRegQuestionCircle } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import './Style.css'
function Componente00() {

    return (
        <div className='Principal'>
            <div className="Segue">
                <div className='Box-Segue'>
                    <span className="Primeiro">Editar perfil público e URL</span>
                    <FaRegQuestionCircle className='Icon-Border1' />
                    <hr></hr>
                    <span className="Segundo">Adicionar perfil em outro idioma </span>
                    <FaRegQuestionCircle className='Icon-Border' />
                </div>
            </div>
            <div className='Outra'>
                <h2 className="Proximo">As pessoas tambem viram</h2>
                <div className='Box-div'>
                    <h4 className='Proximo1'>Kailane Ketily </h4>
                    <span className='Proximo1Span'>Aluno instituto Proa</span>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGpwUtQQIrP-A/profile-displayphoto-shrink_800_800/0/1663177090238?e=1671667200&v=beta&t=dMAHZK82y0PRBQbZZFSKJfwvWIY54KQd4Iq97Ydew1Q' className='Foto1'></img>
                    <button className='Botton1'> <MdPersonAdd />  Conectar </button>
                </div>

                <div className='Box-div'>
                    <h4 className='Proximo1'>Diego Assis</h4>
                    <span className='Proximo1Span'>Aluno instituto Proa</span>
                    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQH67A1T7gUD0A/profile-displayphoto-shrink_400_400/0/1663178517622?e=1671667200&v=beta&t=pCD_SAADQ9mvvz8LQDEaq77FPX2jzkHz4qi0jpplA54' className='Foto1'></img>
                    <button className='Botton1'> <MdPersonAdd />  Conectar </button>
                </div>
                <div className='Box-div'>

                    <h4 className='Proximo1'>Felipe Felix </h4>
                    <span className='Proximo1Span'>Aluno instituto Proa</span>
                    <img src='https://media-exp1.licdn.com/dms/image/D5635AQEORE4dwZhGUw/profile-framedphoto-shrink_800_800/0/1661351076373?e=1666641600&v=beta&t=5Q6738dLQC-mabj5AS0GWsrxirlzGqNZ0Uasx6KTGMM' className='Foto1'></img>
                    <button className='Botton1'> <MdPersonAdd />  Conectar </button>
                </div>
                <div className='Box-div'>

                    <h4 className='Proximo1'>Luiz Felipe</h4>
                    <span className='Proximo1Span'>Aluno instituto Proa</span>
                    <img src='https://media-exp1.licdn.com/dms/image/D4D03AQGhxK0UUHAlaA/profile-displayphoto-shrink_400_400/0/1665710465997?e=1671667200&v=beta&t=NZT4T_OsV-Ck5kVL9h5dCmG4GeslzQl90_i3sAZfVTo' className='Foto1'></img>
                    <button className='Botton1'> <MdPersonAdd />  Conectar </button>
                </div>
                <div className='Box-div'>
                    <h4 className='Proximo1'>Lucas Santos</h4>
                    <span className='Proximo1Span' >Aluno instituto Proa</span>
                    <img src='https://media-exp1.licdn.com/dms/image/D4D35AQH_BVv-MDs-DA/profile-framedphoto-shrink_400_400/0/1663179330924?e=1666641600&v=beta&t=RmrFgd40QGQfMZAyCEA8JD7BCCHRAwX25UGD68fQ-lE' className='Foto1'></img>
                    <button className='Botton1'> <MdPersonAdd />  Conectar </button>
                </div>
            </div>
        </div>
    )
}

export default Componente00
