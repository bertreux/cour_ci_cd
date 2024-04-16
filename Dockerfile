# Utilisation d'une image de Python officielle
FROM python:3.9-slim

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers requis dans le conteneur
COPY app_flask/requirements.txt .
COPY app_flask/app.py .

# Installation des dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Exposition du port utilisé par l'application Flask
EXPOSE 5000

# Commande pour lancer l'application Flask
CMD ["python", "app.py"]
