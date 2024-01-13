import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
 </div>
}

const Message = (props) => {
    console.log(props)
    return <div className={s.dialog}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Milana'}, 
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Petya'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Sasha'}
    ]

    let messages = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>

            <div className={s.messages}> 
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;









