import axios from 'axios';
import React, { useState } from 'react';
import classes from './CommentInput.module.scss'
import { useParams } from 'react-router-dom'

const CommentInputs = ({ userId }) => {
  const [comment, setComment] = useState({ name: '', email: '', text: '' });
  const id = useParams()
  function addComment(e) {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/comments', {
      title: comment.title,
      postId: id,
      email: comment.email,
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      console.log(response.data)
      alert('Комментарий отправлен')
      setComment({ name: '', email: '', text: '' });
    }).catch((e) => {
      alert(`Ошибка ${e.message}`)
    })

  }

  return (
    <div className={classes.fromWrapper}>
      <form action="" className={classes.form}>
        <div className={classes.inputWrapper}>
          <input className={classes.input1}
            placeholder='Имя'
            value={comment.name}
            type="text"
            onChange={e => setComment({ ...comment, name: e.target.value })}
          />
          <input className={classes.input2}
            placeholder='Емейл  '
            value={comment.email}
            onChange={e => setComment({ ...comment, email: e.target.value })}
            type="text"

          />
        </div>
        <textarea className={classes.textarea}
          placeholder='Введите комментарий'
          value={comment.text}
          onChange={e => setComment({ ...comment, text: e.target.value })}
          name=""
        />
        <button className={classes.button} onClick={addComment}>Отправить</button>
      </form>
    </div>
  );
};

export default CommentInputs;