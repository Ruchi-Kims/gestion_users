import React, {useState} from "react";
import api from '../api/axiosConfig';
import './UserForm.css';

function UserForm({ onUserAdded }){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !email) {
          setError("Tous les champs sont requis.");
          return;
        }

        const newUser = { name, email };
        api.post('/', newUser)
      .then(res => {
        setName('');
        setEmail('');
        setError('');
        if (onUserAdded) onUserAdded(); // Pour rafraîchir la liste dans App
      })
      .catch(err => {
        console.error(err);
        setError("Erreur lors de l'ajout.");
      });
}
return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Ajouter un utilisateur</h2>
      
      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-input"
        />
      </div>

      <button type="submit" className="form-button">Ajouter</button>
    </form>
  );

}

export default UserForm;