# CalculatriceProjet

## Installation et Deploiement du projet

## 1 Cloner le dépot

git clone https://github.com/soumare98/ProjetCalculatrice.git

## 2 Configuration de la Base de Données

### Système de Gestion de Base de Données

Pour ce projet j'ai utilisé PostgreSQL comme système de gestion de base de données

### Configuration de PostgreSQL

La configuration de la base de données est gérée via le fichier `docker-compose.yml`:

- **Service de base de données** :
  - **Image** : `postgres:latest` 
  - **Ports** : 
    - Le port `5432` de PostgreSQL est exposé pour permettre les connexions depuis l'extérieur du conteneur.
  - **Variables d'environnement** :
    - `POSTGRES_DB`: calculBd
    - `POSTGRES_USER`:admin
    - `POSTGRES_PASSWORD`: pass

### Configuration de pgAdmin

pgAdmin est inclus pour gérer la base de données via une interface graphique conviviale

- **Image** : `dpage/pgadmin4` 
- **Ports** : 
  - Le port :505O
- **Variables d'environnement** :
  - `PGADMIN_DEFAULT_EMAIL`: `admin@admin.com` 
  - `PGADMIN_DEFAULT_PASSWORD`: `pass`
  ![alt text](image.png)

## 3 Configuration de l'environnement virtuel et installation des dépendances backend:

### Ecrire les commandes:
cd Calculatrice
python -m venv venv
source venv\Scripts\activate
pip install -r requirements.txt

### L’API REST développée avec FastAPI
![image](https://github.com/user-attachments/assets/0e62324a-0741-4417-9fb0-7095d9fbb4ce)

### Le stockage des opérations et des résultats dans une base de données.
![image](https://github.com/user-attachments/assets/053b9929-10cd-4295-b9b8-67574b4528be)

### Une route permettant de télécharger les opérations sous format CSV.
![image](https://github.com/user-attachments/assets/ed9ba43c-787c-436b-b233-7a98adfa9ea9)

## 4 Installation des dépendances frontend: 
cd ../calculatrice-front
npm install

## 4 Exécution ,déploiement avec Docker et docker-compose.

Pour lancer le projet avec docker , taper la commande :

docker-compose up --build

![image](https://github.com/user-attachments/assets/17fc3f32-d5e6-4fc4-b534-f66c18ba7948)


![image](https://github.com/user-attachments/assets/deb9607e-0f4e-4259-a1b6-41d045d4a1e3)



![image](https://github.com/user-attachments/assets/47fa0f64-e5a4-4f13-b522-92bbffa52c53)


