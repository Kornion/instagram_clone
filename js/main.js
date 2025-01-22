const posts = [
    {
        id: 1,
        image: 'images/post1.jpg',
        likes: '15.2k',
        comments: '234',
        date: '17 JANVIER 2025',
        description: 'Discours à l'Académie française, un moment historique pour les droits des femmes. #droitsdesfemmes #académiefrançaise',
        commentsList: [
            { user: 'histoire_fr', text: 'Un moment historique pour la France 🇫🇷' },
            { user: 'feminist_voice', text: 'Une inspiration pour toutes les générations' }
        ]
    },
    {
        id: 2,
        image: 'images/post2.jpg',
        likes: '18.7k',
        comments: '456',
        date: '16 JANVIER 2025',
        description: 'Commémoration de la loi Veil. Un combat pour la liberté et la dignité. #loiVeil #droitsdesfemmes',
        commentsList: [
            { user: 'political_hist', text: 'Une loi qui a changé la société française' },
            { user: 'women_rights', text: 'Merci pour ce combat historique 🙏' }
        ]
    },
    // Add more posts with similar structure up to 9
];

// Generate posts grid
const postsGrid = document.querySelector('.posts-grid');
posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <img src="${post.image}" alt="Post ${post.id}">
        <div class="post-overlay">
            ❤️ ${post.likes} &nbsp;&nbsp; 💬 ${post.comments}
        </div>
    `;
    postElement.onclick = () => openModal(post);
    postsGrid.appendChild(postElement);
});

// Modal functionality
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const modalImage = document.querySelector('.modal-image img');
const modalComments = document.querySelector('.modal-comments');
const likesCount = document.querySelector('.likes-count');
const postDate = document.querySelector('.post-date');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentPostIndex = 0;

function openModal(post) {
    currentPostIndex = posts.findIndex(p => p.id === post.id);
    updateModal(post);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateModal(post) {
    modalImage.src = post.image;
    likesCount.textContent = `${post.likes} likes`;
    postDate.textContent = post.date;
    
    modalComments.innerHTML = `
        <div class="comment">
            <strong>simone_veil</strong> ${post.description}
        </div>
        ${post.commentsList.map(comment => `
            <div class="comment">
                <strong>${comment
