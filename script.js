/*
  Semua data utama diletakkan di satu objek agar mudah diperbarui.
  Jika nanti Anda ingin mengganti teks, skill, atau project,
  Anda cukup mengubah isi object `portfolioData`.
*/
const portfolioData = {
  personal: {
    name: "Muhammad Fajri",
    role: "Mahasiswa Informatika yang bertumbuh di Web Development, Backend, dan eksplorasi AI.",
    summary:
      "Saya adalah mahasiswa S1 Informatika Telkom University yang sedang membangun fondasi kuat dalam pengembangan aplikasi, sistem berbasis data, dan backend service. Saya menikmati proses belajar yang terstruktur, analitis, dan selalu terbuka untuk berkembang melalui proyek nyata.",
    about:
      "Fokus saya saat ini ada pada pengembangan web, backend, dan penerapan AI untuk membantu proses analisis pada sistem yang dinamis. Selain pengalaman teknis, saya juga aktif dalam organisasi kampus, sehingga terbiasa memimpin, berkoordinasi, menyusun program kerja, dan bekerja lintas tim.",
    image: "./Profile.jpeg",
    github: "https://github.com/muhfajri24",
    linkedin: "https://www.linkedin.com/in/muhammad-fajri-349821287",
    email: "muhfajrmlk@gmail.com",
    phone: "0823-3318-8437",
    location: "Bandung, Jawa Barat",
    focus: ["Backend", "Web Development", "AI Exploration"],
  },

  /*
    Statistik singkat untuk menonjolkan profil secara cepat.
    Nilai ini bisa Anda ubah kapan saja tanpa menyentuh struktur HTML.
  */
  stats: [
    { value: "4+", label: "Project publik di GitHub" },
    { value: "4+", label: "Peran organisasi & profesional" },
    { value: "2024-", label: "Perjalanan aktif membangun skill" },
  ],

  /*
    Info singkat biasanya berisi hal-hal yang ingin cepat dilihat recruiter.
  */
  quickInfo: [
    { title: "Domisili", value: "Bandung, Jawa Barat" },
    { title: "Email", value: "muhfajrmlk@gmail.com" },
    { title: "Fokus Saat Ini", value: "Backend developer dan eksplorasi AI" },
    { title: "Kampus", value: "Telkom University" },
  ],

  /*
    Skill dibagi per kategori agar halaman terlihat rapi
    dan memudahkan pengunjung memahami area kemampuan Anda.
  */
  skills: [
    {
      title: "Bahasa Pemrograman",
      items: ["Python", "C++", "Go"],
    },
    {
      title: "Web",
      items: ["HTML", "CSS", "Dasar JavaScript"],
    },
    {
      title: "Data & AI",
      items: ["Machine Learning Dasar", "Fuzzy Logic", "Studi kasus berbasis data"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma"],
    },
    {
      title: "Cara Kerja",
      items: ["Analitis", "Kolaboratif", "Cepat Belajar", "Terbuka pada feedback"],
    },
    {
      title: "Arah Belajar",
      items: ["Backend API", "Dashboard Monitoring", "Integrasi AI", "Pengembangan Web"],
    },
  ],

  /*
    Timeline pengalaman diambil dari CV.
    Properti `highlights` berupa array agar setiap poin bisa dirender sebagai list.
  */
  experiences: [
    {
      period: "Jan 2026 - Sekarang",
      role: "Back End Developer",
      company: "Telkom Indonesia",
      description:
        "Mengembangkan dan mengintegrasikan backend service untuk sistem chatbot monitoring device.",
      highlights: [
        "Membuat API untuk data status device seperti Up, Down, dan Undetected.",
        "Berkolaborasi dengan tim frontend untuk implementasi chat widget dan dashboard monitoring.",
      ],
    },
    {
      period: "Jan 2025 - Des 2025",
      role: "Ketua UKM",
      company: "UKM Paskibra Telkom University",
      description:
        "Memimpin perencanaan dan pelaksanaan program kerja organisasi serta mewakili organisasi pada forum resmi.",
      highlights: [
        "Mengoordinasikan anggota dan jalannya program kerja organisasi.",
        "Mengasah kepemimpinan, komunikasi, dan pengambilan keputusan.",
      ],
    },
    {
      period: "April 2025 - Saat ini",
      role: "Staff Ahli Komisi Etik",
      company: "Badan Perwakilan Mahasiswa HIMAIF - Telkom University",
      description:
        "Mendukung pengawasan dan evaluasi penerapan kode etik organisasi.",
      highlights: [
        "Terlibat dalam diskusi kebijakan dan pengambilan keputusan internal.",
        "Mendukung evaluasi serta penguatan tata kelola organisasi.",
      ],
    },
    {
      period: "Okt 2024 - Mar 2025",
      role: "Staff Magang Diplomasi dan Legislasi",
      company: "Badan Perwakilan Mahasiswa HIMAIF - Telkom University",
      description:
        "Membantu penyusunan dokumen legislasi dan administrasi kelembagaan.",
      highlights: [
        "Mendukung koordinasi kegiatan diplomasi internal organisasi.",
        "Belajar menyusun dokumen, komunikasi formal, dan kerja administratif.",
      ],
    },
    {
      period: "Sept 2023 - Sekarang",
      role: "Staff Magang Divisi Eksternal",
      company: "UKM Paskibra Telkom University",
      description:
        "Mendukung hubungan eksternal dan koordinasi acara organisasi.",
      highlights: [
        "Terlibat dalam koordinasi kegiatan dan komunikasi eksternal.",
        "Membangun pengalaman kerja tim dan tanggung jawab operasional.",
      ],
    },
  ],

  education: [
    {
      period: "Jan 2024 - Nov 2024",
      title: "S1 Informatika",
      institution: "Telkom University",
      description:
        "Undergraduate of Informatics dengan minat pada pengembangan aplikasi, sistem berbasis data, web, dan AI.",
    },
  ],

  /*
    Daftar project diambil dari data GitHub publik yang berhasil diakses.
  */
  projects: [
    {
      name: "Sistem Order di Tempat QR System",
      stack: "HTML, CSS, JavaScript",
      description:
        "Sistem order di tempat berbasis QR yang memudahkan pelanggan membuka menu dan mengecek alur pemesanan langsung dari smartphone.",
      liveUrl: "muhfajri24.github.io/Sistem-Order-di-Tempat-QR-System-/",
      links: [
        {
          label: "Buka Website",
          href: "https://muhfajri24.github.io/Sistem-Order-di-Tempat-QR-System-/",
        },
        {
          label: "Buka Repository",
          href: "https://github.com/muhfajri24/Sistem-Order-di-Tempat-QR-System-",
        },
      ],
    },
    {
      name: "revou-mini-project",
      stack: "CSS",
      description: "Mini project dari RevoU Coding Camp Software Engineering.",
      liveUrl: "muhfajri24.github.io/revou-mini-project/",
      links: [
        {
          label: "Buka Website",
          href: "https://muhfajri24.github.io/revou-mini-project/",
        },
        {
          label: "Buka Repository",
          href: "https://github.com/muhfajri24/revou-mini-project",
        },
      ],
    },
    {
      name: "Artficial_Intellegence_Project",
      stack: "Jupyter Notebook",
      description:
        "Proyek machine learning end-to-end untuk klasifikasi potabilitas air menggunakan KNN dan seleksi fitur berbasis Genetic Algorithm.",
      links: [
        {
          label: "Buka Repository",
          href: "https://github.com/muhfajri24/Artficial_Intellegence_Project",
        },
      ],
    },
    {
      name: "employee-bonus-fuzzy-system",
      stack: "Jupyter Notebook",
      description:
        "Implementasi Fuzzy Inference System (Sugeno dan Mamdani) untuk menentukan bonus karyawan berdasarkan gaji dan skor performa.",
      links: [
        {
          label: "Buka Repository",
          href: "https://github.com/muhfajri24/employee-bonus-fuzzy-system",
        },
      ],
    },
  ],

  contacts: [
    {
      label: "Email",
      value: "muhfajrmlk@gmail.com",
      href: "mailto:muhfajrmlk@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/muhfajri24",
      href: "https://github.com/muhfajri24",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-fajri-349821287",
      href: "https://www.linkedin.com/in/muhammad-fajri-349821287",
    },
  ],
};

/*
  Helper pendek untuk mengambil elemen dari HTML.
  Ini membuat kode di bawah lebih singkat dan mudah dibaca.
*/
const $ = (selector) => document.querySelector(selector);

/*
  Fungsi untuk membuat elemen baru dengan class tertentu.
  Dengan helper ini, pembuatan kartu-kartu jadi lebih konsisten.
*/
const createElement = (tag, className, text) => {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
};

/*
  Bagian ini mengisi konten dasar pada area hero dan tentang saya.
*/
function renderBasicProfile() {
  $("#hero-name").textContent = portfolioData.personal.name;
  $("#hero-role").textContent = portfolioData.personal.role;
  $("#hero-summary").textContent = portfolioData.personal.summary;
  $("#about-text").textContent = portfolioData.personal.about;
  $("#contact-summary").textContent =
    "Saya terbuka untuk kesempatan belajar, kolaborasi proyek, internship, maupun peran entry-level yang relevan dengan backend, web development, dan eksplorasi AI.";

  $("#profile-image").src = portfolioData.personal.image;
  $("#github-button").href = portfolioData.personal.github;
  $("#linkedin-button").href = portfolioData.personal.linkedin;
}

/*
  Render badge fokus pada kartu profil.
*/
function renderFocusBadges() {
  const badgeContainer = $("#focus-badges");

  portfolioData.personal.focus.forEach((item) => {
    const badge = createElement("span", "badge", item);
    badgeContainer.appendChild(badge);
  });
}

/*
  Render statistik singkat.
*/
function renderStats() {
  const statsGrid = $("#stats-grid");

  portfolioData.stats.forEach((stat) => {
    const card = createElement("article", "stat-card");
    const value = createElement("strong", "", stat.value);
    const label = createElement("span", "", stat.label);

    card.append(value, label);
    statsGrid.appendChild(card);
  });
}

/*
  Render info cepat seperti lokasi, email, dan kampus.
*/
function renderQuickInfo() {
  const infoList = $("#info-list");

  portfolioData.quickInfo.forEach((item) => {
    const wrapper = createElement("div", "info-item");
    const title = createElement("strong", "", item.title);
    const value = createElement("span", "", item.value);

    wrapper.append(title, value);
    infoList.appendChild(wrapper);
  });
}

/*
  Render kategori skill.
*/
function renderSkills() {
  const skillGroups = $("#skill-groups");

  portfolioData.skills.forEach((group) => {
    const card = createElement("article", "skill-card");
    const title = createElement("h3", "", group.title);
    const list = createElement("div", "skill-list");

    group.items.forEach((item) => {
      list.appendChild(createElement("span", "skill-chip", item));
    });

    card.append(title, list);
    skillGroups.appendChild(card);
  });
}

/*
  Render timeline pengalaman.
  Setiap highlights dirender sebagai unordered list.
*/
function renderExperiences() {
  const experienceList = $("#experience-list");

  portfolioData.experiences.forEach((experience) => {
    const item = createElement("article", "timeline-item");
    const content = createElement("div", "timeline-content");
    const period = createElement("p", "timeline-period", experience.period);
    const role = createElement("h3", "", experience.role);
    const company = createElement("p", "timeline-company", experience.company);
    const description = createElement("p", "", experience.description);
    const highlightList = createElement("ul", "");

    experience.highlights.forEach((highlight) => {
      highlightList.appendChild(createElement("li", "", highlight));
    });

    content.append(period, role, company, description, highlightList);
    item.appendChild(content);
    experienceList.appendChild(item);
  });
}

/*
  Render kartu pendidikan.
*/
function renderEducation() {
  const educationList = $("#education-list");

  portfolioData.education.forEach((item) => {
    const card = createElement("article", "education-card");
    const period = createElement("p", "timeline-period", item.period);
    const title = createElement("h3", "", item.title);
    const institution = createElement("p", "timeline-company", item.institution);
    const description = createElement("p", "", item.description);

    card.append(period, title, institution, description);
    educationList.appendChild(card);
  });
}

/*
  Render kartu proyek dari data GitHub.
*/
function renderProjects() {
  const projectList = $("#project-list");

  portfolioData.projects.forEach((project) => {
    const card = createElement("article", "project-card");
    const top = createElement("div", "project-top");
    const meta = createElement("p", "project-meta", project.stack);
    const title = createElement("h3", "", project.name);
    const description = createElement("p", "", project.description);
    const liveUrl = project.liveUrl
      ? createElement("p", "project-live-url", `Link project: ${project.liveUrl}`)
      : null;
    const actions = createElement("div", "project-actions");

    project.links.forEach((item) => {
      const link = createElement("a", "project-link", item.label);

      link.href = item.href;
      link.target = "_blank";
      link.rel = "noreferrer";

      actions.appendChild(link);
    });

    top.append(meta, title, description);

    if (liveUrl) {
      top.appendChild(liveUrl);
    }

    card.append(top, actions);
    projectList.appendChild(card);
  });
}

/*
  Render daftar kontak di bagian akhir halaman.
*/
function renderContacts() {
  const contactActions = $("#contact-actions");

  portfolioData.contacts.forEach((contact) => {
    const link = createElement("a", "contact-link");
    const label = createElement("span", "contact-link-label", contact.label);
    const value = createElement("span", "contact-link-value", contact.value);

    link.href = contact.href;
    link.target = "_blank";
    link.rel = "noreferrer";

    link.append(label, value);
    contactActions.appendChild(link);
  });
}

/*
  Fungsi init adalah titik awal aplikasi.
  Semua render dipanggil di sini agar urutannya jelas.
*/
function initPortfolio() {
  renderBasicProfile();
  renderFocusBadges();
  renderStats();
  renderQuickInfo();
  renderSkills();
  renderExperiences();
  renderEducation();
  renderProjects();
  renderContacts();
}

/* Jalankan aplikasi setelah file JavaScript selesai dimuat */
initPortfolio();
