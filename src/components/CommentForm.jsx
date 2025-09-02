import { useState } from 'react';
import './CommentForm.css';

function CommentForm() {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState({
    comment: '',
  });

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    const errorList = {};

    if (commentText.trim() === '') {
      isValid = false;
      errorList.comment = 'Lütfen yorum giriniz!';
    } else if (commentText.trim().length < 10) {
      isValid = false;
      errorList.comment = 'Yorumunuz en az 10 karakter olmalı!';
    }

    console.log(errorList);

    setErrors(errorList);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newComment = {
        id: Date.now(),
        text: commentText,
        rating: rating,
      };

      setComments([...comments, newComment]);
      setCommentText('');
      setRating(5);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Yorum Yap</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Yorumunuzu yazın..."
          value={commentText}
          onChange={handleChange}
          rows={3}
          style={{ width: '100%' }}
        />
        {errors.comment && <p style={{ color: 'red' }}>{errors.comment}</p>}

        <div style={{ margin: '0.5rem 0' }}>
          <label>Puan: </label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Gönder</button>
      </form>

      <h4>Yorumlar</h4>
      {comments.length === 0 ? (
        <p>Henüz yorum yapılmamış.</p>
      ) : (
        <ul>
          {comments.map((c) => (
            <li key={c.id}>
              <strong>{c.rating} ⭐</strong>: {c.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentForm;
