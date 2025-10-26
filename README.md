# Diag-Expert - Site Vitrine Professionnel

Site vitrine professionnel pour **Diag-Expert**, spécialiste des diagnostics immobiliers.

## 🎯 Présentation

Site web moderne et responsive présentant les services de diagnostics immobiliers de Diag-Expert. Le site comprend plusieurs pages principales avec une navigation fluide, un chatbot intégré, des formulaires de contact et un design professionnel inspiré des meilleures pratiques.

## 📁 Structure du Projet

```
diag-expert/
├── index.html              # Page d'accueil
├── diagnostics.html        # Page des diagnostics
├── prix-contact.html       # Page tarifs et contact
├── en-savoir-plus.html     # Page "En savoir plus"
├── styles.css              # Fichier CSS principal
├── script.js               # Fichier JavaScript
└── README.md               # Documentation
```

## ✨ Fonctionnalités

### Pages Principales

1. **Page d'Accueil** (`index.html`)
   - Hero section avec appel à l'action
   - Aperçu des services
   - Fonctionnalités principales
   - Témoignages clients
   - CTA pour devis gratuit

2. **Les Diagnostics** (`diagnostics.html`)
   - Liste complète des diagnostics proposés
   - Détails pour chaque diagnostic (DPE, Gaz, Électricité, Amiante, Termites, etc.)
   - Durée de validité et obligations légales
   - Lien vers formulaire de devis

3. **Prix & Contact** (`prix-contact.html`)
   - Tarifs indicatifs
   - Informations de contact
   - Formulaire de devis complet

4. **En Savoir Plus** (`en-savoir-plus.html`)
   - Présentation de l'entreprise
   - Expertise et chiffres clés
   - Zone d'intervention
   - Engagements
   - Témoignages détaillés
   - Certifications

### Composants Interactifs

- **Navigation responsive** avec menu mobile
- **Chatbot intégré** avec réponses intelligentes
- **Formulaires de contact** sécurisés
- **Scroll fluide** entre les sections
- **Design responsive** adapté à tous les écrans

## 🎨 Design

### Palette de Couleurs

- **Bleu foncé principal** (`#1e3a5f`)
- **Bleu secondaire** (`#2d5aa0`)
- **Accent** (`#f4a261`) - Orange corail
- **Blanc** (`#ffffff`)
- **Gris clair** (`#f8f9fa`)

### Typographie

- Police système : `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`
- Responsive et lisible sur tous les appareils

## 🚀 Installation et Déploiement

### Installation Locale

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur

```bash
# Ouvrir le projet
cd diag-expert

# Ouvrir dans le navigateur
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

### Déploiement en Ligne

#### Option 1 : Hébergement Static (Netlify, Vercel, GitHub Pages)

1. Créez un compte sur Netlify, Vercel ou GitHub Pages
2. Uploadez tous les fichiers du projet
3. Le site sera accessible immédiatement

#### Option 2 : Serveur Web Traditionnel

1. Uploadez tous les fichiers via FTP/SFTP
2. Le site sera accessible via votre domaine

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- **Mobile** (jusqu'à 480px)
- **Tablette** (jusqu'à 768px)
- **Desktop** (768px et plus)

## 🔧 Fonctionnalités Techniques

### Chatbot

- Widget flottant visible sur toutes les pages
- Réponses intelligentes basées sur les mots-clés
- Interface intuitive
- Option d'intégration Tawk.to disponible

### Formulaires

- Validation HTML5
- Sécurisation des données
- Messages de confirmation
- Redirection après soumission

### SEO

- Meta descriptions optimisées
- Balises title pertinentes
- Structure HTML sémantique
- Images avec attributs alt (à ajouter si images réelles)

## 🎯 Personnalisation

### Modifier les Couleurs

Éditez les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #1e3a5f;
    --secondary-color: #2d5aa0;
    --accent-color: #f4a261;
}
```

### Modifier le Contenu

Tous les contenus sont directement dans les fichiers HTML. Les sections sont clairement marquées avec des commentaires.

### Intégrer Tawk.to

Dans `index.html`, remplacez les placeholders par vos identifiants Tawk.to :

```javascript
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
```

## 📝 Checklist de Personnalisation

- [ ] Remplacer les numéros de téléphone et emails
- [ ] Ajouter votre logo d'entreprise
- [ ] Personnaliser les tarifs
- [ ] Ajouter vos propres témoignages clients
- [ ] Intégrer les analytics (Google Analytics)
- [ ] Configurer les redirections email
- [ ] Tester tous les formulaires
- [ ] Tester le chatbot
- [ ] Optimiser les images
- [ ] Configurer le SSL/HTTPS

## 🌐 Compatibilité Navigateurs

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Navigateurs mobiles (iOS Safari, Chrome Mobile)

## 📄 Licence

Ce projet est un site vitrine professionnel pour Diag-Expert.

## 📞 Support

Pour toute question ou assistance :
- **Email** : contact@diag-expert.fr
- **Téléphone** : 01 23 45 67 89

## 🎉 Fonctionnalités Spéciales

- **Scroll fluide** entre les sections
- **Animation au survol** des éléments interactifs
- **Transitions élégantes**
- **Performance optimisée**
- **Accessibilité web** (niveau AA)

## 🔄 Prochaines Améliorations Possibles

- [ ] Intégration d'un CMS
- [ ] Blog/Actualités
- [ ] Système de réservation en ligne
- [ ] Calculatrice de devis automatique
- [ ] Galerie de photos
- [ ] Système de FAQ avancé
- [ ] Multi-langues
- [ ] Intégration réseaux sociaux

---

**Développé avec ❤️ pour Diag-Expert**
