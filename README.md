# Diginova

Le dépôt est organisé en deux parties :

- `frontend/` : site React et Vite (`src/`, `public/` et configuration npm).
- `backend/` : API Flask (`app.py`). Le modèle `rul_model.pkl` doit être placé dans ce dossier pour démarrer l'API.

## Frontend

Depuis `frontend/` :

```sh
npm install
npm run dev
```

## Backend

Depuis `backend/`, installez `Flask`, `flasgger` et `numpy`, puis lancez :

```sh
python app.py
```
