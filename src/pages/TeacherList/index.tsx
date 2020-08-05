import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>

                </form>
            </PageHeader>

            <main>
                <TeacherItem name="Alibaba Saluja" subject="Capturador de Dungeon" price="R$ 90,00" image="https://vignette.wikia.nocookie.net/anicrossbr/images/7/75/Alibaba_Anime.png/revision/latest/scale-to-width-down/340?cb=20151116201453&path-prefix=pt-br">
                    Embora tenha nascido em uma favela e ser filho bastardo, Alibaba logo mudou de vida quando após sua mãe morrer, seu pai, o Rei de Balbadd o levou para ser o terceiro príncipe. 
                    Sempre que possível, ele estudou várias línguas, economia, esgrima, entre outros com o intuito de se tornar o bom governante. 
                    Contudo após a morte de seu pai, Alibaba foi deixado de lado e passou a viver como um mero plebeu. Seu sonho é tornar-se rico, terminar uma Dungeon e conseguir todos os tesouros nela escondida. 
                </TeacherItem>

                <TeacherItem name="Aladdin" subject="Magi" price="R$ 550,00" image="https://a-static.besthdwallpaper.com/aladdin-magi-the-labyrinth-of-magic-papel-de-parede-2048x1536-22491_26.jpg">
                Aladdin é uma criança misteriosa que carrega consigo uma flauta. 
                Nela mora um Djinn, a quem chama de amigo, chamado Ugo. 
                Aladdin está sempre viajando a procura dos significados de viver nesse mundo, levando em conta que ele veio de um mundo paralelo(Palácio Real). 
                É possuidor de uma personalidade pura e inocente. 
                ao mesmo tempo que aparenta ser um leigo no mundo, também demonstra ser um grande sábio quando o assunto é lealdade e amizade. 
                Aladdin também é o que se chama Magi, um mago extremamente poderoso que usa a energia dos Rukh ao seu redor para usar seus poderes, o que o dá uma quantidade infinita de energia (Magis são adorados pelos Rukhs,obtendo deles uma proteção natural).
                </TeacherItem>
            </main>

        </div>
    );
}

export default TeacherList;