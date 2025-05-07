import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../api/axiosConfig';
import './EditUser.css';

function EditUser() {
  const { id } = useParams(); // récupère l'id depuis l'URL
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Charger les données de l'utilisateur à éditer
  useEffect(() => {
    api.get(`/users/${id}`)
      .then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch(err => {
        console.error("Erreur de chargement :", err);
        setError("Impossible de charger l'utilisateur.");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Tous les champs sont requis.");
      return;
    }

    const updatedUser = { name, email };

    api.put(`/users/${id}`, updatedUser)
      .then(() => {
        alert("Utilisateur modifié !");
        navigate('/users'); // redirection vers la liste
      })
      .catch(err => {
        console.error("Erreur de mise à jour :", err);
        setError("Erreur lors de la modification.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-user-form">
      <h2>Modifier l'utilisateur</h2>

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

      <button type="submit" className="form-button">Mettre à jour</button>
    </form>
  );
}

export default EditUser;
