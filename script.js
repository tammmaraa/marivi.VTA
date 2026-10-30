/* ===== Datos de ejemplo: categorías y 20 perfiles ficticios ===== */
const CATEGORIES = {
    'Diseño Gráfico': {
        icon: 'fa-palette',
        bio: 'Creo piezas visuales claras y con personalidad para negocios y emprendimientos locales.',
        works: ['Identidad de marca', 'Afiches y volantes', 'Empaques', 'Piezas para redes']
    },
    'Programación': {
        icon: 'fa-laptop-code',
        bio: 'Desarrollo sitios web y herramientas a la medida para que tu negocio funcione mejor.',
        works: ['Sitio web para negocio', 'Aplicación de inventario', 'Tienda en línea', 'Automatización de reportes']
    },
    'Plomería': {
        icon: 'fa-wrench',
        bio: 'Instalo y reparo sistemas de agua y desagüe en hogares y locales, con trabajo garantizado.',
        works: ['Instalación de baños', 'Reparación de fugas', 'Cambio de tuberías', 'Instalación de calentadores']
    },
    'Tutorías': {
        icon: 'fa-book-open',
        bio: 'Acompaño a estudiantes con clases personalizadas, paciencia y métodos fáciles de seguir.',
        works: ['Refuerzo en matemáticas', 'Preparación para pruebas Saber', 'Clases de inglés', 'Apoyo en tareas']
    },
    'Fotografía': {
        icon: 'fa-camera',
        bio: 'Capturo momentos y productos con una mirada cuidada y entrega puntual de las fotos.',
        works: ['Retratos', 'Eventos sociales', 'Fotografía de producto', 'Sesiones familiares']
    },
    'Marketing Digital': {
        icon: 'fa-bullhorn',
        bio: 'Ayudo a los negocios locales a llegar a más clientes con estrategias claras y medibles.',
        works: ['Gestión de redes', 'Campañas pagas', 'Estrategia de contenidos', 'Reportes de resultados']
    },
    'Electricidad': {
        icon: 'fa-bolt',
        bio: 'Realizo instalaciones y mantenimiento eléctrico seguro para viviendas y comercios.',
        works: ['Instalaciones residenciales', 'Revisión de tableros', 'Iluminación LED', 'Mantenimiento eléctrico']
    },
    'Redacción': {
        icon: 'fa-pen-nib',
        bio: 'Escribo textos claros y bien cuidados para sitios web, catálogos y comunicaciones.',
        works: ['Textos para web', 'Artículos de blog', 'Fichas de producto', 'Corrección de estilo']
    }
};

// [nombre, categoría, ubicación, calificación, número de reseñas, años de experiencia]
const RAW_PROFILES = [
    ['Laura Martínez', 'Diseño Gráfico', 'Cartago', 4.9, 38, 6],
    ['Carlos Andrés Ríos', 'Programación', 'Cartago', 4.7, 24, 5],
    ['Juliana Herrera', 'Fotografía', 'Pereira', 4.8, 31, 7],
    ['Miguel Ángel Torres', 'Plomería', 'Cartago', 4.5, 52, 12],
    ['Valentina Cardona', 'Tutorías', 'Cartago', 5.0, 18, 4],
    ['Sebastián Gómez', 'Marketing Digital', 'Armenia', 4.3, 15, 3],
    ['Daniela Ospina', 'Redacción', 'Zarzal', 4.6, 21, 5],
    ['Julián Restrepo', 'Electricidad', 'Cartago', 4.4, 44, 10],
    ['Camila Vargas', 'Diseño Gráfico', 'Pereira', 4.2, 12, 3],
    ['Andrés Felipe Murillo', 'Programación', 'Armenia', 4.8, 29, 8],
    ['Mariana Londoño', 'Fotografía', 'Cartago', 4.9, 47, 9],
    ['Jhon Edison Salazar', 'Plomería', 'Zarzal', 4.1, 33, 15],
    ['Paula Andrea Giraldo', 'Tutorías', 'Pereira', 4.7, 26, 6],
    ['Santiago Duque', 'Programación', 'Cartago', 4.0, 9, 2],
    ['Natalia Bedoya', 'Marketing Digital', 'Cartago', 4.8, 36, 5],
    ['Óscar Iván Correa', 'Electricidad', 'Armenia', 4.6, 27, 11],
    ['Isabela Quintero', 'Redacción', 'Cartago', 4.9, 19, 4],
    ['Felipe Arango', 'Fotografía', 'Ansermanuevo', 3.9, 8, 2],
    ['Luisa Fernanda Castaño', 'Tutorías', 'Obando', 4.5, 14, 3],
    ['David Mejía', 'Diseño Gráfico', 'La Victoria', 3.8, 7, 2]
];

const PROFILES = RAW_PROFILES.map((r, i) => ({
    id: i + 1,
    name: r[0],
    category: r[1],
    location: r[2],
    rating: r[3],
    reviews: r[4],
    years: r[5]
}));

const SAMPLE_REVIEWS = [
    ['Andrés P.', 'Excelente trabajo, cumplió con los tiempos acordados y la comunicación fue clara.'],
    ['Sofía R.', 'Muy profesional y atento a los detalles. Lo recomiendo.'],
    ['Camilo T.', 'Buen resultado final, acorde a lo que pedí. Volvería a contratar.'],
    ['Daniela M.', 'Servicio puntual y amable. Quedé muy conforme con el resultado.']
];

const RATING_LABELS = ['Muy malo', 'Regular', 'Bueno', 'Muy bueno', 'Excelente'];

/* ===== Funciones auxiliares ===== */
function normalizeText(text) {
    return String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderStars(rating) {
    const pct = Math.max(0, Math.min(5, rating)) / 5 * 100;
    return '<span class="stars" style="--pct: ' + pct + '%" role="img" aria-label="' + rating.toFixed(1) + ' de 5 estrellas"></span>';
}

function avatarUrl(profile, size) {
    const useGold = profile.id % 2 === 0;
    const background = useGold ? 'C8A45A' : '8B3A6B';
    const color = useGold ? '1E2022' : 'FFFFFF';
    return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(profile.name) +
        '&size=' + size + '&background=' + background + '&color=' + color + '&bold=true';
}

function profilePhone(profile) {
    return '57300000' + String(profile.id).padStart(4, '0');
}

function profilePhoneLabel(profile) {
    return '+57 300 000 ' + String(profile.id).padStart(4, '0');
}

function profileEmail(profile) {
    return normalizeText(profile.name).trim().replace(/\s+/g, '.') + '@ejemplo.com';
}

function profileBio(profile) {
    const cat = CATEGORIES[profile.category];
    return cat.bio + ' Cuento con ' + profile.years + ' años de experiencia atendiendo clientes en ' +
        profile.location + ' y sus alrededores.';
}


/* ===== Motor de búsqueda (lo usan el buscador y el chatbot) ===== */
const CATEGORY_KEYWORDS = {
    'Diseño Gráfico': ['diseno', 'grafico', 'disenador', 'logo', 'logotipo', 'marca', 'branding', 'afiche', 'volante', 'flyer', 'empaque', 'ilustracion', 'banner'],
    'Programación': ['programacion', 'programador', 'desarrollador', 'web', 'pagina', 'sitio', 'app', 'aplicacion', 'software', 'tienda', 'ecommerce', 'sistema', 'codigo', 'sistemas'],
    'Plomería': ['plomeria', 'plomero', 'fontanero', 'tuberia', 'fuga', 'goteo', 'bano', 'agua', 'desague', 'calentador', 'grifo', 'llave', 'sanitario'],
    'Tutorías': ['tutoria', 'tutor', 'profesor', 'profe', 'clase', 'clases', 'refuerzo', 'matematicas', 'ingles', 'tarea', 'tareas', 'saber', 'colegio', 'estudiar', 'maestro'],
    'Fotografía': ['fotografia', 'fotografo', 'foto', 'fotos', 'video', 'retrato', 'boda', 'evento', 'eventos', 'matrimonio', 'quince', 'bautizo', 'sesion'],
    'Marketing Digital': ['marketing', 'mercadeo', 'publicidad', 'redes', 'social', 'instagram', 'facebook', 'campana', 'anuncios', 'ads', 'community', 'seo', 'contenido', 'contenidos', 'ventas'],
    'Electricidad': ['electricidad', 'electricista', 'electrico', 'luz', 'cableado', 'tablero', 'iluminacion', 'led', 'corto', 'breaker', 'tomacorriente', 'instalacion'],
    'Redacción': ['redaccion', 'redactor', 'escritor', 'texto', 'textos', 'articulo', 'blog', 'copy', 'correccion', 'ortografia', 'contenido', 'catalogo', 'escribir']
};

const KNOWN_LOCATIONS = [...new Set(RAW_PROFILES.map((r) => r[2]))];
const STOPWORDS = new Set(['un', 'una', 'uno', 'el', 'la', 'los', 'las', 'de', 'del', 'en', 'para', 'por', 'con', 'que', 'y', 'o', 'a', 'al', 'me', 'mi', 'necesito', 'busco', 'quiero', 'buscar', 'hay', 'alguien', 'quien', 'puede', 'pueda', 'hacer', 'hagan', 'haga', 'ayuda', 'ayudar', 'favor', 'por', 'cerca', 'municipio', 'ciudad', 'profesional', 'profesionales', 'servicio', 'servicios', 'freelancer', 'freelancers', 'se', 'es', 'son', 'tengo', 'tiene', 'tienen', 'como', 'donde', 'cual', 'mas', 'muy', 'bueno', 'buena', 'mejor', 'mejores']);

function tokenize(text) {
    return normalizeText(text).split(/[^a-z0-9ñ]+/).filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

// Dos palabras "coinciden" si una empieza por la otra (tolera plurales y variantes: foto/fotos, plomero/plomería)
function wordMatches(token, word) {
    if (word === token) return true;
    if (token.length >= 3 && word.startsWith(token)) return true;
    if (word.length >= 4 && token.startsWith(word)) return true;
    const stem = (w) => w.slice(0, Math.max(4, w.length - 2));
    return token.length >= 5 && word.length >= 5 && stem(token) === stem(word);
}

function profileIndex(p) {
    const cat = CATEGORIES[p.category];
    return {
        name: tokenize(p.name),
        loc: tokenize(p.location),
        cat: tokenize(p.category).concat(CATEGORY_KEYWORDS[p.category] || []),
        works: tokenize(cat.works.join(' '))
    };
}
const PROFILE_INDEX = PROFILES.map(profileIndex);

// Devuelve los perfiles que cumplen TODOS los términos, con puntaje de relevancia
function searchProfiles(query) {
    const tokens = tokenize(query);
    if (!tokens.length) return PROFILES.map((p) => ({ profile: p, score: 0 }));

    const results = [];
    PROFILES.forEach((p, i) => {
        const idx = PROFILE_INDEX[i];
        let score = 0;
        const allMatch = tokens.every((t) => {
            let best = 0;
            if (idx.name.some((w) => wordMatches(t, w))) best = Math.max(best, 5);
            if (idx.cat.some((w) => wordMatches(t, w))) best = Math.max(best, 4);
            if (idx.loc.some((w) => wordMatches(t, w))) best = Math.max(best, 3);
            if (idx.works.some((w) => wordMatches(t, w))) best = Math.max(best, 2);
            score += best;
            return best > 0;
        });
        if (allMatch) results.push({ profile: p, score: score + p.rating / 10 });
    });
    return results.sort((a, b) => b.score - a.score);
}

function detectCategory(text) {
    const tokens = tokenize(text);
    let best = null, bestScore = 0;
    Object.keys(CATEGORIES).forEach((cat) => {
        const words = tokenize(cat).concat(CATEGORY_KEYWORDS[cat] || []);
        const score = tokens.filter((t) => words.some((w) => wordMatches(t, w))).length;
        if (score > bestScore) { best = cat; bestScore = score; }
    });
    return best;
}

function detectLocation(text) {
    const clean = normalizeText(text);
    return KNOWN_LOCATIONS.find((l) => clean.includes(normalizeText(l))) || null;
}

/* ===== Lógica de la página ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Bloquea el scroll del fondo mientras haya una ventana emergente abierta
    function syncScroll() {
        const anyOpen = document.querySelector('.popup-container.is-open');
        document.body.style.overflow = anyOpen ? 'hidden' : '';
    }

    // ----- Popup de novedades -----
    const popup = document.getElementById('productsNewsPopup');

    function openPopup() {
        popup.classList.add('is-open');
        syncScroll();
    }

    function closePopup() {
        popup.classList.remove('is-open');
        syncScroll();
    }

    if (popup) {
        document.querySelectorAll('.js-open-news').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openPopup();
            });
        });

        document.querySelectorAll('.js-close-news').forEach((btn) => {
            btn.addEventListener('click', closePopup);
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup();
        });

        // Permite abrir el popup desde otras páginas con index.html#novedades
        if (window.location.hash === '#novedades') openPopup();
    }

    // ----- Chatbot (disponible en todas las páginas) -----
    function ensureChatbotDom() {
        if (document.getElementById('chatbot-container')) return;
        const wrap = document.createElement('div');
        wrap.innerHTML =
            '<button type="button" id="chatbot-toggle-btn" class="chatbot-toggle" aria-label="Abrir asistente" aria-expanded="false"><i class="fas fa-comment-dots"></i></button>' +
            '<div id="chatbot-container" role="dialog" aria-label="Asistente Mariví">' +
                '<div class="chatbot-header"><h4><i class="fas fa-robot"></i> Asistente Mariví</h4>' +
                '<div class="chatbot-header-actions"><button type="button" class="close-btn" id="chatbot-reset-btn" aria-label="Reiniciar conversación" title="Reiniciar"><i class="fas fa-rotate-right"></i></button>' +
                '<button type="button" class="close-btn" id="chatbot-close-btn" aria-label="Cerrar asistente">&times;</button></div></div>' +
                '<div class="chat-messages" id="chat-messages" aria-live="polite"></div>' +
                '<div class="chat-input-area"><input type="text" id="user-input" placeholder="Escribe tu mensaje..." aria-label="Mensaje" autocomplete="off">' +
                '<button type="button" id="send-btn" aria-label="Enviar"><i class="fas fa-paper-plane"></i></button></div>' +
            '</div>';
        while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    }
    ensureChatbotDom();

    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotResetBtn = document.getElementById('chatbot-reset-btn');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    const CHAT_KEY = 'marivi_chat_v1';
    const WELCOME_CHIPS = ['Buscar un plomero', 'Fotógrafo para una boda', '¿Cómo funciona?', 'Quiero ofrecer mi servicio', 'Contacto'];
    let chatHistory = [];
    let chatBusy = false;

    function saveChat() {
        try { sessionStorage.setItem(CHAT_KEY, JSON.stringify(chatHistory.slice(-40))); } catch (err) { /* sin almacenamiento */ }
    }

    function loadChat() {
        try {
            const stored = JSON.parse(sessionStorage.getItem(CHAT_KEY));
            return Array.isArray(stored) ? stored : [];
        } catch (err) { return []; }
    }

    function scrollChat() { chatMessages.scrollTop = chatMessages.scrollHeight; }

    function removeChips() {
        chatMessages.querySelectorAll('.chat-chips').forEach((el) => el.remove());
    }

    // sender: 'user' (texto plano) | 'bot' (HTML de confianza generado por este script)
    function renderMessage(sender, content, chips) {
        const div = document.createElement('div');
        div.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        if (sender === 'user') div.textContent = content; else div.innerHTML = content;
        chatMessages.appendChild(div);

        if (chips && chips.length) {
            const row = document.createElement('div');
            row.className = 'chat-chips';
            chips.forEach((label) => {
                const b = document.createElement('button');
                b.type = 'button';
                b.className = 'chip';
                b.textContent = label;
                b.addEventListener('click', () => handleUserText(label));
                row.appendChild(b);
            });
            chatMessages.appendChild(row);
        }
        scrollChat();
    }

    function addMessage(content, sender, chips) {
        if (sender === 'bot') removeChips();
        renderMessage(sender, content, chips);
        chatHistory.push({ sender: sender, content: content, chips: chips || [] });
        saveChat();
    }

    function showTyping() {
        const t = document.createElement('div');
        t.className = 'message bot-message typing';
        t.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(t);
        scrollChat();
        return t;
    }

    // ---- Respuestas ----
    function resultsHtml(list) {
        return '<div class="chat-results">' + list.map((p) =>
            '<a class="chat-result" href="perfil-publico.html?id=' + p.id + '">' +
                '<strong>' + escapeHtml(p.name) + '</strong>' +
                '<small>' + escapeHtml(p.category) + ' · ' + escapeHtml(p.location) + ' · ' + p.years + ' años</small>' +
                '<span class="chat-result-rating">' + renderStars(p.rating) + ' ' + p.rating.toFixed(1) + ' (' + p.reviews + ')</span>' +
            '</a>').join('') + '</div>';
    }

    function searchReply(text) {
        const clean = normalizeText(text);
        const cat = detectCategory(text);
        const loc = detectLocation(text);
        const wantsBest = /mejor|calificad|recomend|top|destacad/.test(clean);

        let found = searchProfiles(text).map((r) => r.profile);
        let note = '';

        if (!found.length && (cat || loc)) {
            found = searchProfiles([cat, loc].filter(Boolean).join(' ')).map((r) => r.profile);
            if (!found.length && cat) {
                found = PROFILES.filter((p) => p.category === cat);
                if (loc) note = 'No tengo ' + escapeHtml(cat.toLowerCase()) + ' en <strong>' + escapeHtml(loc) + '</strong> todavía, pero estos profesionales de la zona pueden ayudarte: ';
            }
        }
        if (!found.length) return null;

        if (wantsBest) found = found.slice().sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        const top = found.slice(0, 4);
        const query = [cat, loc].filter(Boolean).join(' ') || text;

        const intro = note || (found.length === 1
            ? 'Encontré 1 profesional que puede ayudarte:'
            : 'Encontré <strong>' + found.length + '</strong> profesionales' + (cat ? ' en <strong>' + escapeHtml(cat) + '</strong>' : '') + (loc ? ' en <strong>' + escapeHtml(loc) + '</strong>' : '') + (wantsBest ? ' (los mejor calificados primero)' : '') + ':');
        const more = found.length > top.length
            ? '<a class="chat-more" href="explorar.html?q=' + encodeURIComponent(query) + '">Ver los ' + found.length + ' resultados en Explorar →</a>'
            : '';

        return { html: intro + resultsHtml(top) + more, chips: ['Otra búsqueda', 'Contacto'] };
    }

    function categoriesHtml() {
        return Object.keys(CATEGORIES).map((c) => {
            const n = PROFILES.filter((p) => p.category === c).length;
            return '<li><i class="fas ' + CATEGORIES[c].icon + '"></i> ' + escapeHtml(c) + ' <small>(' + n + ')</small></li>';
        }).join('');
    }

    const INTENTS = [
        { yields: true, test: /^(hola|holi|buenas|buenos dias|buen dia|buenas tardes|buenas noches|hey|saludos|que tal)\b/,
          run: () => ({ html: '¡Hola! 😊 Soy el asistente de Mariví. Puedo ayudarte a <strong>encontrar un profesional</strong> de Cartago y alrededores, o resolver dudas sobre la plataforma. ¿Qué necesitas?', chips: WELCOME_CHIPS }) },
        { yields: true, test: /gracias|te agradezco|muy amable|genial|perfecto|excelente servicio/,
          run: () => ({ html: '¡De nada! 😊 Si necesitas algo más, aquí estaré.', chips: ['Buscar un servicio', 'Contacto'] }) },
        { yields: true, test: /\b(adios|chao|chau|hasta luego|nos vemos|bye)\b/,
          run: () => ({ html: '¡Hasta pronto! 👋 Que tengas un gran día.' }) },
        { test: /(registr|crear (una )?cuenta|inscrib|unirme|abrir (una )?cuenta|sign ?up)/,
          run: () => ({ html: 'Registrarse es <strong>gratis</strong> y toma un minuto. Crea tu cuenta aquí: <a href="registro.html">Registrarse</a>. ¿Ya tienes cuenta? <a href="iniciar_sesion.html">Inicia sesión</a>.', chips: ['Quiero ofrecer mi servicio', 'Buscar un servicio'] }) },
        { test: /(iniciar sesion|inicio de sesion|ingresar|entrar a mi|login|contrasena|clave|olvide)/,
          run: () => ({ html: 'Puedes entrar desde <a href="iniciar_sesion.html">Iniciar Sesión</a>. Si aún no tienes cuenta, <a href="registro.html">regístrate gratis</a>.' }) },
        { test: /(ofrecer|ofrezco|publicar|vender mis|soy (un |una )?freelance|quiero trabajar|subir mi|anunciar|dar mis servicios|promocionar)/,
          run: () => ({ html: '¡Genial! Para ofrecer tus servicios: <strong>1)</strong> <a href="registro.html">crea tu cuenta</a>, <strong>2)</strong> completa tu perfil con tu profesión, ubicación y portafolio, y <strong>3)</strong> los clientes de Cartago podrán encontrarte y escribirte por WhatsApp o correo.', chips: ['¿Cuánto cuesta?', 'Reseñas'] }) },
        { yields: true, test: /(cuesta|precio|costo|tarifa|cobran|cobrar|gratis|pagar|pago|cuanto)/,
          run: () => ({ html: 'Usar Mariví es <strong>gratis</strong> para buscar y registrarte. Cada profesional define sus propias tarifas: acuerda el precio directamente con él o ella por WhatsApp o correo antes de empezar. Mariví no procesa pagos.', chips: ['Buscar un servicio', 'Contacto'] }) },
        { yields: true, test: /(resena|calificacion|opinion|estrellas|valorar|calificar|comentario)/,
          run: () => ({ html: 'Cada perfil muestra su calificación y reseñas. Para dejar la tuya, entra al perfil del profesional (desde <a href="explorar.html">Explorar</a>) y usa el formulario <strong>“Deja tu reseña”</strong>.' }) },
        { yields: true, test: /(editar|mi perfil|mi cuenta|cambiar mi|actualizar mi)/,
          run: () => ({ html: 'En <a href="perfil.html">Mi Cuenta</a> puedes ver tu perfil y usar el botón <strong>“Editar perfil”</strong> para cambiar tus datos.' }) },
        { test: /(privacidad|cookies|datos personales|terminos|politica)/,
          run: () => ({ html: 'Puedes leer nuestras <a href="#" class="js-open-policy">políticas de privacidad, cookies y términos</a>. Tus datos se tratan según la Ley 1581 de 2012.' }) },
        { yields: true, test: /(seguro|confiable|confianza|estafa|garantia|verificad)/,
          run: () => ({ html: 'Te recomendamos revisar las <strong>reseñas y la experiencia</strong> de cada profesional antes de contratar, y acordar alcance y precio por escrito. Mariví conecta personas, pero no es parte del acuerdo entre cliente y freelancer.' }) },
        { yields: true, test: /(contacto|contactar|escribir|whatsapp|correo|email|telefono|llamar|soporte|hablar con|asesor)/,
          run: () => ({ html: 'Puedes escribirnos:<ul class="chat-list"><li><i class="fas fa-envelope"></i> <a href="mailto:contacto@marivi.co">contacto@marivi.co</a></li><li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/573000000000" target="_blank" rel="noopener">+57 300 000 0000</a></li></ul>También está el <a href="index.html#contacto">formulario de contacto</a>.' }) },
        { yields: true, test: /(categorias|que servicios|que profesiones|que ofrecen|que hay|servicios disponibles|profesiones|oficios)/,
          run: () => ({ html: 'Estas son las categorías disponibles:<ul class="chat-list">' + categoriesHtml() + '</ul>Dime cuál te interesa o escribe lo que necesitas (por ejemplo, “necesito un electricista”).', chips: ['Plomería', 'Diseño Gráfico', 'Tutorías', 'Programación'] }) },
        { test: /(ubicacion|direccion|municipios|ciudades|zonas|cobertura|donde (estan|queda|trabajan))/,
          run: () => ({ html: 'Estamos en <strong>Cartago, Valle del Cauca</strong>, y hay profesionales en: ' + KNOWN_LOCATIONS.map(escapeHtml).join(', ') + '. Puedes filtrar por ubicación en <a href="explorar.html">Explorar</a>.', chips: ['Profesionales en Cartago', 'Profesionales en Pereira'] }) },
        { test: /(como funciona|que es marivi|de que se trata|para que sirve|que puedo hacer|que hacen ustedes|como uso)/,
          run: () => ({ html: 'Mariví conecta a <strong>freelancers de Cartago y alrededores</strong> con personas que necesitan sus servicios. Tú puedes: <strong>buscar</strong> por profesión, ciudad o calificación; <strong>contactar</strong> directo por WhatsApp o correo; y <strong>dejar reseñas</strong>. Si eres profesional, puedes <a href="registro.html">publicar tus servicios gratis</a>.', chips: ['Buscar un plomero', 'Quiero ofrecer mi servicio'] }) },
        { test: /^(ayuda|opciones|menu|que puedes hacer|que sabes hacer|comandos)\b/,
          run: () => ({ html: 'Puedo ayudarte a: <strong>buscar profesionales</strong> (ej. “electricista en Cartago”), explicarte <strong>cómo funciona</strong> Mariví, guiarte para <strong>registrarte</strong> u <strong>ofrecer tu servicio</strong>, y darte los <strong>datos de contacto</strong>.', chips: WELCOME_CHIPS }) },
        { test: /^(otra busqueda|buscar un servicio|buscar|nueva busqueda)$/,
          run: () => ({ html: '¡Claro! Cuéntame qué necesitas y en qué ciudad, por ejemplo: <em>“diseñador de logos en Pereira”</em> o <em>“clases de inglés”</em>.', chips: ['Buscar un plomero', 'Fotógrafo para una boda', 'Programador web', 'Tutorías'] }) }
    ];

    function getBotReply(text) {
        const clean = normalizeText(text).trim();
        const wantsSearch = Boolean(detectCategory(text) || detectLocation(text));

        for (const intent of INTENTS) {
            if (wantsSearch && intent.yields) continue;
            if (intent.test.test(clean)) return intent.run();
        }

        const found = searchReply(text);
        if (found) return found;

        return {
            html: 'No estoy seguro de haber entendido 🤔. Puedes decirme qué profesional buscas (ej. <em>“necesito un plomero en Cartago”</em>) o elegir una opción:',
            chips: ['Buscar un servicio', '¿Cómo funciona?', 'Quiero ofrecer mi servicio', 'Contacto']
        };
    }

    function handleUserText(text) {
        const userText = text.trim();
        if (!userText || chatBusy) return;
        chatBusy = true;
        addMessage(userText, 'user');

        const reply = getBotReply(userText);
        const typing = showTyping();
        const delay = Math.min(1100, 450 + reply.html.length * 2);

        setTimeout(() => {
            typing.remove();
            addMessage(reply.html, 'bot', reply.chips);
            chatBusy = false;
        }, delay);
    }

    function sendMessage() {
        const text = userInput.value;
        userInput.value = '';
        handleUserText(text);
    }

    function startChat() {
        chatMessages.innerHTML = '';
        chatHistory = [];
        saveChat();
        addMessage('¡Hola! Soy tu asistente de Mariví 👋 Te ayudo a <strong>encontrar profesionales</strong> en Cartago y alrededores, o a resolver tus dudas. ¿Qué necesitas?', 'bot', WELCOME_CHIPS);
    }

    function toggleChatbot() {
        const isOpen = chatbotContainer.classList.toggle('is-open');
        chatbotToggleBtn.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) {
            scrollChat();
            userInput.focus();
        }
    }

    chatbotToggleBtn.addEventListener('click', toggleChatbot);
    chatbotCloseBtn.addEventListener('click', toggleChatbot);
    chatbotResetBtn.addEventListener('click', startChat);
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
    });

    const saved = loadChat();
    if (saved.length) {
        chatHistory = saved;
        chatMessages.innerHTML = '';
        saved.forEach((m, i) => renderMessage(m.sender, m.content, i === saved.length - 1 ? m.chips : []));
    } else {
        startChat();
    }

    // ----- Formulario de contacto (abre el correo con el mensaje prellenado) -----
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = contactForm.elements['nombre'].value.trim();
            const correo = contactForm.elements['correo'].value.trim();
            const mensaje = contactForm.elements['mensaje'].value.trim();
            const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

            if (!nombre || !correoValido || !mensaje) {
                contactStatus.textContent = 'Por favor completa tu nombre, un correo válido y tu mensaje.';
                return;
            }

            const asunto = encodeURIComponent('Consulta desde Mariví - ' + nombre);
            const cuerpo = encodeURIComponent('Nombre: ' + nombre + '\nCorreo: ' + correo + '\n\n' + mensaje);
            window.location.href = 'mailto:contacto@marivi.co?subject=' + asunto + '&body=' + cuerpo;

            contactStatus.textContent = 'Se abrirá tu aplicación de correo con el mensaje listo para enviar. ¡Gracias por escribirnos!';
            contactForm.reset();
        });
    }

    // ----- Mi Cuenta: modo edición -----
    const editBtn = document.getElementById('edit-profile-btn');

    if (editBtn) {
        const editableItems = document.querySelectorAll('[data-editable]');
        const editLabel = editBtn.querySelector('span');
        const editIcon = editBtn.querySelector('i');
        let editing = false;

        editBtn.addEventListener('click', () => {
            editing = !editing;
            editableItems.forEach((item) => {
                item.contentEditable = editing ? 'true' : 'false';
                item.classList.toggle('is-editing', editing);
            });
            editLabel.textContent = editing ? 'Guardar cambios' : 'Editar perfil';
            editIcon.className = editing ? 'fas fa-check' : 'fas fa-pen';
        });
    }

    // ----- Explorar: buscador, filtros y lista de perfiles -----
    const profilesGrid = document.getElementById('profiles-grid');

    if (profilesGrid) {
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const categorySelect = document.getElementById('filter-category');
        const ratingSelect = document.getElementById('filter-rating');
        const locationSelect = document.getElementById('filter-location');
        const clearBtn = document.getElementById('clear-filters');
        const resultsCount = document.getElementById('results-count');
        const noResults = document.getElementById('no-results');

        // Las opciones se generan desde los datos: al agregar municipios o categorías nuevas aparecen solas
        const categories = [...new Set(PROFILES.map((p) => p.category))].sort((a, b) => a.localeCompare(b, 'es'));
        const locations = [...new Set(PROFILES.map((p) => p.location))].sort((a, b) => a.localeCompare(b, 'es'));

        categories.forEach((c) => categorySelect.add(new Option(c, c)));
        locations.forEach((l) => locationSelect.add(new Option(l, l)));

        function profileCardHtml(p) {
            return '<article class="card profile-card">' +
                '<img class="profile-photo" src="' + avatarUrl(p, 200) + '" alt="Foto de perfil de ' + escapeHtml(p.name) + '" width="96" height="96" loading="lazy">' +
                '<h3>' + escapeHtml(p.name) + '</h3>' +
                '<span class="tag">' + escapeHtml(p.category) + '</span>' +
                '<p class="profile-loc"><i class="fas fa-map-marker-alt"></i> ' + escapeHtml(p.location) + '</p>' +
                '<div class="rating-row">' + renderStars(p.rating) + '<span>' + p.rating.toFixed(1) + ' (' + p.reviews + ')</span></div>' +
                '<a href="perfil-publico.html?id=' + p.id + '" class="btn btn-outline">Ver Perfil</a>' +
                '</article>';
        }

        const sortSelect = document.getElementById('filter-sort');
        const examplesBox = document.getElementById('search-examples');

        function applyFilters() {
            const rawQuery = searchInput.value.trim();
            const category = categorySelect.value;
            const minRating = parseFloat(ratingSelect.value);
            const location = locationSelect.value;
            const sort = sortSelect ? sortSelect.value : 'relevance';

            let found = searchProfiles(rawQuery).filter(({ profile: p }) =>
                (!category || p.category === category) &&
                p.rating >= minRating &&
                (!location || p.location === location));

            const sorters = {
                relevance: (a, b) => b.score - a.score || b.profile.rating - a.profile.rating,
                rating: (a, b) => b.profile.rating - a.profile.rating || b.profile.reviews - a.profile.reviews,
                reviews: (a, b) => b.profile.reviews - a.profile.reviews,
                years: (a, b) => b.profile.years - a.profile.years,
                name: (a, b) => a.profile.name.localeCompare(b.profile.name, 'es')
            };
            found.sort(sorters[sort] || sorters.relevance);
            const filtered = found.map((r) => r.profile);

            profilesGrid.innerHTML = filtered.map(profileCardHtml).join('');
            noResults.hidden = filtered.length > 0;
            resultsCount.textContent = filtered.length === 1
                ? '1 profesional encontrado'
                : filtered.length + ' profesionales encontrados';
        }

        if (examplesBox) {
            examplesBox.addEventListener('click', (e) => {
                const chip = e.target.closest('.chip');
                if (!chip) return;
                categorySelect.value = '';
                ratingSelect.value = '0';
                locationSelect.value = '';
                searchInput.value = chip.dataset.q;
                applyFilters();
                searchInput.focus();
            });
        }
        if (sortSelect) sortSelect.addEventListener('change', applyFilters);

        // Permite llegar con una búsqueda desde otra página: explorar.html?q=plomero
        const initialQuery = new URLSearchParams(window.location.search).get('q');
        if (initialQuery) searchInput.value = initialQuery;

        searchInput.addEventListener('input', applyFilters);
        searchBtn.addEventListener('click', applyFilters);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') applyFilters();
        });
        [categorySelect, ratingSelect, locationSelect].forEach((select) => {
            select.addEventListener('change', applyFilters);
        });
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            if (sortSelect) sortSelect.value = 'relevance';
            categorySelect.value = '';
            ratingSelect.value = '0';
            locationSelect.value = '';
            applyFilters();
        });

        applyFilters();
    }

    // ----- Perfil público: datos, portafolio, contacto y reseñas -----
    const publicProfile = document.getElementById('public-profile');

    if (publicProfile) {
        const id = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
        const p = PROFILES.find((item) => item.id === id);

        if (!p) {
            publicProfile.innerHTML =
                '<div class="card profile-block"><h1>Perfil no encontrado</h1>' +
                '<p>El profesional que buscas no existe o el enlace es incorrecto.</p>' +
                '<a href="explorar.html" class="btn btn-primary">Volver a Explorar</a></div>';
        } else {
            const cat = CATEGORIES[p.category];
            const whatsappUrl = 'https://wa.me/' + profilePhone(p) + '?text=' +
                encodeURIComponent('Hola ' + p.name + ', te contacto desde Mariví.');
            const email = profileEmail(p);
            const reviewsKey = 'marivi_reviews_' + p.id;

            document.title = 'Mariví - ' + p.name;

            publicProfile.innerHTML =
                '<div class="card profile-head">' +
                    '<img class="profile-photo profile-photo-lg" src="' + avatarUrl(p, 240) + '" alt="Foto de perfil de ' + escapeHtml(p.name) + '" width="112" height="112">' +
                    '<div class="profile-meta">' +
                        '<h1>' + escapeHtml(p.name) + '</h1>' +
                        '<p class="profile-role">' + escapeHtml(p.category) + ' · <i class="fas fa-map-marker-alt"></i> ' + escapeHtml(p.location) + '</p>' +
                        '<div class="rating-summary" id="rating-summary"></div>' +
                    '</div>' +
                    '<div class="head-actions">' +
                        '<a class="btn btn-primary" href="' + whatsappUrl + '" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a>' +
                        '<a class="btn btn-outline" href="mailto:' + email + '"><i class="fas fa-envelope"></i> Correo</a>' +
                    '</div>' +
                '</div>' +
                '<div class="profile-grid">' +
                    '<aside class="profile-side">' +
                        '<div class="card profile-block"><h2>Acerca de</h2><p>' + escapeHtml(profileBio(p)) + '</p></div>' +
                        '<div class="card profile-block"><h2>Contacto</h2>' +
                            '<ul class="info-list">' +
                                '<li><i class="fab fa-whatsapp"></i><span><small>WhatsApp</small><a href="' + whatsappUrl + '" target="_blank" rel="noopener">' + profilePhoneLabel(p) + '</a></span></li>' +
                                '<li><i class="fas fa-envelope"></i><span><small>Correo electrónico</small><a href="mailto:' + email + '">' + email + '</a></span></li>' +
                                '<li><i class="fas fa-map-marker-alt"></i><span><small>Ubicación</small>' + escapeHtml(p.location) + ', Colombia</span></li>' +
                            '</ul>' +
                            '<div class="social-links">' +
                                '<a href="#" class="social-btn" aria-label="Instagram (enlace de ejemplo)"><i class="fab fa-instagram"></i></a>' +
                                '<a href="#" class="social-btn" aria-label="Facebook (enlace de ejemplo)"><i class="fab fa-facebook-f"></i></a>' +
                            '</div>' +
                        '</div>' +
                    '</aside>' +
                    '<div class="profile-main">' +
                        '<div class="card profile-block"><h2>Portafolio</h2><div class="gallery">' +
                            cat.works.map((w) =>
                                '<article class="card work-tile"><div class="card-media"><i class="fas ' + cat.icon + '"></i></div>' +
                                '<div class="card-body"><h3>' + escapeHtml(w) + '</h3></div></article>'
                            ).join('') +
                        '</div></div>' +
                        '<div class="card profile-block"><h2>Reseñas</h2>' +
                            '<p class="reviews-note">Las reseñas de ejemplo son ilustrativas. Las que publiques se guardan en este navegador.</p>' +
                            '<div id="reviews-list"></div>' +
                        '</div>' +
                        '<div class="card profile-block"><h2>Deja tu reseña</h2>' +
                            '<form id="review-form" novalidate>' +
                                '<div class="form-group"><label>Tu calificación</label>' +
                                    '<div class="star-input" id="star-input" role="group" aria-label="Calificación de 1 a 5 estrellas">' +
                                        [1, 2, 3, 4, 5].map((n) => '<button type="button" data-value="' + n + '" aria-label="' + n + (n === 1 ? ' estrella' : ' estrellas') + '" aria-pressed="false">★</button>').join('') +
                                    '</div>' +
                                    '<span class="star-label" id="star-label">Selecciona una calificación</span>' +
                                '</div>' +
                                '<div class="form-group"><label for="review-name">Tu nombre (opcional)</label>' +
                                    '<input type="text" id="review-name" class="form-control" maxlength="40" placeholder="Visitante"></div>' +
                                '<div class="form-group"><label for="review-comment">Comentario sobre el trabajo realizado</label>' +
                                    '<textarea id="review-comment" class="form-control" maxlength="500" placeholder="Cuenta tu experiencia con este profesional" required></textarea></div>' +
                                '<button type="submit" class="btn btn-primary">Publicar reseña</button>' +
                                '<p class="form-status" id="review-status" role="status" aria-live="polite"></p>' +
                            '</form>' +
                        '</div>' +
                    '</div>' +
                '</div>';

            // Reseñas guardadas por el visitante en este navegador
            function loadReviews() {
                try {
                    const stored = JSON.parse(localStorage.getItem(reviewsKey));
                    return Array.isArray(stored) ? stored : [];
                } catch (err) {
                    return [];
                }
            }

            function saveReviews(list) {
                try {
                    localStorage.setItem(reviewsKey, JSON.stringify(list));
                } catch (err) {
                    // Si el navegador bloquea localStorage, la reseña solo se muestra en esta visita.
                }
            }

            function reviewHtml(r) {
                return '<div class="review"><div class="review-head"><strong>' + escapeHtml(r.name) + '</strong>' +
                    renderStars(r.rating) + '</div><p>' + escapeHtml(r.comment) + '</p>' +
                    '<small class="review-date">' + escapeHtml(r.date) + '</small></div>';
            }

            let userReviews = loadReviews();

            function renderReviews() {
                const total = p.reviews + userReviews.length;
                const sum = p.rating * p.reviews + userReviews.reduce((acc, r) => acc + r.rating, 0);
                const average = sum / total;

                document.getElementById('rating-summary').innerHTML =
                    renderStars(average) + '<span>' + average.toFixed(1) + ' · ' + total + ' valoraciones</span>';

                const baseRating = Math.max(1, Math.min(5, Math.round(p.rating)));
                const baseReviews = [p.id % 4, (p.id + 1) % 4].map((index) => ({
                    name: SAMPLE_REVIEWS[index][0],
                    rating: baseRating,
                    comment: SAMPLE_REVIEWS[index][1],
                    date: 'Reseña de ejemplo'
                }));

                document.getElementById('reviews-list').innerHTML =
                    userReviews.slice().reverse().concat(baseReviews).map(reviewHtml).join('');
            }

            renderReviews();

            // Selector interactivo de estrellas
            const starInput = document.getElementById('star-input');
            const starButtons = Array.from(starInput.querySelectorAll('button'));
            const starLabel = document.getElementById('star-label');
            let selected = 0;

            function paintStars(count) {
                starButtons.forEach((btn, index) => btn.classList.toggle('is-on', index < count));
            }

            starButtons.forEach((btn, index) => {
                btn.addEventListener('mouseenter', () => paintStars(index + 1));
                btn.addEventListener('click', () => {
                    selected = index + 1;
                    paintStars(selected);
                    starButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
                    starLabel.textContent = selected + ' de 5 · ' + RATING_LABELS[index];
                });
            });
            starInput.addEventListener('mouseleave', () => paintStars(selected));

            // Envío del formulario de reseña
            const reviewForm = document.getElementById('review-form');
            const reviewStatus = document.getElementById('review-status');

            reviewForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const name = document.getElementById('review-name').value.trim() || 'Visitante';
                const comment = document.getElementById('review-comment').value.trim();

                if (selected === 0) {
                    reviewStatus.textContent = 'Selecciona una calificación de 1 a 5 estrellas.';
                    return;
                }
                if (comment.length < 10) {
                    reviewStatus.textContent = 'Escribe un comentario de al menos 10 caracteres.';
                    return;
                }

                userReviews.push({
                    name: name,
                    rating: selected,
                    comment: comment,
                    date: new Date().toLocaleDateString('es-CO')
                });
                saveReviews(userReviews);
                renderReviews();

                reviewForm.reset();
                selected = 0;
                paintStars(0);
                starButtons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
                starLabel.textContent = 'Selecciona una calificación';
                reviewStatus.textContent = '¡Gracias por tu reseña!';
            });
        }
    }

    // ----- Barra de cookies y modal de políticas -----
    const COOKIE_KEY = 'marivi_cookies';
    let cookieBar = null;
    let policyModal = null;

    function cookiesAccepted() {
        try {
            const data = JSON.parse(localStorage.getItem(COOKIE_KEY));
            return Boolean(data && data.accepted);
        } catch (err) {
            return false;
        }
    }

    function acceptCookies() {
        try {
            localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
        } catch (err) {
            // Si el navegador bloquea localStorage, el aviso volverá a aparecer en la próxima visita.
        }
        if (cookieBar) {
            cookieBar.remove();
            cookieBar = null;
        }
        document.body.classList.remove('cookie-open');
    }

    function buildPolicyModal() {
        policyModal = document.createElement('div');
        policyModal.className = 'popup-container policy-modal';
        policyModal.setAttribute('role', 'dialog');
        policyModal.setAttribute('aria-modal', 'true');
        policyModal.setAttribute('aria-label', 'Políticas de privacidad, cookies y términos de uso');
        policyModal.innerHTML =
            '<div class="popup-content policy-content">' +
                '<button type="button" class="close-btn" data-policy="close" aria-label="Cerrar">&times;</button>' +
                '<h2>Políticas de Privacidad, Cookies y Términos de Uso</h2>' +
                '<div class="policy-body">' +
                    '<p class="policy-updated">Última actualización: septiembre de 2026.</p>' +
                    '<h3>1. Quiénes somos</h3>' +
                    '<p>Mariví es una plataforma que conecta a personas con freelancers del municipio de Cartago, Valle del Cauca, y sus alrededores.</p>' +
                    '<h3>2. Datos personales que tratamos</h3>' +
                    '<ul>' +
                        '<li>Datos de registro: nombre, correo electrónico y contraseña (almacenada de forma cifrada).</li>' +
                        '<li>Los datos que nos envíes por el formulario de contacto.</li>' +
                        '<li>Las reseñas y comentarios que publiques sobre los profesionales.</li>' +
                    '</ul>' +
                    '<h3>3. Para qué usamos tus datos</h3>' +
                    '<p>Para crear y gestionar tu cuenta, responder tus mensajes, mostrar tus reseñas y mejorar el funcionamiento del sitio. El tratamiento de datos personales se rige por la Ley 1581 de 2012 de Colombia y sus normas complementarias.</p>' +
                    '<h3>4. Cookies y almacenamiento local</h3>' +
                    '<p>Usamos cookies y el almacenamiento local del navegador (localStorage) para recordar tu decisión sobre este aviso y guardar las reseñas que publiques desde tu navegador. Puedes borrar estos datos en cualquier momento desde la configuración de tu navegador; si lo haces, el aviso volverá a mostrarse.</p>' +
                    '<h3>5. Tus derechos</h3>' +
                    '<p>Puedes conocer, actualizar y rectificar tus datos, solicitar su supresión o revocar tu autorización escribiéndonos a contacto@marivi.co.</p>' +
                    '<h3>6. Términos de uso</h3>' +
                    '<ul>' +
                        '<li>Los perfiles y servicios son publicados por profesionales independientes; Mariví no es parte de los acuerdos entre clientes y freelancers.</li>' +
                        '<li>Las reseñas deben ser honestas y respetuosas; podemos retirar contenido ofensivo o falso.</li>' +
                        '<li>Debes usar la plataforma de forma lícita y sin suplantar a otras personas.</li>' +
                    '</ul>' +
                    '<h3>7. Cambios y contacto</h3>' +
                    '<p>Podemos actualizar estas políticas y publicaremos los cambios en esta misma ventana. Si tienes dudas, escríbenos a contacto@marivi.co.</p>' +
                '</div>' +
                '<div class="policy-actions">' +
                    '<button type="button" class="btn btn-outline" data-policy="close">Cerrar</button>' +
                    '<button type="button" class="btn btn-primary" data-policy="accept">Aceptar</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(policyModal);

        policyModal.addEventListener('click', (e) => {
            if (e.target === policyModal) closePolicy();
        });
        policyModal.querySelectorAll('[data-policy="close"]').forEach((btn) => {
            btn.addEventListener('click', closePolicy);
        });
        policyModal.querySelector('[data-policy="accept"]').addEventListener('click', () => {
            acceptCookies();
            closePolicy();
        });
    }

    function openPolicy() {
        if (!policyModal) buildPolicyModal();
        policyModal.classList.add('is-open');
        syncScroll();
    }

    function closePolicy() {
        if (policyModal) policyModal.classList.remove('is-open');
        syncScroll();
    }

    function showCookieBar() {
        cookieBar = document.createElement('div');
        cookieBar.className = 'cookie-bar';
        cookieBar.setAttribute('role', 'region');
        cookieBar.setAttribute('aria-label', 'Aviso de cookies');
        cookieBar.innerHTML =
            '<div class="cookie-bar-inner">' +
                '<p>Usamos cookies para que el sitio funcione y para mejorar tu experiencia. Consulta nuestras <a href="#" class="js-open-policy">Políticas de Privacidad</a>.</p>' +
                '<div class="cookie-bar-actions">' +
                    '<button type="button" class="btn btn-outline btn-sm" data-cookie="more">Más información</button>' +
                    '<button type="button" class="btn btn-primary btn-sm" data-cookie="accept">Aceptar</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(cookieBar);
        document.body.classList.add('cookie-open');

        cookieBar.querySelector('[data-cookie="more"]').addEventListener('click', openPolicy);
        cookieBar.querySelector('[data-cookie="accept"]').addEventListener('click', acceptCookies);
    }

    // Cualquier enlace de Términos / Privacidad / Cookies abre el modal en la misma pantalla
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.js-open-policy, .js-open-cookies, .footer-bottom nav a');
        if (trigger) {
            e.preventDefault();
            openPolicy();
        }
    });

    if (!cookiesAccepted()) showCookieBar();

    // ----- Tecla Escape cierra popups y chatbot -----
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (policyModal && policyModal.classList.contains('is-open')) {
            closePolicy();
            return;
        }
        if (popup && popup.classList.contains('is-open')) closePopup();
        if (chatbotContainer && chatbotContainer.classList.contains('is-open')) toggleChatbot();
    });
});
