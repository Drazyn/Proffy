import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    image: string;
    name: string;
    subject: string;
    price: string;
}

const TeacherItem : React.FunctionComponent<TeacherItemProps> = (props) => {
    return (
        <div>
            <article className="teacher-item">
                    <header>
                        <img src={props.image} alt="Teacher Picture" />
                        <div>
                            <strong>{props.name}</strong>
                            <span>{props.subject}</span>
                        </div>
                    </header>
                    <p>
                    {props.children} 
                    </p>
                    <footer>
                        Preço/hora:
                        <p>
                             <strong>{props.price}</strong>
                        </p>
                        <button type="button">
                            <img src={WhatsappIcon} alt="Whatsapp" />
                            Entre em contato
                        </button>
                    </footer>
                </article>
        </div>
    );
}

function TeacherItem2() {

}

export default TeacherItem;