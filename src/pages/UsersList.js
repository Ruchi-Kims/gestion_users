import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // 1️⃣ Fonction pour charger les utilisateurs
  const fetchUsers = () => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      });
  };

  // 2️⃣ Charger la liste au montage
  useEffect(() => {
    fetchUsers();
  }, []);

  // 3️⃣ Fonction de suppression
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3001/users/${id}`)
        .then(() => {
          alert("Utilisateur supprimé !");
          fetchUsers(); // 🔄 Recharge la liste
        })
        .catch(error => {
          console.error("Erreur lors de la suppression :", error);
        });
    }
  };

  // 4️⃣ Affichage
  return (
    <div className="user-list">
      <h2>Liste des utilisateurs</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}  className="user-item">
             <span className="user-info">{user.name} - {user.email}</span>
             <div className="user-actions">
              <Link to={`/users/edit/${user.id}`}>
                <button className="edit">Modifier</button>
              </Link>
              <button className="delete" onClick={() => handleDelete(user.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

  